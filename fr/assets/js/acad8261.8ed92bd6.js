"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[15813],{56782:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>h,default:()=>m,frontMatter:()=>c,metadata:()=>l,readingTime:()=>u,toc:()=>p});var i=t(85893),r=t(11151),n=t(41756);const o=JSON.parse('{"quizTitle":"Test your knowledge!","nrOfQuestions":"4","questions":[{"question":"What does a workflow represent in the context of the OKP4 protocol?","questionType":"text","answerSelectionType":"single","answers":["A sequence of financial transactions on the blockchain.","A series of processes involving digital resources and digital resource processing services.","A set of governance rules for resource management.","A communication protocol between different nodes on the blockchain."],"correctAnswer":"2","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"How are workflows structured in OKP4?","questionType":"text","answerSelectionType":"single","answers":["As a linear sequence of activities with no interdependencies.","As a Directed Acyclic Graph (DAG) without circular references or loops.","By following a proof-of-work consensus model.","By a random set of uncoordinated activities."],"correctAnswer":"2","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"What is the first step in the life of a workflow in OKP4?","questionType":"text","answerSelectionType":"single","answers":["The execution of digital resources.","Payment of tokens to resource providers.","Workflow validation by validators.","Submission of a transaction describing the desired workflow."],"correctAnswer":"4","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"How is off-chain orchestration implemented in OKP4?","questionType":"text","answerSelectionType":"single","answers":["By using the blockchain to coordinate resources directly.","Through a centralized authority that manages execution logic.","Through a dedicated off-chain Orchestration Service.","Through an automatic distributed consensus mechanism."],"correctAnswer":"3","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"}]}');var a=t.t(o,2);const c={sidebar_position:3},h="Consume resources",l={id:"academy/part-1/consume-resources",title:"Consume resources",description:"Reading time:  min",source:"@site/docs/academy/part-1/consume-resources.mdx",sourceDirName:"academy/part-1",slug:"/academy/part-1/consume-resources",permalink:"/fr/academy/part-1/consume-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/academy/part-1/consume-resources.mdx",tags:[],version:"current",lastUpdatedAt:1707846447,formattedLastUpdatedAt:"13 f\xe9vr. 2024",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"academy",previous:{title:"Define any rule",permalink:"/fr/academy/part-1/rules"},next:{title:"Protocol concepts",permalink:"/fr/academy/part-1/protocol-concepts"}},d={},u=8,p=[{value:"Workflows: what are they?",id:"workflows-what-are-they",level:2},{value:"The life of a workflow from initiation to completion",id:"the-life-of-a-workflow-from-initiation-to-completion",level:2},{value:"The hidden service",id:"the-hidden-service",level:3},{value:"How are rules enforced in the Dataverse?",id:"how-are-rules-enforced-in-the-dataverse",level:2},{value:"Off-chain Orchestration",id:"off-chain-orchestration",level:3},{value:"One To Many",id:"one-to-many",level:3},{value:"Roles and responsibilities",id:"roles-and-responsibilities",level:3},{value:"Safety mechanisms - Coming soon",id:"safety-mechanisms---coming-soon",level:2}];function f(e){const s={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"consume-resources",children:"Consume resources"}),"\n",(0,i.jsxs)("i",{children:["Reading time: ",u," min"]}),"\n",(0,i.jsx)(s.h2,{id:"workflows-what-are-they",children:"Workflows: what are they?"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Workflows"}),", in the context of the OKP4 protocol, refer to the sequences or processes initiated using the various digital resources and digital resources processing services shared within the OKP4 ecosystem: The Dataverse. These workflows can involve datasets, algorithms, software, storage resources, computation resources, or any other resources that are part of the OKP4 Dataverse."]}),"\n",(0,i.jsx)(s.p,{children:"To be more precise, Digital Resources encompass various forms of data and information, which can be expressed, carried and stored in different formats. They serve as the raw material from which insights and new knowledge are derived. These resources can be classified into different categories, which we can summarize here:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Bounded Digital Resources"})," have a finite size and are often accessed and analyzed as a whole. We call them datasets, and can be classified into structured data, such as databases or spreadsheets, and unstructured data, such as text documents, images, or videos, to name a few."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Digital Resource Processing Services"})," are essential components that transform these digital resources into actionable knowledge. They encompass various services, including data mining, machine learning, natural language processing, and statistical analysis."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"From this perspective, Digital Resource Processing Services serve as the structural and functional unit in Knowledge creation or AI training."}),"\n",(0,i.jsx)(s.p,{children:"This can be formalized very simply, with a set of resources as input and a set of produced resources as output:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"consume-resources-1",src:t(26071).Z+"",width:"1262",height:"551"})}),"\n",(0,i.jsx)(s.p,{children:"Once we have defined the elementary processing unit, we can combine them to form a more complex processing structure called a Workflow.\nA workflow is a plan that outlines a series of activities, where some activities depend on the output of others. These interdependencies form a Directed Acyclic Graph (DAG) structure, ensuring that the workflow progresses without circular references or loops.\nLet's consider an example to illustrate this concept:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"consume-resources-2",src:t(56512).Z+"",width:"1740",height:"410"})}),"\n",(0,i.jsx)(s.p,{children:"In the example above, we have a simple use case which involves three datasets (D1, D2, D3) that are used to produce the final knowledge (D7) after a series of transformations (S1, S2, S3)."}),"\n",(0,i.jsx)(s.p,{children:"In essence, workflows in OKP4 represent the practical application of the shared digital resources within its ecosystem, facilitating various tasks and operations by leveraging the power of decentralized data and resource sharing."}),"\n",(0,i.jsx)(s.h2,{id:"the-life-of-a-workflow-from-initiation-to-completion",children:"The life of a workflow from initiation to completion"}),"\n",(0,i.jsx)(s.p,{children:"Here's a detailed breakdown:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Initiation"}),": A workflow begins when a consumer leverages shared digital resources. This could be for various purposes like data analysis, machine learning training or inference, software development, or any other task that requires the use of resources. The consumer submits a transaction describing the requested workflow and provides tokens to distribute at the end of the workflow execution."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Resource Utilization"}),": The workflow involves utilizing these resources according to the rules and governance mechanisms defined in the respective Zones within the OKP4 protocol. All resource access conditions must be met as well. The validators accept or reject the workflow transaction according to its compliance with the rules."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Execution"}),": Different resources from the OKP4 Dataverse are accessed and used during the workflow. This could involve processing data through specific algorithms, using software tools, or employing computation and storage resources."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Output and Integration"}),": The output of these workflows may vary based on the nature of the task. It could be a new dataset, data processing results, software outputs such as trained AI, etc. This output might also contribute to the Dataverse, further enriching the ecosystem."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Payments"}),": Once the workflow is finished, tokens are sent to the different resource providers according to the business model. Excess tokens may be sent back to the consumer. Eventual slashing can be applied to providers who didn't provide the expected service."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Flexibility and Adaptation"}),": Workflows in OKP4 are designed to be flexible, allowing for adaptation per changing needs or rules within the Zones. This ensures that workflows can evolve in response to new opportunities or requirements."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"the-hidden-service",children:"The hidden service"}),"\n",(0,i.jsx)(s.p,{children:"An important concept to understand is that interacting with any digital resource requires a service. In the previous examples, we mentioned a specific digital resource being presented as input to a service. Still, the digital resource can only exist with the service that makes it available within the workflow. This is typically the role of Storage Services, which provides access to digital resources under specific terms and conditions.\nIn the following example, the dataset D1 is accessed via the service S1, and the processing result is generated using S2, ultimately produced on S3."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"consume-resources-3",src:t(7931).Z+"",width:"1400",height:"1172"})}),"\n",(0,i.jsx)(s.p,{children:"A workflow is merely a sequence of activities, taking inputs and producing outputs. So, it can be conceptualized as a Service capable of performing specific functions, just like traditional services. This paradigm shift enables Workflows to be invoked in the protocol as a Service and to join the anything-as-a-service family."}),"\n",(0,i.jsx)(s.p,{children:'When we think of Workflows as a Service, a new perspective emerges: workflows can invoke other workflows as sub-services, forming a multi-level hierarchy to facilitate the composition and re-use of more complex treatments. Moreover, these particular services can be seen as virtual services since they consist only of the "blueprint" describing the workflow to be executed.'}),"\n",(0,i.jsx)(s.h2,{id:"how-are-rules-enforced-in-the-dataverse",children:"How are rules enforced in the Dataverse?"}),"\n",(0,i.jsx)(s.h3,{id:"off-chain-orchestration",children:"Off-chain Orchestration"}),"\n",(0,i.jsx)(s.p,{children:"The workflow is purely declarative and merely expresses the activities to be performed and how they are to be performed. However, its execution requires the coordination of the involved resources. Typically, this is achieved through a central authority responsible for managing this logic, acting as the conductor who directs each participant. It is at this juncture that the concept of Orchestration comes into play."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"consume-resources-4",src:t(32610).Z+"",width:"1400",height:"734"})}),"\n",(0,i.jsx)(s.p,{children:'In its centralized perspective, orchestration relies on a single authority responsible for taking the necessary actions to accomplish a set of activities in response to a declarative expression of needs. This authority holds the logic for execution. Let\'s consider the example of Kubernetes \u2014 a well-known Container Orchestrator \u2014 its API enables the "declaration" of resources and will manage the operations and lifecycle logic associated with these resources.'}),"\n",(0,i.jsxs)(s.p,{children:["By adopting a decentralized approach, one would expect the blockchain to handle orchestration. However, due to its highly constrained communication capabilities with the external environment, it cannot fulfill this role effectively. Therefore, the most suitable approach is to delegate the execution of workflows to a dedicated off-chain resource: ",(0,i.jsx)(s.strong,{children:"the Orchestration Service"}),". This specific resource takes on the orchestration role while the protocol maintains its position as the source of truth and ultimate authority to which it must adhere."]}),"\n",(0,i.jsx)(s.p,{children:"In the given diagram, we illustrate how an off-chain Orchestration Service interprets the instructions (plan) recorded on-chain (in a transaction) and arranges the communication with different services (off-chain) to execute the workflow."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"consume-resources-5",src:t(53360).Z+"",width:"1220",height:"993"})}),"\n",(0,i.jsx)(s.h3,{id:"one-to-many",children:"One To Many"}),"\n",(0,i.jsx)(s.p,{children:"We have thus introduced a new kind of Resource whose actual role is to drive the execution of workflows registered in the blockchain. However, this may seem to reduce the decentralization perspective by relying on a single entity. In reality, this is not the case."}),"\n",(0,i.jsx)(s.p,{children:"Within the ecosystem, there can be numerous instances of different Orchestration Services operating, and the selection of the one to be utilized can be evaluated based on various criteria, which can be expressed within a Zone governance framework, for example."}),"\n",(0,i.jsx)(s.h3,{id:"roles-and-responsibilities",children:"Roles and responsibilities"}),"\n",(0,i.jsx)(s.p,{children:"The role and responsibilities of an Orchestration Service can be categorized into three main areas: control, integration, and security."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Control"}),": By control, we mean the mechanisms orchestrating the work sequence. This includes:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Sequence Management: The Orchestration Service determines the sequence in which tasks and activities are executed within a workflow, ensuring they are carried out correctly."}),"\n",(0,i.jsx)(s.li,{children:"Flow Control: It manages the routing of tasks based on predefined conditions or rules, determining which activities should be executed next based on the outcomes of previous steps."}),"\n",(0,i.jsx)(s.li,{children:"Exception Handling: The Orchestration Service handles exceptions or errors that may occur during the execution of tasks, allowing for appropriate actions to be taken, such as error logging, notifications, or rerouting."}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Integration"}),": By Integration, we mean that the Orchestration Service enables that data to be where it is needed when it is required and in the form it is needed. The Orchestration Service facilitates the integration of data from various sources and systems, ensuring that the required data is available to execute tasks and activities within the workflow."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Security"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Access control: The Orchestration Service applies Access Control policies defined in the Governance rules specified in the blockchain."}),"\n",(0,i.jsx)(s.li,{children:"Authentication and authorization: The Orchestration Service manages the authentication and approval required for interactions with orchestrated resources."}),"\n",(0,i.jsx)(s.li,{children:"Audit trail: The Orchestration Service maintains an Audit Trail by recording all execution steps in the blockchain. Specifically, it records information in the ontology designed for this purpose on-chain. This provides a complete and immutable traceability of actions performed within the workflow, offering enhanced transparency and control."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"safety-mechanisms---coming-soon",children:"Safety mechanisms - Coming soon"}),"\n",(0,i.jsx)(n.Z,{quiz:a})]})}function m(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},26071:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/consume-resources-1-4bb6f9ebcd1808cfe6720419b6cfa9dd.webp"},56512:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/consume-resources-2-8d4cc8ce5df9668f214399e42e486a98.webp"},7931:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/consume-resources-3-289e58525e2206c2650f57887d7b4377.webp"},32610:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/consume-resources-4-8c40cca0c1e8e5df196956b23c0aec12.webp"},53360:(e,s,t)=>{t.d(s,{Z:()=>i});const i=t.p+"assets/images/consume-resources-5-849876465c29f07c509915f881fd5d50.webp"}}]);