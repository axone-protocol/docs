---
sidebar_position: 9
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Proof of participation credential

> **Name**: `credential-proof-participation`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/credential/proof/participation/](https://w3id.org/axone/ontology/v4/schema/credential/proof/participation/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `credential-proof-participation`: [https://w3id.org/axone/ontology/v4/schema/credential/proof/participation/](https://w3id.org/axone/ontology/v4/schema/credential/proof/participation/)

## Verifiable Credential

> **IRI**: [credential-proof-participation:ProofOfParticipationCredential](https://w3id.org/axone/ontology/v4/schema/credential/proof/participation/ProofOfParticipationCredential)

### Description

A Verifiable Credential attesting that a participant has taken part in a specific event.

The event is linked using `:participatedIn`, which references an instance of [schema:Event](https://schema.org/Event) (e.g.,
`schema:Hackathon` or `schema:DeliveryEvent` for token airdrops).

### Examples

```json title="katai-proof-participation.jsonld"
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/axone/ontology/v4/schema/credential/proof/participation/",
        "https://schema.org"
    ],
    "type": [
        "VerifiableCredential",
        "ProofOfParticipationCredential"
    ],
    "id": "https://credentials.axone.xyz/proof-of-participation/katai/42",
    "credentialSubject": {
        "id": "urn:addr:axone1y6wwdp0gmgnj6hf0jt0r67axhw0fp5dsq37ccv",
        "participatedIn": {
            "id": "https://play.katai.axone.xyz/sprints/c5295c01-8381-4747-b7be-c7b12dc3b918",
            "name": "KatAI | Community-Driven Kat Art, AI & Rewards",
            "startDate": "2025-01-08T17:00:00.000Z",
            "endDate": "2025-01-29T16:59:59.000Z"
        }
    },
    "issuanceDate": "2025-01-11T19:14:24.344904+01:00",
    "issuer": {
        "id": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",
        "name": "Axone"
    }
}

```

### Properties

#### Participated in
>
> **IRI**: [credential-proof-participation:participatedIn](https://w3id.org/axone/ontology/v4/schema/credential/proof/participation/participatedIn)
>
> **Domain**:&nbsp;[credential-proof-participation:ProofOfParticipationCredential](https://w3id.org/axone/ontology/v4/schema/credential/proof/participation/ProofOfParticipationCredential)
>
> **Range**:&nbsp;[schema:Event](http://schema.org/Event)

Links the Proof of Participation Credential to the event the participant took part in.

The event can be any instance of [schema:Event](https://schema.org/Event).
