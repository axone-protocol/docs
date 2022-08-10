---
sidebar_position: 6
---

# Join Testnet

## Hardware recommendations

It is recommended to at least provide **200Go** of storage (SSD is a plus but not mandatory), **8Gb** of memory and **2 cores** (modern CPU's) for a single node.
Regarding the OS, it is recommended to use **Linux AMD64**.

## Node configuration

### Genesis

The genesis file is provided [here](https://github.com/okp4/okp4d/blob/main/chains/devnet-1/genesis.json).

:::caution

This genesis is only related to the testnet.

:::

### Peers

A node should have his external address set to the `ip:port` he is exposed from (ex: `192.0.1.1:26656`).
The network will then register this address and broadcast it to other peers.

It should also have a persistent peer set to an already registered and running node on the network.

### API

A node should expose the RPC port related to the API (by default: `26657`).
It will allow the node to process requests made on the blockchain.

## Getting tokens

There is some ways to get tokens on the testnet:

- Using the [faucet](https://github.com/okp4/faucet-web)
- Validating blocks with a personnal node registered as validator on the network
- Random drops on [Dicord](https://discord.gg/okp4)
- Direct transfert between wallets

## Upgrades

:::info COMMING SOON

✍️ _Under active writing..._

:::
