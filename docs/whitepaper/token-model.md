---
sidebar_position: 10
---

# Token Model

## Utility

$KNOW is the native token of the OKP4 Blockchain and are the only staking token of our Ecosystem. They are a license for the holder to validate, delegate to other Validators or vote. $KNOW tokens can also be used to pay for transaction fees. Additional inflationary $KNOW and block transaction fees are rewarded to Validators and Delegators.

### Rewards

According to the adopted business model, $KNOW tokens are at the center of our economy and will be the common currency. Indeed, they allow first of all consumers to pay for the creation of knowledge as well as to remunerate all Providers to the creation of this knowledge (Data & Services Providers).

### Transaction Fees

Transaction fees on the OKP4 Blockchain will be paid in $KNOW. These fees will go to reward the Validators and Delegators who keep the network running.

Transaction fees will be relatively low as Validators are fairly incentivized thanks to the block reward. They will be variable, depending on the size and type of the transaction.

In addition, each Data Space will be able to add an additional transaction fee for each transaction within that Data Space if it wishes (governance).

### Micropayments

<br/>

## Staking

### Staking Validators & Delegators

Following our dPoS (delegated proof-of-stake) blockchain model, it is possible to stake tokens to validate the network and receive associated rewards. A Validator wishing to withdraw will have to wait a period of 14 days before his decision is executed (unbounding period).

For more information, please click [here](/docs/whitepaper/roles#validators).

If you don't want to or can't run nodes, it is possible to delegate your tokens to Validators to earn rewards.

For more information, please click [here](/docs/whitepaper/roles#delegators).

### Staking Services

As said previously: "The Provider will be able to create a descriptive page for his repository at any time. However, in order for a Consumer to be able to invoke and use this service, he will have to stake $KNOW in proportion to the hourly fee that he will define himself."

Therefore, the amount of $KNOW to stake will depend on the price that the Provider asks for. And this for several reasons:

- Economic security: $KNOW that is staked can be slashed (same principle as for validators but with different rules). It provides security for Consumers in case they pay for a service that is not available or stops in the middle of a treatment. It also prevents Service Providers to deposit wrong services and operate bad computation.
- Sybil resistance: Only Providers who are willing to invest resources can participate. This will prevent deposits of inefficient and useless services.

Calculation: Price per hour ($KNOW) * 50 = amount of $KNOW to stake

What if I want to remove my service from use, without being slashed?

If you delete a service that is not in use by Consumers, it disappears instantly (but still remains visible on its page and on the Catalog as a "non-usable service"; marked with a flag). However, if this service is in full use and/or have a waiting list, you will not be able to remove it immediately as this would cut off current usage. You can on the service page, take a closing order that will have the effect of closing access to the waiting list for the use of the service. Once the waiting list is over, the service will close automatically so that the Provider has nothing else to do. Everything that follows will also be done automatically. If the Provider does not respect these rules, it will be slashed. The staked tokens will then be available for withdrawal once it is closed.

## Curation

### Curation Shares

Curation Shares are the continuous tokens OKP4 uses to incentivize Curators towards the shared goal of identifying quality data & service sources. They are managed by OKP4 bonding curve contract.

Properties:

- Limitless: the supply of curation shares is limitless. There’s no hard cap to the number of shares that Curators can mint
- Deterministic: the utilization of a bonding curve facilitates a predetermined and fixed price discovery mechanism for the curation shares
- Continuous: the smart contract continuously determines the price depending on the purchase and sale of curation shares
- Liquidity: the bonding curve acts as automated market maker, which allows Curators to buy or sell curation shares instantly and at any time

OKP4 Ecosystem uses a bonding curve to coordinate the work of Curators to achieve the shared goal of indexing the contents of quality items. Curators are incentivized in an economic game to identify high-quality items with attractive earning potentials and try signal on these subgraphs early on.

### Curation Fees

It should be noted that there is an entry fee of 2% for the mint of shares. These fees will go directly into the DAO's treasury.

### Burn & Mint Process

It is possible at any time to buy shares. This process is called "mint".

_Work in progress_

In the same way, it is possible to sell shares at any time. This process is called "burn".

_Work in progress_

:::note

It is important to note that as a Curator, you are confronted with the risk of withdrawing less $KNOW from the bounding curve than you started with. In the worst-case scenario, your curation shares value decreases substantially so that you receive only a tiny fraction of the $KNOW back that you initially deposited.

:::

### Bonding Curve 101 Model

A bonding curve describes the relationship between the price and supply of an asset. It is a mathematical concept modelling the idea that the price of an asset (with a limited quantity) increases slightly for subsequent buyers with each purchase. The reasoning behind the increase in price is that the freely available supply is reduced with every unit that is acquired. The mechanism of a bonding curve rewards the earliest investors with higher profits. The basic idea behind the concept of a bonding curve is quite intuitive: the supply of a token determines its price. The price increases when the number of distributed tokens increases and vice versa.

Each dataset or service has a bonding curve on which curation shares are minted when a Curator decides to add a signal. The bonding curve is the same for all items. These curves are designed in such a way that the mint price of a curation share increases linearly with the number of shares left to mint. Which means that for each share minted, it will get more expensive to purchase a share (conversely, for each share burned, the price will be lower).

Here is an example of what we mean, see the bonding curve below:

_Work in progress_

The $KNOW valuation of curation shares is determined by the bonding curve and can be volatile. It is possible to suffer big losses (or make big gains). Signaling early means each share costs less $KNOW. By extension, this means you earn more Curator royalties/$KNOW than later Curators for the same item.

### Risks

Being a Curator in our Ecosystem comes with certain risks. Let’s have a look at the risks Curators are confronted with.

1. New market risk: the query market is inherently young and there is risk that your %APY may be lower than you expect due to nascent market dynamics.
2. Bonding curve risk: asset depreciation as a result of depositing into the bonding curve of an item whose curation shares are being burned by other Curators.
3. Non-functional risk: an item can fail due to a bug. A failed item does not accrue royalties. As a result, you will have to wait until the Provider fixes the bug and deploys a new version.
4. Item assessment risk: marking false judgments about the attractiveness of an item.
5. Gas price risk: high gas prices could reduce your profit margin, especially if you are curating with a smaller stake of $KNOW.
6. Curation taxes risk: 2% curation fee. This can become costly if Curators often switch to another subgraph or have to commit to the latest version of the subgraph. It is not a "risk", but it is something to keep in mind.

## Governance

Governance will be done in $KNOW. Staked $KNOW holders can vote. All proposals require a minimum $KNOW deposit. For each proposal (if the minimum deposit amount is reached), voters may vote to accept or decline.
Several cases:

- If the proposal is accepted by the majority, the deposited $KNOWs will be returned to their owners
- If the proposal is rejected by the majority, the deposited $KNOWs will be returned to their owners
- If the proposal is rejected with a veto (33%), the deposited $KNOWs will be burned
- If the deposit amount is not reached (by passing the proposal pool), the deposited $KNOWs are returned to their owners

For more information on the governance of the protocol and its parameters, please click [here](okp4-blockchain#governance--dao).

## Liquidity

At the launch of the token, the liquidity associated supply will be locked. This liquidity will be used for decentralized exchanges and for centralized exchanges in order to have a $KNOW/$ATOM & $KNOW/$OSMO pair at first.

In order to ensure our back-up we have a part of the DAO treasury wallet that can be used to provide liquidity for a given period of time if needed.

In addition we will be able to provide liquidity for all new Data Space governance tokens so that they can be traded under the best conditions.

## Insurance & Sybil control

### Insurance

We will provide insurance to all Consumers in case of interrupted workflow during knowledge creation. In case a service/dataset is instantly withdrawn, the knowledge creator will be reimbursed on the full amount he paid.

### Sybil control

A Sybil attack is a type of security threat on an online system where a person tries to take control of the network by creating multiple accounts, nodes or computers. Attackers may therefore be able to vote against honest nodes on the network to refuse to receive or transmit blocks, thus blocking other users on the network. In very large-scale Sybil attacks, where attackers manage to control the majority of the network's computing power, they can conduct a 51% attack. This gives them the ability to change the order of transactions or even reverse the transactions made.

The dPoS (delegated proof-of-stake) mechanism we have ensures that it becomes very expensive for an attacker to attack our network with a Sybil attack. Our staking requirements provide a defense against such attacks. Votes are weighted by the amount of "stake", which are tokens that are locked to a node. This way, the number of nodes created by the attacker does not matter, because if the stake is spread over several nodes, they each have very little voting weight. This significantly increases the cost of attacking our network, as an attacker would have to buy an overwhelming quantity of tokens to stake.
