// @ts-check
import { themes as prismThemes } from 'prism-react-renderer'
import { remarkKroki } from 'remark-kroki'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import readingTime from 'reading-time'
import { u } from 'unist-builder'
import { visit } from 'unist-util-visit'

function readingTimeMDXPlugin({ variable = 'readingTime', additionalTimePerImage = 1 } = {}) {
  return async function transformer(tree, vfile) {
    let imageCount = 0

    visit(tree, 'jsx', node => {
      if (node.value.includes('img')) {
        imageCount++
      }
    })

    const baseReadingTime = readingTime(vfile.value).minutes
    const adjustedReadingTime = baseReadingTime + imageCount * additionalTimePerImage

    tree.children.unshift({
      type: 'mdxjsEsm',
      value: `export const ${variable} = ${adjustedReadingTime};`,
      data: {
        estree: {
          type: 'Program',
          body: [
            {
              type: 'ExportNamedDeclaration',
              declaration: {
                type: 'VariableDeclaration',
                declarations: [
                  {
                    type: 'VariableDeclarator',
                    id: {
                      type: 'Identifier',
                      name: variable
                    },
                    init: {
                      type: 'Literal',
                      value: adjustedReadingTime,
                      raw: `${adjustedReadingTime}`
                    }
                  }
                ],
                kind: 'const'
              },
              specifiers: [],
              source: null
            }
          ],
          sourceType: 'module'
        }
      }
    })
  }
}

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
  markdown: {
    mermaid: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr']
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => `https://github.com/okp4/docs/edit/main/docs/${docPath}`,
          remarkPlugins: [
            readingTimeMDXPlugin,
            remarkMath,
            [
              remarkKroki,
              {
                server: 'https://kroki.io/',
                output: 'inline-svg',
                alias: ['plantuml', 'structurizr', 'bpmn', 'graphviz']
              }
            ]
          ],
          rehypePlugins: [rehypeKatex],
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/custom.scss')
        }
      })
    ]
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
      crossorigin: 'anonymous'
    }
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'OKP4 Logo',
          src: 'img/okp4-logo-light.svg',
          srcDark: 'img/okp4-logo-dark.svg'
        },
        items: [
          {
            to: '/whitepaper/abstract',
            position: 'left',
            label: 'Whitepaper',
            activeBasePath: '/whitepaper'
          },
          {
            to: '/nodes/introduction',
            position: 'left',
            label: 'Nodes & Validators',
            activeBasePath: '/nodes'
          },
          {
            to: '/technical-documentation/overview',
            position: 'left',
            label: 'Technical documentation',
            activeBasePath: '/technical-documentation'
          },
          {
            to: '/tutorials/overview',
            position: 'left',
            label: 'Tutorials',
            activeBasePath: '/tutorials'
          },
          {
            to: '/faq',
            position: 'left',
            label: 'FAQ',
            activeBasePath: '/faq'
          },
          {
            href: 'https://chat.openai.com/g/g-zUzcYmVbX-okp4-druid-oracle-beta',
            position: 'left',
            label: 'OKP4 GPT'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/contracts/', label: 'Latest version' }],
            docsPluginId: 'contracts',
            dropdownActiveClassDisabled: true
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/predicates/predicates', label: 'Latest version' }],
            docsPluginId: 'predicates',
            dropdownActiveClassDisabled: true
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/modules/logic', label: 'Latest version' }],
            docsPluginId: 'modules',
            dropdownActiveClassDisabled: true
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/commands/okp4d', label: 'Latest version' }],
            docsPluginId: 'commands',
            dropdownActiveClassDisabled: true
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
        logo: {
            alt: 'OKP4 Logo',
            src: 'img/logo-white-horizontal.webp',
            href: 'https://okp4.network',
            width: 160,
          },links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Whitepaper',
                to: '/whitepaper/abstract'
              },
                {
                  label: 'Nodes & Validators',
                  to: '/nodes/introduction'
                },
                {
                  label: 'Technical documentation',
                  to: '/technical-documentation/overview'
                },
                {
                  label: 'Tutorials',
                  to: '/tutorials/overview'
                },
                {
                  label: 'FAQ',
                  to: '/faq'
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
                href: 'https://github.com/okp4'},
                {
                  label: 'Telegram',
                  href: 'https://t.me/okp4network'
                },
                {
                  label: 'Zealy Program',
                  href: 'https://zealy.io/c/okp4/questboard'
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Medium',
                href: 'https://blog.okp4.network/'
              },
              {
                label: 'OKP4.network',
                href: 'https://okp4.network'},
                {
                  label: 'OKP4 GPT',
                  href: 'https://chat.openai.com/g/g-zUzcYmVbX-okp4-druid-oracle-beta'
                }
              ]
            },
            {
              title: 'Tools',
              items: [
                {
                  label: 'Blockchain Explorer',
                  href: 'https://explore.okp4.network/OKP4%20testnet'
                },
                {
                  label: 'Testnet Faucet',
                  href: 'https://faucet.okp4.network'
              },
            ]
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OKP4`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['prolog', 'turtle', 'bash']
      },
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true
        }
      }
    }),
  plugins: [
    'docusaurus-plugin-sass',
    ['drawio', {}],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: '/'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contracts',
        path: 'contracts',
        routeBasePath: 'contracts/'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'predicates',
        path: 'predicates',
        routeBasePath: 'predicates/'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'modules',
        path: 'modules',
        routeBasePath: 'modules/'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'commands',
        path: 'commands',
        routeBasePath: 'commands/'
      }
    ]
  ],
  scripts: ['/js/matomo.js', '/js/redirect.js']
}

module.exports = config
