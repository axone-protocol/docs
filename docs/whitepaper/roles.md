---
sidebar_position: 6
---

# Roles

## Blockchain Participants

### Validators

***Purpose***
Validators primarily confirm and add new blocks to the blockchain, while maintaining the network's security and integrity.

***Responsibilities***
They are accountable for validating new blocks, propagating votes as part of the consensus protocol, actively participating in DAO proposal voting, and stake token to encourage network rule adherence.

***Interaction***
Validators engage with the protocol via a client that manages the block validation process and consensus voting. This client also facilitates their participation in DAO governance, both in voting and proposal submission, through specific transactions.

***Entity***
Validators typically operate as entities or individuals running network nodes.

:::note

To maintain balance and security in the network, a limit has been set on the number of Validators: no more than 100 Validators can operate at any given time.
To maintain the integrity of our network, any inappropriate or malicious behavior from Validators is met with penalties. This disciplinary action serves to uphold the network's standards and security, keeping it robust and reliable for all participants.
More information about [Tendermint BFT mechanism](https://tendermint.com/core/)

:::

### Delegators

***Purpose***
Delegators primarily delegate their $KNOW tokens and voting power to Validators to accumulate rewards.

***Responsibilities***
They are responsible for choosing whom to delegate their tokens and voting power to. Furthermore, they need to be aware of the risks associated with delegating their rights.

***Interaction***
Delegators engage with the protocol by delegating their tokens to Validators. However, they can manually “retrieve” their voting rights and directly participate in governance through specific transaction

***Entity***
Delegators are typically individuals or entities staking $KNOW tokens.

### DAO Participants

***Purpose***
The principal role of DAO Participants is to participate in the on-chain governance of the protocol. They have the power to propose and vote on protocol improvement propositions.

***Responsibilities***
DAO Participants are responsible for issuing improvement proposals, voting on these proposals, and staking $KNOW tokens to participate in governance. As protocol holders, they also have a direct stake in its direction and success.

***Interaction***
DAO Participants interact with the protocol by making and voting on proposals, facilitated by staking $KNOW. Each $KNOW token provides a voting right.

***Entity***
DAO Participants can only be delegators or Validators for voting. Nevertheless, note that it is necessary to deposit $KNOW to make a proposal and therefore not necessarily need delegation

## Dataverse & Zone Participants

### Data Providers

***Purpose***
Data Providers primarily aim to reference datasets within the protocol.

***Responsibilities***
They are responsible  describing dataset characteristics (metadata) and for establishing consent rules for the use of this resource . They are solely authorized to modify these rules unless they decide otherwise through these rules of consent. They may also receive compensation from Consumers each time their data is used or purchased, according to the associated governance rules.

***Interaction***
They interact with the protocol via dedicated smart contracts to register datasets, establish their consent rules and characteristics, and make the dataset available and accessible. In addition, retribution fees may be distributed to data providers, in accordance with established consent rules.

***Entity***
Data Providers can be individuals, applications, companies, or organizations owning and/or managing datasets.

### Service Providers

***Purpose***
Service Providers mainly aim to provide resources such as algorithms, software, storage systems, or any other digital resource requiring processing time.

***Responsibilities***
Service Providers are responsible for providing services, defining consent rules, describing services, and setting up remuneration models based on the nature and usage of their resources. depending on consent rules and Zone rules, service providers may be required to stake tokens to ensure service availability and integrity.

***Interaction***
Service Providers interact with the protocol by referencing their services and consent rules via smart contracts, ensuring the availability and functioning of their service in accordance with on-chain registered specifications. Furthermore, retribution fees may be distributed to service providers, according with established consent rules.

***Entity***
Service Providers can be individuals, entities, or applications offering computing or processing resources.

### Consumers

***Purpose***
The main role of Consumers is to initiate workflows on shared resources from providers to access or create knowledge.

***Responsibilities***
Consumers are accountable for initiating workflow executions and providing payment for data and service access. These workflows can be simple, like downloading a dataset, or more complex, involving the interaction of tens or hundreds of datasets and services.

***Interaction***
Consumers interact with the protocol by initiating on-chain transactions calling smart contracts to request workflow execution. They have to pay required fees to initiate the workflow execution.

***Entity***
Consumers can be individuals or bots initiating transactions to access resources within the dataverse.

:::caution

**Application Participants###

It is important to note that Application participants, such as builders and end-users do not have role in the protocol. They do not interact directly with the protocol itself. As we previously mentioned, the applications can act as a Consumers and make the link between the protocol and the end-user.

Builders are essential to the proper functioning of our ecosystem. They leverage the Dataverse to build, update, and improve applications on top of the protocol with the aim of consuming the knowledge created. This includes UI (User Interface) developers who design and build interfaces for these applications. The Builder's application will therefore play an intermediary role (the application becomes a Consumer) to create the knowledge required by the end user. Then the application consumes the knowledge in order to provide its service to the client.

They are the ones using Applications. Some applications may be completely off-chain, these applications just leverage outputs from OKP4 with invisible end-users from the protocol. Some may need users to have on-chain identity and/or perform on-chain actions. These 2 kinds of end-users will coexist.

:::
