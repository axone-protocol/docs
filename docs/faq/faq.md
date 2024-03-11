---
sidebar_position: 1
---

# Frequently Asked Questions

## Overview

### Can you sum up Axone in a few sentences?

Axone is the first settlement layer for off-chain workflows using shared resources. In other words, it is an open-source and public protocol that enables the sharing and orchestration of digital off-chain resources (datasets, algorithms, storage, computation resources…) while enforcing their associated governance rules.

### How does Axone work in a few words?

Axone is a custom blockchain facilitating digital resource sharing with auditability and adherence to consent rules. It establishes trust through decentralization, offers a flexible incentive system, and reduces digital ecosystem fragmentation by enabling 'Anything as a Service'. The protocol introduces Zones for resource orchestration and utilizes an on-chain ontology for standardized interpretation of diverse elements. With smart contracts and modules, it is the orchestrator of workflows running on shared resources for any applications.

### What makes Axone a protocol?

Axone serves as a set of rules and conventions that facilitate interoperability and coordination among diverse digital resources, systems, and entities. It allows for the establishment of rules, consents, and conditions for resource sharing, yet it doesn't focus on any specific use case. These are agnostic, trustless primitives that form the foundation for numerous other application and layer that can be built on top. Axone stands as the base settlement layer for off-chain workflows involving shared resources

### What makes Axone so groundbreaking?

Axone does not aim to be the next 'Ethereum Killer.' Instead, Axone plays a pivotal role in facilitating the transition to a new digital revolution, one centered around harnessing the power of data. In today's landscape, we recognize that trust and technical complexities often pose significant limitations.

Axone is a meticulously designed protocol that fuels the expansion of this digital revolution by simplifying the sharing of data and digital resources. It places a profound emphasis on respecting consent and the proper utilization of everyone's assets, thereby fostering a more equitable and secure digital ecosystem

### What problem is Axone solving?

Today's datasets are stored in silos, their potential and value stay untapped. This situation exists because of a substantial lack of trust and incentives to share data.

Many companies' products and crypto projects tried to tackle these issues through a similar approach: data marketplaces. But this approach is highly limiting because 1. The exchanged data is accessible to the buyer, resulting in risks, and 2. Pricing mechanisms are disconnected from how data is used, resulting in poor incentives.

Today, there's no infrastructure, centralized or decentralized, to easily share any resource and agree on rules to enable these resources to interact with each other.

### What solution is Axone providing?

Axone is a Cosmos-based layer-1 for anyone to build applications based on shared data & services. Axone blockchain and no-code interfaces allows individuals and companies to build and join ecosystems where they can (1) share anything (datasets, algorithms, software, computation...) (2) define any rules (business models, workflow management...) and (3) build applications on top of everything shared in the ecosystem. Axone aims to become the IBC-connected hub to value any existing web2 system.

### What is trust-minimized data sharing?

It is the ability to let data contribute to valuable knowledge and applications without ever exposing the data itself to other participants. Through a trustless network and privacy-preserving techniques, other parties never access the raw data that has been shared. End-users will access only the output (the indicator, the graph, the application...), not the data itself. Enabling value creation, value sharing, without the risks associated to exposing data.

### What is the market for Axone? What is Axone's ambition in this market?

Data intermediaries will be key players in the trillion-dollar data economy of tomorrow. Decentralized data intermediaries will dominate centralized alternatives because of reduced trust assumptions, and better composability and incentives.
PwC estimates that global GDP will increase by up to 14% (the equivalent of US$15.7 trillion) by 2030 due to the accelerating development and take-up of data-powered AI. More specifically, we develop an alternative (and complementary) model to data marketplaces, which is a 1 billion market in 2022. "We" (more specifically, our community-owned digital commons) aim to claim at least 5% of this market in the next five years and expand many new opportunities enabled by trust-minimized data sharing.

Axone's goal is to be the leading decentralized data intermediary by enabling a new wave of innovation & use cases through unique coordination features.

## General Questions

### What is a Zone?

A Zone is a conceptual framework defined by a set of rules, within which the recognized digital resources are compatible with these rules, considering the associated consents. Thus, the recognition of resources within a Zone relies on the dynamic evaluation of the conformity of the rules and consents of the resources.

The primary objective of Zones is to facilitate the coordination of heterogeneous systems and resources. Zones aim to integrate all systems, both on-chain and off-chain.

More information [here](https://docs.okp4.network/whitepaper/solution#protocol-overview)

### What types of resources can be shared?

As an agnostic infrastructure, Axone has no limitations on the types of resources it can be referenced, it opens doors to a wide range of possibilities.

For clarity, we categorize resources and services into different types:

- Bounded Resources: These encompass both structured and unstructured data.
- Unbounded Resources: This category is dedicated to data streams, allowing real-time data processing.
- Processing Services: Axone can manage various digital processing services, including algorithms and AI models.
- Infrastructure Services: Additionally, Axone can handle any infrastructure services such as storage and computation or ID.

For more in-depth information, you can refer to our dedicated documentation [here](https://docs.okp4.network/whitepaper/solution#the-dataverse).

### Why do you distinguish Zones and digital resources?

The distinction between Zones and resources is crucial to enable the flexibility and adaptability of the Axone ecosystem.
Zones are conceptual frameworks defined by a set of rules. They determine the parameters and boundaries that define the territory of a given Zone. Zone rules can be either open, allowing broad interaction, or restrictive, limiting access and resource usage. By evaluating the compatibility of resources with Zone rules, the scope and coverage of that Zone are defined. Multiple Zones can share common resources and nest within each other based on the rules associated with each resource and Zone.

The absence of a direct link between Zones and resources allows for significant flexibility as Zones can evolve by adjusting their rules and conditions. This continuous evolution redefines the boundaries and characteristics of Zones, promoting adaptation to the changing needs of the Axone ecosystem.

In summary, the distinction between Zones and resources enables the Axone ecosystem to be dynamic, scalable, and capable of accommodating a variety of rules and conditions for each Zone, thereby fostering value creation and free interaction among participants and digital resources.

### What is the Dataverse?

The Dataverse is an ever-expanding universe comprised of all the digital resources, such as datasets, and digital services such as infrastructure services, processing services or any other digital service referenced in the Axone Blockchain.
All resources, services and Zones are found within the same universe, the Dataverse. The on-chain Ontology is the semantic representation of the Dataverse.

### How does Axone store the resources and services?

As a protocol, Axone doesn't store them. It only references the resource/services where it is (wherever it is) and make it available to the network according to the permissions granted by the provider. It can be stored anywhere, with any kind of storage solution, either centralized or decentralized.

### How does the referencing process work in Axone?

Provider's Consent Rules: The provider defines the consent rules associated with the resource they wish to share. These rules could specify who can access and use the resource and under what conditions.

Enforcement On-Chain: These consent rules are enforced on the blockchain, ensuring that they are transparent and tamper-resistant.

Metadata On-Chain: Importantly, the actual resource data itself is not stored on the blockchain. Instead, only the metadata or description of the resource and how access it is recorded on-chain. This metadata is integrated into the ontology, providing a structured representation of the resource and service.

Resource Utilization: When a digital resource is referenced within the Axone protocol, consumers can leverage this resource if their request aligns with the consent rules enforced on-chain. This mechanism ensures that resource usage complies with the agreed-upon conditions set by the provider.

### Euh Wait… What is an ontology?

Don't worry, an ontology, in the context of Axone, refers to a structured representation of knowledge that defines the relationships between various terms or concepts. It's like a map that helps us understand how different referenced resources (datasets, algorithms, services…) are related to each other.

In Axone, this ontology is used to describe the metadata or characteristics of resources and services. Think of it as the "data about the data." This structured information makes it easier for users and systems to understand and interact with resources and services within the Axone network. It ensures that everyone speaks the same language when it comes to sharing and accessing digital resources.

Dedicated documentation [here](https://docs.okp4.network/whitepaper/solution#ontology)

And deep-dive article [here](https://blog.okp4.network/okp4-knowledge-sharing-through-ontology-driven-dataverse-a-new-approach-to-knowledge-description-f9b81d4484c8)

### Who can share and consume these resources?

Anyone can share resources and define associated consent rules. As an open and public protocol, everyone has access to the resources referenced in the protocol and can use them, according to the access rights and conditions defined in the rules of the concerned Zone and resources.

### Is Axone private by design?

No, Axone is agnostic by design. It provides the flexibility for privacy-focused applications to be built on top of it. This means that privacy-enhancing features and services can be implemented within Axone, allowing developers to tailor privacy settings to their specific needs and use cases. It's a versatile foundation that can support a wide range of applications, whether they prioritize privacy or other aspects of data sharing and orchestration.

### Axone + AI?

Axone does indeed have a unique relationship with the field of Artificial Intelligence. Axone's purpose is to provide an on-chain governance layer for off-chain digital resources. AI models are undoubtedly promising digital services and providing a "law framework" or a "framework for intervention" for AI models appears to be an inevitable step in their progress.

Furthermore, to enhance their capabilities, AI models require data and computational power. Axone aims to become the go-to destination for collaboration in the AI field.

Imagine an AI trained, owned and governed by a DAO with governance rules, like data requirements and contribution quantification mechanisms, inscribed on-chain.

### What is the web2 alternative today?

The alternative to such a protocol is a set of trusted technical, legal, and financial intermediaries. That's what we've seen being built in various use cases over the last few years, and it's also very complex and creates a lot of friction.

### Who are Axone web3 competitors?

Axone doesn't have direct competitors for several reasons, but let's focus on the most significant one to keep in mind: no one else is currently focused on building a decentralized governance layer for off-chain resources. Axone enables the orchestration of digital resources through their associated governance rules and consents.

In a general sense, governance corresponds to a set of rules. When we talk about the governance of digital resources to interoperate different resources within workflows, the primary concern is not the technical aspect, such as which technical stack to use. The primary concern is speaking the same language so that resources can "understand" each other.

As a governance layer for off-chain resources, Axone introduces a strong logical and semantic aspect within its architecture to abstract all the difficulties related to interoperability among diverse resources. Today, we are not aware of any project that is as focused on governance and semantics, making the orchestration of digital resources in a trustless environment as accessible as Axone.

If you want to delve into the Governance aspect, this series of 3 articles is a must-read
[Part 1](https://blog.okp4.network/beyond-traditional-governance-embracing-on-chain-with-okp4-1-3-bb925ea4e1b2) – [Part 2](https://blog.okp4.network/beyond-traditional-governance-embracing-on-chain-with-okp4-2-3-17237d68033c) – [Part 3](https://blog.okp4.network/beyond-traditional-governance-embracing-on-chain-with-okp4-3-3-424f7a8eb2fc)

### I'm still struggling to understand what makes Axone different. How is it different from Ocean Protocol, for example?

Ocean Protocol enables decentralized data exchange and monetization solutions through a marketplace. It's a great solution if you want to sell datasets.

Axone enables custom governance for complex workflows and applications powered by shared data & services. It's a great solution if you want your data, algorithms or resources to contribute to any application on your own terms, with on-chain rules.

While Ocean Protocol focuses on tokenizing datasets, we're focused on building the right infrastructure and tools to enforce customized rules/permissions on any data or service. It goes way beyond what Ocean does as it has new primitives to build anything on top. Axone will leverage data from Ocean Protocol but will not be limited to that at all.

### Is Axone limited to web2 B2B applications?

Not at all! The protocol we've developed introduces innovative primitives suitable for a wide range of applications. Initially, we targeted B2B ones. While these have notable usage volume, they're not seamless and pose bootstrapping challenges.

Consequently, we've prioritized no-code interfaces for data & service providers, Zone creators, governance participants, and workflow consumers. Our aim is to allow individuals to easily define rules and either contribute to or consume resources. These user-friendly interfaces empower developers to seamlessly experiment with off-chain coordination. While many community-driven innovations arise from our members (such as Marketplaces, Collaborative Research DAOs, Personal Data Vaults, etc.), our primary focus for adoption is collaborative AI training. The Axone Portal will feature what we term "AI Factory" templates.

These templates detail rules for data, algorithms, and infrastructure contributions. They can be customized to meet specific needs related to quality, privacy, transparency, or reliability. Furthermore, they introduce governance frameworks and custom tokens to manage or incentivize AI DAO participants.

The ultimate outcome is a collectively trained, owned, and governed AI, fueled by a network of incentivized contributors. At its core, Axone is more than a tool for businesses. It's a protocol for collective innovation and coordination, inviting individuals from all backgrounds to contribute and add value.

## Architecture

### Why does Axone need a blockchain infrastructure to do that?

As a decentralized orchestrator of digital resources, Axone needs a blockchain infrastructure for essential reasons:

- Verifying and validating the Protocol events thanks to decentralized consensus mechanism
- Ensuring an immutable and auditable registration of settlements for the Protocol Layer
- Enabling highly customized settlements to coordinate participants and resources through rules enforcement and value exchange

As the basis of the architecture, the blockchain act as a source of truth in the protocol.

### Why did you create Axone as a new blockchain instead of using an existing one?

We established Axone as a new blockchain for several strategic reasons:

Independence from Existing Chains: We aimed to operate without being reliant on the decisions or the pace of development of Ethereum or any other Layer 1 (L1) or Layer 2 (L2) solutions. This autonomy ensures that our direction isn't dictated by external factors.

Customization and Speed: By creating our own blockchain, we can move at a pace that aligns with our vision and can tailor the chain specifically for our use case. Our primary goal is to create an optimal environment for off-chain resource governance.

Complete Environment Control: We wanted the freedom to fully customize our environment. We didn't want to be confined by the limitations of smart contract virtual machines. This also allows us to set specific requirements for our validators, both in terms of software and hardware.

Sovereign Governance: We prioritize having sovereignty over our blockchain's governance. We envision a true DAO consisting of validators and token holders. This structure fosters an environment ripe for experimentation and innovation.

Balancing the Trilemma: Every blockchain faces the scalability-decentralization-security trilemma. With our own chain, we can choose our position on this spectrum, balancing these factors according to our priorities.

Decentralization Over L2s: Unlike Layer 2 solutions, where components might be controlled by a single sequencer or another centralized entity, the protocol is autonomous and runs on a decentralized network of nodes. This reduces points of failure and enhances security.

Innovative Features: With our own blockchain, we can implement features that are unattainable on existing networks. This includes innovations like mempool encryption, native oracles, and validator-secured bridges, further differentiating us from other solutions.

### Why choose Cosmos as an underlying technology?

Choosing Cosmos as the underlying technology aligns with our core values of interoperability and sovereignty. Cosmos provides the stack for Axone to serve as both an orchestration layer for off-chain resources and a governance layer for off-chain resources.

This means it offers interoperability and sovereignty, allowing for specific design and modularity.

In summary, Axone shares and works on the same vision than Cosmos.

- Interoperability
- Sovereignty
- Specific Design and Modularity

### Why would someone want to build an application on Axone when there are many other blockchains available?

We don't claim that Axone can be a one-size-fits-all solution for every use case. Our primary objective is to create an infrastructure that facilitates the sharing of digital resources. Axone's architecture is optimized for this purpose and doesn't compete for block space with other types of applications.

In essence, Axone is designed for its specialization in resource sharing and its ability to provide a dedicated governance layer for such applications without the need to contend with other blockchain use cases as DeFi Apps or NFT Apps.

### There's many ongoing disputes and risks surrounding Cosmos, is it a risk for OKP4?

As we mentioned previously, the number one reason to build a Cosmos chain is sovereignty, more precisely, interoperable sovereignty.

For us, Cosmos is a design pattern we leveraged with a set of components that suit our needs: CometBFT, CosmosSDK, IBC, CosmWasm. We then built our custom modules and smart contracts to make the Axone blockchain specifically designed for our protocol.
There's certainly drama around the Cosmos Hub and the ecosystem as a whole because it's democratic and governance-intensive, and that's the issue with sovereignty.

We see ourselves very independently from that drama. Many projects in the interchain have managed to be seen as industry-specific layer-1s and not attached to the Cosmos brand; we strive for the same. We're part of the Interchain that wouldn't be possible without Cosmos, but we're independent from Cosmos.

We definitely think this trend will accelerate as interoperability becomes seamless and the ecosystems blur on the liquidity side (see IBC everywhere) and UX side (see Metamask snaps).

## Smart contracts and modules

### What is the Objectarium smart contract in a few words?

The Objectarium smart contract enables the storage of arbitrary unstructured Objects in any Cosmos blockchain. It provides a flexible solution for storing data without imposing strict schemas or predefined structures, accommodating various data formats and types.

### What is the Cognitarium smart contract in a few words?

The Cognitarium smart contract facilitates the storage and querying of semantic data using RDF (Resource Description Framework), which represents information as semantic triples. In essence, it serves as a repository for knowledge, providing a dedicated space for storing and retrieving semantic information within any Cosmos blockchains.

### What is the Law-Stone smart contract in a few words?

The Law-Stone is a highly versatile smart contract designed to apply and enforce legislative rules, including Zone rules, Consents, and Agreements. It offers extraordinary adaptability and can be utilized in any blockchain within the Cosmos ecosystem that seeks to establish robust and flexible on-chain governance systems. With its exceptional proficiency in evaluating logical rules, Law-Stone can be applied across various use cases.

The smart contract has two sides:

The side of the "Law": Indeed, the smart contract interprets the law, i.e. makes a judgement on what is legal, permissible or prohibited according to the result of execution of the rules of governance informed by the knowledge available at the time of this interpretation.

The side of the "Stone": The instantiation of the smart contract engraves in stone the rules to be interpreted, and these are immutable, irrevocable, and indisputable unless the stone is broken.

### What is the Pactum smart contract in a few words?

The Pactum smart contract is designed to streamline and automate the execution of agreements involving multiple parties. In contrast to the Law-Stone, which primarily focuses on expressing or stating the law, the Pactum's core function is to actively execute the law by the predefined terms outlined in the agreement. By leveraging the power of Prolog provided by the Law-Stone smart contract, the Pactum facilitates the seamless implementation of agreed-upon terms and ensures the proper enforcement of contractual obligations.

This smart contract is essential in the governance framework implemented in the Axone protocol, particularly in regulating the orchestration of digital resources, which involves many parties.

### What is the Logic Module in a few words?

The Logic module is designed to primarily address logical queries based on facts sourced from the ontology or the state of the chain, along with inference rules. Its main use in the protocol is the management of governance rules, written in Prolog. Thus, any smart contract deployed on the Axone blockchain can use the logic module to evaluate queries written in Prolog. Prolog is a powerful declarative programming language to manage from simple restrictions to complex rules. This language is not natively operable on-chain; the logic module adds Prolog interpretation capability. The Logic module is not strongly coupled to the Axone blockchain. It's designed to be reusable and can be integrated with any Cosmos appchain. Because it's open and interoperable, the support of Prolog programs is a significant gain for the Cosmos ecosystem. Using this open-source Logic module implementation, any appchain can quickly adopt complex Prolog governance rules.

## Token

### What is the utility of the $AXON token?

The $AXON is the fee token of the Axone blockchain, it is required to submit transactions to the network of validators.

Similar to other Proof-of-stake chains, the $AXON secures the network through staking.

The $AXON is also a governance token. Anyone can do on-chain proposals, and $AXON holders can vote yes, no, abstain or no with veto to these proposals.

The $AXON token can also be a governance token for any Zone if implemented that way.

Beyond that, and more related to use cases, the $AXON is used by default for value sharing when a workflow is initiated according to the business model of the Zone and of the resources invoked in the workflow. A 2% tax is applied on workflows to reduce the token supply in order compensate for inflation and another 1% tax is collected for the community to redistribute it and fund any initiative like contributing to public goods.

The $AXON token may also be used for security purposes, requiring data or service providers to lock some tokens in order to prove their good faith. The tokens may be used for curation on Datasets and Services, allowing users to lock tokens on specific resources to get a part of their revenue, when relevant.

More details about Token Model [here](https://docs.okp4.network/whitepaper/token-model)

### Can price volatility of the $AXON token be a problem?

The $AXON price volatility can become a problem when it's used for payment. Imagine a dataset or service providers denominates its price in KNOW. If the $AXON values goes +50%, then it goes the same of providers who may see their resources less used because 50% more expensive. An external service can be used to define another unit of account (like the dollar) and have the $AXON value updated every time their resource is consumed.

### Decentralization seems to add complexity. Does that get offset but the open composability?

It's important to state that we're building a protocol: trustless and general primitives that form a foundation for many more layers that can be built on top. Axone is the first settlement layer for off-chain workflows using shared resources.
Decentralization introduces complexity but provides many benefits.

Composability is really important; all solutions that exist today are not tech-agnostic and rely on specific cloud infrastructure solutions. Axone, as a protocol, is designed to become the binder between all the existing solutions that are worth sharing and making interoperable.

The financial and reputation primitives of the protocol enable new possibilities in mechanism design. Zone rules, for example, can be defined to set a mandatory self-staked token threshold on data and service providers to ensure they are financially incentivized to honor their off-chain commitments.

The ontology primitives provide an open and permissionless source of facts and knowledge where anyone can contribute, and anyone can benefit from, as long as they respect the programmed Prolog on-chain rules.

The token is also an important element; its design creates real cash flow for token holders, creating a flywheel of incentives for the ecosystem, attracting open-source contributors, data and service providers, and consumers, and essentially bringing the interest of many developers who like a new playground.

Axone is a sandbox for human coordination experiments in the off-chain world. You can't build that and create proper incentives without decentralization. The complexity that is introduced is worth it, and our mission is, and will be, as a team and community, to abstract the underlying complexity with beautiful no-code interfaces & applications.

## Utilization

### Can you describe how the data transfer works?

First, let me remind that the data is off-chain, only the data's metadata (its description) is on-chain and integrated in the ontology.

When a consumer interacts with the Axone blockchain, they might request access to multiple datasets and algorithms. The protocol checks if the conditions set by the data or algorithm providers are satisfied. If they are, the transaction is validated on-chain (the [Pactum smart contract](https://docs.okp4.network/whitepaper/architecture#pactum-managing-agreements) ensures conditions are met, including retributions for providers), with the workflow being described like any service in the ontology (leveraging the [Cognitarium smart contract](https://docs.okp4.network/whitepaper/architecture#cognitarium-semantic-data-storage)).
Subsequent to this validation, an [off-chain orchestration service](https://docs.okp4.network/whitepaper/architecture#orchestration), exemplified by workflow engines like [Argo](https://argoproj.github.io/argo-workflows/), takes over. This service acts as a gatekeeper for resources, relying exclusively on blockchain validation events to process the consumer's request. It's important to note that this orchestration service doesn't inherently trust any party; it solely trusts the blockchain's validation.

The orchestration service's role is to create new insights or knowledge by utilizing resources from different providers. Once the processing is complete, the service reports back to the blockchain, ensuring that the execution status is logged reliably and that any due payments are processed.

Data transfer is a crucial part of this workflow. Depending on the rules and services invoked, data is transferred between the relevant providers and consumers. The orchestration service facilitates this by fetching data through APIs and requesting services that perform computations on one or more datasets as required.

To sum it up, from the moment a consumer places a request to the final reporting by the orchestration service, the entire process is seamlessly automated.

### Are the datasets necessarily transferred to the consumer?

Not necessarily, there are several ways to process data without transferring it to the end consumer, or even to third-party service providers: Trusted Execution Environments (TEE), Multi-Party Computation (MPC), Edge computing, and more. Implementations of these technologies are digital services that can be used within workflows. Once again, it's up to the provider to choose the consent rules related to the resources they want to share and especially how they can be processed.

### Axone is the set of instructions that could be used for data pipelines. How can I build a Data Platform with Axone?

The answer depends on the Design Pattern you opt for: batching, micro batching, streaming, hybrid, or any other. Depending on the most suitable choice for the datasets you intend to collect and process, you'll need to pick specific tools. For instance, within the Apache series, options such as AIRFLOW, SPARK, STORM, KAFKA, FLINK, or even other open-source or proprietary solutions could come into play.

Both the team and community will reference implementations of these tools alongside the necessary connectors for communication. This will facilitate the seamless construction of your own process by interconnecting services that best align with your use case.

### Can you illustrate it?

For example, when you want to extract data from nodes for analytical purposes, a batching collection approach every 6-12 hours might be ideal, followed by data processing and storage in a Data Warehouse solution. Conversely, when extracting data from nodes for monitoring purposes, a streaming or micro batching process might be more suitable, with the data being stored in a Data Lake solution.

Axone functions as a decentralized coordinator where:

- The consent rules for each dataset and service are enforced on-chain.
- The workflow can be initiated in accordance with the consent rules of each resource.
- The workflow is recorded on-chain and is subject to thorough auditing.

### How does Axone ensure the execution and validation of sharing rules?

The protocol itself is primarily an infrastructure that allows a resource "provider" to reference and define usage rules (in Prolog, which offers better expressiveness compared to other languages), and for a "consumer" to make usage requests based on these rules. What the protocol guarantees is the transparency of the rules and the correct assessment (validation or not) of these rules. However, there is indeed the question of verifying the actual "real" sharing action. The current approach is an open-source off chain "orchestrator" developed by the Axone Association team that provides access to resources (based on requests validated onchain) and then reports the successful execution back on chain. So, yes, there's an element of centralization! We aim to have multiple orchestrators, deployed by external entities, and even decentralize that process at some point. Both "providers" and "consumers" will be able to choose the one they "trust" or deploy their own.

More info [here](https://docs.okp4.network/whitepaper/architecture#trusted-parties-considerations)

### How Axone ensures law enforcement BEFORE EXECUTION?

1. An Identity (human or bot) wants to interact with a Zone
2. The Zone asks to the dedicated smart contract if its possible given the context and all the involved rules
3. The protocol employs logical inference to resolve matters based on the state of the blockchain
4. The protocol yields a modality as a response, such as "prohibited", "permitted", "possible", and so on. Depending on the answer, the execution process could start.
