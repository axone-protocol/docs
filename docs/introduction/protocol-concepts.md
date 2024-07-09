---
sidebar_position: 7
---

# Protocol concepts

<i>Reading time: {readingTime} min</i>

This section will provide an in-depth analysis of the core principles that form the protocol's foundation and how it presents an innovative solution to sharing digital resources by leveraging these principles. It's important to note that these concepts are often intertwined and mutually reliant to ensure the equilibrium of the protocol.
We will also begin to address some essential technical components, such as smart contracts. We will delve deeper into these aspects in the second part of the academy.

## Sovereignty

In digital resource sharing, sovereignty pertains to an entity's ability to exercise autonomous control over its digital resources and infrastructures. In the present digital landscape, despite the widespread proliferation of digital assets, they often remain confined within silos due to a lack of confidence and trust among stakeholders. Providers, in particular, are often hesitant to share their digital assets fully, apprehensive of losing control or exposing them to unauthorized access.

This lack of trust in digital resource sharing has hindered the growth and expansion of digital ecosystems, which are essential for realizing the full potential of digital assets. A trust deficit among stakeholders is a significant obstacle to digital resource sharing, and it needs to be addressed for digital ecosystems to thrive.

### Resource Sovereignty

The advancement in Axone enables providers to share resources while retaining their sovereignty significantly. The protocol assigns a Decentralized Identity (DID) to every resource listed, which is stored on-chain, providing a robust foundation for a Self-Sovereign Identity (SSI) model. This model relies on assigning a DID to each on-chain registered resource, ensuring blockchain technology's security and immutability. Additionally, the SSI model facilitates control over shared information, permissions, and authorization, enabling individuals to manage their digital resources securely within the network.

The Axone project integrates an on-chain Prolog module that surpasses the mere decentralization of resource identities, offering a sophisticated mechanism to handle access rules and permissions, thereby enhancing the security and efficiency of resource sharing within the network. Integrating the Prolog module with the Axone protocol allows for better access rules and permissions management, improving the network's overall security and efficiency in sharing resources.

### Utilization Sovereignty

Axone's decentralized architecture, focused on orchestrating resources through workflows, facilitates the generation of results based on these resources and their consent rules. Thus, a dataset can be used without disclosing specific details to the consumer. The emphasis is on access to results, ensuring that resource utilization strictly aligns with what is agreed upon by rules, validated by consensus, and compliant with the provider's wishes. This reinforces the sovereignty of participants, creating a digital environment where sharing is secure, controlled, and in line with individual requirements.
When participants are aware that their contributions and rights are protected, they are more inclined to engage in collaborative efforts. This environment fosters innovation by allowing the secure exchange of ideas and assets, paving the way for the development of new applications and services. Sovereignty in the context of Axone becomes a catalyst for transparent and empowering collaboration in the digital ecosystem.

## Decentralization

Decentralization within Axone is a fundamental necessity to ensure equitable and autonomous access to digital resources, enhance the reliability and resilience of the sharing system, and foster a dynamic and diverse ecosystem conducive to innovation and collaboration. Decentralization is evident both in the infrastructure and the application layer of the Axone protocol.

### Decentralized Infrastructure

The need for a decentralized infrastructure in Axone arises from addressing crucial challenges, ensuring a robust and fair ecosystem for sharing digital resources.

<u>Trustlessness:</u> By eliminating the need for trusted third parties, Axone's decentralized infrastructure ensures absolute trust among participants. This trust is established through the maximum transparency and impartiality of the system, crucial elements for secure sharing of digital resources. Participants can trust in the integrity of the protocol, reinforcing data and knowledge sharing security.

<u>Permissionless Access and Censorship Resistance:</u> The principle of permissionless access within the Axone network signifies the removal of prior authorization barriers, thereby democratizing access to digital resources. In conjunction with this, Axone's decentralized infrastructure inherently incorporates features of censorship resistance. The design philosophy ensures that the network remains impervious to censorship attempts, precluding any central authority from controlling or restricting information flow. This sophisticated resistance to censorship is pivotal, as it not only upholds the principles of openness, inclusivity, and diversity but also fortifies the ecosystem against unwarranted external interventions. Stakeholders, thus, engage in the exchange of digital resources within a dynamic, resilient, and censorship-resistant environment, fostering innovation and collaboration.

<u>Availability and Sustainability:</u> Axone's decentralized infrastructure provides an uninterrupted settlement layer crucial for ensuring constant access to digital resources. Additionally, the system's decentralized nature guarantees its sustainability, making it viable despite disruptions or technological advancements. As a result, digital resource sharing can be sustained in the long run.

### Decentralized Orchestration

As a decentralized orchestration layer for off-chain resources, Axone must ensure two functionalities in a decentralized manner:

- Interpret the rules to ensure the law enforcement
- Execute workflow and orchestrate the resources according to the rules

In [Rules](https://docs.okp4.network/academy/rules) section, we describe how the protocol allows you to **define and enforce any customized rules**.
In [Consume Resources](https://docs.okp4.network/academy/consume-resources) section, we describe how the protocol **orchestrates the resources according to the rules**.

Here, we'll concentrate on how Axone enables its functionalities <u>**in the decentralized way**</u>.

Let's take up and illustrate the previous example :
![consume-resources-2](/img/content/academy/consume-resources-2.webp)

Let's take the example of a Zone "Z1".
Thanks to its governance rules, this zone can use various services, in particular datasets D1 / D2 / D3, as well as services S1 / S2 / S3.

A consumer wishes to interact with this zone, using this sequence of activities to produce new knowledge.

**Interpretation of rules**

At the beginning of the example, we have three datasets (D1, D2, D3) that are processed with a service (S1). These transformations produce D4 & D5 as outputs.
We therefore understand that to carry out this sequence of activities, we need the consent rules for resources D1 / D2 / D3, service S1 and zone governance rules, all stored on-chain, must be met.
So, before the execution, the first step is to ensure that the users are authorized to perform the sequence of activities they wish.

![rules-1](/img/content/academy/rules-1.webp)

Although resources and services are stored off-chain, they are referenced within the protocol with on-chain stored consent rules, allowing them to make sense when linked to zones and their governance rules.
Connecting user requests with resource consent rules and zone governance rules to ensure law enforcement and solve intricate logical problems requires the use of a robust logical problem-solving capability language such as Prolog. However, this also necessitates its direct integration on-chain. Prolog is integrated into an on-chain module, serving as a trustworthy interpreter of rules. Each zone, with its established rules, can leverage Prolog to determine the permissibility of a user's actions. This decentralized interpretation ensures that governance and consent rules are consistently and reliably applied across the network.
In this way, Axone ensures a reliable and decentralized interpretation before the execution.

**Execution of workflows**

Execution involves coordinating resources and carrying out the workflow to generate knowledge. The Axone Protocol handles the workflow execution in a decentralized manner, posing a considerable challenge due to the intricate connections, interactions, and dependencies in both on-chain and off-chain environments. Given the blockchain's limited communication capabilities with the external environment, it is unable to manage orchestration on its own.

Hence, the most effective approach involves entrusting the execution of workflows to a dedicated off-chain resource: the Orchestration Service. This specific resource assumes the orchestration role, while the protocol retains its status as the source of truth and ultimate authority. This shift in approach allows workflows to be initiated in the protocol as a Service, integrating them into the anything-as-a-service paradigm.

Within the ecosystem, multiple instances of diverse Orchestration Services can operate, and the choice of which one to use can be assessed based on various criteria, as articulated within a Zone governance framework, for instance. This implies that different orchestration implementations may be authorized for the same zone.

In our example, when the user is authorized to interact with a Zone, an off-chain Orchestration Service interprets the instructions recorded on-chain and coordinates communication with different off-chain resources and services to execute the workflow.

![consume-resources-2](/img/content/academy/consume-resources-2.webp)

Nb : As a service, workflows can invoke other workflows as sub-services, forming a multi-level hierarchy to facilitate the composition and reuse of more complex processes. This workflow could invoke one or several orchestration services to perform the entire sequence.

**Reliability on the decentralized process**

The workflow engines serve as Orchestrator services to execute the on-chain instructions of the protocol. Thus, we have a method to decentralize the execution, but it is essential to establish the connection between the user's on-chain request and its off-chain execution by the orchestration service.
The challenge lies in ensuring that all protocol events unfold in a dependable environment so that all involved parties witness their conditions being upheld through a trust-minimized process, allowing them to monitor the workflow's progress.

To address this challenge, a Service Execution Agreement is established through a smart contract named PACTUM. This contract delineates the terms that bind the stakeholders—the consumers and providers. It doesn't execute the workflows per se; instead, it ensures their composability and integrity by explicitly defining the contractual terms.
When an identity seeks to initiate a workflow within a Zone, as exemplified, a service execution agreement in the form of a Pactum smart contract is initiated among the participating entities.

1. This agreement verifies the alignment of governance rules for the Zone and the digital resources involved in the execution, also confirming the conformity of all rules within the entire execution context. This context encompasses the resources, the Zone, and the user who initiated the workflow.
2. Pactum oversees the entire execution flow of all resources.
3. Finally, the Pactum smart contract applies retribution rules, ensuring the distribution of rewards or compensation in accordance with defined retribution rules. In practical terms, Pactum functions as a decentralized regulator, coordinating the orchestration of digital resources and managing instances of error.

## Interoperability

Interoperability, a critical aspect of the Axone protocol, enables seamless interactions among diverse systems, resources, and digital services. In this context, interoperability is paramount as the Axone protocol aims to orchestrate and share digital resources. The protocol adopts a technologically agnostic approach, enabling transparent interaction among resources, technologies, and ecosystems, bridging the gap between Web 2.0 and Web 3.0 environments. Interoperability is key to promoting smooth and effective collaboration, as it eliminates technical barriers that may hinder the sharing and utilization of digital resources. Axone facilitates efficient and effective collaboration by enabling interoperability, thereby enhancing the value and utility of digital resources.

### Technical Aspect

![protocol-concept-1](/img/content/academy/protocol-concept-1.webp)

Within the context of Axone, interoperability encompasses more than simply connecting digital resources. Axone relies on fundamental components such as APIs (Application Programming Interfaces) and connectors to facilitate seamless collaboration. These components are indispensable in synchronizing and exchanging digital resources within the protocol. Application Programming Interfaces (APIs) serve as standardized gateways, facilitating seamless communication between digital resources. In this context, Axone ensures that diverse systems and services can interact seamlessly within its ecosystem. This enables developers to design applications and services that effectively harness a range of resources, seamlessly connecting them through Axone's APIs. By providing this cohesive framework, Axone offers a robust and flexible protocol for developing innovative solutions that leverage the power of diverse digital resources in a streamlined and efficient manner.

As an orchestration layer for off-chain resources, Axone enables users to connect and leverage Anything-as-a-service to share anything in any condition. All these shared resources and rules shape the Dataverse, an ever-expanding universe of datasets, algorithms, and all other resources referenced and interconnected in the blockchain.

### Semantic Aspect and Governance Aspects

Axone introduces a groundbreaking approach by combining semantic and governance aspects, leveraging an ontology-based framework. This dual focus enables transparent communication and precise rule enforcement within the digital ecosystem.

**Ontology: Establishing a Common Language**

The ontology in Axone, stored in the Cognitarium smart contract, serves as a foundational element. It defines a shared language that transcends the technical details of individual digital resources such as zones, datasets, and services. This shared semantic model is crucial for fostering a comprehensive understanding among diverse resources.

When an entity, be it a zone, dataset, or service, is incorporated into the Dataverse, its attributes and relationships are meticulously described using on-chain metadata within the ontology. This ensures that each resource comprehends the context in which it operates. The ontology doesn't merely connect resources; it creates a unified vision, paving the way for transparent interactions and informed collaborations.

**Governance Rules: Codified and On-Chain**

Crucially, the ontology in Axone goes beyond a mere declaration of resources; it extends to include governance rules. These rules, codified in Prolog, are stored in a separate smart contract known as Law Stone. This unique architecture, while outside the direct representation of the ontology, remains on-chain, ensuring the governance rules are securely embedded in the decentralized framework.

Law Stone acts as a repository for governance rules, providing a clear reference for the conditions that each resource must adhere to. By associating the ontology with governance rules, Axone ensures that the entire system operates transparently and complies with established standards. This dual-layered approach enhances the clarity of resource management and contributes to a robust and standardized digital ecosystem.

**Interplay between Ontology and Governance: On-Chain Harmony**

In practical terms, the ontology and governance rules work in harmony on-chain. The ontology, residing in Cognitarium, references governance rules in Law Stone. This interplay creates a comprehensive on-chain representation, facilitating a rich, context-aware environment for seamless resource interactions.

By detailing this distinction, the enhanced content aligns with the semantic and governance aspects, offering a clearer understanding of the role each plays within Axone.

### IBC-enabled

[IBC](https://ibc.cosmos.network/main) is a universal interoperability protocol that enables communication between different blockchains.

IBC ensures **trustless, permissionless access to digital resources by eliminating trusted third parties**, fostering a decentralized and sustainable ecosystem. It leverages light clients and relayers to enable secure and efficient communication between blockchains, with applications determining how data packets are processed.

In practical terms, IBC is a **general-purpose message transmission protocol**, meaning any form of data can be communicated on IBC.

IBC operates through two layers: the transport layer and the application layer. In the transport layer, light clients validate block headers, relayers transmit messages between blockchains, and connections/channels facilitate interactions. The application layer interprets data packets and supports various applications, like token transfers and cross-chain queries.

An example of relevant applications that Axone could leverage is Interchain Accounts, significantly enhancing composability within the Interchain by improving the user experience. Thanks to Interchain Accounts, some relevant IBC-enabled blockchains like [Akash](https://akash.network/), [Jackal](https://www.jackalprotocol.com/), [Cheqd](https://cheqd.io/) or even the entire EVM ecosystem can share their strengths and leverage their functionalities.

## Governance

![rules-2](/img/content/academy/rules-2.webp)

In the Axone ecosystem, governance takes the form of an essential triptych, extending to the governance of the protocol, resources and zones. This governance trinity represents an integrated and decentralized mechanism that defines how participants interact, share, and coordinate digital resources within the network. Each level of governance contributes to establishing a balance between protocol stability, customization of consent rules, and coordination within different zones. Let's explore in detail how these forms of governance translate and why they are fundamental to Axone's mission.

### Protocol Governance

Protocol governance in Axone is built on the Cosmos stack's foundations, allowing participants to propose and vote on fundamental protocol changes. This decentralized approach ensures continuous scalability and adaptation to technological advancements. It results in transparent, consensus-based updates, strengthening participants' trust in the stability and future of the protocol.

### Resource Governance

At the resource level, governance is expressed through consent rules, strictly recorded and enforced on-chain. Resource providers define these rules, determining how their data or services can be used. This approach gives resource providers precise control over how their assets are shared, reinforcing trust and encouraging open adoption of digital resources.

Here are examples of rules that can be defined for a resource:

- Who can access the resource
- The economic model.
- Access modalities for users and service providers.

### Zone Governance

Zone governance, also recorded and executed on-chain, offers exceptional flexibility. Each zone is defined by specific governance rules, enabling complete customization of sharing conditions. This customization fosters collaboration between different resources and zones, making it possible to create specific rules for each community or business domain.

Furthermore, Zones are not just entities governing interactions between resources, but also economic zones. They can define not only exchanges of value, but also the monetary unit and its specificities. By anticipating this economic dimension of zones, contributors broaden the understanding of governance rules to include aspects linked to financial exchanges, value creation, the management of monetary units and the business model governing the zone.

It is important to understand that each Zone will define rules to respond most effectively to its objective. Some zones will organize under a more democratic vision (Coreum/DAO) to create a virtuous economy within the Zone. Others will have a more autocratic vision, wishing to retain more rights over the governance of the Zone.

Here are some examples of rules that can be defined within a zone:

- Types of resources accepted/rejected.
- How zone rules can be modified.
- Access modalities for users.
- Procedures for modifying zone rules

### Why Distinguish Between Resources and Zones?

The distinction between resources and zones is crucial, particularly regarding governance. By allowing zones to redefine their rules continually, Axone offers exceptional flexibility in how resources can be used and shared. This encourages more flexible governance, enabling participants to actively shape how resources are coordinated and used within each zone, while promoting adaptability to the community's evolving needs and the digital environment. Ultimately, this dynamic approach contributes to creating an ecosystem where governance is agile, transparent, and aligned with the values and goals of each specific zone.

Note, as seen earlier, the importance of describing a digital resource through its metadata. Considering its specific characteristics, this approach facilitates its integration within zones more efficiently and appropriately, considering its specific characteristics.

## Scalability

In the context of the Axone protocol, scalability assumes paramount importance as a foundational concept, delineating the system's ability to dynamically handle a substantial increase in data, digital resources, and their interactions without necessitating a corresponding escalation in the hardware requirements of validators. This ensures the decentralization of the network.

This capacity becomes particularly crucial in the era of Big Data, where the exponential volume of digital resources poses a major challenge for traditional systems, limited by their inefficiency in processing such vast amounts of data. Confronting this challenge, the Axone protocol positions itself as a relevant and innovative solution through its decentralized and modular architecture.

### Protocol Objective: Decentralized Orchestration Layer for Off-chain Resources

The primary objective of Axone is to act as a decentralized orchestration layer for off-chain resources. This approach involves a strategic decoupling between orchestration logic and digital resources stored off-chain. Consequently, the blockchain does not directly handle data storage or processing, but rather focuses on coordinating their utilization and access.

This distinction significantly contributes to reducing the storage and execution burden on the blockchain, offering increased flexibility and optimal scalability.

### Protocol Design: Zones and Dataverse

The protocol's design is grounded in the concepts of Zones and Dataverse. Zones function as decentralized autonomous spaces within the network. Each Zone in Axone is designed to operate independently with its own governance rules. This independence allows each Zone to adapt effectively to the specific needs of its users. For instance, a Zone dedicated to finance can integrate data and algorithms specific to that sector, while another Zone focused on AI training can concentrate on managing large-scale data and specific data processing algorithms.

The Dataverse represents the aggregate of these Zones and referenced resources in the protocol, forming a dynamic ecosystem where participants have access to various data and services. They can compose solutions tailored to their needs without being constrained by the rules of a single Zone. This distinction and interoperability of Zones and resources within the Dataverse offer myriad possibilities without limitation.

### Underlying Infrastructure

Underpinning this structure, the Cosmos technology with Tendermint Core and the Cosmos SDK provides a modular infrastructure. This foundation allows deep chain customization, providing the flexibility to adapt and update system components to enhance scalability.

Furthermore, integrating the Inter-Blockchain Communication (IBC) module paves the way for horizontal scalability by enabling native communication between different blockchains. This functionality is crucial for focusing on developing specific applications while benefiting from the advantages and specificities of other systems.

Axone, with its unique architecture, modular approach, and strategic use of blockchain technology, positions itself as a robust solution to address the scalability challenges imposed by the ever-evolving digital world. Its decentralized orchestration approach for off-chain resources, combined with the benefits of Zones and the Dataverse, along with the underlying infrastructure based on Cosmos and IBC, creates an ecosystem where the exponential growth of data and digital resources can be managed effectively, flexibly, and scalably.
