---
sidebar_position: 1
---

# The essence of governance

In the OKP4 protocol, governance refers to establishing and implementing rules, policies, and processes to regulate orchestration of digital resources. Like [Ontology](/technical-documentation/ontology/the-power-of-ontologies), Governance is the fundamental pillar for organizing and controlling all resources in the dataverse.

To understand the essence of governance, we need to grasp the general concepts of the Sources of Governance, the Hierarchy of Norms, the Rule of Form, and the Governance Extent.

## The sources

The Sources of Governance refer to the various origins or means by which rules are created. Sources of governance are categorized into four main types as recognized by the OKP4 protocol:

### Protocol Governance

Protocol Governance sets the fundamental rules and regulations governing the OKP4 blockchain. It is the foundation upon which all other levels are built and provides the core principles and guidelines that dictate how the protocol operates.

### Zone rules

Rules establish the boundaries of a specific area in the dataverse, termed a Zone, within which governance is enforced. Each Zone is governed by its unique set of Rules tailored to its particular function or purpose.

### Resource Consent

Consents are agreements associated with the use of Resources within Zones. By resources, we mean Digital Resources (e.g. datasets) or Services. It goes beyond simple approval and encompasses the permissions and restrictions on resource owners' access, usage, sharing, management and handling of their resources. It allows parties to define boundaries and establish terms for others to interact with their digital resources. It's a crucial aspect of governance, ensuring resources are used appropriately per the relevant parties' expressed will and intentions.

### Agreement

An agreement between parties involves creating shared understanding, consent, and alignment regarding future actions or outcomes. It signifies that the involved parties voluntarily accept and adhere to the rules, obligations, and conditions outlined in the agreement. By doing so, they demonstrate their commitment to collaboration and willingness to respect the rights and responsibilities defined in the contract until its completion.

## The Hierarchy of Norms

The hierarchy of norms refers to the hierarchical structure of rules within the given governance framework. It establishes the order of precedence among the different norms so that a higher norm prevails over a lower standard.

In the OKP4 Governance framework, the hierarchy of norms establishes a clear order of precedence for rules and regulations. We thus end up with different levels of governance that allow fine-grained control of the use of the protocol.

<center>
  <img src="/img/content/technical-documentation/governance-hierarchy-of-norms.webp" alt="Governance - Hierarchy of Norms" style={{ maxHeight: "340px" }}></img>
</center>

The different levels of governance are:

- **Protocol Governance**: At the top of the hierarchy is Protocol Governance, which establishes the overarching rules and principles for the entire OKP4 protocol.
- **Zone Rules**: Under the Protocol Governance, specific Rules are defined for each Zone within the protocol.
- **Resource Consent**: Resource Consent empowers individuals to specify how their resources can be utilized within specific Zones or boundaries. The Zone rules set the limits and regulations for the use of resources, and Consent operates within those boundaries. Therefore, even if individuals have control over their resources, they must always comply with the existing rules that govern the Zones in which the digital resources are involved. Consequently, if the consents associated with a resource are incompatible or contravene a specific zone's rules, the resource will not be considered eligible for that zone.
- **Agreement**: Within the boundaries of the Zone Rules and in alignment with Resource consents, acting parties have the autonomy and flexibility to enter into agreements regarding the orchestration of their digital resources. The agreement serves as a voluntary contract between parties, outlining the specific terms, rights, and obligations regarding the use of resources within the agreed-upon boundaries.

## The rule of form

The rule of form refers to the principle that governance must adhere to specific formalities to be valid, compliant, and recognized. Within the OKP4 protocol, governance follows particular criteria that are detailed hereafter.

One essential formality is that OKP4 governance is recorded directly on the blockchain, ensuring transparent access for all. Apart from security, this formality guarantees predictability and determinism, ensuring that processes and regulations are unambiguous for all participating parties.

In a somewhat canonical way, the OKP4 governances are structured as follows.

### Preamble

The preamble sets the stage for the rest of the rules. It introduces and briefly explains the underlying philosophy and objectives of the governance framework. It might also define key terms to ensure a common understanding among acting entities. The warm-up is crucial for establishing context and purpose and is meant to guide the interpretation and application of the rules.

This is typically the case with zone rules, which materialize the extent of zones by defining the specific regulations enforced within them. These rules embody the respective Zone's essence, intent, reach, and ultimate objective.

### Articles

The articles provide specific rules for the governance framework. They elaborate on the structures, processes, and standards protocol entities must comply with. Regarding Zones and Consents, the articles are systematically arranged into a hierarchical text structure comprising sections, sub-sections, articles, and paragraphs.

## Amendment process

Amending each level of the hierarchy is living and perpetually in flux, reflecting the evolving needs and circumstances of the protocol. The specific procedure for making amendments is unique to each level of the hierarchy and is dictated by the rules and regulations inherent to that level.

For governance, at the highest level, amendments are often driven by proposals from the community. These proposals, ranging from minor adjustments to significant changes, are submitted to a community vote. If approved, these amendments become part of the protocol's governance, shaping the fundamental rules and guidelines that govern the entire blockchain.

Similarly, Rules can also be amended based on the needs and requirements of the Zone. While adhering to the overarching protocol governance, these amendments allow flexibility and adaptability within each Zone. The process of making amendments is distinct for each Zone, with specific rules outlining the mechanisms by which changes can be enacted. Zones can adopt closed mechanisms that prohibit any rule modifications. Conversely, zones may also choose to uphold democratic principles, allowing rule changes based on user voting within the Zone. The flexibility of these mechanisms underscores the adaptability inherent in the governance structure.

Consent amendments ensure that resources are used per the relevant parties' current will and intentions. The consent attached to Resources can also be amended. This could be driven by the resource owner's changing preferences or new requirements for using, accessing, or managing the Resource.

Lastly, Agreements between parties can also be subject to revision. However, it is generally optional due to its short duration and enforceability. Instead, agreements usually include cancellation terms, which allow for the termination of a deal based on pre-established conditions.

## Governance Extent

The extent of Governance vary depending on the level of the hierarchy where one is situated.

### Protocol Governance

Protocol governance profoundly influences the evolution, decentralization and security of the network. It facilitates the growth of the network by allowing changes and improvements to be proposed and implemented, thus promoting innovation and competitiveness. It can enhance decentralization by encouraging stakeholder participation in decision-making, creating a democratic environment. In addition, go governance impacts network security, helping maintain the integrity and resilience of the system.

### Zone Rules

Zone rules encompass the acting entities and the digital resources that interact within a designated Zone. These rules can be tailored to address specific use cases, industry sectors, partnership circles, or geographical regions, facilitating context-specific governance arrangements. By customizing the rules to match the unique characteristics and requirements of each Zone, effective and targeted go governance be established, ensuring proper management and compliance within the designated Zone.

OKP4 recognizes the following distinct types of rules.

#### Related to acting entities

Zone rules define the rights, obligations, permissions, and prohibitions governing acting entities operating within a specific zone. Numerous rules can be expressed regarding the properties of the acting entity, either established by their metadata or established and verified using [Verifiable Credential](https://www.w3.org/TR/vc-data-model/) information.

Here are some of the supported credentials:

- **Identity** Credentials: These credentials establish and verify the acting entities' identity within a zone's context. These credentials can be verified by restricting [Decentralized Identities](https://www.w3.org/TR/did-core/) through the expression of blacklists or whitelists, thereby controlling authorized identities.
- **Qualification Credentials**: These credentials certify acting entities' qualifications, skills, or expertise relevant to the governance process.
- **Reputation Credentials**: These credentials provide information about acting entities' reputations or track records in the OKP4 ecosystem or other ecosystems. They can be based on past performance, ratings, reviews, or endorsements from trusted and acknowledge sources.
- **Token-related Credentials**: These credentials bring the proof of token ownership in a wallet, token staking in specific blockchains, token voting, and token transfer history, to list a few — all of which serve as evidence of active participation and contributions within the blockchain ecosystem.
- **Anything as Credentials**: These categories of credentials expand the possibilities by considering unconventional or innovative credentials within the governance framework. By acknowledging "Anything as Credentials," the OKP4 governance framework remains open to diverse forms of evidence and allows for continuous adaptation to meet the evolving needs of the OKP4 ecosystem.

#### Related to digital resources

Zone rules define the conditions under which digital resources can be considered within the scope of an activity involving acting entities. Numerous rules can be expressed regarding the properties of the digital resources established by their metadata.

Here are some of the rules which can be expressed:

- **Format Compatibility**: Specify the accepted formats for the digital Resource.
- **Size Limitations**: Define the acceptable size for the digital Resource.
- **Metadata Requirements**: Specify the mandatory or recommended metadata elements accompanying the digital Resource, providing vital information such as authorship, creation date, or keywords.
- **Ownership and Intellectual Property Rights**: Specify ownership rights and intellectual property protections for the digital Resource, including the assignment of rights, licensing agreements, or copyright considerations.
- **Quality Assurance**: Specify quality standards or benchmarks for the digital Resource, ensuring its reliability, accuracy, performance, or adherence to specific industry or technical specifications.
- **Anything as Property**: Specify conditions on any other property of digital resources, unconventional or emerging, within the governance framework, allowing for adaptable rules and requirements.

#### Related to business

The Zone Rules directly address matters that significantly impact business activities. The rules specify the mechanics of business and economic interactions among the various actors within the Zone.

Here are some facets of business models in the zones:

- **Retribution models**: Rules establish the economic terms resulting from the orchestration of resources within a zone. The retribution model describes the creation and redistribution of resulting value, benefitting all participating parties. The models can be diverse and significantly different from each other, and their design can either promote equity or impose constraints on it. For instance, in one specific Zone, it may be stated that Open Data does not receive remuneration, whereas other data sets receive remuneration. Conversely, each service provider may set the price associated with their service usage in another zone, with compensation arranged according to this price.
- **Economic Incentives**: The rules specify financial incentives to promote desirable behaviours and outcomes within the Zone. This can include mechanisms such as reward systems, token incentives, or revenue-sharing models that encourage active entities to contribute to the growth and development of the Zone actively.

#### Related to self

The zone rules also establish the principles by which the rules can be modified, amended, enhanced, or simplified. The OKP4 governance framework supports various processes, providing flexibility and adaptability of the Zone rules.

- **Consensus or Voting**: Amendments require an agreement or voting process. The Zone rules specify voter qualifications, voting period, approval threshold, and verification mechanisms. Let's explore some of the amendment processes supported:
- **Autocratic**: A designated entity or group proposes and enacts rule changes. The Zone rules express the entities' decentralized identities and outlines the proposal process and decision criteria.
- **Participatory**: Broad stakeholder participation is emphasized. The Zone rules specify the considered entities, the qualification required and the conditions for participation.
- **Bring Your Own Rules**: The expressive power of the rules enables the establishment of various amendment processes, which only need to be imagined to become a reality within the OKP4 protocol. This flexibility allows for exploring and implementing diverse, innovative amendment mechanisms within the protocol.

### Resource Consent

Resource Consent defines the conditions for including a resource in an activity involving entities operating within a Zone. While the Zone rules specify the regulations from the perspective of the Zone, the consent represents the rules from the perspective of the Resource. It serves as the expression of the resource owner's considerations regarding the terms of use for the Resource, providing guidelines for its proper utilization within the dataverse.

Understanding the unique relationship between the consent of resources and the zone rules is essential. The licenses and zone rules must be compatible, as the powers of a zone recognizing a resource as being included and thus compatible with its operation require reciprocal confirmation of compliance from the helpful resource. It should be noted that, by the hierarchy of norms, zone rules always take precedence over consent in the event of conflicts or discrepancies.

### Agreement between parties

Agreements between parties refer to the contractual arrangements established between entities within the Zones of dataverse, governing their interactions.

#### Financial Holding Agreement

This type of agreement sets the mutually agreed-upon rules where tokens or some other resources are held in temporary custody until certain conditions are met. The essence of the Financial Holding Agreement is to securely release the held items only after all agreed-upon conditions are satisfied, thereby offering assurance and protection to all the parties involved.

#### Service Provision Agreement

This is an arrangement detailing the terms under which specific services are provided and executed within a Zone as part of the OKP4 protocol. This agreement stipulates the expectations, duties, and deliverables between all participating entities, such as service providers and consumers. It forms the core of the Orchestration mechanism.
