---
sidebar_position: 4
---

# OKP4 Network Design – Global Overview

## OKP4 Ecosystem

OKP4 is a public blockchain protocol deploying a suite of data applications where communities are incentivized to share data and services confidently. OKP4 is a layer 1 customized for the knowledge economy where anyone, any group, any company, can join or create an ecosystem of contributors with custom rules, governance mechanisms and business models to build useful data applications.

[ IMAGE Protocol ]

On the macro level, there is 4 key concepts to understand:

- OKP4 blockchain (protocol layer)
- data spaces (contribution & governance layer)
- data applications (user layer)
- datasets & services

**OKP4 blockchain** is the decentralized layer that:

- indexes (any) data and services
- exposes metadata of indexed data and services
- initiates data workflows
- enforce governance rules, including access rights and value transfers
It is the single source of truth that is used to build autonomous and decentralized data applications.

**Data spaces** are sets of rules and governance mechanisms set in smart contracts, designed to optimize data and services sharing within a community. It is not a common database but an abstraction that defines the interaction between datasets and services, from access rights and business models. Providers share data and services within a data space, with conditions specific to that data space. They can share their data in multiple data spaces. Data Space have their own customizable governance mechanisms. The OKP4 blockchain can host an endless number of data spaces.

**Data applications** are built on top of data spaces and their inherent rules. They use the data-products (outputs from OKP4) as inputs in data applications that provides information, knowledge, initializes actions, etc. Data applications can have their own governance mechanisms. For exemple, private companies may use outputs from a decentralized Data Space to build their own applications.

**Datasets** are bytes of information stored on a device (IPFS, or custom private cloud), indexed on the protocol and accessible through a dedicated gateway. **Services** are software associated with computation/storage resources accessible through an API that ensure an unlimited number of data-treatment operations such as data processing services, automatic description of data, knowledge graph query services, etc.
Datasets and services provide the elementary building blocks and tools that will interact within data applications according to the orders specified in the blockchain protocol. In other words, each dataset and service is linked to one or more data applications (rules), and interacts with other data sources when called by the protocol.

## Network participants

On the **blockchain layer**, there is Validators, Delegators and DAO participants.

On the **Data Space layer**, there is Data providers and Service providers who agree to share based on Data Space's rules. There is Curators who can signal promising data and services. There is also Governors who can change these rules.

On the **Data Application layer**, there is builders who develop and maintain the application, and also end-users who benefit from knowledge created through the whole OKP4 ecosystem.

## Multi-layered governance

The main critics we can address at web2 companies and especially tech giants is their extractive nature, their willingness to keep users captive on their platforms, and their increasing power controlled by a centralized governance.

But web3 also has its own sets of problems, its pretty wild and self-reliant, UX is bad, allocation of capital can be messy and coordination is often suboptimal.

To build the best data sharing infrastructure, we need to combine web2 and web3 strengths through multi-layered modular governance:

- OKP4 blockchain is decentralized by design, with its set of token holders that propose and vote on governance proposals.
- Data Spaces have custom governance. Data space governance can be centralized (one or few accounts are designated to have the ability to design rules) or decentralized (through token-based voting power).
- Data applications also have custom governance. Many of them will be centralized as it can be as simple as a front-end to consume data products, but more complex community-run applications can be considered.
- Datasets and services are sovereign to their owners. Providers (individuals or companies) can define general permissions/requirements for their data and services, but also can hand-pick the data spaces (and align with the data space's rules) in which they want to contribute.

This mixture of governance layers enable the Dataverse to combine strengths from web2 and web3 worlds: where centralized governance models can be build on top of an open decentralized infrastructure, enabling interoperability and sovereignty by design for the data providers and users.
