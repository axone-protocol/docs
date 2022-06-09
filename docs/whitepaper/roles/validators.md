---
sidebar_position: 2
---

# Validators

Our validator network is based on the Tendermint consensus system which relies on a group of validators in charge of commiting new blocks to our blockchain. They participate in the consensus protocol by broadcasting votes that contain cryptographic signatures signed by the private key of each validator. Applicants to this group can have KNOW tokens delegated to them by the token holders (delegators).

Anyone can become validator at any time, except when the size of the current validator set is greater than the maximum number of validators allowed. Validators will be automatically selected according to their voting power, which is determined by the number of KNOW tokens staked by the validator plus those delegated. Our network will initially contain a set of 125 validators (with an increase over time based on a growth rate). The 125 best candidates with more voting power will then be the approved validators of our network; the other candidates are on a waiting list. If a validator is replaced by a new validator, the existing validator becomes inactive (back on the waiting list) and all his KNOW and delegated KNOW enter the unbounding state.

Validators (and their delegates) earn KNOW tokens as a reward for running the Tendermint consensus protocol. These rewards come from inflation and transaction fees. Validators can choose to set a small commission percentage on the rewards received by their delegators as an additional incentive.

There must be some penalty imposed if validators do not respect the protocol rules whether intentional or unintentional (double sign, offline too long...). This will cause the validator to lose his good reputation and his proportional share of bonded token that will get slashed. The penalty depends on the severity of the violation.
