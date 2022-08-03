---
sidebar_position: 2
---

# Introduction

## Motivation

Digital innovation has tremendously impacted the way we do business, the way we exchange and consume information. Data has become a resource upon which many businesses have been built. It altered our society and everyday life in every possible way.

### From Data to Knowledge

Data is an objective and elementary description of reality. It has no value by itself. It needs to be processed and interpreted to create valuable information and knowledge. Knowledge is usually subjective and context-dependant.

![From data to knowledge](/img/content/whitepaper/Data_to_Knowledge.png)

### Why we need data sharing

We don’t *know* how to go to Mars, we don’t *know* how to predict cancer, we don’t *know* how to farm in a desert, and we don’t *know* what present would please our mother for her birthday.

Knowledge is the limiting factor to common good, for individuals, companies and society at large.

In our digitalized world, one of the most efficient way to unlock knowledge is through data sharing.

But data is rarely shared. It stays in silos, isolated and protected. As such, data is under-used and under-valued. Indeed, data is a [non-rival good](https://en.wikipedia.org/wiki/Rivalry_(economics)), which means that I can share it many times without changing my ability to use it. The generation of knowledge from data is then theoretically infinite. That's why an incommensurable amount of value could be unlocked through data sharing.

### Why is data sharing not the norm then?

Today's problem is that individuals and companies are incentivized to build gated data lakes, to keep their users captive and to restrict access to data and information, mosty because of:

- Risk (lack of trust between participants, the fear of loss of competitive advantage)
- Complexity (interoperability & governance issues)
- Costs (lack of infrastructures, R&D)
- Lack of incentives (bad business models, bad incentives, unclear benefits)

![Frictionless](/img/content/whitepaper/frictionless.png)

**But what if we could enable trust-minimized data sharing and unlock this untapped potential?**

## Existing approaches

Since data is everywhere and knowledge is valuable, the issues related to data sharing and knowledge creation are far from being new topics for individuals and organizations.

Many approaches already exist to share data between entities:

![Degree of federation in data-sharing models](/img/content/whitepaper/degree_of_federation.png)

As you can see, the decentralized approach seem to be the most promizing. In fact, it will enable data sharing without trusted third parties, without moving data from its existing place and even enable decentralized governance on data sharing rules.

### Technology is getting more mature by the day

Gated data lakes are the norm today because we lacked the economic incentives to fund, the technology to build, and the organizational structures to manage an open Dataverse.

It is changing now.

Through technology and governance innovation, public blockchain technology will be the key infrastructure opening the gates of trust-minimized data sharing. Thus providing opportunities to unlock new sources of valuable knowledge that will solve humanity's problems, from small to existencial ones, thanks to the next generation of Data Applications.

### But the perfect technology doesn't exist, yet

Ethereum initiated a wave of decentralized applications thanks to smart contracts.
Following Ethereum steps, many other [layer-1](https://academy.binance.com/en/articles/what-is-layer-1-in-blockchain) blockchains emerged. Some offering "more scalable versions" through bigger blocksize or higher block frequency, some offering other smart contract programming languages such as [Rust](https://docs.solana.com/developing/on-chain-programs/developing-rust) or [Javascript](https://agoric.com/documentation/guides/js-programming/), some offering privacy-preserving technologies such as [zk-SNARKs](https://z.cash/technology/zksnarks/).

Then, which infrastructure should we choose to build applications based on trust-minimized data sharing?

By asking ourselves this question, we quickly realized that:

- There is no such applications designed on public blockchains, so no existing network effect to benefit from.
- General-purpose chains are not specifically designed for such complex apps: multiple layers of smart contracts generate increased risks and complexity.
- Developers are restrained by smart contracts programming languages & virtual machines of these blockchains.
- These infrastructures are not designed to enable data network effects.

To sum up, trust-minimized data sharing may need its own layer-1.

## Introducing – OKP4

The previously mentioned reasons led us to create OKP4 (Open Knowledge Protocol For...).

![OKP4_banner](/img/content/banner_okp4.png)

### What is OKP4?

OKP4 is a public PoS layer 1 specifically designed to build the Dataverse, which will be the foundation of the next generation of Data Applications powered by trust-minimized data sharing.

Anyone can create custom ecosystems called [Data Spaces](https://gaia-x.eu/what-is-gaia-x/core-elements/data-spaces/). In each Data Space, people & companies can share data, algorithms, software, storage and computation according to Data Space's rules.

OKP4 is designed to become the commons for builders, data providers, communities, data scientists & users to unlock tangible value creation thanks to data sharing, enabling many new usecases for web3, way beyond Decentralized Finance.

Our ambition is to design the open infrastructure that builders will go to in order to quickly set-up governance rules (access rules, business models...) and governance mechanisms that will power distributed data-based applications.

The goal is simple: let anyone contribute with sovereign data, generate value from many applications and be retributed for contribution.
Low risks, low costs, high incentives.

### What is the Dataverse?

The Dataverse is inspired from the term Metaverse, a growing buzzword that embodies the next generation of internet experiences combining virtual reality and digital ownership. The challenge with the Metaverse is to build it on an open infrastructure, so that users are not captive of the companies and siloed environments produced by companies.

The Dataverse is an open world where users become owners. They own their data, the algorithms & resources they provide. They can even own the infrastructure and can be involved in it governance.

The Dataverse is a collection of interoperable ecosystems of shared rules (Data Spaces) in which assets are shared to build applications. 
It is relationship between Dataverse participants, not a common technical infrastructure. The Dataverse is not a datalake or a cloud where data is stored centrally. Everything can stay at the source, that's why Dataverse participants are always sovereign about what they share.

The Data Spaces that compose the Dataverse can be nested and overlapping, as one dataset can participate in many Data Spaces, and many applications can be built on top of one Data Space.

### The features of the OKP4 Protocol

![combine_web2_web3](/img/content/whitepaper/combine_web2_web3.png)

We have designed the OKP4 Protocol to be open, decentralized and auditable. Our solution is based on 4 products:

#### **OKP4 Blockchain**: The layer 1 for data sharing

A public blockchain protocol designed specifically to handle the complexity of trust-minimized data sharing and value sharing.
The blockchain is the single source of truth, it orchestrates everything that is shared to the Dataverse.

- Decentralization and trust guaranteed by the Tendermint Consensus & the native token $KNOW
- An open-source network controlled by its stakeholders
- A vibrant Smart Contract Hub powered by [CosmWasm](https://cosmwasm.com/)
- [IBC](https://ibcprotocol.org/) enabling seamless communication with other blockchains

#### **OKP4 Dataverse**: Empower the Dataverse

We designed OKP4 to enable maximum customization. Anyone can share any kind of data, algorithms, software, storage and computation into the Dataverse, you can even implement any standard or DID provider. Anyone can plug its own infrastructure, define/agree on rules to make it available, and let it be utilized through the blockchain. OKP4 Dataverse enables XaaS (anything as a service) by design.

#### **OKP4 Development Kit**

It allows anyone to create and design Data Spaces and Data Applications with as much freedom as possible. For developers, data scientists and communities at large:

- Customize Data Space governance with no-code tools & templates
- Build data apps from software to interfaces
- Use or provide components & resources in the OKP4 Ecosystem

#### **OKP4 tools**

User-friendly tools & interfaces to share, contribute, benefit and earn (wallet/browser extension, blockchain explorer, dataverse portal, catalog of data apps, Data Space governance interfaces, etc.). These tools will allow anyone to interact with the Dataverse.
