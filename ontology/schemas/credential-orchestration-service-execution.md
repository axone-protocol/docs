---
sidebar_position: 7
---
[//]: # (This file is auto-generated. Please do not modify it yourself.)

# Orchestration service execution credential

> **Name**: `credential-orchestration-service-execution`
>
> **Namespace**: [https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/)

## Namespaces

Here are the namespaces used in this schema:

- `rdf`: [http://www.w3.org/1999/02/22-rdf-syntax-ns#](http://www.w3.org/1999/02/22-rdf-syntax-ns#)
- `rdfs`: [http://www.w3.org/2000/01/rdf-schema#](http://www.w3.org/2000/01/rdf-schema#)
- `skos`: [http://www.w3.org/2004/02/skos/core#](http://www.w3.org/2004/02/skos/core#)
- `dcterms`: [http://purl.org/dc/terms/](http://purl.org/dc/terms/)
- `schema`: [http://schema.org/](http://schema.org/)
- `xsd`: [http://www.w3.org/2001/XMLSchema#](http://www.w3.org/2001/XMLSchema#)
- `credential-orchestration-service-execution`: [https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/)

## Verifiable Credential

> **IRI**: [credential-orchestration-service-execution:OrchestrationServiceExecutionCredential](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/OrchestrationServiceExecutionCredential)

### Description

A credential that provides proof of the execution of an Orchestration Service for a considered Orchestration Service Execution Order. It includes details of all the resources involved (consumed and produced), the time and date of execution, the parameters used, and any outcomes or results relevant to the execution.

In these credentials, the Orchestration service is both the subject and the issuer.

This credential is fundamental in providing a formal record of the execution of a digital service, which can be used for auditing, verification, and other purposes.

### Properties

#### Has execution result
>
> **IRI**: [credential-orchestration-service-execution:hasExecution](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/hasExecution)
>
> **Domain**:&nbsp;[credential-orchestration-service-execution:OrchestrationServiceExecutionCredential](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/OrchestrationServiceExecutionCredential)
>
> **Range**:&nbsp;[credential-orchestration-service-execution:OrchestrationServiceExecution](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/OrchestrationServiceExecution)

The execution of the Orchestration Service.

## Classes

This schema defines 1 class.

### Orchestration service execution
>
> **IRI**: [credential-orchestration-service-execution:OrchestrationServiceExecution](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/OrchestrationServiceExecution)

#### Description

Captures the details of the progress and outcomes of the execution of an Orchestration Service.

#### Properties

##### Execution of
>
> **IRI**: [credential-orchestration-service-execution:executionOf](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/executionOf)
>
> **Range**:&nbsp;[credential-orchestration-service-execution:OrchestrationServiceExecutionOrder](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/OrchestrationServiceExecutionOrder)

This relationship is pivotal for associating the formal execution request with the corresponding credential, providing the necessary authorization and detailed directives for service execution. This ensures a verifiable and formalized process for initiating and tracking the execution of orchestration services.

##### Has consumed resource
>
> **IRI**: [credential-orchestration-service-execution:hasConsumedResource](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/hasConsumedResource)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

Specifies a resource consumed during this Orchestration Service Execution. The resource can be any URI denoting a Digital Resource (such as a dataset), or a Digital Service (such as a Storage Service or a Processing Service).

Multiple instances of `hasConsumedResource` can represent various resources consumed during the execution. Accessing a Digital Resource may require the use of multiple Digital Services, reflecting the complexity and interdependencies of digital service orchestration.

##### Has execution evidence
>
> **IRI**: [credential-orchestration-service-execution:hasExecutionEvidence](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/hasExecutionEvidence)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

Links the Orchestration Service Execution to a resource that provides evidence of the execution, such as logs, transaction records, or other forms of auditable data. This evidence supports the verification of the execution's integrity, completeness, and compliance with the specified execution parameters and governance rules of all the involved resources within the Zone.

The evidence resource can be a URI pointing to a secure, immutable and verifiable location where the evidence is stored, like IPFS, a blockchain, or an immutable database.

##### Has execution status
>
> **IRI**: [credential-orchestration-service-execution:hasExecutionStatus](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/hasExecutionStatus)
>
> **Range**:&nbsp;[ns1:digital-service-execution-status](https://w3id.org/axone/ontology/v4/thesaurus/digital-service-execution-status)

Indicates the status of the service execution.

##### Has execution time
>
> **IRI**: [credential-orchestration-service-execution:hasExecutionTime](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/hasExecutionTime)
>
> **Range**:&nbsp;[schema:DateTime](http://schema.org/DateTime)

The time and date when the Digital Service was executed.

##### Has produced resource
>
> **IRI**: [credential-orchestration-service-execution:hasProducedResource](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/hasProducedResource)
>
> **Range**:&nbsp;[xsd:anyURI](http://www.w3.org/2001/XMLSchema#anyURI)

Specify a resource produced during this Orchestration Service Execution, if any. The resource can be any URI denoting a Digital Resource (such as a dataset), or a Digital Service (such as a Storage Service or a Processing Service).

##### Part of execution
>
> **IRI**: [credential-orchestration-service-execution:partOfExecution](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/partOfExecution)
>
> **Range**:&nbsp;[credential-orchestration-service-execution:OrchestrationServiceExecution](https://w3id.org/axone/ontology/v4/schema/credential/orchestration-service/execution/OrchestrationServiceExecution)

Links an Orchestration Service Execution to its parent Orchestration Service Execution, if any.

This property establishes a hierarchical relationship between executions, enabling the tracking of complex orchestration services composed of multiple, nested sub-executions. It enables the understanding the structure and progress of workflows that involve sequential or parallel steps.
