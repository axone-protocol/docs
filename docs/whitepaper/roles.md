---
sidebar_position: 6
---

# Roles

## Blockchain Participants

### Validators

**_Purpose_**

Validators build, verify and add new blocks to the blockchain, while maintaining the network's security and integrity.

**_Responsibilities_**

They are accountable for validating new blocks, propagating votes as part of the consensus protocol, and stake tokens to encourage network rule adherence.

**_Interaction_**

Validators engage with the protocol via a client that manages the block validation process and consensus voting. This client also facilitates their participation in DAO governance, both in voting and proposal submission, through specific transactions.

**_Entity_**

Validators typically operate as entities or individuals running network nodes.

:::note

To maintain balance and security in the network, a limit has been set on the number of Validators. This number is subject to changes as the network matures.
To maintain the integrity of our network, any inappropriate or malicious behavior from Validators is met with slashing. This disciplinary action serves to uphold the network's standards and security, keeping it robust and reliable for all participants.
More information about [Tendermint BFT mechanism](https://tendermint.com/core/)

:::

### Delegators

**_Purpose_**

Delegators primarily delegate their $AXONE tokens and voting power to Validators to accumulate rewards.

**_Responsibilities_**

They are responsible for choosing whom to delegate their tokens and voting power to. Furthermore, they need to be aware of the risks of delegating their tokens, as they can be slashed and lost if delegated to a malfunctioning or malicious validator.

**_Interaction_**

Delegators engage with the protocol by delegating their tokens to Validators. However, they can manually "retrieve" their voting rights and directly participate in governance through a transaction.

**_Entity_**

Delegators are typically individuals or entities staking $AXONE tokens.

### DAO Participants

**_Purpose_**

The principal role of DAO Participants is to participate in the on-chain governance of the protocol. They have the power to propose and vote on protocol improvement propositions.

**_Responsibilities_**

DAO Participants are responsible for issuing improvement proposals, voting on these proposals, and staking $AXONE tokens to participate in governance. As protocol holders, they also have a direct stake in its direction and success.

**_Interaction_**

DAO Participants interact with the protocol by making and voting on proposals, facilitated by staking $AXON. Each $AXONE token provides a voting right.

**_Entity_**

DAO Participants can only be delegators or Validators for voting. Nevertheless, note that it is necessary to deposit $AXONE to make a proposal and therefore not necessarily need to be a Delegator.

## Dataverse & Zone Participants

### Data Providers

**_Purpose_**

Data Providers reference datasets within the protocol.

**_Responsibilities_**

They are responsible for describing dataset characteristics (metadata) and establishing consent rules for the use of this resource. They are the only ones authorized to modify these rules unless they decide otherwise through these rules of consent. They may also receive compensation from Consumers each time their data is used or purchased, according to the associated governance rules.

**_Interaction_**

They interact with the protocol via dedicated smart contracts to register datasets, define their consent rules and metadata, and make the dataset available and accessible. In addition, retribution fees may be distributed to data providers when their datasets are used, in accordance with established consent rules and zone rules.

**_Entity_**

Data Providers can be individuals, applications, companies, or organizations owning and/or managing datasets.

### Service Providers

**_Purpose_**

Service Providers provide resources such as algorithms, software, storage systems, or any other digital resource requiring processing time.

**_Responsibilities_**

Service Providers are responsible for providing services, defining consent rules, describing services metadata, and setting up remuneration models based on the nature and usage of their resources. Depending on consent rules and zone rules, Service Providers may be required to stake tokens on services to ensure service availability and integrity. This stake can be slashed and provide further incentives for Service Providers to guarantee off-chain service execution when invoked.

**_Interaction_**

Service Providers interact with the protocol by referencing their services and consent rules via smart contracts, ensuring the availability and functioning of their service in accordance with on-chain registered specifications. Furthermore, retribution fees may be distributed to Service Providers, according to established consent rules and zone rules.

**_Entity_**

Service Providers can be individuals, entities, or applications offering computing or processing resources.

### Consumers

**_Purpose_**

The main role of Consumers is to initiate workflows on shared resources from providers to access or create knowledge.

**_Responsibilities_**

Consumers are accountable for initiating workflow executions and providing payment for data and service access. These workflows can be simple, like downloading a dataset, or more complex, involving the interaction of tens or hundreds of datasets and services.

**_Interaction_**

Consumers interact with the protocol by initiating on-chain transactions calling smart contracts to request workflow execution. They have to pay required fees and retributions to initiate the workflow execution.

**_Entity_**

Consumers can be individuals or bots initiating transactions to access resources within the dataverse.

:::caution

### Application Participants

It is important to note that Application participants, such as builders and end-users do not have a role in the protocol. They do not interact directly with the protocol itself. As we previously mentioned, the applications can act as a Consumers when it needs new or updated knowledge, and link the protocol and the end-user.

Builders are also essential to the proper functioning of our ecosystem. They leverage the Dataverse to build, update, and improve applications on top of the protocol with the aim of consuming the knowledge created. This includes UI (User Interface) developers who design and build interfaces for these applications. The Builder's application will therefore play an intermediary role (the application becomes a Consumer) to create the knowledge required by the end user. Then the application consumes the knowledge in order to provide its service to the client.

They are the ones using Applications. Some applications may be completely off-chain, they leverage outputs from Axone, making end-users invisible to the protocol. Some may need users to have on-chain identity and/or perform on-chain actions. These 2 kinds of end-users will coexist.

:::
