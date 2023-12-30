---
sidebar_class_name: hidden
---

# Protocol concepts

## Resources: what can be shared

<i>Reading time: {readingTime} min</i>

Diving into the realm of off-chain resource sharing with OKP4, it's crucial to understand the diverse landscape of digital resources that can be seamlessly shared. Digital resources, the building blocks for extracting insights and generating new knowledge, come in various forms and formats.
There are two types of resources:

- <u>Digital Resource</u>
- <u>Digital Service</u>

### Digital Resource

Digital Resources serve as the raw material from which insights and new knowledge are extracted. They encompass data and information presented in various forms (spreadsheets, text, videos, etc.) and expressed, carried, and stored in any format (.xlm, .json, .txt, .mp4, etc.).
These Digital Resources can be categorized into two subtypes:

- <u>Bounded digital resources</u>
- <u>Unbonded digital resources</u>

**Bounded digital resources** have a finite size and defined boundaries in terms of time. They are often accessed and analyzed as complete entities, commonly referred to as datasets. These datasets are further classify into structured data, such as databases or spreadsheets, and unstructured data, including text documents, images, videos, and more.

In contrast to their bounded counterparts, **unbounded digital resources** have no boundaries defined in terms of time. This data may have originated in the past, persisted into the present, and is expected to continue arriving in the future. This absence of predefined boundaries implies that unbounded resources do not have a set size and are characterized by their continuous and potentially infinite nature. Examples of unbounded resources include streaming data and real-time data: sensor data from IoT devices, social media feeds, or stock market tickers.

![protocol_concepts_01](/img/content/academy/protocol_concepts_01.webp)

### Digital Service

To extract new knowledge, raw materials require processing and this is where Digital Services come into play.
From this standpoint, Digital Services function as both the structural and functional units in the knowledge creation process. They provide the essential service to transform digital resources, facilitating the generation of new knowledge.
Digital Services encompass differents kind of service:

#### Infrastructure Services

Foundational support is provided for efficient resource sharing, establishing the necessary groundwork for transformative capabilities.

Some examples of Infrastructure Services:

- Infrastructure Storage services
- Infrastructure Compute services
- Identity Provider services
- Orchestration Service

#### Digital Resource Processing Services

Managing intricate processes involved in transforming digital resources, these services play a crucial role in enabling the generation of fresh knowledge.
Any kind of algorithms and models can be considered as dedicated solutions to unique needs and objectives of the tasks at hand: from simple logical rules to sophisticated AI-driven algorithms, machine learning models, data processing scripts, image recognition models, predictive analytics, natural language processing (NLP) models etc…

![protocol_concepts_02](/img/content/academy/protocol_concepts_02.webp)

## Verifiable Claims: how it's referenced in the protocol

Understanding the intricate workings of the OKP4 protocol is essential, particularly concerning the handling of digital resources. Unlike traditional storage mechanisms, the OKP4 blockchain doesn't store these resources directly. Instead, providers maintain sovereignty over resource ownership.

In the context of the OKP4 protocol, each resource is uniquely identified by **Decentralized Identifiers** (DIDs). DIDs are a key component in the decentralized identity ecosystem, providing a mechanism for establishing and verifying the identity of a resource without centralized control. This identification system ensures that each resource is distinct, easily identifiable and easily traceable.

For effective resource accessibility and description (context, precision about the data, and even technical information about the dataset structure for instance), the protocol relies on [Verifiable Credentials (VCs)](https://www.w3.org/TR/vc-data-model/). Firstly, VCs allow for the assertion of specific properties about a resource. This means that each resource can carry with it a set of verifiable information, detailing its characteristics, and any other relevant attributes. Secondly, because VCs are inherently designed to be tamper-evident and cryptographically secure, they enhance the reliability and transparency of the information they convey, ensuring integrity and clarity in both off-chain and on-chain contexts.

Example: A Data provider shares a dataset. In the OKP4 Protocol, this dataset is uniquely identified by the DID `d0c63b88-44f8-4518-b62d-e141dd8fb624`.

Here are some verifiable claims the provider can link to his dataset:

```text
Title: MyDataset
Format: csv
Temporal Coverage: 2022
Geographical Coverage: Europe
Served by: (DID of the server where the dataset is stored off-chain) 
```

This approach results in a more reliable and robust system, where the data about resources (also called metadata), backed by the claims from Verifiable Credentials, can be shared and used with confidence. These claims, being trusted sources of information, are instrumental for decision-making in established on-chain Governance rules.

Some Verifiable Claims are stored Off-chain but key data is introduced to the blockchain in the form of **Verifiable Presentations** (VPs). VPs, often a selected subset of VCs with a verifiable chain, serve as the medium for conveying knowledge to the blockchain and are a resource for on-chain governance decisions. They provide a reliable basis for the formulation and execution of governance rules, ensuring that decisions are made on the basis of verified and accurate information.

## Ontology: how it's represented, semantic description

### The Need for Interoperability

One of the fundamental prerequisites for effective sharing of digital resources is interoperability. Beyond technical considerations, a crucial precondition for resource interoperability is that they speak the same language.

Given the vast diversity of digital resources, each with its own specificities and consent rules, the protocol must express the context as clearly as possible. This clarity is paramount to facilitate seamless communication and understanding among various entities participating in the data-sharing ecosystem.

In the intricate landscape of digital resource sharing, the demand for interoperability underscores the significance of establishing a common ground, a shared language that transcends the unique features of each resource.

### Ontological Foundation

At its core, ontology refers to the formal representation of knowledge and the relationships that exist between different entities. In the context of OKP4, ontology serves as the backbone, providing a structured framework for understanding the semantics associated with digital resources.

### Semantic Enrichment

The representation of ontology in the OKP4 protocol goes beyond mere categorization. It involves a semantic enrichment process, where not only are resources classified, but their inherent meaning is also captured. This semantic description enhances the interpretability of digital assets, ensuring a more nuanced comprehension among stakeholders.

### Interplay with Verifiable Claims

Ontology and Verifiable Claims synergize within the protocol, creating a powerful combination for resource management. While VCs offer detailed information about the characteristics of a resource, ontology delves deeper, elucidating the relationships, dependencies, and context that define the resource's significance.

### Standardization Efforts

To foster interoperability and consistency, the OKP4 protocol encourages adherence to established ontological standards. By aligning with widely accepted frameworks, such as RDF (Resource Description Framework) or OWL (Web Ontology Language), the protocol ensures a harmonized representation of knowledge across diverse resources.

### Practical Application

In practical terms, the semantic description facilitated by ontology within the OKP4 protocol extends to various domains. For instance, in the AI sector, ontology can illuminate the intricate relationships between different types of AI algorithms, datasets, and model architectures. This semantic richness provides a comprehensive understanding of the AI landscape, enabling users to navigate and leverage diverse AI resources with greater insight and efficiency.

Ontology forms a cornerstone in the OKP4 protocol, elevating the representation and semantic description of digital resources. Its integration with metadata and commitment to standardization positions OKP4 as a forward-looking protocol in the dynamic landscape of data sharing among professionals.
