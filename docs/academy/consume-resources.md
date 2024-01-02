---
sidebar_class_name: hidden
---

# Consume resources

<i>Reading time: {readingTime} min</i>

## Workflows: what are they?

**Workflows**, in the context of the OKP4 protocol, refer to the sequences or processes that are initiated using the various digital resources and digital resources processing services shared within the OKP4 ecosystem. These workflows can involve datasets, algorithms, software, storage resources, computation resources, or any other resources that are part of the OKP4 Dataverse.

To be more precise, Digital Resources encompass various forms of data and information, which can be expressed, carried and stored in different formats. They serve as the raw material from which insights and new knowledge are derived. These resources can be classified into different categories, we can summarize here:

- **Bounded Digital Resources** which have a finite size and are often accessed and analyzed as a whole. We call them datasets, and can be classified into structured data, such as databases or spreadsheets, and unstructured data, such as text documents, images, or videos, to name a few.

- **Digital Resource Processing Services** are essential components that handle the transformation of these digital resources into actionable knowledge. They encompass various services, including data mining, machine learning, natural language processing, and statistical analysis.

From this perspective, Digital Resource Processing Services serve as the structural and functional unit in the process of Knowledge creation or AI training.

This can be formalized very simply, with a set of resources as input and a set of produced resources as output:

![consume-resources-1](/img/content/academy/consume-resources-1.webp)


Once we have defined the elementary processing unit, we can combine them together to form a more complex processing structure called a Workflow.
A workflow is a plan that outlines a series of activities, where some activities depend on the output of others. These interdependencies form a Directed Acyclic Graph (DAG) structure, ensuring that the workflow progresses without circular references or loops.
Let’s consider an example to illustrate this concept:

![consume-resources-2](/img/content/academy/consume-resources-2.webp)


In the example above, we have a simple use case which involves three datasets (D1, D2, D3) that are used to produce the final knowledge (D7) after a series of transformations (S1, S2, S3).

In essence, workflows in OKP4 represent the practical application of the shared digital resources within its ecosystem, facilitating various tasks and operations by leveraging the power of decentralized data and resource sharing.


## The life of a workflow from initiation to completion

Here's a detailed breakdown:

1. **Initiation**: A workflow begins when a consumer decides to leverage shared digital resources. This could be for various purposes like data analysis, machine learning training or inference, software development, or any other task that requires the use of resources. The consumer submits a transaction describing the requested workflow and providing tokens that will be distributed at the end of the workflow execution.

2. **Resource Utilization**: The workflow involves utilizing these resources according to the rules and governance mechanisms defined in the respective Zones within the OKP4 protocol. All resources access conditions must be met as well. The workflow transaction is accepted or rejected by the validators, according to its compliance with the rules.

3. **Execution**: During the workflow, different resources from the OKP4 Dataverse are accessed and used. This could involve processing data through specific algorithms, using software tools, or employing computation and storage resources.

4. **Output and Integration**: The output of these workflows may vary based on the nature of the task. It could be a new dataset, the results of data processing, software outputs such as trained AI, etc. This output might also contribute back to the Dataverse, further enriching the ecosystem.

4. **Payments**: Once the workflow is finished, tokens are sent to the different resource providers according to the business model. Excess tokens may be sent back to the consumer. Eventual slashing can be applied to providers who didn’t provide the expected service.

5. **Flexibility and Adaptation**: Workflows in OKP4 are designed to be flexible, allowing for adaptation as per changing needs or rules within the Zones. This ensures that workflows can evolve in response to new opportunities or requirements.


### The hidden service

An important concept to understand is that interacting with any digital resource requires a service. In the previous examples, we mentioned a specific digital resource being presented as input to a service, but the digital resource cannot exist without the service that makes it available within the workflow. This is typically the role of Storage Services, which provides access to digital resources under specific terms and conditions.
In the following example, the dataset D1 is accessed via the service S1, and the processing result is generated using S2, ultimately produced on S3.

![consume-resources-3](/img/content/academy/consume-resources-3.webp)


A workflow is merely a sequence of activities, taking inputs and producing outputs. So it can be conceptualized as a Service capable of performing specific functions, just like traditional services. This paradigm shift enables Workflows to be invoked in the protocol as a Service and to join the anything-as-a-service family.

When we think of Workflows as a Service, a new perspective emerges: workflows can invoke other workflows as sub-services, forming a multi-level hierarchy, to facilitate the composition and re-use of more complex treatments. What’s more, these particular services can be seen as virtual services, since they consist only of the “blueprint”, the description of the workflow to be executed.

## How rules are enforced in the Dataverse?

### Off-chain Orchestration

The workflow is purely declarative and merely expresses the activities to be performed and how they are to be performed. However, its execution requires the coordination of the involved resources. Typically, this is achieved through a central authority responsible for managing this logic, acting as the conductor who directs each participant. It is at this juncture that the concept of Orchestration comes into play.

![consume-resources-4](/img/content/academy/consume-resources-4.webp)

In its centralized perspective, orchestration relies on a single authority responsible for taking the necessary actions to accomplish a set of activities in response to a declarative expression of needs. This authority holds the logic for execution. Let’s consider the example of Kubernetes — a well-known Container Orchestrator — its API enables the “declaration” of resources, and it’ll take charge of managing the operations and lifecycle logic associated with these resources.

By adopting a decentralized approach, one would expect the blockchain to handle orchestration. However, due to its highly constrained communication capabilities with the external environment, it cannot fulfil this role effectively. Therefore, the most suitable approach is to delegate the execution of workflows to a dedicated off-chain resource: **the Orchestration Service**. This specific resource takes on the role of orchestration while the protocol maintains its position as the source of truth and ultimate authority to which it must adhere.

In the given diagram, we illustrate how an off-chain Orchestration Service interprets the instructions (plan) recorded on-chain (in a transaction) and arranges the communication with different services (off-chain) to execute the workflow.

![consume-resources-5](/img/content/academy/consume-resources-5.webp)

### One To Many

We have thus introduced a new kind of Resource whose actual role is to drive the execution of workflows registered in the blockchain. However, this may seem to reduce the decentralization perspective by relying on a single entity. In reality, this is not the case.

Within the ecosystem, there can be numerous instances of different Orchestration Services operating, and the selection of the one to be utilized can be evaluated based on various criteria, which can be expressed within a Zone governance framework, for example.

### Roles and responsibilities

The role and responsibilities of an Orchestration Service can be categorized into three main areas: control, integration and security.

**Control**: By control, we mean the mechanisms by which the work sequence is orchestrated. This includes:
- Sequence Management: The Orchestration Service determines the sequence in which tasks and activities are executed within a workflow, ensuring that they are carried out in the correct order.
- Flow Control: It manages the routing of tasks based on predefined conditions or rules, determining which activities should be executed next based on the outcomes of previous steps.
- Exception Handling: The Orchestration Service handles exceptions or errors that may occur during the execution of tasks, allowing for appropriate actions to be taken, such as error logging, notifications, or rerouting.

**Integration**: By Integration, we mean that the Orchestration Service enables that data is where it is needed when it is needed in the form in which it is needed. The Orchestration Service facilitates the integration of data from various sources and systems, ensuring that the required data is available to execute tasks and activities within the workflow.

**Security**:
- Access control: The Orchestration Service applies Access Control policies defined in the Governance rules specified in the blockchain.
- Authentication and authorization: The Orchestration Service manages the authentication and authorization required for interactions with orchestrated resources.
- Audit trail: The Orchestration Service maintains an Audit Trail by recording all execution steps in the blockchain. Specifically, it records information in the ontology designed for this purpose on-chain. This provides a complete and immutable traceability of actions performed within the workflow, offering enhanced transparency and control.

## Safety mechanisms - To be completed





