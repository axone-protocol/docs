// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [{ type: 'autogenerated', dirName: '.' }],
  'getting-started': [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started'
        }
      ]
    }
  ],
  'share-resources': [
    {
      type: 'category',
      label: 'Share Resources',
      items: [
        {
          type: 'autogenerated',
          dirName: 'share-resources'
        }
      ]
    }
  ],
  'create-ecosystem': [
    {
      type: 'category',
      label: 'Create an Ecosystem',
      items: [
        {
          type: 'autogenerated',
          dirName: 'create-ecosystem'
        }
      ]
    }
  ],
  'provide-computation': [
    {
      type: 'category',
      label: 'Provide Computation',
      items: [
        {
          type: 'autogenerated',
          dirName: 'provide-computation'
        }
      ]
    }
  ],
  connector: [
    {
      type: 'category',
      label: 'Connector',
      items: [
        {
          type: 'autogenerated',
          dirName: 'connector'
        }
      ]
    }
  ],
  'technical-documentation': [
    {
      type: 'category',
      label: 'Architecture',
      items: [
        {
          type: 'doc',
          id: 'technical-documentation/overview'
        },
        {
          type: 'category',
          label: 'Ontology',
          items: [
            {
              type: 'autogenerated',
              dirName: 'technical-documentation/ontology'
            }
          ]
        },
        {
          type: 'category',
          label: 'Governance',
          items: [
            {
              type: 'autogenerated',
              dirName: 'technical-documentation/governance'
            }
          ]
        },
        {
          type: 'html',
          value: '<hr/>'
        },
        {
          type: 'link',
          label: 'Smart contracts',
          href: '/contracts/okp4-cognitarium'
        },
        {
          type: 'link',
          label: 'Ontology',
          href: '/ontology/schemas/credential-dataset-description'
        },
        {
          type: 'link',
          label: 'Governance Predicates',
          href: '/predicates/bank_balances_2'
        },
        {
          type: 'link',
          label: 'Modules',
          href: '/modules/logic'
        },
        {
          type: 'link',
          label: 'Commands line interface',
          href: '/commands/okp4d'
        }
      ]
    }
  ],
  nodes: [
    {
      type: 'category',
      label: 'Running a Node',
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes'
        }
      ]
    }
  ],
  tutorials: [
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials'
        }
      ]
    }
  ],
  whitepaper: [
    {
      type: 'category',
      label: 'Whitepaper',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'whitepaper'
        }
      ]
    }
  ],
  contribute: [
    {
      type: 'category',
      label: 'Contribute to Axone',
      items: [
        {
          type: 'autogenerated',
          dirName: 'contribute'
        }
      ]
    }
  ],
  faq: [
    {
      type: 'doc',
      id: 'faq/faq',
      label: 'FAQ'
    }
  ]
}

module.exports = sidebars
