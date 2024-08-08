---
sidebar_position: 6
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Governance description credential

> **Name**: `credential-governance-text`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/credential/governance/text/](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-governance-text`: [https://w3id.org/axone/ontology/v4/schema/credential/governance/text/](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/)

## Verifiable Credential

> **IRI**: [credential-governance-text:GovernanceTextCredential](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/GovernanceTextCredential)

### Description

Governance Text Credential is a type of Credential that attests to descriptive information about a governance text in a "human-readable format".

The Governance Text Credential applies to all resources in the Dataverse for which rules must be followed. Such Governances are categorized into three main types as recognized by the [OKP4 protocol](https://okp4.network):

- Zone Rules: Rules establish the boundaries of a specific area in the Dataverse, termed a Zone, within which governance is enforced. Each Zone is governed by its unique set of Rules tailored to its particular function or purpose.
- Resource Consent: Consents are agreements associated with the use of Resources within Zones. By resources, we mean Digital Resources (e.g. datasets) or Digital Services. It goes beyond simple approval and encompasses the permissions and restrictions on resource owners' access, usage, sharing, management and handling of their resources. It allows parties to define boundaries and establish terms for others to interact with their digital resources. It's a crucial aspect of governance, ensuring resources are used appropriately per the relevant parties' expressed will and intentions.
- Agreement: An agreement between parties involves creating shared understanding, consent, and alignment regarding future actions or outcomes. It signifies that the involved parties voluntarily accept and adhere to the rules, obligations, and conditions outlined in the agreement. By doing so, they demonstrate their commitment to collaboration and willingness to respect the rights and responsibilities defined in the contract until its completion.

### Properties

#### Is governed by
>
> **IRI**: [credential-governance-text:isGovernedBy](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/isGovernedBy)
>
> **Domain**:&nbsp;[credential-governance-text:GovernanceTextCredential](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/GovernanceTextCredential)
>
> **Range**:&nbsp;[credential-governance-text:GovernanceText](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/GovernanceText)

The Governance Text that governs a Resource in the Dataverse.

## Classes

This schema defines 5 classes.

### Article
>
> **IRI**: [credential-governance-text:Article](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/Article)

#### Description

An article of a Governance Text, which states a specific (legal) rule or principle. Articles are the smallest unit of a governance text which represents a significant rule that can be enforced.

#### Properties

##### Has content
>
> **IRI**: [credential-governance-text:hasContent](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasContent)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The content of a Governance Text.

##### Has ordinal number
>
> **IRI**: [credential-governance-text:hasOrdinalNumber](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasOrdinalNumber)
>
> **Range**:&nbsp;[xsd:integer](http://www.w3.org/2001/XMLSchema#integer)

This property associates a governance component with its sequential number.

It assigns an ordinal number as a value, starting from 1, ensuring sequential continuity within a specific domain instance.

The format for this numbering may vary based on the domain, for instance, employing Roman numerals for section numbering.

##### Has paragraph
>
> **IRI**: [credential-governance-text:hasParagraph](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasParagraph)
>
> **Range**:&nbsp;[credential-governance-text:Paragraph](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/Paragraph)

The paragraph of an article.

##### Has title
>
> **IRI**: [credential-governance-text:hasTitle](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasTitle)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The title of a Governance Text.

### Chapter
>
> **IRI**: [credential-governance-text:Chapter](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/Chapter)

#### Description

A chapter of a Governance Text.

#### Properties

##### Has content
>
> **IRI**: [credential-governance-text:hasContent](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasContent)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The content of a Governance Text.

##### Has ordinal number
>
> **IRI**: [credential-governance-text:hasOrdinalNumber](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasOrdinalNumber)
>
> **Range**:&nbsp;[xsd:integer](http://www.w3.org/2001/XMLSchema#integer)

This property associates a governance component with its sequential number.

It assigns an ordinal number as a value, starting from 1, ensuring sequential continuity within a specific domain instance.

The format for this numbering may vary based on the domain, for instance, employing Roman numerals for section numbering.

##### Has section
>
> **IRI**: [credential-governance-text:hasSection](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasSection)
>
> **Range**:&nbsp;[credential-governance-text:Section](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/Section)

The section of a Governance Text.

##### Has title
>
> **IRI**: [credential-governance-text:hasTitle](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasTitle)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The title of a Governance Text.

### Governance text
>
> **IRI**: [credential-governance-text:GovernanceText](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/GovernanceText)

#### Description

Governance Text provides descriptive information about a Governance text in a "human-readable format". It gives a description in a hierarchical manner, organized into chapters, sections, and articles. This hierarchy helps to structure the governance text and makes it easier to navigate and comprehend.

Governance Text is mostly valuable in decentralized applications and web3 interfaces where governance texts are utilized to describe and represent the rules that applies to resources, like Zone or Digital Resources. This enables users to more readily engage with the governance text, allowing them to gain a better understanding of how the text operates and the rules governing the relationship between all resources in a Zone within the Dataverse.

Governance Text is distinct from the Governance itself expressed using logic language (e.g. [Prolog](https://en.wikipedia.org/wiki/Prolog)), but helps to understand the Governance by providing important context.

#### Properties

##### From governance
>
> **IRI**: [credential-governance-text:fromGovernance](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/fromGovernance)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The Governance that a Governance Text is derived from.

##### Has chapter
>
> **IRI**: [credential-governance-text:hasChapter](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasChapter)
>
> **Range**:&nbsp;[credential-governance-text:Chapter](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/Chapter)

The chapter of a governance text, which groups related sections together.

### Paragraph
>
> **IRI**: [credential-governance-text:Paragraph](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/Paragraph)

#### Description

A paragraph of an article, which expresses a sub-rule or sub-principle of the article.

#### Properties

##### Has content
>
> **IRI**: [credential-governance-text:hasContent](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasContent)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The content of a Governance Text.

##### Has title
>
> **IRI**: [credential-governance-text:hasTitle](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasTitle)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The title of a Governance Text.

### Section
>
> **IRI**: [credential-governance-text:Section](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/Section)

#### Description

A section of a governance text, which groups related articles together.

#### Properties

##### Has article
>
> **IRI**: [credential-governance-text:hasArticle](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasArticle)
>
> **Range**:&nbsp;[credential-governance-text:Article](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/Article)

The article of a Governance Text.

##### Has content
>
> **IRI**: [credential-governance-text:hasContent](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasContent)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The content of a Governance Text.

##### Has ordinal number
>
> **IRI**: [credential-governance-text:hasOrdinalNumber](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasOrdinalNumber)
>
> **Range**:&nbsp;[xsd:integer](http://www.w3.org/2001/XMLSchema#integer)

This property associates a governance component with its sequential number.

It assigns an ordinal number as a value, starting from 1, ensuring sequential continuity within a specific domain instance.

The format for this numbering may vary based on the domain, for instance, employing Roman numerals for section numbering.

##### Has title
>
> **IRI**: [credential-governance-text:hasTitle](https://w3id.org/axone/ontology/v4/schema/credential/governance/text/hasTitle)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The title of a Governance Text.
