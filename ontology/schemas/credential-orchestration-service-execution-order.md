---
sidebar_position: 7
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Orchestration service execution order credential

> **Name**: `credential-orchestration-service-execution-order`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-orchestration-service-execution-order`: [https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/)

## Verifiable Credential

> **IRI**: [credential-orchestration-service-execution-order:OrchestrationServiceExecutionOrderCredential](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/OrchestrationServiceExecutionOrderCredential)

### Description

The Orchestration Execution Order Credential is a formal declaration that requests the execution of an orchestration, outlining specific parameters for its operation.

In these credentials, the subject is the Orchestration Service to be executed. The issuer, acting as the principal, is the party who benefits from the execution of the service.

These credentials function as directives for orchestrating service execution, ranging from simple data processing to complex Machine Learning workflows. They establish a standardized method for requesting and managing service execution in a decentralized and interoperable manner.

### Properties

#### Has execution order
>
> **IRI**: [credential-orchestration-service-execution-order:hasExecutionOrder](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/hasExecutionOrder)
>
> **Domain**:&nbsp;[credential-orchestration-service-execution-order:OrchestrationServiceExecutionOrderCredential](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/OrchestrationServiceExecutionOrderCredential)
>
> **Range**:&nbsp;[credential-orchestration-service-execution-order:OrchestrationServiceExecutionOrder](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/OrchestrationServiceExecutionOrder)

This property links an Orchestration Service Execution Order Credential to the specific Orchestration Execution Order it pertains to. It establishes a relationship indicating that the execution of the service, as detailed in the order, is authorized or mandated by the credential.

## Classes

This schema defines 1 class.

### Orchestration service execution order
>
> **IRI**: [credential-orchestration-service-execution-order:OrchestrationServiceExecutionOrder](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/OrchestrationServiceExecutionOrder)

#### Description

Formal representation of the order in which an orchestration should be executed.

#### Properties

##### In zone
>
> **IRI**: [credential-orchestration-service-execution-order:inZone](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/inZone)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The zone in which the service should be executed.

The zone must point to a valid zone identifier and is used to determine the governance policies that apply to the service execution.

##### Placed on
>
> **IRI**: [credential-orchestration-service-execution-order:placedOn](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/placedOn)
>
> **Range**:&nbsp;[schema:Date](http://schema.org/Date), [schema:DateTime](http://schema.org/DateTime)

The date and time when the order was placed.

##### With parameter
>
> **IRI**: [credential-orchestration-service-execution-order:withParameter](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution-order/withParameter)
>
> **Range**:&nbsp;[schema:PropertyValue](http://schema.org/PropertyValue)

A single parameter specifying a part of how the Orchestration Service should be executed, represented as a key-value object. Multiple `withParameter` properties can be used to represent multiple parameters.

Parameters can be used to specify the input data, the output data, the computational resources, the execution environment, and other aspects of the service execution. The comprehension of the parameters is dependent on the Orchestration Service being targeted.
