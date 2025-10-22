---
sidebar_position: 9
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Zone description credential

> **Name**: `credential-zone-description`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/credential/zone/description/](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `thesaurus`: [https://w3id.org/axone/ontology/v4/thesaurus/](https://w3id.org/axone/ontology/v4/thesaurus/)
- `credential-zone-description`: [https://w3id.org/axone/ontology/v4/schema/credential/zone/description/](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/)

## Verifiable Credential

> **IRI**: [credential-zone-description:ZoneDescriptionCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/ZoneDescriptionCredential)

### Description

Zone Description credentials deliver an extensive overview of the essential information about a zone. This typically comprises details like the zone's title, description, and tags.

The primary objective of these credentials is to provide a broad overview of the zone, facilitating users' comprehension of its purpose and potential use cases.

### Examples

```json title="collab-ai-zone-description.jsonld"
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/axone/ontology/v4/schema/credential/zone/description/"
    ],
    "type": ["VerifiableCredential","ZoneDescriptionCredential"],
    "id": "https://w3id.org/axone/ontology/v4/schema/credential/zone/description/7f547e63-ceb8-4ff3-8e2e-7a4278d97b8e",
    "credentialSubject": {
        "id": "did:key:zQ3shunN7us5oKNYKKzprW8nP5HAoTf4t2Fxyudho5zMAR1PQ",
        "hasDescription": "Collaborative AI Zone is dedicated to train AI models in a collaborative and open way.",
        "hasTag": [
            "AI",
            "Collaboration",
            "Machine Learning"
        ],
        "hasTitle": "Collaborative AI Zone",
        "hasTopic": "https://w3id.org/axone/ontology/v4/thesaurus/topic/other"
    },
    "issuanceDate": "2024-02-02T15:40:43.475304+01:00",
    "issuer": {
        "id": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",
        "name": "OKP4"
    }
}

```

### Properties

#### Has description
>
> **IRI**: [credential-zone-description:hasDescription](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/hasDescription)
>
> **Domain**:&nbsp;[credential-zone-description:ZoneDescriptionCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/ZoneDescriptionCredential)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

A description of the Zone.

#### Has image
>
> **IRI**: [credential-zone-description:hasImage](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/hasImage)
>
> **Domain**:&nbsp;[credential-zone-description:ZoneDescriptionCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/ZoneDescriptionCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The image associated with the Zone.

#### Has tag
>
> **IRI**: [credential-zone-description:hasTag](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/hasTag)
>
> **Domain**:&nbsp;[credential-zone-description:ZoneDescriptionCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/ZoneDescriptionCredential)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

A (free) keyword or term assigned to the Zone.

#### Has title
>
> **IRI**: [credential-zone-description:hasTitle](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/hasTitle)
>
> **Domain**:&nbsp;[credential-zone-description:ZoneDescriptionCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/ZoneDescriptionCredential)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The title of the Zone.

#### Has topic
>
> **IRI**: [credential-zone-description:hasTopic](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/hasTopic)
>
> **Domain**:&nbsp;[credential-zone-description:ZoneDescriptionCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/description/ZoneDescriptionCredential)
>
> **Range**:&nbsp;[thesaurus:topic](https://w3id.org/axone/ontology/v4/thesaurus/topic)

A topic of the Zone.
