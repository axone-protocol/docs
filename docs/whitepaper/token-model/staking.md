---
sidebar_position: 2
---

# Staking

## Staking Validators & Delegators

Following our dPoS (delegated proof-of-stake) blockchain model, it is possible to stake tokens to validate the network and receive associated rewards. A validator wishing to withdraw will have to wait a period of 14 days before his decision is executed (unbounding period).

For more information, please click here [lien:Validators]

If you don't want to or can't run nodes, it is possible to delegate your tokens to validators to earn rewards.

For more information, please click here [lien:Delegators]

<br/>

## Staking Algorithm & Infrastructure

As saif previously: "The provider will be able to create a descriptive page for his repository at any time. However, in order for a builder to be able to invoke and use this algorithm/infrastructure, he will have to stake KNOW in proportion to the hourly fee that he will define himself."

Therefore, the amount of KNOW to stake will depend on the price that the provider asks for. And this for several reasons:

- Economic security: KNOW that is staked can be slashed (same principle as for validators but with different rules). It provides security for builders in case they pay for a service that is not available or stops in the middle of a treatment. It also prevents service providers to deposit wrong services and operate bad computation.
- Sybil resistance: Only providers who are willing to invest resources can participate. This will prevent deposits of inefficient and useless services.

Calculation: Price per hour (KNOW) * 50 = amount of KNOW to stake

What if I want to remove my service from use, without being slashed?

If you delete a service that is not in use by builders, it disappears instantly (but still ramains visible on its page and on the catalog as a "non-usable service"; marked with a flag). However, if this service is in full use and/or have a waiting list, you will not be able to remove it immediately as this would cut off current usage. You can on the service page, take a closing order that will have the effect of closing access to the waiting list for the use of the service. Once the waiting list is over, the service will close automatically so that the provider has nothing else to do. Everything that follows will also be done automatically. If the provider does not respect these rules, it will be slashed. The staked tokens will then be available for withdrawal once it is closed.
