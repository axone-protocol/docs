// @ts-check
import { themes as prismThemes } from 'prism-react-renderer'
import { remarkKroki } from 'remark-kroki'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

const technicalDocsOptions = {
  remarkPlugins: [
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
  showLastUpdateTime: true
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Axone Technical Reference',
  tagline: 'Versioned technical reference for the Axone protocol',
  url: 'https://docs.axone.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Axone',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'true'
      }
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap'
      }
    }
  ],
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw'
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  themes: ['@docusaurus/theme-mermaid'],
  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
      siteStorageNamespacing: true,
      mdx1CompatDisabledByDefault: true,
      fasterByDefault: true
    }
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
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
          src: 'img/logo-axone-light.webp',
          srcDark: 'img/logo-axone-light.webp'
        },
        items: [
          {
            label: 'Reference',
            position: 'left',
            items: [
              {
                label: 'Commands',
                to: '/commands/axoned'
              },
              {
                label: 'Contracts',
                to: '/contracts/axone-gov'
              },
              {
                label: 'Modules',
                to: '/modules/logic'
              },
              {
                label: 'Ontology',
                to: '/ontology/schemas/credential-dataset-description'
              },
              {
                label: 'Predicates',
                to: '/predicates/next'
              }
            ]
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/contracts/axone-gov', label: 'Latest version' }],
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
            dropdownItemsAfter: [{ to: '/predicates/next', label: 'Latest version' }],
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
        style: 'dark',
        logo: {
          alt: 'Axone Logo',
          src: 'img/logo-axone-light.webp',
          href: 'https://axone.xyz',
          width: 160
        },
        links: [
          {
            title: 'Technical Reference',
            items: [
              {
                label: 'Commands',
                to: '/commands/axoned'
              },
              {
                label: 'Contracts',
                to: '/contracts/axone-gov'
              },
              {
                label: 'Modules',
                to: '/modules/logic'
              },
              {
                label: 'Ontology',
                to: '/ontology/schemas/credential-dataset-description'
              },
              {
                label: 'Predicates',
                to: '/predicates/next'
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
            title: 'Project',
            items: [
              {
                label: 'Axone.xyz',
                href: 'https://axone.xyz'
              },
              {
                label: 'GitHub Organization',
                href: 'https://github.com/axone-protocol'
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
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['prolog', 'turtle', 'bash', 'json', 'sparql']
      },
      colorMode: {
        defaultMode: 'dark',
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
        indexBlog: false,
        docsPluginIdForPreferredVersion: 'commands',
        docsDir: ['commands', 'contracts', 'modules', 'ontology', 'predicates'],
        docsRouteBasePath: ['commands', 'contracts', 'modules', 'ontology', 'predicates']
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...technicalDocsOptions,
        id: 'contracts',
        path: 'contracts',
        routeBasePath: 'contracts/'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...technicalDocsOptions,
        id: 'ontology',
        path: 'ontology',
        routeBasePath: 'ontology/'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...technicalDocsOptions,
        id: 'predicates',
        path: 'predicates',
        routeBasePath: 'predicates'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...technicalDocsOptions,
        id: 'modules',
        path: 'modules',
        routeBasePath: 'modules/'
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        ...technicalDocsOptions,
        id: 'commands',
        path: 'commands',
        routeBasePath: 'commands/'
      }
    ]
  ],
  scripts: ['/js/matomo.js', '/js/redirect.js']
}

module.exports = config
