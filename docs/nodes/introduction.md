---
sidebar_position: 1
---

# Introduction

OKP4 is a PoS blockchain based on [Tendermint](https://github.com/tendermint/tendermint/blob/master/docs/introduction/what-is-tendermint.md), which relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key.

Validator candidates can bond their own staking tokens and have the tokens "delegated", or staked, to them by token holders. The KNOW is OKP4's native token. The validators are determined by who has the most stake delegated to them - the top 100 validator candidates with the most stake will become OKP4 validators.

:::danger

If validators double sign, are frequently offline or do not participate in governance, their staked KNOWs (including KNOWs of users that delegated to them) can be slashed. The penalty depends on the severity of the violation.

:::
