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

Cosmos-native wallets such as Keplr will be able to perform most of these functions.
But functional doesn't mean optimal.
In terms of UX, many OKP4-specific actions and features will be necessary.

What if you could automatically import web2 platform data into your sovereign wallet while you interact with apps and pages in your browser? What if you could watch your data usage and token analytics in real time in your wallet? What if you could navigate across the graphs of your contributions? And many other data-specific features that generic-purpose wallets can't cover.

The OKP4 wallet will take the form of a web page and a dedicated browser extension. It will be extended to a smartphone application.

## Portal

The OKP4 portal allows to interact with dataverse. It aggregates the dataverse services such as wallets, catalog, files deposit, dapps, block explorer and more.

Although parts of the portal is open (especially for content and support), each user can log in to get access to all the services.

Through the OKP4 portal, a user is informed in real time of the activities related to the Data Space of which he is a member and the datasets or services he provides. Thus, users follow their contribution to the Knowledge creation and the associated retributions.  

The portal is customized according to the membership of the different Data Spaces and the roles of the user in them.

## Catalogs

The catalog lists the datasets and services declared in the protocol.

As a reminder, a dataset or a service can participate in several Data Spaces by being stored at the source.

A user can see the datasets and services of the Data Spaces in which he participates but also those of the open Data Spaces. The user can apply different filters such as type (dataset or service), date of declaration, tags, spatial or temporal coverage.

The catalog includes a search engine and a recommendation system.

The catalog is available in several visualizations:

- Cards
- List
- Knowledge Graph

The knowledge graph represents the link between the entities (datasets and services) to create knowledge. It allows to visualize the contribution of datasets and services in the generation of new knowledge.

According to the attached consents an element and its metadata will be visible or not.

## Files Deposit

OKP4 Files Deposit allows data providers to declare a dataset into the OKP4 Protocol.  

The data provider can fill in the contextual metadata of the dataset. This information will allow other users to understand how the dataset is constructed. The completion of the metadata will improve the ranking of a dataset in the search engine of the catalog.

A data provider is not necessarily the owner of the dataset if it has permission to declare it in the protocole.

Each file deposit is a transaction that must be signed by a wallet. The data provider pays a transaction fee.

## Metadata extraction

Neque eius labore ipsum velit dolorem. Etincidunt est etincidunt velit modi dolore magnam adipisci. Neque est velit adipisci dolore est ipsum dolor. Quiquia sed porro quaerat dolore tempora sit. Eius est adipisci velit magnam quiquia.

## Data Applications

Data applications are a suite of software that leverages outputs from a (or many) Data Space.

It can take many forms. For exemple it could be a BI software that enables data visualization, a push API, a script that performs actions automatically (e.g. a bot), etc.

The data application will be the medium through which tokens flow into the OKP4 ecosystem. Some data applications will enable end-users to interact with the blockchain through their wallets (thus paying on a per-transaction basis) while some others will have custom off-chain business model (such as a subscription model of exemple) and pay the ecosystem for the knowledge it creates.

Data Applications have dedicated identities and may have dedicated application treasury to pay for services on behalf of end-users, if enabled. This enables some web3-enabled applications to have seamless, web2-like UX.

## Other interfaces

### OKP4 Block explorer

### OKP4 Design System

The [OKP4 Design System](https://github.com/okp4/ui) is a set of components and resources created to facilitate the design and development of web interfaces in the OKP4 ecosystem for everyone. This design system serves as a reference for teams working around the OKP4 ecosystem, enabling them to design and develop web interfaces with speed, consistency and quality.

![OKP4 Design System](/img/content/okp4-design-system-overview-1.png)

![OKP4 Design System](/img/content/okp4-design-system-overview-2.png)

The OKP4 Design System follows the [Atomic Design methodology](https://atomicdesign.bradfrost.com/), a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.

<div class="text--center">
  <p><img src="/img/content/atomic-design.png" alt="Atomic Design" width="600"/></p>
</div>

- **Atoms**: Atoms are the smallest possible components. The OKP4 Design System offers the basic building blocks for building interfaces such as: [typography](https://github.com/okp4/ui/issues/98), [themes](https://github.com/okp4/ui/issues/96), language, [buttons](https://github.com/okp4/ui/issues/119), [toaster](https://github.com/okp4/ui/issues/179), [cards](https://github.com/okp4/ui/issues/120), etc.
- **Molecules**:  Molecules are the composition of one or more components of atoms.
- **Organisms**: Organisms are the combination of molecules that work together or, if necessary, with atoms, to form more elaborate interfaces. The OKP4 Design System offers advanced organisms for the OKP4 ecosystem like a Token Faucet, a Web Wallet, a Dataverse Explorer...
