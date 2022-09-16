---
sidebar_position: 3
---

# What is OKP4?

## Overview

OKP4 is a blockchain built for distributed applications.

OKP4 is the only public layer-1 blockchain designed for coordination of distributed components such as datasets, algorithms, software, storage or computation. Developers can find development kits, governance templates and easy-to-integrate applications to design their own applications and data sharing ecosystems.
Participants can provide any off-chain component they want to make it findable, available and interoperable with other components of the ecosystem. This on-chain coordination unlocks revolutionary possibilities to generate applications leveraging data and services from many businesses and individuals without any trusted third party accessing the datasets and services. It enables new opportunities to generate value from data without exchanging it with other parties, thus bringing trust and incentives to share it and build new, better applications.

By enabling trust-minimized data sharing, OKP4 gives the opportunity for anyone, any group, any company, to join or create an ecosystem of contributors. OKP4 is an open interoperable smart contracts platform for highly customized rules, governance mechanisms and business models to align interests between participants and build useful distributed applications.

OKP4 ambition is to (1) bring many new use cases to web3 and (2) onboard many web2 users and companies by enabling real-world coordination of off-chain components, thus attracting developers to design value-adding applications in any vertical, way beyond decentralized finance.

OKP4 is built using the Cosmos SDK and is able to attain instant transaction finality using the Tendermint proof-of-state consensus framework.

OKP4 is fundamentally a multichain infrastructure project. Our core value proposition relies on interchain applications leveraging existing networks inside and outside of the Cosmos ecosystem, such as Akash, Cheqd, Stargaze, Filecoin, Arweave, Ethereum and many more...

## OKP4 described

To sum up, OKP4 is a **blockchain** for anyone to build and join **Data Spaces**, share **data & services** within these, and build and use **Data Applications** which will leverage what has been shared.

It is important to understand these 4 key concepts:

- **OKP4 Blockchain** (consensus & execution layer, enabling the coordination of network participants)
- **OKP4 Dataverse** comprised of **Data & Services** (off-chain data & services referenced via metadata and APIs; coordinated by the blockchain according to Data Space's rules)
- **Data Spaces** (rights and rules enabling data & services interactions + governance mechanisms to change these rules)
- **Data Applications** (off-chain apps leveraging outputs from the distributed network and bringing value for the end-users)

Let's dive into each of these.

### OKP4 Blockchain

**OKP4 blockchain** is the decentralized layer that:

- Indexes anything as a service (as long as it is accessible via an API) - any off-chain dataset, algorithm, software, storage or computation resource and even on-chain services from other IBC-enabled networks
- Exposes metadata of indexed data and services to make it findable, accessible and interoperable
- Defines Data Spaces rules in [Prolog](https://en.wikipedia.org/wiki/Prolog)
- Is an open smart contracts platform powered by [CosmWasm](http://cosmwasm.com) for maximum governance customization.
- Orchestrates off-chain data & services and initiates off-chain workflows
- Enforces governance rules, including access rights and value transfers

It is the single source of truth that is used to build autonomous and distributed data applications.

### Dataverse

The Dataverse is comprised of datasets and services that are shared by sovereign network participants - they don't have to copy the data or the service somewhere else to make it available.

**Datasets** are bytes of information stored on a server (any data storage, either decentralized like [IPFS](https://ipfs.io) or [Arweave](https://www.arweave.org/), or centralized like [AWS](https://aws.amazon.com/) or [Azure](https://azure.microsoft.com/)), indexed on the Blockchain and accessible through a dedicated gateway.

**Services** are software associated with computation/storage resources accessible through an API that ensure an unlimited number of data-treatment operations such as data processing services, automatic description of data, knowledge graph query services, etc.

### Data Spaces

**Data Spaces** are sets of rules and governance mechanisms set in smart contracts, designed to optimize data and services sharing within a community. It is not a common database but an abstraction that defines the interaction between datasets and services, from access rights and business models. Providers share data and services within a Data Space, with conditions specific to it. They can share their data in multiple Data Spaces. Data Space have their own customizable governance mechanisms. The OKP4 Blockchain can host an endless number of Data Spaces.

### Data Applications

**Data applications** are built on top of Data Spaces and their inherent rules. They use the data-products (outputs from OKP4) as inputs in data applications that provides information, knowledge, initializes actions, etc. Data applications can have their own governance mechanisms. For example, private companies may use outputs from a decentralized Data Space to build their own applications.

### To sum up

Datasets and services provide the elementary building blocks that will interact in a distributed fashion according to the workflows initiated in the Blockchain.
Each workflow initiated in the blockchain refers to one specific Data Space with its own explicit rules.
Each dataset and service interacts within to one or many Data Spaces according to the access given by the data and service providers.
The outputs of the distributed workflows are leveraged by Data Applications to provide value to the end users.

## Network participants

On the **Blockchain layer**, there are [Validators](/docs/whitepaper/roles#validators), [Delegators](/docs/whitepaper/roles#delegators) and [DAO Participants](/docs/whitepaper/roles#dao-participants).

On the **Data Space layer**, there are [Data & Service Providers](/docs/whitepaper/roles#data-providers) who agree to share based on Data Space's rules and [Consumers](/docs/whitepaper/roles#data-providers) who pay tokens to initiate workflows in order to create knowledge. There are also [Curators](/docs/whitepaper/roles#curators) who can signal promising data/services and [Governors](/docs/whitepaper/roles#curators) who can change these rules.

On the **Data Application layer**, there are [Builders](/docs/whitepaper/roles#builders) who develop and maintain applications, and also end-users who benefit from knowledge created through the whole OKP4 Ecosystem. End-users can be directly Consumers, or just a user of the Data Application.

## Multi-layered governance

The main criticisms we can address at web2 companies and especially tech giants are their extractive nature, their willingness to keep users captive on their platforms, and their increasing power controlled by centralized governance.

But web3 also has its own sets of problems; pretty wild and self-reliant, UX is bad, allocation of capital can be messy and coordination is often suboptimal.

To build the best data sharing infrastructure, we need to enable the best of both web2 and web3 worlds through multi-layered governance:

- **OKP4 Blockchain** is decentralized by design, with its set of token holders that propose and vote on governance proposals - it's a trustless and censorship-resistant infrastructure.
- **Data Spaces** have custom governance. Data Space governance can be centralized (one or few accounts have the ability to design rules through monosig or multisig) or decentralized (through token-based voting power)

This design can be ideal for some companies who want to have control over the Data Space rules, while leveraging the decentralized infrastructure that guarantees data & services providers complete ownership over what they shared. They can remove their consents at any time and can verify that the system acted accordingly to the rules they agreed on.

- **Data applications** also have custom governance. Many of them will be centralized as it can be as simple as a front-end to consume data products, but more decentralized community-run applications can be considered.
- **Datasets & services** are sovereign to the data and services providers. Providers (individuals or companies) can define general permissions/requirements for their data and services to be used in many Data Spaces, but also can hand-pick the Data Spaces (and align themselves with the Data Space's rules) in which they want to contribute.

This mixture of governance layers enables the Dataverse to combine strengths from web2 and web3 worlds: where centralized governance models can be built on top of an open decentralized infrastructure, enabling interoperability and sovereignty by design.
