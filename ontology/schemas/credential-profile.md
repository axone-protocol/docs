---
sidebar_position: 2
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Profile credential

> **Name**: `credential-profile`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/core/profile/](https://w3id.org/axone/ontology/v4/schema/core/profile/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-profile`: [https://w3id.org/axone/ontology/v4/schema/core/profile/](https://w3id.org/axone/ontology/v4/schema/core/profile/)

## Verifiable Credential

> **IRI**: [credential-profile:ProfileCredential](https://w3id.org/axone/ontology/v4/schema/core/profile/ProfileCredential)

### Description

A Verifiable Credential that carries minimal discovery and display metadata about any identifiable subject.

Profile credentials describe entities such as zones, datasets, digital resources, digital services, organizations, or participants without defining a specialised credential family for each entity type.

### Examples

```json title="collab-ai-zone-profile.jsonld"
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/axone/ontology/v4/schema/core/profile/"
    ],
    "type": ["VerifiableCredential", "ProfileCredential"],
    "id": "https://credentials.axone.xyz/profile/collab-ai-zone",
    "credentialSubject": {
        "id": "did:pkh:cosmos:axone-1:cosmos1unn7us5oknykkzprw8np5haotf4t2fxyudho5z",
        "name": "Collaborative AI Zone",
        "description": "Collaborative AI Zone is dedicated to training AI models in a collaborative and open way.",
        "tag": [
            "AI",
            "Collaboration",
            "Machine Learning"
        ],
        "link": "https://axone.xyz",
        "sameAs": "https://docs.axone.xyz"
    },
    "issuanceDate": "2026-06-11T00:00:00.000000+02:00",
    "issuer": {
        "id": "did:pkh:cosmos:axone-1:cosmos1s7auhjsmvjpiubqwco6bxxehsqwnvepvabhbrv",
        "name": "Axone"
    }
}

```

### Properties

#### Link
>
> **IRI**: [credential-profile:link](https://w3id.org/axone/ontology/v4/schema/core/profile/link)
>
> **Domain**:&nbsp;[credential-profile:ProfileCredential](https://w3id.org/axone/ontology/v4/schema/core/profile/ProfileCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

A web page or other resource related to the subject.

#### Tag
>
> **IRI**: [credential-profile:tag](https://w3id.org/axone/ontology/v4/schema/core/profile/tag)
>
> **Domain**:&nbsp;[credential-profile:ProfileCredential](https://w3id.org/axone/ontology/v4/schema/core/profile/ProfileCredential)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

A keyword or term associated with the subject.

#### Description
>
> **IRI**: [schema:description](http://schema.org/description)
>
> **Domain**:&nbsp;[credential-profile:ProfileCredential](https://w3id.org/axone/ontology/v4/schema/core/profile/ProfileCredential)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

A human-readable description of the subject.

#### Image
>
> **IRI**: [schema:image](http://schema.org/image)
>
> **Domain**:&nbsp;[credential-profile:ProfileCredential](https://w3id.org/axone/ontology/v4/schema/core/profile/ProfileCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

An image associated with the subject.

#### Name
>
> **IRI**: [schema:name](http://schema.org/name)
>
> **Domain**:&nbsp;[credential-profile:ProfileCredential](https://w3id.org/axone/ontology/v4/schema/core/profile/ProfileCredential)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

A human-readable name for the subject.

#### Same as
>
> **IRI**: [schema:sameAs](http://schema.org/sameAs)
>
> **Domain**:&nbsp;[credential-profile:ProfileCredential](https://w3id.org/axone/ontology/v4/schema/core/profile/ProfileCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

Another identifier or profile that refers to the same subject.
