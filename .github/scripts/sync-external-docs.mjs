import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, existsSync, readdirSync, rmSync } from 'node:fs'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { setTimeout as sleep } from 'node:timers/promises'

const workspace = process.cwd()
const manifestPath = path.join(workspace, '.github', 'sync-external-docs-sources.json')
const manifest = readJsonFile(manifestPath, 'sync manifest')
const dryRun = process.argv.slice(2).includes('--dry-run')
const apiToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.env.OPS_TOKEN || ''
const tagCache = new Map()
const snapshotCache = new Map()
const tempRoot = mkdtempSync(path.join(os.tmpdir(), 'docs-sync-'))
const fetchRetryCount = 3
const fetchTimeoutMs = 30000

try {
  await main()
} catch (error) {
  console.error(formatError(error))
  process.exitCode = 1
} finally {
  cleanupTempRoot()
}

async function main() {
  log(`Selected ${manifest.length} documentation source(s).`)

  for (const source of manifest) {
    await syncSource(source)
  }
}

async function syncSource(source) {
  try {
    log(`[${source.id}] syncing live docs from ${source.repository}@${source.live_ref}`)

    if (source.strategy === 'generate_networks') {
      const liveSnapshotPath = await materializeSnapshot(source.repository, source.live_ref)
      await generateNetworksReference(liveSnapshotPath, source)
      return
    }

    const pendingTags = await getPendingTags(source)

    if (pendingTags.length > 0) {
      log(
        `[${source.id}] creating ${pendingTags.length} missing version(s): ${pendingTags.join(', ')}`
      )
    }

    for (const tag of pendingTags) {
      const snapshotPath = await materializeSnapshot(source.repository, tag)
      syncDocs(snapshotPath, source.docs_path, source.section)
      run('yarn', ['run', 'docusaurus', `docs:version:${source.section}`, tag])
    }

    const liveSnapshotPath = await materializeSnapshot(source.repository, source.live_ref)
    syncDocs(liveSnapshotPath, source.docs_path, source.section)
  } catch (error) {
    throw new Error(`[${source.id}] sync failed`, { cause: error })
  }
}

async function getPendingTags(source) {
  const remoteTags = filterExcludedFamilies(await fetchTags(source), source)
  const trackedVersions = readTrackedVersions(source.section)
  const pendingTags = []

  for (const family of new Set(remoteTags.map(tag => tag.family))) {
    const remoteForFamily = remoteTags.filter(tag => tag.family === family)
    const trackedForFamily = trackedVersions.filter(version => version.startsWith(family))
    const trackedSet = new Set(trackedForFamily)
    const missingForFamily = remoteForFamily.filter(tag => !trackedSet.has(tag.raw))

    if (missingForFamily.length === 0) {
      continue
    }

    if (trackedForFamily.length === 0) {
      pendingTags.push(missingForFamily.at(-1).raw)
      continue
    }

    const latestTracked = trackedForFamily
      .map(tag => parseVersionTag(tag, source))
      .filter(Boolean)
      .sort(compareParsedTags)
      .at(-1)

    if (!latestTracked) {
      log(`[${source.id}] tracked versions for family "${family}" are not parseable, skipping it`)
      continue
    }

    pendingTags.push(
      ...missingForFamily
        .filter(tag => compareParsedTags(tag, latestTracked) > 0)
        .map(tag => tag.raw)
    )
  }

  return pendingTags
}

function filterExcludedFamilies(tags, source) {
  if (!Array.isArray(source.excluded_families) || source.excluded_families.length === 0) {
    return tags
  }

  const excludedFamilies = new Set(source.excluded_families)
  return tags.filter(tag => !excludedFamilies.has(tag.family))
}

async function fetchTags(source) {
  if (tagCache.has(source.repository)) {
    return tagCache.get(source.repository)
  }

  const repositoryUrl = `https://github.com/${source.repository}.git`
  const output = execFileSync('git', ['ls-remote', '--tags', '--refs', repositoryUrl], {
    cwd: workspace,
    encoding: 'utf8'
  })

  const tags = output
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.split('\t')[1])
    .map(ref => ref.replace('refs/tags/', ''))
    .map(rawTag => parseVersionTag(rawTag, source))
    .filter(Boolean)
    .sort(compareParsedTags)

  tagCache.set(source.repository, tags)

  return tags
}

async function materializeSnapshot(repository, ref) {
  const cacheKey = `${repository}@${ref}`

  if (snapshotCache.has(cacheKey)) {
    return snapshotCache.get(cacheKey)
  }

  const archivePath = path.join(tempRoot, `${cacheKey.replace(/[\\/]/g, '_')}.tar.gz`)
  await downloadSnapshotArchive(repository, ref, archivePath)

  const extractDir = path.join(tempRoot, cacheKey.replace(/[\\/]/g, '_'))
  await fs.mkdir(extractDir, { recursive: true })
  run('tar', ['-xzf', archivePath, '-C', extractDir])

  const [rootDirectory] = readdirSync(extractDir)

  if (!rootDirectory) {
    throw new Error(`Downloaded archive for ${cacheKey} was empty.`)
  }

  const snapshotPath = path.join(extractDir, rootDirectory)
  snapshotCache.set(cacheKey, snapshotPath)

  return snapshotPath
}

async function downloadSnapshotArchive(repository, ref, archivePath) {
  const url = `https://api.github.com/repos/${repository}/tarball/${ref}`

  for (let attempt = 1; attempt <= fetchRetryCount; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: buildHeaders(),
        signal: AbortSignal.timeout(fetchTimeoutMs)
      })

      if (!response.ok) {
        const details = await readResponseDetails(response)
        const message = `Unable to download ${repository}@${ref}: GitHub API returned ${response.status} ${response.statusText}${details ? ` (${details})` : ''}`

        if (attempt < fetchRetryCount && isRetryableStatus(response.status)) {
          log(
            `[download] ${message}. Retrying (${attempt}/${fetchRetryCount - 1})...`
          )
          await sleep(attempt * 1000)
          continue
        }

        throw new Error(message)
      }

      await fs.writeFile(archivePath, Buffer.from(await response.arrayBuffer()))
      return
    } catch (error) {
      const message = describeFetchError(error, repository, ref)

      if (attempt < fetchRetryCount && isRetryableFetchError(error)) {
        log(`[download] ${message}. Retrying (${attempt}/${fetchRetryCount - 1})...`)
        await sleep(attempt * 1000)
        continue
      }

      throw new Error(message, { cause: error })
    }
  }
}

function syncDocs(snapshotRoot, docsPath, section) {
  const sourcePath = path.join(snapshotRoot, docsPath)
  const destinationPath = path.join(workspace, section)

  if (!existsSync(sourcePath)) {
    throw new Error(`Source path "${docsPath}" was not found in ${snapshotRoot}.`)
  }

  log(`[${section}] syncing ${sourcePath} -> ${destinationPath}`)

  if (dryRun) {
    return
  }

  run('rsync', [
    '-a',
    '--delete',
    '--prune-empty-dirs',
    '--include=*/',
    '--include=*.md',
    '--include=*.mdx',
    '--include=*.json',
    '--exclude=*',
    `${sourcePath}/`,
    `${destinationPath}/`
  ])
}

async function generateNetworksReference(snapshotRoot, source) {
  const destinationPath = path.join(workspace, source.section)

  if (!Array.isArray(source.networks) || source.networks.length === 0) {
    throw new Error('Networks source must declare at least one network.')
  }

  const networks = source.networks.map((network, index) =>
    readNetwork(snapshotRoot, source, network, index)
  )

  log(`[${source.section}] generating ${networks.length} active network reference page(s)`)

  if (dryRun) {
    log(`[dry-run] generate ${path.join(source.section, 'index.md')}`)

    for (const network of networks) {
      log(`[dry-run] generate ${path.join(source.section, `${network.slug}.md`)}`)
    }

    return
  }

  await fs.rm(destinationPath, { recursive: true, force: true })
  await fs.mkdir(destinationPath, { recursive: true })
  await fs.writeFile(path.join(destinationPath, 'index.md'), renderNetworksIndex(networks), 'utf8')

  for (const network of networks) {
    await fs.writeFile(
      path.join(destinationPath, `${network.slug}.md`),
      renderNetworkPage(network),
      'utf8'
    )
  }
}

function readNetwork(snapshotRoot, source, networkConfig, index) {
  const sourcePath = path.join(snapshotRoot, networkConfig.source_path)
  const genesisPath = path.join(sourcePath, 'genesis.json')
  const versionPath = path.join(sourcePath, 'version.txt')

  if (!existsSync(genesisPath)) {
    throw new Error(`Network genesis was not found at ${networkConfig.source_path}/genesis.json.`)
  }

  if (!existsSync(versionPath)) {
    throw new Error(`Network version was not found at ${networkConfig.source_path}/version.txt.`)
  }

  const genesis = readJsonFile(genesisPath, `${networkConfig.slug} genesis`)
  const axonedVersion = readFileSync(versionPath, 'utf8').trim()
  const validators = collectGenesisValidators(genesis)
  const stakingParams = genesis.app_state?.staking?.params ?? {}
  const govParams = genesis.app_state?.gov?.params ?? {}
  const upstreamTreeUrl = `https://github.com/${source.repository}/tree/${source.live_ref}/${networkConfig.source_path}`
  const upstreamBlobUrl = `https://github.com/${source.repository}/blob/${source.live_ref}/${networkConfig.source_path}`

  return {
    slug: networkConfig.slug,
    sidebarPosition: index + 1,
    type: networkConfig.type,
    chainId: genesis.chain_id,
    genesisTime: genesis.genesis_time,
    axonedVersion,
    bondDenom: stakingParams.bond_denom ?? null,
    votingPeriod: govParams.voting_period ?? null,
    minDeposit: Array.isArray(govParams.min_deposit) ? govParams.min_deposit : [],
    validators,
    upstream: {
      genesis: `${upstreamBlobUrl}/genesis.json`,
      gentx: `${upstreamTreeUrl}/gentx`
    },
    explorerUrl: networkConfig.explorer_url ?? null,
    faucetUrl: networkConfig.faucet_url ?? null
  }
}

function collectGenesisValidators(genesis) {
  const validators = []

  visitJson(genesis, value => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      return
    }

    if (!('min_self_delegation' in value) || !value.description) {
      return
    }

    validators.push({
      moniker: value.description.moniker ?? '',
      identity: value.description.identity ?? '',
      website: value.description.website ?? '',
      details: value.description.details ?? ''
    })
  })

  return validators
}

function visitJson(value, visitor) {
  visitor(value)

  if (Array.isArray(value)) {
    for (const item of value) {
      visitJson(item, visitor)
    }

    return
  }

  if (value && typeof value === 'object') {
    for (const child of Object.values(value)) {
      visitJson(child, visitor)
    }
  }
}

function renderNetworksIndex(networks) {
  const cards = networks.map((network, index) => renderNetworkCard(network, index)).join('\n')

  return `${generatedHeader('Networks', 0)}<div className="network-reference network-reference--index">
  <header className="network-reference__hero">
    <p className="network-reference__eyebrow">Axone networks</p>
    <h1>Active networks</h1>
    <p className="network-reference__lead">Mainnet and testnet chain metadata generated from the canonical Axone networks repository.</p>
  </header>

  <section className="network-reference__network-grid" aria-label="Active Axone networks">
${cards}
  </section>

  <section className="network-reference__source-strip" aria-label="Source repository">
    <span>Generated from</span>
    <a href="https://github.com/axone-protocol/networks">axone-protocol/networks</a>
  </section>
</div>
`
}

function renderNetworkPage(network) {
  return `${generatedHeader(network.chainId, network.sidebarPosition)}<div className="network-reference">
  <header className="network-reference__hero network-reference__hero--detail">
    <p className="network-reference__eyebrow">${escapeHtml(network.type)} network</p>
    <h1>${escapeHtml(network.chainId)}</h1>
    <p className="network-reference__lead">${networkDescription(network)} Generated from the canonical Axone networks repository.</p>
    <div className="network-reference__actions">
${renderPrimaryLinks(network)}
    </div>
  </header>

  <section className="network-reference__stats" aria-label="Network metrics">
${renderNetworkStats(network)}
  </section>

  <section className="network-reference__details" aria-label="Network metadata">
    <div className="network-reference__section-heading">
      <p>Chain facts</p>
      <h2>Configuration snapshot</h2>
    </div>
    <div className="network-reference__fact-grid">
${renderNetworkFacts(network)}
    </div>
  </section>

  <section className="network-reference__details network-reference__details--split" aria-label="Source files and tools">
    <div>
      <p className="network-reference__section-label">Upstream files</p>
      <div className="network-reference__link-stack">
        <a href="${escapeAttribute(network.upstream.genesis)}">genesis.json</a>
        <a href="${escapeAttribute(network.upstream.gentx)}">gentx/</a>
      </div>
    </div>
    <div>
      <p className="network-reference__section-label">Network tools</p>
      <div className="network-reference__link-stack">
${renderToolLinks(network)}
      </div>
    </div>
  </section>

  <section className="network-reference__validators" aria-label="Genesis validators">
    <div className="network-reference__section-heading">
      <p>Genesis validators</p>
      <h2>Initial validator set</h2>
    </div>
${renderValidators(network.validators)}
  </section>
</div>
`
}

function renderNetworkCard(network, index) {
  const position = String(index + 1).padStart(2, '0')

  return `    <a className="network-card" href="/networks/${escapeAttribute(network.slug)}">
      <div className="network-card__topline">
        <span>${position}</span>
        <span>${escapeHtml(network.type)}</span>
      </div>
      <h2>${escapeHtml(network.chainId)}</h2>
      <p>${networkDescription(network)}</p>
      <div className="network-card__metrics" aria-label="${escapeAttribute(network.chainId)} metrics">
        ${renderMetric('Axoned', network.axonedVersion)}
        ${renderMetric('Validators', String(network.validators.length))}
        ${renderMetric('Bond denom', network.bondDenom ?? 'n/a')}
      </div>
      <span className="network-card__cta">Open reference</span>
    </a>`
}

function renderNetworkStats(network) {
  return [
    renderStat('Chain ID', network.chainId),
    renderStat('Axoned', network.axonedVersion),
    renderStat('Validators', String(network.validators.length)),
    renderStat('Bond denom', network.bondDenom ?? 'n/a')
  ].join('\n')
}

function renderStat(label, value) {
  return `    <div className="network-stat">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value)}</strong>
    </div>`
}

function renderMetric(label, value) {
  return `<span><strong>${escapeHtml(value)}</strong>${escapeHtml(label)}</span>`
}

function renderNetworkFacts(network) {
  return [
    ['Type', network.type],
    ['Genesis time', network.genesisTime],
    ['Governance min deposit', formatMinDeposit(network.minDeposit)],
    ['Governance voting period', network.votingPeriod ?? 'n/a']
  ]
    .map(
      ([label, value]) => `      <div className="network-fact">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>`
    )
    .join('\n')
}

function renderPrimaryLinks(network) {
  return [
    network.explorerUrl
      ? `      <a className="network-reference__button network-reference__button--primary" href="${escapeAttribute(network.explorerUrl)}">Explorer</a>`
      : '',
    `      <a className="network-reference__button" href="${escapeAttribute(network.upstream.genesis)}">Genesis JSON</a>`
  ]
    .filter(Boolean)
    .join('\n')
}

function renderToolLinks(network) {
  const links = [
    network.explorerUrl ? `<a href="${escapeAttribute(network.explorerUrl)}">AKNodes explorer</a>` : '',
    network.faucetUrl ? `<a href="${escapeAttribute(network.faucetUrl)}">Faucet</a>` : ''
  ].filter(Boolean)

  if (links.length === 0) {
    return '        <span>No public tools declared.</span>'
  }

  return links.map(link => `        ${link}`).join('\n')
}

function renderValidators(validators) {
  if (validators.length === 0) {
    return '    <p className="network-reference__empty">No genesis validators found.</p>'
  }

  return `    <div className="network-validator-list">
${validators.map(renderValidator).join('\n')}
    </div>`
}

function renderValidator(validator) {
  const website = validator.website ? normalizeWebsite(validator.website) : ''
  const details = validator.details || 'No details provided.'

  return `      <article className="network-validator">
        <div>
          <h3>${escapeHtml(validator.moniker || 'Unnamed validator')}</h3>
          <p>${escapeHtml(details)}</p>
        </div>
        <div className="network-validator__meta">
          ${validator.identity ? `<span>${escapeHtml(validator.identity)}</span>` : '<span>No identity</span>'}
          ${website ? `<a href="${escapeAttribute(website)}">Website</a>` : '<span>No website</span>'}
        </div>
      </article>`
}

function networkDescription(network) {
  return network.type === 'mainnet'
    ? 'Production Axone network for live protocol activity.'
    : 'Public Axone testnet for protocol validation and integrations.'
}

function formatMinDeposit(minDeposit) {
  if (!Array.isArray(minDeposit) || minDeposit.length === 0) {
    return 'n/a'
  }

  return minDeposit
    .map(deposit => `${deposit.amount ?? '0'}${deposit.denom ?? ''}`)
    .join(', ')
}

function normalizeWebsite(website) {
  return website.startsWith('http') ? website : `https://${website}`
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("'", '&#39;')
}

function generatedHeader(title, sidebarPosition) {
  const safeTitle = JSON.stringify(String(title ?? ''))
  return `---
title: ${safeTitle}
sidebar_position: ${sidebarPosition}
---
{/* generated file - do not edit */}
`
}

function readTrackedVersions(section) {
  const versionsPath = path.join(workspace, `${section}_versions.json`)

  if (!existsSync(versionsPath)) {
    return []
  }

  const parsed = readJsonFile(versionsPath, `${section} versions`)
  return Array.isArray(parsed) ? parsed : []
}

function readJsonFile(filePath, label) {
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'))
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error(`Unable to parse ${label} JSON at ${filePath}: ${error.message}`)
    }

    throw error
  }
}

async function readResponseDetails(response) {
  const body = (await response.text()).trim()

  if (!body) {
    return ''
  }

  return body.replace(/\s+/g, ' ').slice(0, 300)
}

function buildHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'axone-docs-sync'
  }

  if (apiToken) {
    headers.Authorization = `Bearer ${apiToken}`
  }

  return headers
}

function parseVersionTag(rawTag, source) {
  const tagPatterns =
    source.tag_scheme === 'semver'
      ? ['^(?<family>v)(?<version>\\d+\\.\\d+\\.\\d+)$']
      : (source.tag_patterns ?? [])

  for (const pattern of tagPatterns) {
    const match = new RegExp(pattern).exec(rawTag)

    if (!match?.groups?.family || !match.groups.version) {
      continue
    }

    const versionMatch = /^(\d+)\.(\d+)\.(\d+)$/.exec(match.groups.version)

    if (!versionMatch) {
      continue
    }

    return {
      raw: rawTag,
      family: match.groups.family,
      major: Number(versionMatch[1]),
      minor: Number(versionMatch[2]),
      patch: Number(versionMatch[3])
    }
  }

  return null
}

function compareParsedTags(left, right) {
  if (left.major !== right.major) {
    return left.major - right.major
  }

  if (left.minor !== right.minor) {
    return left.minor - right.minor
  }

  if (left.patch !== right.patch) {
    return left.patch - right.patch
  }

  return left.raw.localeCompare(right.raw)
}

function run(command, commandArgs) {
  if (dryRun && command !== 'tar') {
    log(`[dry-run] ${command} ${commandArgs.join(' ')}`)
    return
  }

  execFileSync(command, commandArgs, {
    cwd: workspace,
    stdio: 'inherit'
  })
}

function log(message) {
  console.log(message)
}

function isRetryableStatus(status) {
  return status === 408 || status === 429 || status >= 500
}

function isRetryableFetchError(error) {
  if (!(error instanceof Error)) {
    return false
  }

  if (error.name === 'TimeoutError') {
    return true
  }

  const causeCode =
    error.cause && typeof error.cause === 'object' && 'code' in error.cause ? error.cause.code : null

  return ['ECONNRESET', 'ECONNREFUSED', 'EHOSTUNREACH', 'ENETUNREACH', 'ETIMEDOUT'].includes(
    causeCode
  )
}

function describeFetchError(error, repository, ref) {
  if (error instanceof Error) {
    const cause =
      error.cause && typeof error.cause === 'object' && 'message' in error.cause
        ? ` (${error.cause.message})`
        : ''

    return `Unable to download ${repository}@${ref}: ${error.message}${cause}`
  }

  return `Unable to download ${repository}@${ref}: ${String(error)}`
}

function formatError(error) {
  if (!(error instanceof Error)) {
    return String(error)
  }

  const lines = [error.message]
  let current = error.cause

  while (current instanceof Error) {
    lines.push(`caused by: ${current.message}`)
    current = current.cause
  }

  return lines.join('\n')
}

function cleanupTempRoot() {
  rmSync(tempRoot, { recursive: true, force: true })
}
