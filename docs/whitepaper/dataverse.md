---
sidebar_position: 8
---

# Dataverse

## Wallets/ID

To manage identities and associated assets circulating in the OKP4 ecosystem (KNOW and other coins that will emerge in the future), a non-custodial wallet application is necessary.

It means that the user controls his keys.

This enables anyone to:

- Create a private key and wallet
- Import/export identities from/to other SSI systems (self-sovereign identity)
- Control assets on the OKP4 ecosystem (send, stake, swap)
- Send assets out of the OKP4 ecosystem
- Create and manage multisig wallets
- Control datasets and services indexed in the ecosystem
- Control participation in Data Spaces
- Vote on DAO governance
- Vote on Data Space governance if eligible
- Curate data and services
- Create and interact with smart contracts

Cosmos-native wallets such as [Keplr](https://wallet.keplr.app) will be able to perform most of these functions.

But functional doesn't mean optimal.

In terms of UX, many OKP4-specific actions and features will be necessary.

What if you could automatically import web2 platform data into your sovereign wallet while you interact with apps and pages in your browser? What if you could watch your data usage and token analytics in real time in your wallet? What if you could navigate across the graphs of your contributions? And many other data-specific features that generic-purpose wallets can't cover.

The OKP4 wallet will take the form of a web page and a dedicated browser extension. It will be extended to a smartphone application.

## Portal

The OKP4 portal is a Web App which allows to exokire the dataverse. It aggregates the dataverse services such as wallets, catalog, files deposit, dapps, block explorer and more.

Although parts of the portal is open (especially for content and support), each user can log in to get access to all the services.

Through the OKP4 portal, a user is informed in real time of the activities related to the Data Space of which he is a member and the datasets or services he provides. Thus, users follow their contribution to the Knowledge creation and the associated retributions.  

The portal is customized according to the membership of the different Data Spaces and the roles of the user in them.

## Catalogs

The catalog is a Web App lists the datasets and services declared in the protocol.

As a reminder, a dataset or a service can participate in several Data Spaces by being stored at the source.

A user can see the datasets and services of the Data Spaces in which he participates but also those of the open Data Spaces. The user can apply different filters such as type (dataset or service), date of declaration, tags, spatial or temporal coverage.

The catalog includes a search engine and a recommendation system.

The catalog is available in several visualizations:

### Card view

### List view

### Knowledge Graph

The knowledge graph represents the link between the entities (datasets and services) to create knowledge. It allows to visualize the contribution of datasets and services in the generation of new knowledge. This knownledge is expressed by a [formal ontology](okp4-blockchain-architecture#ontology).

Depending on the governance rules of the Data Set, and depending on the rights of the user exploring the knowledge graph, some elements and the metadata may be visible or not.

## Files Deposit

OKP4 Files Deposit is a Web App that allows Data Providers to register a dataset into the OKP4 Protocol.  

The Data Provider can fill in the contextual metadata of the dataset. This information will allow other users to understand how the dataset is constructed, the nature of the information it contains, the application domain it refers to, and the licence that applies. Filling in this metadata will improve the ranking of a dataset in the search engine of the catalog.

Note that a Data Provider is not necessarily the owner of the dataset if it has permission to declare it in the protocol.

Each file deposit is a transaction submitted to the protocol that must be signed by a wallet, and it is the responsibility of the Data Provider to pay the fees related to the execution of this transaction.

## Metadata extraction

Each dataset declared in the OKP4 protocol is described with metadata registered in the ontology.

These general metadata allow users to have a description of the datasets. Besides, the metadata are part of the traceability of the knowledge creation.

General metadata can be :
- Public (by default)
- Authorized to particular users
- Private

Different services extract the general metadata, provided by OKP4 or tiers. 

Examples of general metadata :

>Name of the dataset
>Author
>Date of creation
>Format
>Size


## Data Applications

Data applications are a suite of software that leverages outputs from a (or many) Data Space.

It can take many forms. For exemple it could be a BI software that enables data visualization, a push API, a script that performs actions automatically (e.g. a bot), etc.

The data application will be the medium through which tokens flow into the OKP4 ecosystem. Some data applications will enable end-users to interact with the blockchain through their wallets (thus paying on a per-transaction basis) while some others will have custom off-chain business model (such as a subscription model of exemple) and pay the ecosystem for the knowledge it creates.

Data Applications have dedicated identities and may have dedicated application treasury to pay for services on behalf of end-users, if enabled. This enables some web3-enabled applications to have seamless, web2-like UX.

## Other applications

### OKP4 Block explorer

Block explorers are tools that help you understand what is happening on a blockchain. The OKP4 open-source explorer goes further than other explorers in the Cosmos ecosystem by making it possible for everyone to discover, understand and visualise all transactions that have been committed on the OKP4 mainnet network according to their business dimension:

- Data Space creation
- Data deposit and registration
- Data service executions
- Workflow executions
- metadata (ontology)
- Rule book
- ...

### OKP4 Design System

The [OKP4 Design System](https://github.com/okp4/ui) is an open-source set of components and resources created to facilitate the design and development of web interfaces in the OKP4 ecosystem for everyone. This design system serves as a reference for teams working around the OKP4 ecosystem, enabling them to design and develop web interfaces with speed, consistency and quality.

![OKP4 Design System](/img/content/okp4-design-system-overview-1.png)

![OKP4 Design System](/img/content/okp4-design-system-overview-2.png)

The OKP4 Design System follows the [Atomic Design methodology](https://atomicdesign.bradfrost.com/), a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.

<div class="text--center">
  <p><img src="/img/content/atomic-design.png" alt="Atomic Design" width="600"/></p>
</div>

- **Atoms**: Atoms are the smallest possible components. The OKP4 Design System offers the basic building blocks for building interfaces such as: [typography](https://github.com/okp4/ui/issues/98), [themes](https://github.com/okp4/ui/issues/96), language, [buttons](https://github.com/okp4/ui/issues/119), [toaster](https://github.com/okp4/ui/issues/179), [cards](https://github.com/okp4/ui/issues/120), etc.
- **Molecules**:  Molecules are the composition of one or more components of atoms.
- **Organisms**: Organisms are the combination of molecules that work together or, if necessary, with atoms, to form more elaborate interfaces. The OKP4 Design System offers advanced organisms for the OKP4 ecosystem like a Token Faucet, a Web Wallet, a Dataverse Explorer...

### OKP4 Discord bot

The OKP4 Discord bot is a general-purpose open-source bot that facilitates the integration of any blockchain of the Cosmos ecosystem into a [Discord](https://discord.com/) server.

The main functionality offered by the bot is to allow the request of tokens for a [Cosmos](https://cosmos.network/) testnet account address for free using a discord command on a channel.

For instance:

```text
■ John — Today 16:14
$request okp41nc75uehak9a5f5slexfpxrxy5vh8e8phzmrq6e
 
■ okp4-discord-bot — Today 16:15
@John, ✅ $tx_info 5737BD7D25F0E4C6900412B06945722C664F1AD5A58BD8CFBDEB499B8B0A0602
```

Other features are also supported including:

- `$node_status`: Displays the current status of the node (configured)
- `$balance`: Show address balance
- `$tx_info`: Show transaction information for a specific transaction ID

```text
■ John — Today 16:14
$tx_info 5737BD7D25F0E4C6900412B06945722C664F1AD5A58BD8CFBDEB499B8B0A0602
 
■ okp4-discord-bot — Today 16:15
--------  ----------------------------------------------------------------
txhash	  5737BD7D25F0E4C6900412B06945722C664F1AD5A58BD8CFBDEB499B8B0A0602
status	  Success
height	  1072882
timestamp 2022-06-13 16:12
gas	      57530 / 200000
fee	      0 KNOW
memo	  Sent by økp4 faucet
--------  ----------------------------------------------------------------
@Type     /cosmos.bank.v1beta1.MsgSend
From      okp41rhd8744u4vqvcjuvyfm8fea4k9mefe3k57qz27
To        okp41nc75uehak9a5f5slexfpxrxy5vh8e8phzmrq6e
Amount    100 UKNOW
```
