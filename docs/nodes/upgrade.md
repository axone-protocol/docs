---
sidebar_position: 4
---

# Upgrade

:::note

For public networks, it is recommended to use [Cosmovisor](https://docs.cosmos.network/main/run-node/cosmovisor.html) to run your node.

:::

Cosmovisor is a tool to automate Cosmos SDK node binaries upgrade tasks. By monitoring the governance module it'll be able to download the new binaries ahead of time for chain upgrades, by avoiding manual operations it can be a precious help on stressful ops tasks.

## Setup Cosmovisor

### Install

#### GitHub Releases

The recommended way to install Cosmovisor is by downloading it from an official [GitHub release](https://github.com/cosmos/cosmos-sdk/releases?q=cosmovisor&expanded=true):

```bash
curl --fail --progress-bar -L https://github.com/cosmos/cosmos-sdk/releases/download/cosmovisor%2Fv1.2.0/cosmovisor-v1.2.0-${OS}-${ARCH}.tar.gz \
    | tar -zxf - -C /usr/local/bin
```

To find out the binary that'll fit your platform:

```bash
# find OS
case `uname -s` in
Darwin) OS="darwin";;
Linux) OS="linux";;
*) echo "Error: unknown os: $(uname -s)";;
esac

# find ARCH
case `uname -m` in
arm64) ARCH="arm64";;
x86_64) ARCH="amd64";;
*) echo "Error: unknown arch: $(uname -m)";;
esac
```

#### Build from source

You can also build from source:

```bash
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest
```

### ⚙️ Init

The following environment variables will simply indicate its home and the daemon name to Cosmovisor:

```bash
cat << EOF >> ~/.profile
# Cosmovisor
export DAEMON_NAME=okp4d
export DAEMON_HOME=$HOME/.okp4d
EOF
```

:::info

It could be relevant to create a dedicated user to cosmovisor.

:::

We can now initialize Cosmovisor with:

```bash
cosmovisor init $(which okp4d)
```

### Create Service

You'll need to keep the process always running in background, on Linux you can create a service as follow:

:::info

A description of the different environment variables can be found [here](https://docs.cosmos.network/master/run-node/cosmovisor.html#command-line-arguments-and-environment-variables).

:::

```bash
cat << EOF >> /etc/systemd/system/okp4d.service
[Unit]
Description=OKP4 Daemon (cosmovisor)
After=network-online.target

[Service]
User=$USER
ExecStart=$(which cosmovisor) start
Restart=always
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_NAME=okp4d"
Environment="$HOME/.okp4d"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"

[Install]
WantedBy=multi-user.target
EOF
```

:::caution Auto-download

The `DAEMON_ALLOW_DOWNLOAD_BINARIES` variable is set to `false` to disable auto-download.

Cosmovisor doesn't verify in advance if a binary is available before downloading, and if there is any issue downloading a binary, cosmovisor will stop and won't restart, which could lead to a halt.

:::

### 🚀 Start Service

#### Download binaries

If the auto-download of binary updates is disabled, which is recommended, all the binaries shall be manually downloaded uphill by node operators, and placed in the `$DAEMON_HOME` respecting the following structure:

```bash
cosmovisor/
├── current/
├── genesis
│   └── bin
│       └── okp4d
└── upgrades
    └── v3.0.0
        ├── bin
        │   └── okp4d
        └── upgrade-info.json
```

:::info

The network's upgrades can be found in their respective sections (i.e. [Join Testnet](join-testnet.mdx#upgrades) & [Join Mainnet](join-mainnet.md#upgrades)).

:::

#### Start

Now that everything is setup and ready to go, you can start the service:

```bash
sudo -S systemctl daemon-reload
sudo -S systemctl enable okp4d
sudo systemctl start okp4d
```

You can check the service status with:

```bash
sudo systemctl status okp4d
```

To monitor the running service, you can inspect the logs with:

```bash
journalctl -fu okp4d
```
