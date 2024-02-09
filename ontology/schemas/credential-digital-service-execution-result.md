---
sidebar_position: 5
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Digital service execution result credential

> **Name**: `credential-digital-service-execution-result`
>
> **Namespace**: [https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-digital-service-execution-result`: [https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/)

## Verifiable Credential

> **IRI**: [credential-digital-service-execution-result:DigitalServiceExecutionResultCredential](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/DigitalServiceExecutionResultCredential)

### Description

A credential that provides proof of the execution of a digital service for a considered Service Execution Order. It includes details of the service that was executed, the time and date of execution, the parameters used, and any outcomes or results relevant to the execution.

### Properties

#### Has execution result
>
> **IRI**: [credential-digital-service-execution-result:hasExecutionResult](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/hasExecutionResult)
>
> **Range**:&nbsp;[credential-digital-service-execution-result:DigitalServiceExecutionResult](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/DigitalServiceExecutionResult)

The execution result of a digital service execution order.

#### Has execution status
>
> **IRI**: [credential-digital-service-execution-result:hasExecutionStatus](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/hasExecutionStatus)
>
> **Range**:&nbsp;[ns1:digital-service-execution-status](https://w3id.org/okp4/ontology/v2/thesaurus/digital-service-execution-status)

Indicates the status of the service execution.

## Classes

This schema defines 1 classe.

### Digital service execution result
>
> **IRI**: [credential-digital-service-execution-result:DigitalServiceExecutionResult](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/DigitalServiceExecutionResult)

#### Description

Captures the details of the result of the execution of a digital service.

#### Properties

##### Has execution time
>
> **IRI**: [credential-digital-service-execution-result:hasExecutionTime](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/hasExecutionTime)
>
> **Range**:&nbsp;[schema:DateTime](http://schema.org/DateTime)

The time and date when the Digital Service was executed.

##### Operated by
>
> **IRI**: [credential-digital-service-execution-result:operatedBy](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/operatedBy)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

The Orchestration Service that operated the execution of the Digital Service.

##### Related to execution order
>
> **IRI**: [credential-digital-service-execution-result:relatedToExecutionOrder](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/relatedToExecutionOrder)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

Links the Execution Result to the specific Digital Service Execution Order.

##### With outcome
>
> **IRI**: [credential-digital-service-execution-result:withOutcome](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/withOutcome)
>
> **Range**:&nbsp;[schema:PropertyValue](http://schema.org/PropertyValue)

A single outcome specifying a part of the result of the execution of the Digital Service, represented as a key-value object. Multiple `withOutcome` properties can be used to represent multiple outcomes.

##### With parameter
>
> **IRI**: [credential-digital-service-execution-result:withParameter](https://w3id.org/okp4/ontology/v2/schema/credential/digital-service/execution-result/withParameter)
>
> **Range**:&nbsp;[schema:PropertyValue](http://schema.org/PropertyValue)

A single parameter specifying a part of how the Digital Service has been parametrized, represented as a key-value object. Multiple `withParameter` properties can be used to represent multiple parameters.
