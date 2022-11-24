---
sidebar_position: 7
---

# OKP4 Development Kit

## OKP4 Design System

The [OKP4 Design System](https://github.com/okp4/ui) is an open-source set of components and resources created to facilitate the design and development of web interfaces in the OKP4 Ecosystem for everyone. This design system serves as a reference for teams working around the OKP4 Ecosystem, enabling them to design and develop web interfaces with speed, consistency and quality.

![OKP4 Design System](/img/content/whitepaper/okp4-design-system-overview-1.png)

![OKP4 Design System](/img/content/whitepaper/okp4-design-system-overview-2.png)

The OKP4 Design System follows the [Atomic Design methodology](https://atomicdesign.bradfrost.com/), a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.

<div className="text--center">
  <p>
    <img src="/img/content/whitepaper/atomic-design.png" alt="Atomic Design" width="600" />
  </p>
</div>

- **Atoms**: are the smallest possible components. The OKP4 Design System offers the basic building blocks for building interfaces such as: [typography](https://github.com/okp4/ui/issues/98), [themes](https://github.com/okp4/ui/issues/96), language, [buttons](https://github.com/okp4/ui/issues/119), [toaster](https://github.com/okp4/ui/issues/179), [cards](https://github.com/okp4/ui/issues/120), etc.
- **Molecules**: are the composition of one or more components of atoms.
- **Organisms**: are the combination of molecules that work together or, if necessary, with atoms, to form more elaborate interfaces. The OKP4 Design System offers advanced organisms for the OKP4 Ecosystem like a Token Faucet, a Web Wallet, a Dataverse Explorer...

## Data Space governance templates

As the Dataverse will contain more and more Data Spaces, governance templates will be more and more available to create a Data Space quickly.

A user will able to use a template and create his own library of templates.

![Data Space Governance](/img/content/whitepaper/Governance_templates.png)


## OKP4 Kafka Components

The traditional approach to data processing is to save all the data in a data warehouse and analyze it using a nightly batch process. If we consider blockchains as a data source, then the classical approach would be to regularly extract this information and store it in a data warehouse. This works, but has many limitations: reactivity, scalability, extensibility, to name a few.

Instead, at OKP4, we believe in real-time data processing in the form of event streaming. Event streaming is the practice of:

- capturing real-time data from event sources such as databases, cloud services, sensors and software applications in the form of event streams;
- storing these event streams in a durable manner for later retrieval;
- transforming data in real-time and react to the event streams;
- routing the event streams to different destination technologies as needed: database, cloud services...

We adoped [Kafka](https://kafka.apache.org/) as our distributed event streaming platform for high-performance data pipelines, streaming analytics and data integration, and [Kafka Connect](https://docs.confluent.io/platform/current/connect/index.html) as a free, open-source framework for connecting Kafka with external systems such as databases, key-value stores, search indexes, and file systems, using so-called Connectors.

![Kafka Components](/img/content/whitepaper/Kafka.png)

As part of its Development Kit, OKP4 provides a set of open-source bricks allowing the data processing in real-time from a Cosmos blockchain, integrated in a Kafka platform:

- The `Kafka Connect Cosmos Source` connector is a [Kafka connector][] used to move blocks from a Cosmos blockchain into an Apache Kafka® topic.
- The `Kafka Connect Ontology Sink` connector is a [Kafka connector][] used to populate a triplestore with the [OKP4 ontology fragments](https://github.com/okp4/ontology) through a [SPARQL endpoint](https://jena.apache.org/documentation/fuseki2/soh.html) from Apache Kafka topic messages contains JSON transactions.
- The `Cosmos Block To Tx` Kafka Processor is a Stream Processor which continuously reads [Cosmos blocks](https://docs.cosmos.network/master/intro/sdk-app-architecture.html) from an `input` Kafka topic, unwraps the Cosmos transactions and sends them to an `output` topic.
- The `Cosmos Tx to Json` Kafka Streams Processor is a Stream Processor which consumes [Cosmos](https://github.com/cosmos/cosmos-sdk) and [OKP4](https://github.com/okp4/okp4d)
[Protobuf](https://developers.google.com/protocol-buffers) messages from an `input` Kafka topic and sends a [JSON](https://www.json.org/json-en.html) decoded message in the `output` topic.
- ...

[Kafka connector]:  https://docs.confluent.io/platform/current/connect/concepts.html#connect-connectors
