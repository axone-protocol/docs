# ØKP4 documentation

> OKP4 documentation repository, powered ❤️ by [Docusaurus](https://docusaurus.io/), a modern static website generator.

[![lint](https://img.shields.io/github/workflow/status/okp4/docs/Lint?label=lint&style=for-the-badge)](https://github.com/okp4/docs/actions/workflows/lint.yml)
[![build](https://img.shields.io/github/workflow/status/okp4/docs/Build?label=build&style=for-the-badge)](https://github.com/okp4/docs/actions/workflows/build.yml)
[![publish](https://img.shields.io/github/workflow/status/okp4/docs/Publish?label=publish&style=for-the-badge)](https://github.com/okp4/docs/actions/workflows/publish.yml)
[![conventional commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=for-the-badge)](https://conventionalcommits.org)
[![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg?style=for-the-badge)](https://opensource.org/licenses/BSD-3-Clause)
[![prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)](https://github.com/prettier/prettier)

## Developing & contributing

### Installation

```sh
yarn
```

### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window (<http://localhost:3000/>). Most changes are reflected live without having to restart the server.

Note that the search wont work in development. To use the search feature, first run `yarn build` then `yarn run serve`.

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Code Quality

The coding style rules are enforced by the following tools:

- [Commitlint](https://commitlint.js.org/#/)
- [Markdownlint](https://github.com/igorshubovych/markdownlint-cli)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
