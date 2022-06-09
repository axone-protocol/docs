---
sidebar_position: 3
---

# Canonical Services

A large number of blockchains in the Cosmos ecosystem share a common set of services, either because they are provided by layer 0 of the Cosmos SDK or because they are standard in the ecosystem.

This section lists the main services that are available in the OKP4 blockchain.

## From the Cosmos SDK

The OKP4 blockchain is based on the [Cosmos SDK](https://cosmos.network) layer 0 and, as such, comes with a set of functionalities any blockchain application needs. These functionalities are grouped into _modules_, each module being responsible for a well-defined functional scope.

The list of integrated modules available in the OKP4 blockchain can be found in the [Cosmos SDK documentation](https://docs.cosmos.network/main/modules/). The main ones are briefly described hereafter.

### Bank

The `bank` module is responsible for handling multi-asset coin transfers between accounts and tracking special-case pseudo-transfers which must work differently with particular kinds of accounts.

### Staking

The `staking` module enables the OKP4 blockchain to support an advanced Proof-of-Stake (PoS) system where holders of KNOWs can become validators and delegate tokens to validators.

### Governance

The `governance` module enables the OKP4 blockchain to establish a governance on-chain. In this system, holders of KNOWs can vote on proposals on a 1 token 1 vote basis.

## From the Cosmos Ecosystem

## Wasm

`wasm` is a module plugable into the [Cosmos SDK](https://cosmos.network), provided by the [CosmWasm](https://docs.cosmwasm.com) project, that enables the OKP4 blockchain to provide a smart contracting platform through which the functionalities of the OKP4 blockchain is implemented, operated.
