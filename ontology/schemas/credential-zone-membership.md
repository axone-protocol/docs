---
sidebar_position: 10
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Zone membership credential

> **Name**: `credential-zone-membership`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/](https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-zone-membership`: [https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/](https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/)

## Verifiable Credential

> **IRI**: [credential-zone-membership:ZoneMembershipCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/ZoneMembershipCredential)

### Description

A credential that formally links a digital resource (e.g., dataset, service, model) to a specific zone.

This credential indicates that the resource is recognized as compatible with the governance rules of the zone, allowing it to participate in the zone’s operations. This linking is optional and does not imply exclusivity.

### Examples

```json title="crime-dataset-zone-membership.jsonld"
{
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/"
    ],
    "type": ["VerifiableCredential", "ZoneMembershipCredential"],
    "id": "https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/1a34c83e-7d5a-4d55-94f1-60c32dbd77f6",
    "credentialSubject": {
      "id": "did:key:zZ9shZoneMem1ab7D4dA1cCz38dMvNfzZtxqyNtkKv2gb",
      "forResource": "did:key:zQ3shRfADCmegmmKotqCjzDc9BHWDpbEzp9yMiN5RkJx88oP5",
      "inZone": "did:key:zQ3shunN7us5oKNYKKzprW8nP5HAoTf4t2Fxyudho5zMAR1PQ",
      "hasMembershipRole": "contributor"
    },
    "issuanceDate": "2025-04-09T10:00:00.000Z",
    "issuer": {
      "id": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",
      "name": "OKP4"
    }
  }
  
```

### Properties

#### For resource
>
> **IRI**: [credential-zone-membership:forResource](https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/forResource)
>
> **Domain**:&nbsp;[credential-zone-membership:ZoneMembershipCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/ZoneMembershipCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

Identifies the digital resource that is a member of the zone. This can be any valid resource DID (e.g., dataset, service).

#### Has membership role
>
> **IRI**: [credential-zone-membership:hasMembershipRole](https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/hasMembershipRole)
>
> **Domain**:&nbsp;[credential-zone-membership:ZoneMembershipCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/ZoneMembershipCredential)
>
> **Range**:&nbsp;[xsd:string](http://www.w3.org/2001/XMLSchema#string)

Optionally specifies the role of the resource in the zone (e.g., contributor, consumer, indexable). It’s an optional string.

#### In zone
>
> **IRI**: [credential-zone-membership:inZone](https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/inZone)
>
> **Domain**:&nbsp;[credential-zone-membership:ZoneMembershipCredential](https://w3id.org/axone/ontology/v4/schema/credential/zone/membership/ZoneMembershipCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

Links the resource to the zone it is associated with. The value must be a DID or URI identifying the zone.
