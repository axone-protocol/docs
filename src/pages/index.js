import React from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'

const references = [
  {
    title: 'Commands',
    href: '/commands/axoned',
    source: 'axone-protocol/axoned',
    description: 'Generated command-line reference for the Axone daemon.'
  },
  {
    title: 'Contracts',
    href: '/contracts/axone-gov',
    source: 'axone-protocol/contracts',
    description: 'Versioned smart contract APIs and message schemas.'
  },
  {
    title: 'Modules',
    href: '/modules/logic',
    source: 'axone-protocol/axoned',
    description: 'Protocol module behavior, messages, and query surfaces.'
  },
  {
    title: 'Ontology',
    href: '/ontology/schemas/credential-dataset-description',
    source: 'axone-protocol/ontology',
    description: 'Generated ontology schemas and credential vocabularies.'
  },
  {
    title: 'Predicates',
    href: '/predicates/next',
    source: 'axone-protocol/axoned',
    description: 'Axone Prolog predicates, libraries, and VFS reference.'
  }
]

export default function Home() {
  return (
    <Layout
      title="Axone Technical Reference"
      description="Versioned technical reference for the Axone protocol."
    >
      <main className="technical-home">
        <section className="technical-home__hero">
          <p className="technical-home__eyebrow">docs.axone.xyz</p>
          <h1 className="technical-home__title">Axone Technical Reference</h1>
          <p className="technical-home__intro">
            Versioned protocol reference assembled from Axone implementation repositories.
          </p>
        </section>

        <section className="technical-home__grid" aria-label="Technical reference sections">
          {references.map(reference => (
            <Link className="technical-home__card" to={reference.href} key={reference.title}>
              <span className="technical-home__card-title">{reference.title}</span>
              <span className="technical-home__card-source">{reference.source}</span>
              <span className="technical-home__card-description">{reference.description}</span>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  )
}
