---
sidebar_position: 2
---

# Installation

You'll find below the available ways of getting the needed the `okp4d` binary to start a node.

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

```bash
docker run -ti --rm okp4/okp4d:latest --help
```

:::tip

_Build once, deploy anywhere_: The docker image is a multi-arch build supporting both `amd64` and `arm64`.

:::

## Build from source

### Prerequisites

- `go` — OKP4 is built using [Go](https://go.dev/dl/) version 18+. Install `Go` `1.18+` following instructions from the [official Go documentation](https://golang.org/doc/install).
- `make` — the project comes with a convenient `Makefile` so verify that [`make`](https://fr.wikipedia.org/wiki/Make) is properly installed.
- `git` — in order to clone the project you need to have [`git`](https://git-scm.com/) installed.

### Steps

Clone the [okp4/okp4d](https://github.com/okp4/okp4d) repo:

```bash
git clone git@github.com:okp4/okp4d.git
cd okp4d
```

Install `okp4d` using the provided `Makefile`:

```bash
make install
```

You can verify that everything is OK:

```bash
okp4d version
```

You should get an output similar to:

```text
1.3.0
```
