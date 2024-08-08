---
sidebar_position: 2
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Digital resource publication credential

> **Name**: `credential-digital-resource-publication`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/credential/digital-resource/publication/](https://w3id.org/axone/ontology/v4/schema/credential/digital-resource/publication/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-digital-resource-publication`: [https://w3id.org/axone/ontology/v4/schema/credential/digital-resource/publication/](https://w3id.org/axone/ontology/v4/schema/credential/digital-resource/publication/)

## Verifiable Credential

> **IRI**: [credential-digital-resource-publication:DigitalResourcePublicationCredential](https://w3id.org/axone/ontology/v4/schema/credential/digital-resource/publication/DigitalResourcePublicationCredential)

### Description

Digital Resource Publication Credentials confirm the publication and availability of a digital asset through a digital service.

### Properties

#### Has identifier
>
> **IRI**: [credential-digital-resource-publication:hasIdentifier](https://w3id.org/axone/ontology/v4/schema/credential/digital-resource/publication/hasIdentifier)
>
> **Domain**:&nbsp;[credential-digital-resource-publication:DigitalResourcePublicationCredential](https://w3id.org/axone/ontology/v4/schema/credential/digital-resource/publication/DigitalResourcePublicationCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The URI that identifies the digital asset within the scope of a digital service that provides access to it.

#### Served by
>
> **IRI**: [credential-digital-resource-publication:servedBy](https://w3id.org/axone/ontology/v4/schema/credential/digital-resource/publication/servedBy)
>
> **Domain**:&nbsp;[credential-digital-resource-publication:DigitalResourcePublicationCredential](https://w3id.org/axone/ontology/v4/schema/credential/digital-resource/publication/DigitalResourcePublicationCredential)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The digital service that makes the resource accessible.

This information is vital for enabling interactions with the resource. In this context, digital services act as conduits for distributing
and exchanging digital resources across various networks. These services manifest in multiple forms, including network communication
protocols such as RESTful APIs and gRPC services. They play a crucial role in connecting resources to orchestrator services, which
leverage these resources for a range of applications. For instance, a digital resource might be a dataset accessible via a RESTful API,
utilized by an orchestrator service to train a machine learning model.
