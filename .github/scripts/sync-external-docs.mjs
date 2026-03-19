import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, existsSync, readdirSync, rmSync } from 'node:fs'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

const workspace = process.cwd()
const manifestPath = path.join(workspace, '.github', 'sync-external-docs-sources.json')
const manifest = readJsonFile(manifestPath, 'sync manifest')
const dryRun = process.argv.slice(2).includes('--dry-run')
const apiToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.env.OPS_TOKEN || ''
const tagCache = new Map()
const snapshotCache = new Map()
const tempRoot = mkdtempSync(path.join(os.tmpdir(), 'docs-sync-'))

try {
  await main()
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error))
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
  log(`[${source.id}] syncing live docs from ${source.repository}@${source.live_ref}`)

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

  const response = await fetch(`https://api.github.com/repos/${repository}/tarball/${ref}`, {
    headers: buildHeaders()
  })

  if (!response.ok) {
    throw new Error(
      `Unable to download ${repository}@${ref}: ${response.status} ${response.statusText}`
    )
  }

  const archivePath = path.join(tempRoot, `${cacheKey.replace(/[\\/]/g, '_')}.tar.gz`)
  await fs.writeFile(archivePath, Buffer.from(await response.arrayBuffer()))

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

function readTrackedVersions(section) {
  const versionsPath = path.join(workspace, `${section}_versions.json`)

  if (!existsSync(versionsPath)) {
    return []
  }

  const parsed = JSON.parse(readFileSync(versionsPath, 'utf8'))
  return Array.isArray(parsed) ? parsed : []
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

function cleanupTempRoot() {
  rmSync(tempRoot, { recursive: true, force: true })
}
