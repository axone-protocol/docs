---
sidebar_position: 2
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Digital resource rights credential

> **Name**: `credential-digital-resource-rights`
>
> **Namespace**: [https://w3id.org/okp4/ontology/v3/schema/credential/digital-resource/rights/](https://w3id.org/okp4/ontology/v3/schema/credential/digital-resource/rights/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `credential-digital-resource-rights`: [https://w3id.org/okp4/ontology/v3/schema/credential/digital-resource/rights/](https://w3id.org/okp4/ontology/v3/schema/credential/digital-resource/rights/)

## Verifiable Credential

> **IRI**: [credential-digital-resource-rights:DigitalResourceRightsCredential](https://w3id.org/okp4/ontology/v3/schema/credential/digital-resource/rights/DigitalResourceRightsCredential)

### Description

Digital Resource Rights Credentials provide comprehensive information regarding the authorship, creation, publishing, and licensing of a Digital Resource.

These details are critical for understanding the Digital Resource's provenance, ownership, and the terms under which it can be used.

### Properties

#### Has author
>
> **IRI**: [credential-digital-resource-rights:hasAuthor](https://w3id.org/okp4/ontology/v3/schema/credential/digital-resource/rights/hasAuthor)
>
> **Range**:&nbsp;[schema:Organization](http://schema.org/Organization), [schema:Person](http://schema.org/Person)

The author(s) of the Digital Resource.

#### Has creator
>
> **IRI**: [credential-digital-resource-rights:hasCreator](https://w3id.org/okp4/ontology/v3/schema/credential/digital-resource/rights/hasCreator)
>
> **Range**:&nbsp;[schema:Organization](http://schema.org/Organization), [schema:Person](http://schema.org/Person)

The creator or entity responsible for compiling or generating the Digital Resource.

#### Has license
>
> **IRI**: [credential-digital-resource-rights:hasLicense](https://w3id.org/okp4/ontology/v3/schema/credential/digital-resource/rights/hasLicense)
>
> **Range**:&nbsp;[ns1:license](https://w3id.org/okp4/ontology/v3/thesaurus/license)

The licensing terms under which the Digital Resource is made available.

#### Has publisher
>
> **IRI**: [credential-digital-resource-rights:hasPublisher](https://w3id.org/okp4/ontology/v3/schema/credential/digital-resource/rights/hasPublisher)
>
> **Range**:&nbsp;[schema:Organization](http://schema.org/Organization), [schema:Person](http://schema.org/Person)

The publisher of the Digital Resource.
