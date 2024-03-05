---
sidebar_position: 3
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Digital service description credential

> **Name**: `credential-digital-service-description`
>
> **Namespace**: [https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `thesaurus`: [https://w3id.org/okp4/ontology/v3/thesaurus/](https://w3id.org/okp4/ontology/v3/thesaurus/)
- `credential-digital-service-description`: [https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/)

## Verifiable Credential

> **IRI**: [credential-digital-service-description:DigitalServiceDescriptionCredential](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/DigitalServiceDescriptionCredential)

### Description

Digital Service Description credentials offer a comprehensive summary of a Digital Service's key features, encompassing aspects like its title, description, and associated tags.

Their primary function is to simplify the process for users to grasp the service's intent and practical application.

### Examples

```json title="ipfs-digital-service-description.jsonld"
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/"
    ],
    "type": "VerifiableCredential",
    "id": "https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/72cab400-5bd6-4eb4-8605-a5ee8c1a45c9",
    "credentialSubject": {
        "id": "did:key:zQ3shhb4SvzBRLbBonsvKb3WX6WoDeKWHpsXXXMhAJETqXAfB",
        "type": "DigitalServiceDescriptionCredential",
        "hasCategory": "https://w3id.org/okp4/ontology/v3/thesaurus/digital-service-category/Storage",
        "hasDescription": "IPFS is a decentralized protocol designed to facilitate the storage, sharing, and retrieval of files on a global scale",
        "hasPublisher": "IPFS",
        "hasTag": [
            "Storage",
            "Peer-to-peer",
            "Cloud"
        ],
        "hasTitle": "IPFS",
        "hasWebpage": "https://docs.ipfs.tech/"
    },
    "issuanceDate": "2024-01-22T09:28:43.475304+01:00",
    "issuer": {
        "id": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",
        "name": "OKP4"
    }
}

```

### Properties

#### Has category
>
> **IRI**: [credential-digital-service-description:hasCategory](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/hasCategory)
>
> **Range**:&nbsp;[thesaurus:service-category](https://w3id.org/okp4/ontology/v3/thesaurus/service-category)

A category of the Digital Service.

#### Has description
>
> **IRI**: [credential-digital-service-description:hasDescription](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/hasDescription)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

A description of the Digital Service.

#### Has image
>
> **IRI**: [credential-digital-service-description:hasImage](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/hasImage)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The image associated with the Digital Service.

#### Has publisher
>
> **IRI**: [credential-digital-service-description:hasPublisher](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/hasPublisher)
>
> **Range**:&nbsp;[schema:Organization](http://schema.org/Organization), [schema:Person](http://schema.org/Person)

An entity primarily responsible for making the Digital Service available.

#### Has tag
>
> **IRI**: [credential-digital-service-description:hasTag](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/hasTag)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

A (free) keyword or term assigned to the Digital Service.

#### Has title
>
> **IRI**: [credential-digital-service-description:hasTitle](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/hasTitle)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The title of the Digital Service.

#### Has webpage
>
> **IRI**: [credential-digital-service-description:hasWebpage](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/description/hasWebpage)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

A public web page detailing the service, its pricing and any other information useful for the user of the service.
