"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[63021],{51324:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=i(87462),n=(i(67294),i(3905));i(8209);const r={sidebar_class_name:"hidden"},s="Resources: what can be shared",o={unversionedId:"academy/resources",id:"academy/resources",title:"Resources: what can be shared",description:"Reading time:  min",source:"@site/docs/academy/resources.md",sourceDirName:"academy",slug:"/academy/resources",permalink:"/academy/resources",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/academy/resources.md",tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden"},sidebar:"mainSidebar",previous:{title:"Protocol concepts",permalink:"/academy/protocol-concepts"},next:{title:"Define any rule",permalink:"/academy/rules"}},c={},l=[{value:"Digital Resource",id:"digital-resource",level:2},{value:"Digital Service",id:"digital-service",level:2},{value:"Infrastructure Services",id:"infrastructure-services",level:3},{value:"Digital Resource Processing Services",id:"digital-resource-processing-services",level:3},{value:"Verifiable Claims: how it&#39;s referenced in the protocol",id:"verifiable-claims-how-its-referenced-in-the-protocol",level:2},{value:"Ontology: how it&#39;s represented, semantic description",id:"ontology-how-its-represented-semantic-description",level:2},{value:"The Need for Interoperability",id:"the-need-for-interoperability",level:3},{value:"Ontological Foundation",id:"ontological-foundation",level:3},{value:"Semantic Enrichment",id:"semantic-enrichment",level:3},{value:"Interplay with Verifiable Claims",id:"interplay-with-verifiable-claims",level:3},{value:"Standardization Efforts",id:"standardization-efforts",level:3},{value:"Practical Application",id:"practical-application",level:3}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"resources-what-can-be-shared"},"Resources: what can be shared"),(0,n.kt)("i",null,"Reading time: ","9"," min"),(0,n.kt)("p",null,"Diving into the realm of off-chain resource sharing with OKP4, it's crucial to understand the diverse landscape of digital resources that can be seamlessly shared. Digital resources, the building blocks for extracting insights and generating new knowledge, come in various forms and formats.\nThere are two types of resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("u",null,"Digital Resource")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("u",null,"Digital Service"))),(0,n.kt)("h2",{id:"digital-resource"},"Digital Resource"),(0,n.kt)("p",null,"Digital Resources serve as the raw material from which insights and new knowledge are extracted. They encompass data and information presented in various forms (spreadsheets, text, videos, etc.) and expressed, carried, and stored in any format (.xlm, .json, .txt, .mp4, etc.).\nThese Digital Resources can be categorized into two subtypes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("u",null,"Bounded digital resources")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("u",null,"Unbounded digital resources"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bounded digital resources")," have a finite size and defined boundaries in terms of time. They are often accessed and analyzed as complete entities, commonly referred to as datasets. These datasets are further classify into structured data, such as databases or spreadsheets, and unstructured data, including text documents, images, videos, and more."),(0,n.kt)("p",null,"In contrast to their bounded counterparts, ",(0,n.kt)("strong",{parentName:"p"},"unbounded digital resources")," have no boundaries defined in terms of time. This data may have originated in the past, persisted into the present, and is expected to continue arriving in the future. This absence of predefined boundaries implies that unbounded resources do not have a set size and are characterized by their continuous and potentially infinite nature. Examples of unbounded resources include streaming data and real-time data: sensor data from IoT devices, social media feeds, or stock market tickers."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"resources-1",src:i(8952).Z,width:"1588",height:"972"})),(0,n.kt)("h2",{id:"digital-service"},"Digital Service"),(0,n.kt)("p",null,"To extract new knowledge, raw materials require processing and this is where Digital Services come into play.\nFrom this standpoint, Digital Services function as both the structural and functional units in the knowledge creation process. They provide the essential service to transform digital resources, facilitating the generation of new knowledge.\nDigital Services encompass differents kind of service:"),(0,n.kt)("h3",{id:"infrastructure-services"},"Infrastructure Services"),(0,n.kt)("p",null,"Foundational support is provided for efficient resource sharing, establishing the necessary groundwork for transformative capabilities."),(0,n.kt)("p",null,"Some examples of Infrastructure Services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Infrastructure Storage services"),(0,n.kt)("li",{parentName:"ul"},"Infrastructure Compute services"),(0,n.kt)("li",{parentName:"ul"},"Identity Provider services"),(0,n.kt)("li",{parentName:"ul"},"Orchestration Service")),(0,n.kt)("h3",{id:"digital-resource-processing-services"},"Digital Resource Processing Services"),(0,n.kt)("p",null,"Managing intricate processes involved in transforming digital resources, these services play a crucial role in enabling the generation of fresh knowledge.\nAny kind of algorithms and models can be considered as dedicated solutions to unique needs and objectives of the tasks at hand: from simple logical rules to sophisticated AI-driven algorithms, machine learning models, data processing scripts, image recognition models, predictive analytics, natural language processing (NLP) models etc\u2026"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"resources-2",src:i(32611).Z,width:"1588",height:"972"})),(0,n.kt)("h2",{id:"verifiable-claims-how-its-referenced-in-the-protocol"},"Verifiable Claims: how it's referenced in the protocol"),(0,n.kt)("p",null,"Understanding the intricate workings of the OKP4 protocol is essential, particularly concerning the handling of digital resources. Unlike traditional storage mechanisms, the OKP4 blockchain doesn't store these resources directly. Instead, providers maintain sovereignty over resource ownership."),(0,n.kt)("p",null,"In the context of the OKP4 protocol, each resource is uniquely identified by ",(0,n.kt)("strong",{parentName:"p"},"Decentralized Identifiers")," (DIDs). DIDs are a key component in the decentralized identity ecosystem, providing a mechanism for establishing and verifying the identity of a resource without centralized control. This identification system ensures that each resource is distinct, easily identifiable and easily traceable."),(0,n.kt)("p",null,"For effective resource accessibility and description (context, precision about the data, and even technical information about the dataset structure for instance), the protocol relies on ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/"},"Verifiable Credentials (VCs)"),". Firstly, VCs allow for the assertion of specific properties about a resource. This means that each resource can carry with it a set of verifiable information, detailing its characteristics, and any other relevant attributes. Secondly, because VCs are inherently designed to be tamper-evident and cryptographically secure, they enhance the reliability and transparency of the information they convey, ensuring integrity and clarity in both off-chain and on-chain contexts."),(0,n.kt)("p",null,"Example: A Data provider shares a dataset. In the OKP4 Protocol, this dataset is uniquely identified by the DID ",(0,n.kt)("inlineCode",{parentName:"p"},"d0c63b88-44f8-4518-b62d-e141dd8fb624"),"."),(0,n.kt)("p",null,"Here are some verifiable claims the provider can link to his dataset:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Title: MyDataset\nFormat: csv\nTemporal Coverage: 2022\nGeographical Coverage: Europe\nServed by: (DID of the server where the dataset is stored off-chain) \n")),(0,n.kt)("p",null,"This approach results in a more reliable and robust system, where the data about resources (also called metadata), backed by the claims from Verifiable Credentials, can be shared and used with confidence. These claims, being trusted sources of information, are instrumental for decision-making in established on-chain Governance rules."),(0,n.kt)("p",null,"Some Verifiable Claims are stored Off-chain but key data is introduced to the blockchain in the form of ",(0,n.kt)("strong",{parentName:"p"},"Verifiable Presentations")," (VPs). VPs, often a selected subset of VCs with a verifiable chain, serve as the medium for conveying knowledge to the blockchain and are a resource for on-chain governance decisions. They provide a reliable basis for the formulation and execution of governance rules, ensuring that decisions are made on the basis of verified and accurate information."),(0,n.kt)("h2",{id:"ontology-how-its-represented-semantic-description"},"Ontology: how it's represented, semantic description"),(0,n.kt)("h3",{id:"the-need-for-interoperability"},"The Need for Interoperability"),(0,n.kt)("p",null,"One of the fundamental prerequisites for effective sharing of digital resources is interoperability. Beyond technical considerations, a crucial precondition for resource interoperability is that they speak the same language."),(0,n.kt)("p",null,"Given the vast diversity of digital resources, each with its own specificities and consent rules, the protocol must express the context as clearly as possible. This clarity is paramount to facilitate seamless communication and understanding among various entities participating in the data-sharing ecosystem."),(0,n.kt)("p",null,"In the intricate landscape of digital resource sharing, the demand for interoperability underscores the significance of establishing a common ground, a shared language that transcends the unique features of each resource."),(0,n.kt)("h3",{id:"ontological-foundation"},"Ontological Foundation"),(0,n.kt)("p",null,"At its core, ontology refers to the formal representation of knowledge and the relationships that exist between different entities. In the context of OKP4, ontology serves as the backbone, providing a structured framework for understanding the semantics associated with digital resources."),(0,n.kt)("h3",{id:"semantic-enrichment"},"Semantic Enrichment"),(0,n.kt)("p",null,"The representation of ontology in the OKP4 protocol goes beyond mere categorization. It involves a semantic enrichment process, where not only are resources classified, but their inherent meaning is also captured. This semantic description enhances the interpretability of digital assets, ensuring a more nuanced comprehension among stakeholders."),(0,n.kt)("h3",{id:"interplay-with-verifiable-claims"},"Interplay with Verifiable Claims"),(0,n.kt)("p",null,"Ontology and Verifiable Claims synergize within the protocol, creating a powerful combination for resource management. While VCs offer detailed information about the characteristics of a resource, ontology delves deeper, elucidating the relationships, dependencies, and context that define the resource's significance."),(0,n.kt)("h3",{id:"standardization-efforts"},"Standardization Efforts"),(0,n.kt)("p",null,"To foster interoperability and consistency, the OKP4 protocol encourages adherence to established ontological standards. By aligning with widely accepted frameworks, such as RDF (Resource Description Framework) or OWL (Web Ontology Language), the protocol ensures a harmonized representation of knowledge across diverse resources."),(0,n.kt)("h3",{id:"practical-application"},"Practical Application"),(0,n.kt)("p",null,"In practical terms, the semantic description facilitated by ontology within the OKP4 protocol extends to various domains. For instance, in the AI sector, ontology can illuminate the intricate relationships between different types of AI algorithms, datasets, and model architectures. This semantic richness provides a comprehensive understanding of the AI landscape, enabling users to navigate and leverage diverse AI resources with greater insight and efficiency."),(0,n.kt)("p",null,"Ontology forms a cornerstone in the OKP4 protocol, elevating the representation and semantic description of digital resources. Its integration with metadata and commitment to standardization positions OKP4 as a forward-looking protocol in the dynamic landscape of data sharing among professionals."))}u.isMDXComponent=!0},8952:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/resources-1-be476fbd6d81c8f2a840da1367bc582f.webp"},32611:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/resources-2-7fd9ab523b5b3be80979ff0a1937a6ab.webp"}}]);