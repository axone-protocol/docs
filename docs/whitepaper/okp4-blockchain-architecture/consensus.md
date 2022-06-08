---
sidebar_position: 2
---

# Consensus : Tendermint

In this section we briefly describe the Tendermint consensus protocol.

## Validators

In classical Byzantine Fault-Tolerant (BFT) algorithms, each node has the same weight. In Tendermint, nodes have an amount of voting power, and are called validators. Validators participate in the consensus protocol by broadcasting cryptographic signatures, or votes, to agree upon the next block. According to our model, the voting power of each validator is determined by the amount of staking tokens bonded as collateral.

## Consensus

Tendermint is a partially synchronous BFT consensus protocol derived from the DLS consensus algorithm. It is notable for its simplicity, performance, and fork-accountability (the processes that caused the consensus to fail can be identified and punished according to the rules). The protocol requires a fixed know set of validators, where each validator is identified by their public key. Validators attempt to come to consensus on one block at a time, where a block is a list of transactions. Voting for consensus on a block proceeds in rounds. Each round has a round-leader, or proposer, who proposes a block. The validators then vote, in stages, on whether to accept the proposed block or move on to the next round. The proposer for a round is chosen deterministically from the ordered list of validators, in proportion to their voting power.
Tendermint's security derives from its use of optimal Byzantine fault-tolerance via super-majority (>2/3) voting power and a locking mechanism.
Together, they ensure that:

- ≥1/3 voting power must be Byzantine to cause a violation of safety, where more than two values are committed
- If any set of validators ever succeeds in violating safety, or even attemps to do so, they can be identified by the protocol. This includes both voting for conflicting blocks and broadcasting unjustified votes

Despite its strong guarantees, Tendermint provides exceptional performance by providing thousands transactions per second, with commit latencies on the order of 1 to 2 seconds. Notably, performance of well over a thousand transactions per second is maintained even in harsh adversarial conditions, with validators crashing or broadcasting maliciously crafted votes.

## Light Clients

The need to sync all block headers us eliminated in Tendermint PoS as the existence of an alternative chain (a fork) means ≥1/3 of bonded stake can be slashed. Of course, since slashing requires that someone share evidence of a fork, light clients should store any block-hash commits that it sees. Tendermint light clients need only to keep up with changes to the validator set, and then verify the >2/3 PreCommits in the latest block to determine the latest state and avoid long range attacks. Succinct light client proofs also enable IBC (Inter-Blockchain Communication).

## Preventing Attacks

Tendermint has protective measures for preventing certain notable attacks, like long-range-nothing-at-stake double spends and censorship.

## ABCI (Application BlockChain Interface)

Tendermint consensus algorithm is implemented in a program called Tendermint Core. Tendermint BFT connects to blockchain applications via the ABCI. ABCI in an interface that defines the boundary between the replication engine (the blockchain), and the state machine (the application). By using a socket protocol, we enable a consensus engine running in one process to manage an application state running in another.

<br/>

For more informations:
<https://docs.tendermint.com/master/introduction/what-is-tendermint.html>
