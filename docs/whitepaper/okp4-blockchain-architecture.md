---
sidebar_position: 5
---

# OKP4 Blockchain Architecture

## Overview

Ut numquam neque sed dolor neque est quiquia. Adipisci neque sit dolore non est. Sit labore magnam modi non. Quiquia dolorem velit magnam. Porro quaerat ipsum consectetur. Magnam non aliquam est amet magnam sed sed.

## Consensus : Tendermint

In this section we briefly describe the Tendermint consensus protocol.

### Validators

In classical Byzantine Fault-Tolerant (BFT) algorithms, each node has the same weight. In Tendermint, nodes have an amount of voting power, and are called validators. Validators participate in the consensus protocol by broadcasting cryptographic signatures, or votes, to agree upon the next block. According to our model, the voting power of each validator is determined by the amount of staking tokens bonded as collateral.

### Consensus

Tendermint is a partially synchronous BFT consensus protocol derived from the DLS consensus algorithm. It is notable for its simplicity, performance, and fork-accountability (the processes that caused the consensus to fail can be identified and punished according to the rules). The protocol requires a fixed know set of validators, where each validator is identified by their public key. Validators attempt to come to consensus on one block at a time, where a block is a list of transactions. Voting for consensus on a block proceeds in rounds. Each round has a round-leader, or proposer, who proposes a block. The validators then vote, in stages, on whether to accept the proposed block or move on to the next round. The proposer for a round is chosen deterministically from the ordered list of validators, in proportion to their voting power.
Tendermint's security derives from its use of optimal Byzantine fault-tolerance via super-majority (>2/3) voting power and a locking mechanism.
Together, they ensure that:

- ≥1/3 voting power must be Byzantine to cause a violation of safety, where more than two values are committed
- If any set of validators ever succeeds in violating safety, or even attemps to do so, they can be identified by the protocol. This includes both voting for conflicting blocks and broadcasting unjustified votes

Despite its strong guarantees, Tendermint provides exceptional performance by providing thousands transactions per second, with commit latencies on the order of 1 to 2 seconds. Notably, performance of well over a thousand transactions per second is maintained even in harsh adversarial conditions, with validators crashing or broadcasting maliciously crafted votes.

### Light Clients

The need to sync all block headers us eliminated in Tendermint PoS as the existence of an alternative chain (a fork) means ≥1/3 of bonded stake can be slashed. Of course, since slashing requires that someone share evidence of a fork, light clients should store any block-hash commits that it sees. Tendermint light clients need only to keep up with changes to the validator set, and then verify the >2/3 PreCommits in the latest block to determine the latest state and avoid long range attacks. Succinct light client proofs also enable IBC (Inter-Blockchain Communication).

### Preventing Attacks

Tendermint has protective measures for preventing certain notable attacks, like long-range-nothing-at-stake double spends and censorship.

### ABCI (Application BlockChain Interface)

Tendermint consensus algorithm is implemented in a program called Tendermint Core. Tendermint BFT connects to blockchain applications via the ABCI. ABCI in an interface that defines the boundary between the replication engine (the blockchain), and the state machine (the application). By using a socket protocol, we enable a consensus engine running in one process to manage an application state running in another.

<br/>

For more informations:
<https://docs.tendermint.com/master/introduction/what-is-tendermint.html>

## Canonical Services

A large number of blockchains in the Cosmos ecosystem share a common set of services, either because they are provided by layer 0 of the Cosmos SDK or because they are standard in the ecosystem.

This section lists the main services that are available in the OKP4 blockchain.

### From the Cosmos SDK

The OKP4 blockchain is based on the [Cosmos SDK](https://cosmos.network) layer 0 and, as such, comes with a set of functionalities any blockchain application needs. These functionalities are grouped into _modules_, each module being responsible for a well-defined functional scope.

The list of integrated modules available in the OKP4 blockchain can be found in the [Cosmos SDK documentation](https://docs.cosmos.network/main/modules/). The main ones are briefly described hereafter.

#### Bank

The `bank` module is responsible for handling multi-asset coin transfers between accounts and tracking special-case pseudo-transfers which must work differently with particular kinds of accounts.

#### Staking

The `staking` module enables the OKP4 blockchain to support an advanced Proof-of-Stake (PoS) system where holders of KNOWs can become validators and delegate tokens to validators.

#### Governance

The `governance` module enables the OKP4 blockchain to establish a governance on-chain. In this system, holders of KNOWs can vote on proposals on a 1 token 1 vote basis.

### From the Cosmos Ecosystem

### Wasm

`wasm` is a module plugable into the [Cosmos SDK](https://cosmos.network), provided by the [CosmWasm](https://docs.cosmwasm.com) project, that enables the OKP4 blockchain to provide a smart contracting platform through which the functionalities of the OKP4 blockchain is implemented, operated.

### CosmWasm Plus

The [CosmWasm Plus](https://github.com/CosmWasm/cw-plus) repository is a collection of specification and contracts within [CosmWasm](https://docs.cosmwasm.com) virtual machine.

In the context of the OKP4 blockchain, the following smart contracts (and/or specifications) are considered (non exhaustive and subject to evolve):

- `cw20-base`: A smart contract (compliant with [cw20](https://crates.io/crates/cw20) specification) implementing a standard API for tokens, with the following functionalities: transfer tokens from one account to another, get the current token balance of an account, get the total supply of the token available on the network...

- `cw20-atomic-swap`: A smart contract (compliant with [cw20](https://crates.io/crates/cw20) specification) implementing atomic swaps for both native and `cw20` tokens.

- `cw20-staking`:  A smart contract (compliant with [cw20](https://crates.io/crates/cw20) specification) provides staking derivatives.

- `cw3-multisig`: A smart contract (compliant with [cw3](https://crates.io/crates/cw3) specification) for multiSig/voting.

- `cw4-group`: A smart contract (compliant with [cw4](https://crates.io/crates/cw4) specification) for storing group membership, which can be combined with `cw3` multisigs.

## Governance / DAO

The DAO and governance space has seen rapid and drastic changes in recent years. OKP4 will need to be flexible to learn and keep up with the trend. OKP4 DAO is operated by a distributed organization that requieres a well-defined governance mechanism in order to coordinate various changes to the blockchain such as software upgrades and constitutional amendments. The protocol's operating rules allow for cohesion between stakeholders on all types of issues such as theft, bugs, management, etc., allowing for faster and cleaner resolution or management.

Validators and any staked KNOW holders are eligible to vote on all governance proposals that may change predefined system parameters, vote on changes to the rules that govern DAO policies, coordinate upgrades, propose improvements, extensions or changes for the protocol. In addition, ALL validators are responsible for voting on ALL proposals.

If the validator does not vote on a proposal within the time limit, he/she will be automatically disabled for a period of time (1 week by default). Delegators automatically inherit the vote of the delegated validator. This vote can be changed manually.

Each Data Space can also have its own rules (Rulebook) and its own governance mechanism that allows users to have freedom and potential to experiment without permissions. For more information please click here.

The DAO will have its own treasury in order to encourage development and improvements of the protocol (grants), to encourage liquidity providing, to deposit more liquidity on an exchanges if needed, provide insurance to users...

In order to discuss and work on the proposals, a forum will be made available on the block explorer. Once they are well constructed and the required amount has been deposited, they will be submitted to a vote.

The rules are written in the Governance section of the Token model, click here.

<br/>

### Proposal Pool

In order to offer the possibility to anyone to make a voting proposal, we introduce the concept of proposal pool. If someone has a proposal to make but does not have enough tokens to launch the proposal alone, it is possible to launch a proposal pool. Over a given period of time (before the voting period), anyone who thinks the proposal is a good idea and deserves to be voted on can come and deposit KNOW in this pool. If the amount of KNOW tokens is reached before the end of the period, the proposal passes as a classic proposal and is governed by classic rules; if the period is exceeded and the total amount is not met, the contributors are refunded.

<br/>

### Voting Parameters

- Minimum deposit: 600 KNOW. Subject to change depending on the price of the token and the choices of the DAO
- Maximum deposit period: 14 days. After this period, if the minimum deposit is not reached, the proposal is rejected
- Voting period: 5 days
- Quorum: 30%. Minimum participation depending on the number of tokens staked by the validators
- Threshold: 50%. Validating majority
- Veto threshold: 33%. Option in the vote to reduce the threshold

## Initial Parameters

Bloc time: 6.5s

Block reward: For more details click here

Token release: daily

Slashing:

- Signed block window: 20,000
- Minimum signed per window: 5%
- Downtime jail duration: 600s
- Slash fraction doublesign: 5%
- Slash fraction downtime: 0.01%

Unbounding time: 14 days

## Ontology? Oracles? Identity/Consent?

Quiquia ut amet ipsum sit quaerat numquam. Amet voluptatem numquam consectetur non. Amet quisquam voluptatem ipsum labore dolor modi modi. Dolore ut tempora dolorem ut etincidunt. Voluptatem tempora dolore neque tempora modi neque consectetur. Quisquam labore porro labore dolore. Dolor labore dolor labore est magnam tempora. Etincidunt porro consectetur dolore dolorem labore. Eius adipisci tempora sed voluptatem sit eius ut. Numquam amet aliquam adipisci.

## Concerns

Quisquam dolorem voluptatem sed tempora porro numquam numquam. Non quaerat sed dolore numquam quaerat. Velit adipisci non est numquam. Porro sit numquam quiquia est sit numquam tempora. Ipsum eius dolorem ipsum. Aliquam dolor numquam neque etincidunt. Porro quiquia numquam dolor tempora quiquia adipisci labore. Non sed aliquam quisquam ut.
