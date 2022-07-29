---
sidebar_position: 2
---

# Installation

You'll find below the available ways of getting needed the `okp4d` binary to start a node.

## Supported platforms

`okp4d` currently supports the following builds.

| **Platform** | **Arch** |       **Status**       |
|--------------|----------|:----------------------:|
| Darwin       | amd64    |           ✅            |
| Darwin       | arm64    |           ✅            |
| Linux        | amd64    |           ✅            |
| Linux        | arm64    |           ✅            |
| Windows      | amd64    | ️🚫<br/> Not supported |

## Release binary

You'll find the released binaries on the [GitHub repository](https://github.com/okp4/okp4d/releases).

## Docker

:::caution

Coming soon: the mentioned image isn't published yet.

:::

The `okp4d` binary can be invoked directly through the following docker image:

```sh
docker run -ti --rm okp4/okp4d:latest --help
```

:::tip

_Build once, deploy anywhere_
The docker image is a multi-arch build supporting both `amd64` and `arm64`.

:::

## Build from source

OKP4 is built using [Go](https://go.dev/dl/) version 18.

```sh
go version
```

You can install `okp4d` with:

```sh
go install github.com/okp4/okp4d@latest
```

Or by manually building the sources:

```sh
git clone git@github.com/okp4/okp4d
cd okp4d
make install
```
