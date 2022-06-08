// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "ØKP4",
    tagline: "Open Knoledge Protocol For",
    url: "https://okp4.github.io",
    baseUrl: "/",
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "okp4",
    projectName: "docs",
    deploymentBranch: "gh-pages",
    trailingSlash: false,

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    sidebarCollapsed: false,
                    editUrl: ({ docPath }) => `https://github.com/okp4/docs/edit/main/docs/${docPath}`,
                },
                theme: {
                    customCss: require.resolve("./src/scss/custom.scss"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "ØKP4",
                logo: {
                    alt: "OKP4 Logo",
                    src: "/img/logotype-okp4-light.svg",
                    srcDark: "/img/logotype-okp4-dark.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "whitepaper/abstract",
                        position: "left",
                        label: "Whitepaper",
                    },
                    {
                        href: 'https://discord.gg/GHNZh4SaJ3',
                        position: 'right',
                        className: 'header-discord-link',
                        'aria-label': 'Discord',
                    },
                    {
                        href: 'https://github.com/okp4',
                        position: 'right',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Whitepaper",
                                to: "/docs/whitepaper",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/GHNZh4SaJ3",
                            },
                            {
                                label: "Twitter",
                                href: "@OKP4_Protocol",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/okp4",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Medium",
                                href: "https://medium.com/okp4",
                            },
                            {
                                label: "OKP4.network",
                                href: "https://okp4.network",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} OKP4`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                defaultMode: "dark",
            }
        }),

    plugins: [
        "docusaurus-plugin-sass", ['drawio', {}],
    ],
};

module.exports = config;
