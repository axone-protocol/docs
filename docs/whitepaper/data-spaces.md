---
sidebar_position: 5
---

# Data Spaces

To recap, OKP4 enables the Dataverse, an ever-expanding universe coordinated by the blockchain.

But how are the resources coordinated? According to which rules?

This is where Data Space matters!

## Purpose of Data Spaces

Rights and rules such as secure access rights and fair business model are the key to bring trust and align interests between participants.

OKP4 enables anyone to build and join an infinite number of highly customizable Data Spaces.

Data Spaces refer to an agreement between data and services providers according to a clearly defined set of rules. Each data & service provider can adhere or not on letting some of his resources participate in a Data Space.

A Data Space is an abstraction that comprises:

- Bundle of rights & rules that regulates interactions between data, algorithms, infrastructure and every resources shared by participants
- Governance mechanisms to adapt these rules

A Data Space is highly customizable regarding every aspect of data sharing: access control, data & service management, business models, governance frameworks...

Governance mechanisms can also be customized to satisfy businesses and small teams (monosigs & multisigs) or decentralized communities (through a custom Data Space token).

In a Data Space, datasets and algorithms are not stored centrally but at source and are therefore only shared (via semantic interoperability) when necessary. Several Data Spaces can have digital resources in common and can be nested and overlapping. There is then an endless combination of oftentimes interoperable Data Spaces where participants, assets and digital resources can interact freely and create value.

These Data Spaces are the source of new value chains in the knowledge economy by enabling trust-minimized data sharing, offering possibilites way beyond what exists today with transactional data marketplaces.

## Data Space functional description

The OKP4 Protocol allows to build highly customized Data Spaces and to manage them.

Thanks to the OKP4 Development Kit, anyone can create and design Data Space with as much freedom as possible. This development kit comprises Rulebook templates and no-code tools to set the governance rules.

:::tip  
OKP4 Development Kit is designed to give as much freedom as possible for developers, data scientists and communities at large. Freedom of development, freedom of business models, freedoms of standards... freedom of innovation.

:::

The Rulebook describes a set of rules, standards and tools shared with Data Space participants, based on 5 pillars: ethics, legal, data management, technical requirements & business models.

Once the Data Space is created through the Development Kit, the governance rules of this Data Space it is encoded into a [Domain Specific Language](https://en.wikipedia.org/wiki/Domain-specific_language) allowing the rules to be expressed as a formal code which is:

- stored on-chain and is freely auditable by anyone,
- interpretable by a smart contract in a fully decentralized and autonomous way. Thus, for any transaction sent to the OKP4 blockchain, this smart contract ensures that the transaction complies with the rights established by the Data Space governance rules. If not, the transaction is rejected.

## Data Space Rules

A Data Space is governed by a bundle of rights and rules that define the permitted interactions between data, algorithms, resources and users.

The rules can refer to data management, retribution, business model or technical requirements for instance. All the rules are totally customizable and in particular can be amended provided that specific provisions have been made. By amendments, we mean an addition or modification to the governance rules, provided that they are compatible with the rules already defined (consistency).

### Examples of rules

**Data management**

- All metadata of digital resources must be described
- Restrictions on the license of the dataset
- Only one type of actors has access to the raw data

**Technical requirements**

- Each data provider stores its own data

**Business models**

- Retribution of contributors according to the template XXX: Open data are not retributed and other datasets are retributed in function of the service consumption
- Retribution of contributors according to the template “Data Marketplace”: each provider evaluates the price of its digital resource

Governance mechanisms allow to adapt these rules (See next section).

## Data Space Business Models

### How to price data, services & knowledge?

There is no unique way to price data, services & knowledge. Today, the vast majority of transactions around data happen at a fixed price posted upfront or through long negotiations. These approaches work for now but are very inefficient.

Other approaches for dynamic data pricing such as the one enabled by [Ocean Protocol](https://oceanprotocol.com/) provide alternatives that still rely on pricing data itself.

These pricing models are usually suboptimal, benefiting few large players who have an overview of the data market. These price models also benefit larger players who can derive more value from data than a smaller players due to economies of scale (more data) and economies of scope (more variety of data). Finally, negotiations due to data non-fungibility are very inefficient and create a lot of friction that prevents the data market to be scalable.

We envision a world where data (proprietary or not) is readily available for applications, where knowledge can flow seamlessly from data provider to applications, providing value to the knowledge consumer without exposing the data. Given the issues mentioned above and the ambition of OKP4, it's fair to say that we need new mechanisms for the data economy.

At OKP4, we propose generic templates, for both the data sharing and marketplace models, which allow the implementation of different business model templates based on user requirements.

### Introducing: business model templates

Different data sharing business models can be implemented using generic templates proposed by OKP4. These generic templates are fully customizable according to users needs such as: depth of (non)operating workflow of services considered for rewarding data providers, the importance of datasets for new data creation, the pricing algorithms of the data marketplaces, etc.

### Service-based pricing template

A general and sensible approach to data pricing can be based on the cost of executing the workflow involving the services operating on shared data to create the desired knowledge. Value generated from the knowledge can then be shared among all the providers (data, algo...) involved in the processing.

The generic template for service-based pricing considers that the value associated to the new created knowledge is a consequence of the different workflows of services which operate, or happened to operate, on shared data. Therefore, the value of the created knowledge is a function of the cost of executing these workflows. The rewards of the service providers are based on the considered importance (weights) of their shared datasets in these workflows.

This template has the following parameters available to be used:

- An offset (&xi; > 0), which allows the computation of the knowledge value, i.e created dataset value, as a function of the cost of the associated workflow of services operating on shared datasets
- Weights (&alpha;<sub>in</sub> >=0), which characterize the importance of each shared dataset in the workflows of services linked to the created dataset
- A last rewarded rank (N >=0), which allows the computation of rewards for data providers, across the different workflows, up to this rank

### Data-based pricing template

Another approach to price data is to consider datasets and services as atomic units with their own prices and, eventually, their own dynamics at the atomic level. There is no weights involved and their price is independant of the workflow in which it is comprised. These prices are added up to define the price of a workflow. While services pricing is fixed and defined by the providers (on a time-based basis or per use basis), datasets pricing can be fixed or dynamic as our template allows users to implement different dataset pricing algorithms. It could be a fixed price; first and second price sealed-bid auctions, price defined as a function of time and number of purchases are proposed among the different algorithms of the template...

This template has the following parameters:

- Auction time-interval, which sets the start and end of the auction bidding process
- Dataset reserved price, which set a price threshold under which a dataset will not be sold
- Weight parameters (&psi; and &#632; > 1), which allows dataset price to be defined as a function of time and number of purchases

## Data Space Governance

The governance precises the public or private nature of a Data Space. A public Data Space is reachable by anybody and a private one needs mechanisms of invitation or request of adhesion.

Besides, each Data Space decides what are the governance mechanism to change the rules. For instance, it can be a process of proposition and vote by all the members of the Data Space.

Note that the decentralized governance of the OKP4 Protocol still allows users to create centralized Data Spaces. Indeed, the governance of a Data Space can be in the hands of one or several chosen or elected members.

:::note

In a nutshell, the governance of a Data Space defines the following:

- The visibility of the Data Space (public or private)
- The nature of participants
- A set of rules that organizes _life_ in the Data Space (the conditions of access, the operations that are allowed or prohibited)
- A rules amendment process

:::
