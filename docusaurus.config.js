// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OKP4 Docs',
  tagline: 'Unleash the Knowledge Economy 🚀',
  url: 'https://okp4.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'OKP4',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => `https://github.com/okp4/docs/edit/main/docs/${docPath}`,
          remarkPlugins: [require('remark-math'), require('mdx-mermaid')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss')
        }
      })
    ]
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OKP4',
        logo: {
          alt: 'OKP4 Logo',
          src: '/img/logotype-okp4-light.svg',
          srcDark: '/img/logotype-okp4-dark.svg'
        },
        items: [
          {
            to: '/docs/whitepaper/abstract',
            position: 'left',
            label: 'Whitepaper (Work in progress)',
            activeBasePath: "/docs/whitepaper"
          },
          {
            to: '/docs/nodes/introduction',
            position: 'left',
            label: 'Nodes & Validators',
            activeBasePath: "/docs/nodes"
          },
          {
            to: '/docs/faq',
            position: 'left',
            label: 'FAQ',
            activeBasePath: "/docs/faq"
          },
          {
            href: 'https://discord.gg/okp4',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord'
          },
          {
            href: 'https://github.com/okp4',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Whitepaper',
                to: '/docs/whitepaper/abstract'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/okp4'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OKP4_Protocol'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/okp4'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Medium',
                href: 'https://medium.com/okp4'
              },
              {
                label: 'OKP4.network',
                href: 'https://okp4.network'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OKP4`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    ['drawio', {}],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contracts',
        path: 'contracts',
        routeBasePath: 'contracts',
      },
    ],
  ],
  scripts: [
    "/js/matomo.js",
  ]
}

module.exports = config
