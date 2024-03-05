---
sidebar_position: 1
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Dataset description credential

> **Name**: `credential-dataset-description`
>
> **Namespace**: [https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `thesaurus`: [https://w3id.org/okp4/ontology/v3/thesaurus/](https://w3id.org/okp4/ontology/v3/thesaurus/)
- `credential-dataset-description`: [https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/)

## Verifiable Credential

> **IRI**: [credential-dataset-description:DatasetDescriptionCredential](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/DatasetDescriptionCredential)

### Description

Dataset Description credentials deliver an extensive overview of the principal attributes of a dataset. Commonly, they encompass details like the dataset's title, its detailed description, associated tags, as well as its subject matter, and both temporal and geographical scopes.

The objective of these credentials is to furnish a wide-ranging insight into the dataset, thereby simplifying the process for users to comprehend the dataset's content and potential applications.

### Examples

```json title="crime-dataset-description.jsonld"
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/"
    ],
    "type": "VerifiableCredential",
    "id": "https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/d1120529-3242-4fa8-ac7c-a99abc3fc73e",
    "credentialSubject": {
        "id": "did:key:zQ3shRfADCmegmmKotqCjzDc9BHWDpbEzp9yMiN5RkJx88oP5",
        "type": "DatasetDescriptionCredential",
        "hasDescription": "This dataset reflects incidents of crime in the City of Los Angeles dating back to 2020. This data is transcribed from original crime reports that are typed on paper and therefore there may be some inaccuracies within the data. Some location fields with missing data are noted as (0°, 0°). Address fields are only provided to the nearest hundred block in order to maintain privacy. This data is as accurate as the data in the database.",
        "hasFormat": "https://w3id.org/okp4/ontology/v3/thesaurus/media-type/text_csv",
        "hasGeoCoverage": "https://w3id.org/okp4/ontology/v3/thesaurus/area-code/840",
        "hasTag": [
            "Crime",
            "Police",
            "Los Angeles"
        ],
        "hasTemporalCoverage": "2020-01-01T00:00:00.0000+01:00/2024-02-02T00:00:00.00000+01:00",
        "hasTitle": "Crime Data from 2020 to Present",
        "hasTopic": "https://w3id.org/okp4/ontology/v3/thesaurus/topic/security"
    },
    "issuanceDate": "2024-02-02T09:45:43.475304+01:00",
    "issuer": {
        "id": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",
        "name": "OKP4"
    }
}

```

### Properties

#### Has description
>
> **IRI**: [credential-dataset-description:hasDescription](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/hasDescription)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

A description of the Dataset.

#### Has format
>
> **IRI**: [credential-dataset-description:hasFormat](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/hasFormat)
>
> **Range**:&nbsp;[thesaurus:media-type](https://w3id.org/okp4/ontology/v3/thesaurus/media-type)

The format of the Dataset.

#### Has geo coverage
>
> **IRI**: [credential-dataset-description:hasGeoCoverage](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/hasGeoCoverage)
>
> **Range**:&nbsp;[thesaurus:area](https://w3id.org/okp4/ontology/v3/thesaurus/area)

Indicates the geographical area that the dataset applies to,

#### Has image
>
> **IRI**: [credential-dataset-description:hasImage](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/hasImage)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The image associated with the Dataset.

#### Has tag
>
> **IRI**: [credential-dataset-description:hasTag](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/hasTag)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

A (free) keyword or term assigned to the Dataset.

#### Has temporal coverage
>
> **IRI**: [credential-dataset-description:hasTemporalCoverage](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/hasTemporalCoverage)
>
> **Range**:&nbsp;[schema:DateTime](http://schema.org/DateTime)

Indicates the period that the dataset applies to,

#### Has title
>
> **IRI**: [credential-dataset-description:hasTitle](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/hasTitle)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

The title of the Dataset.

#### Has topic
>
> **IRI**: [credential-dataset-description:hasTopic](https://w3id.org/okp4/ontology/v3/schema/credential/dataset/description/hasTopic)
>
> **Range**:&nbsp;[thesaurus:topic](https://w3id.org/okp4/ontology/v3/thesaurus/topic)

A topic of the Dataset.
