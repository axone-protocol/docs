import React from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'

const layers = [
  {
    title: 'Blockchain Runtime',
    description:
      'Node operations, chain queries, transactions, consensus surfaces, and protocol module APIs.',
    source: 'axone-protocol/axoned',
    links: [
      { label: 'Axone daemon commands', href: '/commands/axoned' },
      { label: 'Logic module', href: '/modules/logic' },
      { label: 'Mint module', href: '/modules/mint' }
    ]
  },
  {
    title: 'Logic & Predicates',
    description:
      'Deterministic Prolog execution, predicate libraries, VFS capabilities, and rule evaluation.',
    source: 'axone-protocol/axoned',
    links: [
      { label: 'Predicate reference', href: '/predicates/next' },
      { label: 'Virtual File System', href: '/predicates/next/vfs' },
      { label: 'Logic query module', href: '/modules/logic' }
    ]
  },
  {
    title: 'Smart Contracts',
    description:
      'Contract-level capabilities attached to resources through Abstract Accounts.',
    source: 'axone-protocol/contracts',
    links: [
      { label: 'Governance contract', href: '/contracts/axone-gov' },
      { label: 'Verifiable credential contract', href: '/contracts/axone-vc' }
    ]
  },
  {
    title: 'Credentials & Ontology',
    description:
      'Credential schemas for resources, services, rights, execution, zones, and participation.',
    source: 'axone-protocol/ontology',
    links: [
      {
        label: 'Dataset description',
        href: '/ontology/schemas/credential-dataset-description'
      },
      {
        label: 'Digital service description',
        href: '/ontology/schemas/credential-digital-service-description'
      },
      {
        label: 'Digital resource rights',
        href: '/ontology/schemas/credential-digital-resource-rights'
      }
    ]
  },
  {
    title: 'Governance',
    description:
      'Programmable constitutions, zone membership, and decision logic for governed resources.',
    source: 'contracts + ontology + predicates',
    links: [
      { label: 'Governance contract', href: '/contracts/axone-gov' },
      { label: 'Zone membership credential', href: '/ontology/schemas/credential-zone-membership' },
      { label: 'Zone description credential', href: '/ontology/schemas/credential-zone-description' }
    ]
  }
]

const rawReferences = [
  { label: 'Commands', href: '/commands/axoned', source: 'axoned' },
  { label: 'Contracts', href: '/contracts/axone-gov', source: 'contracts' },
  { label: 'Modules', href: '/modules/logic', source: 'axoned' },
  { label: 'Ontology', href: '/ontology/schemas/credential-dataset-description', source: 'ontology' },
  { label: 'Predicates', href: '/predicates/next', source: 'axoned' }
]

export default function Home() {
  return (
    <Layout
      title="Axone Technical Reference"
      description="Technical reference for the Axone protocol layers."
    >
      <main className="technical-home">
        <section className="technical-home__hero">
          <p className="technical-home__eyebrow">docs.axone.xyz</p>
          <h1 className="technical-home__title">
            Technical reference for the Axone protocol layers
          </h1>
          <p className="technical-home__intro">
            Find the low-level references for running nodes, writing rules, integrating
            contracts, and modeling credentials.
          </p>
        </section>

        <section className="technical-home__layers" aria-label="Protocol layers">
          {layers.map(layer => (
            <article className="technical-home__layer" key={layer.title}>
              <div className="technical-home__layer-copy">
                <p className="technical-home__layer-source">{layer.source}</p>
                <h2 className="technical-home__layer-title">{layer.title}</h2>
                <p className="technical-home__layer-description">{layer.description}</p>
              </div>
              <div className="technical-home__links" aria-label={`${layer.title} references`}>
                {layer.links.map(link => (
                  <Link className="technical-home__link" to={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="technical-home__raw" aria-label="Raw references">
          <div>
            <h2 className="technical-home__raw-title">Raw References</h2>
            <p className="technical-home__raw-description">
              Direct access to the synchronized Docusaurus reference sections.
            </p>
          </div>
          <div className="technical-home__raw-list">
            {rawReferences.map(reference => (
              <Link className="technical-home__raw-link" to={reference.href} key={reference.label}>
                <span>{reference.label}</span>
                <span>{reference.source}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}
