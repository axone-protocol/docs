---
sidebar_position: 1
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Assertion credential

> **Name**: `credential-assertion`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/core/assertion/](https://w3id.org/axone/ontology/v4/schema/core/assertion/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-assertion`: [https://w3id.org/axone/ontology/v4/schema/core/assertion/](https://w3id.org/axone/ontology/v4/schema/core/assertion/)

## Verifiable Credential

> **IRI**: [credential-assertion:AssertionCredential](https://w3id.org/axone/ontology/v4/schema/core/assertion/AssertionCredential)

### Description

A Verifiable Credential that expresses a factual statement about an identifiable subject as a subject, predicate, and object.

Assertion credentials use predicates to represent domain-specific facts, such as licences, compliance statuses, capabilities, or authorities, without introducing specialised credential schemas for each fact type.

### Examples

```json title="resource-license-assertion.jsonld"
{
    "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://w3id.org/axone/ontology/v4/schema/core/assertion/",
        {
            "axone": "https://w3id.org/axone/ontology/v4/"
        }
    ],
    "type": ["VerifiableCredential", "AssertionCredential"],
    "id": "https://credentials.axone.xyz/assertion/resource-license",
    "credentialSubject": {
        "id": "urn:uuid:5d29ea71-003f-46e7-a74d-d8d598629ed8",
        "subject": "did:pkh:cosmos:axone-1:cosmos1rfadcmegmmkotqcjzdc9bhwdpbezp9ymi5rkjx",
        "predicate": "http://purl.org/dc/terms/license",
        "object": "CC-BY-4.0",
        "scope": "did:pkh:cosmos:axone-1:cosmos1unn7us5oknykkzprw8np5haotf4t2fxyudho5z",
        "supportingEvidence": "https://example.com/evidence/resource-license"
    },
    "issuanceDate": "2026-06-11T00:00:00.000000+02:00",
    "issuer": {
        "id": "did:pkh:cosmos:axone-1:cosmos1s7auhjsmvjpiubqwco6bxxehsqwnvepvabhbrv",
        "name": "Axone"
    }
}

```

### Properties

#### Object
>
> **IRI**: [credential-assertion:object](https://w3id.org/axone/ontology/v4/schema/core/assertion/object)
>
> **Domain**:&nbsp;[credential-assertion:AssertionCredential](https://w3id.org/axone/ontology/v4/schema/core/assertion/AssertionCredential)
>
> **Range**:&nbsp;

The value of the asserted fact. The object can be expressed as a URI, a literal value, or a structured JSON-LD value.

#### Predicate
>
> **IRI**: [credential-assertion:predicate](https://w3id.org/axone/ontology/v4/schema/core/assertion/predicate)
>
> **Domain**:&nbsp;[credential-assertion:AssertionCredential](https://w3id.org/axone/ontology/v4/schema/core/assertion/AssertionCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The property or relationship being asserted about the subject.

#### Scope
>
> **IRI**: [credential-assertion:scope](https://w3id.org/axone/ontology/v4/schema/core/assertion/scope)
>
> **Domain**:&nbsp;[credential-assertion:AssertionCredential](https://w3id.org/axone/ontology/v4/schema/core/assertion/AssertionCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The context, zone, policy, or other resource within which the assertion applies.

#### Subject
>
> **IRI**: [credential-assertion:subject](https://w3id.org/axone/ontology/v4/schema/core/assertion/subject)
>
> **Domain**:&nbsp;[credential-assertion:AssertionCredential](https://w3id.org/axone/ontology/v4/schema/core/assertion/AssertionCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The identifiable subject the fact is asserted about.

#### Supporting evidence
>
> **IRI**: [credential-assertion:supportingEvidence](https://w3id.org/axone/ontology/v4/schema/core/assertion/supportingEvidence)
>
> **Domain**:&nbsp;[credential-assertion:AssertionCredential](https://w3id.org/axone/ontology/v4/schema/core/assertion/AssertionCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

A resource that supports or documents the asserted fact.
