---
sidebar_position: 6
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Digital service execution order credential

> **Name**: `credential-digital-service-execution-order`
>
> **Namespace**: [https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-digital-service-execution-order`: [https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/)

## Verifiable Credential

> **IRI**: [credential-digital-service-execution-order:DigitalServiceExecutionOrderCredential](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/DigitalServiceExecutionOrderCredential)

### Description

The Digital Service Execution Order Credential is a formal declaration that requests the execution of a digital service, outlining specific parameters for its operation.

Similarly, the certification of a Digital Service Execution Order represents a formal request for service execution, guided by defined parameters.

In these credentials, the subject is the Digital Service to be executed. The issuer, acting as the principal, is the party who benefits from the execution of the service.

These credentials function as directives for orchestrating service execution, ranging from simple data processing to complex Machine Learning workflows. They establish a standardized method for requesting and managing service execution in a decentralized and interoperable manner.

### Properties

#### Executed by
>
> **IRI**: [credential-digital-service-execution-order:executedBy](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/executedBy)
>
> **Range**:&nbsp;[credential-digital-service-execution-order:DigitalServiceExecutionOrder](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/DigitalServiceExecutionOrder)

This property links a Digital Service Execution Order Credential to the specific Digital Service Execution Order it pertains to. It establishes a relationship indicating that the execution of the service, as detailed in the order, is authorized or mandated by the credential.

This property is fundamental in associating the formal execution request with the corresponding credential that provides the necessary authorization and details for service execution.

## Classes

This schema defines 1 class.

### Digital service execution order
>
> **IRI**: [credential-digital-service-execution-order:DigitalServiceExecutionOrder](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/DigitalServiceExecutionOrder)

#### Description

Formal representation of the order in which a Digital Service should be executed.

#### Properties

##### In zone
>
> **IRI**: [credential-digital-service-execution-order:inZone](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/inZone)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The zone in which the service should be executed.

##### Placed on
>
> **IRI**: [credential-digital-service-execution-order:placedOn](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/placedOn)
>
> **Range**:&nbsp;[schema:Date](http://schema.org/Date), [schema:DateTime](http://schema.org/DateTime)

The date and time when the order was placed.

##### With parameter
>
> **IRI**: [credential-digital-service-execution-order:withParameter](https://w3id.org/okp4/ontology/v3/schema/credential/digital-service/execution-order/withParameter)
>
> **Range**:&nbsp;[schema:PropertyValue](http://schema.org/PropertyValue)

A single parameter specifying a part of how the Digital Service should be executed, represented as a key-value object. Multiple `withParameter` properties can be used to represent multiple parameters.
