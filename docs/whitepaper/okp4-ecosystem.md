---
sidebar_position: 6
---

# OKP4 Ecosystem

## Overview

OKP4 is a general-purpose ecosystem that enables [XaaS](https://en.wikipedia.org/wiki/As_a_service) - Anything as a Service. Therein lies the extensibility and versatility of the protocol. Anything that is presented to the protocol *as a Service* can then be used by the protocol. In a data space, Services are not hosted centrally but anywhere (in the cloud or in premise), from any provider and are only shared when necessary according to strict rules.

There is a large possible typology of services and the protocol currently recognizes the following types:

- *Data* as a Service - Services allowing data management: storage, accessibility, administration, etc.
- *Algorithm* as a Service - Services that process data to produce meaningful information (i.e. knowledge), for instance: machine learning algorithms.
- *Infrastructure* as a Service - Services that offers compute, storage and networking resources.

The ecosystem is based on a fully decentralized open and agnostic architecture, which is:

- *scalable*, designed to scale to infinity,
- *interoperable* to ensure integration with existing and future services,
- *auditable*, by the fine description of the topology of the ecosystem, by the recording in an ontology of all the activities.

## Decentralized Orchestration / Workflow engine

### The engine

The workflow engine is a special service of the protocol which orchestrates the invocations of other services. It is a reflex component of the ecosystem that listens to the transactions of the blockchain and is triggered on command, when a particular transaction of execution request is registered in the blockchain.

By recording all activities in an ontology, the workflow engine enables the chain of custody of each piece of data (*what*) during the different processings (*how*) operated on the different locations (*where*) at a given time (*when*), which leads to a knowledge graph from the source data to the final knowledge produced. Moreover, based on this knowledge graph, monetary policies can be applied in order to reward all the actors in the workflow, from data providers to service providers, in accordance with the business model stated in the data space.

### The workflow

A workflow is a (standardized) description of a processing flow using existing Services. It is understood that a workflow can be reduced to the use of a single service, in which case the processing is just the invocation of that service.

The services registered in the catalog in the protocol are described as a Workflow using a [Domain Specific Language](https://en.wikipedia.org/wiki/Domain-specific_language) that allows the execution of the interaction between the workflow engine and the described service with great flexibility. In this sense, the protocol service descriptions, at runtime, act as a broker to the target services, an intermediary that performs protocol adaptation and translation between the workflow engine and the invoked services.

### The decentralization of orchestration

Decentralization comes first and foremost through the protocol's ability to bring into play services of all kinds, hosted anywhere. It is also possible to have the same services (or services offering a similar set of features) deployed in several places (cloud or in premise) , which reinforces the distributed aspect. The workflow engine itself obeys the same principles and can therefore exist in different deployments in the cloud. In this case, the selection of the workflow engine instance can be done according to different strategies that can be decided at the data space level and/or at the level of the user running the workflow.

Secondly, decentralization is also achieved by the ability of the protocol to be agnostic: indeed, each service can be described by any language and thus interpreted by any Workflow Engine. By this principle, it is possible to have services invocable by different Workflow Engines.

## Data / Algorithms

_Work in progress_

## Storage, computation

_Work in progress_

## Mechanisms to connect/disconnect

_Work in progress_

## Datasets / algorithms / resource governance – sovereignty

_Work in progress_

## Security & Risks

_Work in progress_
