---
sidebar_position: 2
---

# Installation

You'll find below the available ways of getting the needed `okp4d` binary to start a node.

## Supported platforms

`okp4d` currently supports the following builds.

| **Platform** | **Arch** |       **Status**      |
|--------------|----------|:---------------------:|
| Darwin       | amd64    |           ✅          |
| Darwin       | arm64    |           ✅          |
| Linux        | amd64    |           ✅          |
| Linux        | arm64    |           ✅          |
| Windows      | amd64    | ️🚫<br/> Not supported |

## Release binary

You'll find the released binaries on the [GitHub repository](https://github.com/okp4/okp4d/releases). Those are statically linked builds, pay attention to choose the right binary for your system (i.e. `linux/amd64` or `linux/arm64`), their checksums are also provided to help you check them.

To easily install `okp4d` from a GitHub release you can use this [oneliner script](https://github.com/jpillora/installer):

```bash
curl https://i.jpillora.com/okp4/okp4d@v2.0.0! | bash
```

:::caution

By principle, take the time to verify the checksum manually.

:::

## Docker

The `okp4d` binary can be invoked directly through the following docker image:

```bash
docker run -ti --rm okp4/okp4d:2.0.0 --help
```

:::tip

_Build once, deploy anywhere_: The docker image is a multi-arch build supporting both `amd64` and `arm64` architectures.

:::

## Build from source

### Prerequisites

- `go` — OKP4 is built using [Go](https://go.dev/dl/) version 19+. Install `Go` `1.19+` following instructions from the [official Go documentation](https://golang.org/doc/install).
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
2.0.0
```
