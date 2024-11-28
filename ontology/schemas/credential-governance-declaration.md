---
sidebar_position: 6
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Governance declaration credential

> **Name**: `credential-governance-declaration`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/credential/governance/declaration/](https://w3id.org/axone/ontology/v4/schema/credential/governance/declaration/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-governance-declaration`: [https://w3id.org/axone/ontology/v4/schema/credential/governance/declaration/](https://w3id.org/axone/ontology/v4/schema/credential/governance/declaration/)

## Verifiable Credential

> **IRI**: [credential-governance-declaration:GovernanceDeclarationCredential](https://w3id.org/axone/ontology/v4/schema/credential/governance/declaration/GovernanceDeclarationCredential)

### Description

The Governance Declaration Credential represents a specialized subclass of Verifiable Credentials designed to define and formalize
the Governance framework applicable to a specific Resource. This credential is pivotal in decentralized systems and ensures explicit,
verifiable governance alignment across a variety of resource types.

#### Scope and applicability

- *Zone Governance*: Territorial in nature, this governance establishes a domain of sovereignty and jurisdiction where various
  resources—such as datasets, services, and individuals—recognized by the governance framework can operate or coexist within its boundaries. It defines the legal and regulatory environment applicable to the governed entities.
- *Dataset or Service Governance*: Contractual in nature, this governance defines the terms and conditions for accessing and using the
  resource. For example, it may specify that access to a dataset is restricted to services that present specific verifiable claims demonstrating
  compliance with particular requirements, such as legal or operational standards.

#### Self-determination and authority transfer

The VC *must* be issued by the resource itself, adhering to the principle of self-determination. This ensures that the resource and the
credential issuer share a unified identity. Upon issuance, the credential executes a constitutional transfer of authority from the resource
to an autonomous, decentralized governance system directly associated with it. This governance system operates independently, utilizing
its own mechanisms to self-regulate and manage modifications or revisions of the governance framework in a decentralized and deterministic manner.

#### Governance reference

The governance declaration is characterized by a URI reference that uniquely identifies an immutable governance definition. These URIs are
required to be:

- **Unique**: Each URI must represent a distinct governance definition.
- **Immutable**: The governance definition associated with the URI must remain unchanged over time.
- **Dereferenceable**: The governance content must be retrievable by resolving the URI, ensuring transparency and accessibility.

### Properties

#### Is governed by
>
> **IRI**: [credential-governance-declaration:isGovernedBy](https://w3id.org/axone/ontology/v4/schema/credential/governance/declaration/isGovernedBy)
>
> **Domain**:&nbsp;[credential-governance-declaration:GovernanceDeclarationCredential](https://w3id.org/axone/ontology/v4/schema/credential/governance/declaration/GovernanceDeclarationCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The governance that a resource is governed by.

This property links a resource to the governance that applies to it. Governance is represented by a URI that uniquely identifies the governance definition.
The URI must be dereferenceable, meaning it should allow retrieval of the governance definition when accessed.

**Example**:

```txt
# Reference to governance stored in the Law-Stone smart contract at a specific address
contract:law-stone:axone1hndfmswue3x47meah8sat4fpvj4rvfha4d7ugr849ay4rw7nnxlqcyxlhv
```

#### Constraints

- Governance URIs must be:
  - **Unique**: Each URI must uniquely identify a governance definition.
  - **Immutable**: The governance definition it points to should not change over time.
  - **Dereferenceable**: It must be possible to retrieve the governance data using the URI.
- Governances must originate from a Governance as Code approach, ensuring they are interpretable and executable deterministically by an existing smart contracts.

#### Note

In the Axone protocol, governances are defined using the Prolog language and hosted in dedicated smart contracts. However, a Verifiable Credential (VC)
can reference any governance definition, as long as it adheres to the above constraints.
