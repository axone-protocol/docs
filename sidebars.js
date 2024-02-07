// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [{ type: 'autogenerated', dirName: '.' }],
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
  nodes: [
    {
      type: 'category',
      label: 'Nodes & Validators',
      items: [
        {
          type: 'autogenerated',
          dirName: 'nodes'
        }
      ]
    }
  ],
  academy: [
    {
      type: 'category',
      label: 'Academy',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'academy'
        }
      ]
    }
  ],
  'technical-documentation': [
    {
      type: 'category',
      label: 'Technical documentation',
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
          type: 'link',
          label: 'Smart contracts',
          href: '/contracts'
        },
        {
          type: 'html',
          value: '<hr/>'
        },
        {
          type: 'link',
          label: 'Ontology',
          href: '/ontology/schemas'
        },
        {
          type: 'link',
          label: 'Governance Predicates',
          href: '/predicates/predicates'
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
  tutorials: [
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials'
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
