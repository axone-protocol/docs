---
sidebar_position: 1
---

# Create a validator

This guide walks you through the basic steps to set up a validator on the Axone testnet. It focuses on the setup process and does not discuss validator architecture or security measures.

## Install Go and Cosmovisor

:::tip

If you already have Go and Cosmovisor, you can skip this step!

:::

### Install Go

We will use Go `v1.23.4` as example here. The code below also cleanly removes any previous Go installation.

```bash
sudo rm -rvf /usr/local/go/
wget https://golang.org/dl/go1.23.4.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.23.4.linux-amd64.tar.gz
rm go1.23.4.linux-amd64.tar.gz
```

### Configure Go

Unless you want to configure in a non-standard way, then set these in the `~/.profile` file.

```bash
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export GO111MODULE=on
export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
```

### Install Cosmovisor

We will use Cosmovisor `v1.0.0` as example here.

```bash
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
```

## Install Node

Install the current version of node binary.

```bash
git clone https://github.com/axone-protocol/axoned axone
cd axone
git checkout v10.0.0
make install
```

## Configure Node

### Initialize Node

Please replace `YOUR_MONIKER` with your own moniker.

```bash
axoned init YOUR_MONIKER --chain-id axone-dentrite-1
```

### Download Genesis

The genesis file link below is the official genesis download link.

```bash
wget -O genesis.json https://raw.githubusercontent.com/axone-protocol/networks/911b2d34631ac242e9ef3be577163653ed644726/chains/dentrite-1/genesis.json --inet4-only
mv genesis.json ~/.axoned/config
```

### Configure Seed

Using a seed node to bootstrap is the best practice.

```bash
sed -i 's/seeds = ""/seeds = "ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@testnet-seeds.polkachu.com:17656"/' ~/.axoned/config/config.toml
```

## Launch Node

### Configure Cosmovisor Folder

Create Cosmovisor folders and load the node binary.

```bash
# Create Cosmovisor Folders
mkdir -p ~/.axoned/cosmovisor/genesis/bin
mkdir -p ~/.axoned/cosmovisor/upgrades

# Load Node Binary into Cosmovisor Folder
cp ~/go/bin/axoned ~/.axoned/cosmovisor/genesis/bin
```

### Create Service Files

Create a `axone.service` file in the `/etc/systemd/system` folder with the following code snippet. Make sure to replace `USER` with your Linux user name. You need sudo privilege to do this step.

```bash
[Unit]
Description="axone node"
After=network-online.target

[Service]
User=USER
ExecStart=/home/USER/go/bin/cosmovisor start
Restart=always
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_NAME=axoned"
Environment="DAEMON_HOME=/home/USER/.axoned"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="UNSAFE_SKIP_BACKUP=true"

[Install]
WantedBy=multi-user.target
```

### Download Snapshot

Use this popular download service to download and extract Axone snapshot.

### Start Node Service

```bash
# Enable service
sudo systemctl enable axone.service

# Start service
sudo service axone start

# Check logs
sudo journalctl -fu axone
```
