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
  title: 'Axone Docs',
  tagline: 'Unleash the Knowledge Economy 🚀',
  url: 'https://docs.axone.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Axone',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  markdown: {
    mermaid: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  themes: ['@docusaurus/theme-mermaid'],
  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: true,
      mdxCrossCompilerCache: true
    },
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true
    }
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) =>
            `https://github.com/axone-protocol/docs/edit/main/docs/${docPath}`,
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
          routeBasePath: '/',
          showLastUpdateTime: true
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
          alt: 'Axone Logo',
          src: 'img/logo-axone-dark.webp',
          srcDark: 'img/logo-axone-light.webp'
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/contracts/axone-cognitarium', label: 'Latest version' }],
            docsPluginId: 'contracts',
            dropdownActiveClassDisabled: true
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [
              { to: '/ontology/schemas/credential-dataset-description', label: 'Latest version' }
            ],
            docsPluginId: 'ontology',
            dropdownActiveClassDisabled: true
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/predicates/bank_balances_2', label: 'Latest version' }],
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
            dropdownItemsAfter: [{ to: '/commands/axoned', label: 'Latest version' }],
            docsPluginId: 'commands',
            dropdownActiveClassDisabled: true
          },
          {
            href: 'https://discord.gg/axone',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord'
          },
          {
            href: 'https://github.com/axone-protocol',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Axone Logo',
          src: 'img/logo-axone-dark.webp',
          href: 'https://axone.xyz',
          width: 160
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Whitepaper',
                to: '/whitepaper/abstract'
              },
              {
                label: 'Run a Node',
                to: '/nodes/installation'
              },
              {
                label: 'Technical documentation',
                to: '/architecture/overview'
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
                href: 'https://discord.gg/axone'
              },
              {
                label: 'X',
                href: 'https://x.com/axonexyz'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/axone-protocol'
              },
              {
                label: 'Telegram',
                href: 'https://t.me/axonexyz'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Medium',
                href: 'https://blog.axone.xyz/'
              },
              {
                label: 'Axone.xyz',
                href: 'https://axone.xyz'
              }
            ]
          },
          {
            title: 'Tools',
            items: [
              {
                label: 'Blockchain Explorer',
                href: 'https://explore.axone.xyz/Axone%20testnet'
              },
              {
                label: 'Testnet Faucet',
                href: 'https://faucet.axone.xyz'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Axone`
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['prolog', 'turtle', 'bash', 'json', 'sparql']
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
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
        id: 'ontology',
        path: 'ontology',
        routeBasePath: 'ontology/'
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
