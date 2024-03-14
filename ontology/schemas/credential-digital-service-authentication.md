---
sidebar_position: 4
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Digital service authentication credential

> **Name**: `credential-digital-service-authentication`
>
> **Namespace**: [https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/authentication/](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/authentication/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-digital-service-authentication`: [https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/authentication/](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/authentication/)

## Verifiable Credential

> **IRI**: [credential-digital-service-authentication:DigitalServiceAuthenticationCredential](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/authentication/DigitalServiceAuthenticationCredential)

### Description

The Digital Service Authentication Credential is a formal declaration used to authenticate a Digital Service against another in the purpose of fulfilling of a Digital Service Execution Order.

In these credentials, both the subject and the issuer are the Digital Service to be authenticated. The credential contains the needed element to verify the authentication has been requested.

### Properties

#### For order
>
> **IRI**: [credential-digital-service-authentication:forOrder](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/authentication/forOrder)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The Digital Service Execution Order served by this authentication.

#### To service
>
> **IRI**: [credential-digital-service-authentication:toService](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/authentication/toService)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The Digital Service to authenticate to.
