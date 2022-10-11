---
sidebar_position: 3
---

# Running a node

This document explains the main steps to configure a node to join an existing network, and make it validator.

:::note

The steps detailed here are to be adjusted depending on the network you're joining.

:::

## ⚙️ Init

Joining a network require at least 3 elements:

- The network's `chain-id`.
- The network's Genesis.
- Some network's peers.

:::note

As a prerequisite, the `okp4d` binary shall be installed, please find the instructions [here](installation.mdx).

:::

### Chain ID

A network is identified by its chain id, when initializing a node's configuration it is recommended to provide it so the `client.toml` configuration will be properly set, this will ease CLI commands.

```bash
CHAIN_ID=okp4-testnet-1
```

:::tip

The `chain-id` values for each networks are detailed in the corresponding sections (i.e. [Join Testnet](join-testnet.mdx#node-configuration) & [Join Mainnet](join-mainnet.md#node-configuration)).

:::

### Choose a moniker

The moniker helps identifying your node on the explorer interfaces, this is more human readable than a node ID.

```bash
MONIKER="MiKnowTor"
```

### Initialize the node

At this point, the node can be initialized:

```bash
okp4d init $MONIKER --chain-id $CHAIN_ID
```

This will generate, in the `$HOME/.okp4d` folder, the following files:

- `config/app.toml`: Application-related configuration file.
- `config/client.toml`: Client-oriented configuration file (not used when running a node).
- `config/config.toml`: Tendermint-related configuration file.
- `config/genesis.json`: The network's genesis file.
- `config/node_key.json`: Private key to use for node authentication in the p2p protocol.
- `config/priv_validator_key`: Private key to use as a validator in the consensus protocol.
- `data`: The node's database.

:::danger

The generated `config/priv_validator_key` and `config/node_key.json` are very sensible, if stolen the entire stake delegated to the validator is at risk.
➡️ See the [Security](security.md) section.

:::

### Set Genesis

Inside the network all the nodes share the same chain configuration and state, the genesis file providing the configuration and the base state all the nodes shall share it.

The `config/genesis.json` file shall be replaced with the one corresponding to the targeted network (i.e. [Join Testnet](join-testnet.mdx#genesis) & [Join Mainnet](join-mainnet.md#genesis)).

### Add peers

Joining a network is first of all being part of the P2P protocol. To do so your node must connect with others by specifying persistent peers, either in the `config/config.toml`, or through the `p2p.persistent_peers` argument of the `start` command. Depending on the chosen network, refer to its section to find peers (i.e. [Join Testnet](join-testnet.mdx#peers) & [Join Mainnet](join-mainnet.md#peers)).

Add some peers using regex

```bash
PEERS="ADD_SOME_PEERS_HERE"
sed -i -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.okp4d/config/config.toml

# Example
# PEERS="3111059714ccbaa09f0b3647bc2fb94fd9d117d0@1.11.1.1:23656,09abd86a01bfcd35ab8c503868179b70fe9a1801@2.2.2.2:23656"
# sed -i -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" $HOME/.okp4d/config/config.toml
```
## 🚀 Run

Run with `start` command:

```bash
okp4d start
```

Run with daemon service **(recommended)**

```bash
sudo tee <<EOF >/dev/null /etc/systemd/system/okp4d.service
[Unit]
Description=okp4d daemon
After=network-online.target

[Service]
User=$USER
ExecStart=$(which okp4d) start
Restart=on-failure
RestartSec=3
LimitNOFILE=65535

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable okp4d
sudo systemctl restart okp4d
```

:::info

Running a validator node being critical, consider [automate upgrades](upgrade.md) and [secure your node](security.md).

:::

### Syncing the node

Your node will start beginning by syncing to the network, this step can take a long time depending on the blockchain size, you can query the sync status with the following command:

```bash
# Query via the RPC (default port: 26657)
curl http://localhost:26657/status | jq .result.sync_info.catching_up
```

During the sync process the node will apply each block on its state, you'll need to install binary upgrades at the correct heights (i.e. only on breaking upgrade cases) in order to sync your node. Please refer to your targeted network upgrades history (i.e. [Join Testnet](join-testnet.mdx#upgrades) & [Join Mainnet](join-mainnet.md#upgrades)).

## 👨‍⚖️ Becoming validator

:::info

You will create a new wallet with the [Create key](#Create-key) step.
Save your keys/mnemonics and never share them with anyone!

:::

### Create key

```bash
okp4d keys add <KEY_NAME>

# Example
# okp4d keys add validator
```

Or can recover the existing one

```bash
okp4d keys add <KEY_NAME> --recover

# Example
# okp4d keys add validator --recover
```

### Create validator


:::danger

Your node shall be fully synced before upgrading it to a validator. It can't take part in the validation consensus without sharing the same state than the others, and risk thus to be slashed and jailed.

:::

To make your node validator you need to submit a `create-validator` transaction referencing it by its public key:

```bash
AMOUNT="AMOUNT_OF_TOKEN"
DENOM=uknow
WALLET="YOUR_KEY_NAME"
IDENTITY="YOUR_KEYBASE_ID" #optional

okp4d tx staking create-validator \
  --amount $AMOUNT$DENOM \
  --commission-max-change-rate "0.1" \
  --commission-max-rate "0.20" \
  --commission-rate "0.1" \
  --min-self-delegation "1" \
  --details "Details of your validator" \
  --pubkey=$(okp4d tendermint show-validator) \
  --moniker "$MONIKER_NAME" \
  --chain-id $CHAIN_ID \
  --gas-prices 0.025uknow \
  --identity=$IDENTITY \
  --from $WALLET
```

:::info

This is an example transaction, to customize your validator explore the available flags:

```bash
okp4d tx staking create-validator --help
```

:::

## Additional Commands

Learn your valoper address

```bash
okp4d keys show $WALLET -a --bech val
```

Delegate additional stake

```bash
okp4d tx staking delegate [VALOPER_ADDRESS] [STAKE_AMOUNT]uknow --from $WALLET --chain-id $CHAIN_ID
```

Unjail

```bash
okp4d tx slashing unjail --chain-id $CHAIN_ID --from [your-key-name]
```