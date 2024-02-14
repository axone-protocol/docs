"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[44027],{89677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,readingTime:()=>l,toc:()=>h});var i=t(85893),r=t(11151);const a={sidebar_position:6},s="Create the zone's governance",o={id:"academy/part-2/zone-governance",title:"Create the zone's governance",description:"Reading time:  min",source:"@site/docs/academy/part-2/zone-governance.mdx",sourceDirName:"academy/part-2",slug:"/academy/part-2/zone-governance",permalink:"/fr/academy/part-2/zone-governance",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/academy/part-2/zone-governance.mdx",tags:[],version:"current",lastUpdatedAt:1707846447,formattedLastUpdatedAt:"13 f\xe9vr. 2024",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"academy",previous:{title:"Describe a Zone",permalink:"/fr/academy/part-2/describe-zone"}},c={},l=13,h=[{value:"Step 1: Define the governance of your zone",id:"step-1-define-the-governance-of-your-zone",level:2},{value:"Step 2: Create the Prolog program",id:"step-2-create-the-prolog-program",level:2},{value:"Introduction",id:"introduction",level:3},{value:"The elements of law",id:"the-elements-of-law",level:3},{value:"Hierarchical elements",id:"hierarchical-elements",level:4},{value:"Elements of description",id:"elements-of-description",level:4},{value:"Legal terms",id:"legal-terms",level:4},{value:"Elements of context",id:"elements-of-context",level:4},{value:"Legal order",id:"legal-order",level:4},{value:"Examples",id:"examples",level:3},{value:"Step 3: Submit the Prolog program in the Dataverse",id:"step-3-submit-the-prolog-program-in-the-dataverse",level:2},{value:"Step 4: Create the Governance VC",id:"step-4-create-the-governance-vc",level:2},{value:"Step 5: Sign and register in the Blockchain",id:"step-5-sign-and-register-in-the-blockchain",level:2},{value:"Delete a zone in the Dataverse",id:"delete-a-zone-in-the-dataverse",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-the-zones-governance",children:"Create the zone's governance"}),"\n",(0,i.jsxs)("i",{children:["Reading time: ",l," min"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["We recommend you first read the ",(0,i.jsx)(n.a,{href:"https://docs.okp4.network/technical-documentation/governance/introduction",children:"Technical documentation of Governance"})," before delving into practice in the Academy."]})}),"\n",(0,i.jsx)(n.p,{children:"Zone Rules establish the boundaries of a specific area in the Dataverse, termed a Zone, within which governance is enforced. Each Zone is governed by its unique set of Rules tailored to its particular function or purpose."}),"\n",(0,i.jsx)(n.p,{children:"The materialization of a zone in the dataverse requires the creation of a Governance VP. According to a principle of self-determination, the zone itself must generate this VP, i.e., the issuer and the zone have the same identity."}),"\n",(0,i.jsx)(n.p,{children:"The impact of this VP of Governance is constitutional. Its implementation transfers authority from the issuer (i.e., the zone) to an autonomous governance system associated with the zone. This system is equipped with its own mechanisms and manages changes and revisions relating to the governance of the zone in an independent, self-regulated, and decentralized manner."}),"\n",(0,i.jsx)(n.p,{children:"The zone Governance is contractual, defining the terms of use of the zone. For example, it can specify the conditions of access to a dataset for certain services with specific claims."}),"\n",(0,i.jsx)(n.p,{children:"In the protocol, governance structures are made up of two key elements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.strong,{children:"VP"})," serves as proof of the existence of a governance by referencing the Codified Governance. This document plays a fundamental role in creating a zone within the dataverse."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Governance as Code"})," is represented by a program written in Prolog. This program details and encodes the specific rules governing zone management."]}),"\n"]}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:"/img/content/academy/zone-governance-1.webp",alt:"Governance elements for Zone in OKP4 Protocol",style:{maxHeight:"340px"}})}),"\n",(0,i.jsx)(n.p,{children:"Here are the five steps to create a zone governance in the Dataverse:"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:"/img/content/academy/zone-governance-2.webp",alt:"Steps to create a zone's governance",style:{maxHeight:"340px"}})}),"\n",(0,i.jsx)(n.p,{children:"We'll take one simple example in this tutorial for the Collaborative AI zone."}),"\n",(0,i.jsx)(n.h2,{id:"step-1-define-the-governance-of-your-zone",children:"Step 1: Define the governance of your zone"}),"\n",(0,i.jsx)(n.p,{children:"First, you need to define the governance rules of your zone.\nThe governance content is systematically arranged into a hierarchical text structure comprising sections, sub-sections, articles, and paragraphs."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"chapter"}),": This term represents a major division in structuring rules, similar to a chapter in a legislative text. It is used to group together articles dealing with related subjects or falling within the same thematic area."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"article"}),": The article is the basic unit in the formulation of rules. Each article sets out a specific rule or set of rules and is identified by a unique number or title for ease of reference."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"section"}),": A section is a subdivision of a chapter. It allows articles to be organized into thematic subgroups, making the structure of the rules more readable and easier to navigate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"subSection"}),": Sub-sections provide an additional level of detail within sections. They are used to group together articles or paragraphs that address specific aspects or details of a broader issue covered in the section."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"paragraph"}),": The paragraph is the element that contains the text of the rule itself. This translates into a clause defining a specific condition or rule in Prolog."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can use a template (coming soon) or begin from scratch."}),"\n",(0,i.jsx)(n.p,{children:"Governance rules of the Collaborative AI zone:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Division"}),(0,i.jsx)(n.th,{children:"Ordinal number"}),(0,i.jsx)(n.th,{children:"Title"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Chapter"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Collaborative AI zone"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Section"}),(0,i.jsx)(n.td,{children:"1.1"}),(0,i.jsx)(n.td,{children:"Zone Governance"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Sub-section"}),(0,i.jsx)(n.td,{children:"1.1.1"}),(0,i.jsx)(n.td,{children:"Governers"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Article"}),(0,i.jsx)(n.td,{children:"1.1.1.1"}),(0,i.jsx)(n.td,{children:"Conditions to amend the rules"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Paragraph"}),(0,i.jsx)(n.td,{children:"1.1.1.1.1"}),(0,i.jsxs)(n.td,{children:["Governance can only be amended by the identity ",(0,i.jsx)(n.code,{children:"did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3"})]})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The OKP4 Community will provide more and more templates over time."})}),"\n",(0,i.jsx)(n.h2,{id:"step-2-create-the-prolog-program",children:"Step 2: Create the Prolog program"}),"\n",(0,i.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Codified Governance is based on the principles of Rules as Code (RaC), a powerful and innovative approach that reinvents a fundamental aspect of governance: the formulation of rules. This concept suggests that governance bodies implement official versions of rules (such as regulations) in a format that can be interpreted by both machines and humans."}),"\n",(0,i.jsx)(n.p,{children:"This method facilitates computer systems' understanding and automated application of rules, guaranteeing consistent and deterministic execution. On the other hand, the ability of rules to be interpreted by humans facilitates their verification and encourages the informed and responsible involvement of stakeholders."}),"\n",(0,i.jsx)(n.p,{children:"In the context of the protocol, it enables autonomous and decentralized interpretation and execution of the rules, thanks to the use of Smart Contracts."}),"\n",(0,i.jsx)(n.h3,{id:"the-elements-of-law",children:"The elements of law"}),"\n",(0,i.jsx)(n.p,{children:"Several terminological elements are essential when expressing legal terms in Prolog for the construction of governance rules. These elements provide a structured framework, mirroring traditional legal documents, and facilitate the precise encoding of legal concepts and rules in the Prolog programming environment."}),"\n",(0,i.jsx)(n.h4,{id:"hierarchical-elements",children:"Hierarchical elements"}),"\n",(0,i.jsx)(n.p,{children:"To articulate the hierarchy of the various elements that make up governance, hierarchy levels are introduced into the system to improve structuring and enhance understanding of the content."}),"\n",(0,i.jsx)(n.p,{children:"These elements are translated into the following Prolog predicates:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-prolog",children:"chapter(ChapterId).\nsection(SectionId).\nsubSection(SubSectionId).\narticle(ArticleId).\nparagraph(ParagraphId, ...).\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To maintain the link between the different hierarchical elements, the binary predicate ",(0,i.jsx)(n.code,{children:"partOf/2"})," is added to the system."]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-prolog",children:"% Definition of instances\nchapter(chap1).\nsection(sec1).\nsubSection(subSec1).\narticle(art1).\nparagraph(para1, ...).\nparagraph(para2, ...).\n\n% Definition of relationships\npartOf(para1, art1).\npartOf(para2, art1).\npartOf(art1, subSec1).\npartOf(subSec1, sec1).\npartOf(sec1, chap1).\n"})}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:"/img/content/academy/resource-governance-3.webp",alt:"Governance elements for Resources in OKP4 Protocol",style:{maxHeight:"340px"}})}),"\n",(0,i.jsx)(n.h4,{id:"elements-of-description",children:"Elements of description"}),"\n",(0,i.jsx)(n.p,{children:"To enable the textual description of the different parts of governance, 2 predicates are introduced into the system:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"title"}),": The title of a hierarchy element"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"description"}),": The description of a hierarchy element"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-prolog",children:"title(ElementId, Text).\ndescription(ElementId, Text).\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Where ",(0,i.jsx)(n.code,{children:"ElementId"})," is an instance of a hierarchical element as defined above."]}),"\n",(0,i.jsx)(n.h4,{id:"legal-terms",children:"Legal terms"}),"\n",(0,i.jsxs)(n.p,{children:["Legal reasoning is based on expressing what is permitted and what is prohibited. Unconditional or conditional ",(0,i.jsx)(n.code,{children:"paragraph/2"})," clauses encode this expression."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"paragraph/2"})," predicate is defined as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-prolog",children:"paragraph(ParagraphId, Modality)\n"})}),"\n",(0,i.jsx)(n.p,{children:"where"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ParagraphId"})," is the unique identifier of the paragraph."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Modality"})," designates the modality, the interpretation under which the rule is to be considered. The possible values are:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"permitted"}),": This modality expresses formal permission relating to the specified action, depending on the particular conditions or context taken into account. It is relevant to conditional clauses, highlighting situations where the action is explicitly permitted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prohibited"}),": This modality expresses an explicit prohibition linked to the action mentioned, applicable in the specific context considered. It is also relevant for conditional clauses, marking circumstances where the action is formally prohibited."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"elements-of-context",children:"Elements of context"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"paragraph/2"})," predicate allows the expression of (unitary) governance rules by asserting the modality with which to interpret the rule. However, contextual elements such as the action performed, the object of the action, or the subject at the origin of the action are not explicitly specified in the signature of the predicate. For this reason, predicate clauses can incorporate references to contextual elements, establishing conditions for satisfying the rule.\nAs part of the interpretation of a rule, contextual elements are introduced as facts and exploited in the rules to define the conditions under which the modality expressed in the rule is true."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"subjectId/1"})," predicate unifies the decentralized identifier (DID) of the subject of an action with the supplied argument."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"resourceId/1"})," predicate unifies the resource's decentralized identifier (DID), which is the object of the action with the supplied argument."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"action/1"})," predicate unifies the action initiated by the subject on the object with the supplied argument. The action is a term (a prolog fact) defined by an extensible control vocabulary, which refers to all possible actions. By convention, actions are designated by a domain and an action separated by ':'."]}),"\n",(0,i.jsx)(n.p,{children:"Examples of action:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["resource",":download"]}),"\n",(0,i.jsxs)(n.li,{children:["governance",":amend"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"legal-order",children:"Legal order"}),"\n",(0,i.jsx)(n.p,{children:"The legal order is the framework that enables the resolution of interactions between rules derived from different, possibly conflicting, norms, such as the rules governing the consent of resources and those defining the governance of an area."}),"\n",(0,i.jsx)(n.p,{children:"To interpret these rules without conflict, it is essential to use strict principles that define an unambiguous and consistent logical framework that makes it possible to establish the resulting modality when several norms express different modalities."}),"\n",(0,i.jsx)(n.p,{children:"First of all, it should be remembered that the modalities are: permitted and prohibited, plus unregulated, which corresponds to the absence of a verdict for evaluating a rule."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Principle of Non-Contradiction"}),(0,i.jsx)(n.br,{}),"\n","For a given standard (i.e., governance), no action can be both permitted and prohibited by the applicable rules. If such a contradiction occurs, the action is considered to be unregulated.\nIn Prolog, this means that for a given rule, there cannot be several possible modality solutions that satisfy it."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Principle of Non-Regulation"}),(0,i.jsx)(n.br,{}),"\n","For a given standard, if an action is neither prohibited nor permitted by any rule, the action is considered to be unregulated."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Priority principle"}),(0,i.jsx)(n.br,{}),"\n","For two standards under consideration, providing 2 different verdicts, the following priority principle is applied:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"prohibited"})," over ",(0,i.jsx)(n.em,{children:"permitted"}),": If an action is both prohibited by one rule and permitted by another, the prohibition rule prevails."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"prohibited"})," over ",(0,i.jsx)(n.em,{children:"unregulated"}),": If a rule prohibits an action, the prohibition prevails, regardless of whether other rules are neutral in this respect."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"permitted"})," over ",(0,i.jsx)(n.em,{children:"unregulated"}),": If an action is explicitly permitted by a rule, this permission prevails over the absence of any indication (unregulated) in other rules."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of the governance of Collaborative AI zone:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-prolog",children:"chapter('chap1').\n     title('chap1', 'Collaborative AI zone governance').\n     section('sec1.1').\n         partOf('sec1.1', 'chap1').\n         title('sec1.1', 'Zone Governance').\n         subSection('subSec1.1.1').\n             partOf('subSec1.1.1', 'sec1.1').\n             title('subSec1.1.1', 'Governers').\n             article('art1.1.1.1').\n                 partOf('art1.1.1.1', 'subSec1.1.1').\n                 title('art1.1.1.1', 'Conditions to amend the rules').\n                 paragraph('para1.1.1.1.1', permitted) :- action(A), A=='governance:amend', S == 'did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3'.\n                    partOf('para1.1.1.1.1', 'art1.1.1.1').\n                     description('para1.1.1.1.1', 'Governance can only be amended by the identity `did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3`').\n"})}),"\n",(0,i.jsx)(n.h2,{id:"step-3-submit-the-prolog-program-in-the-dataverse",children:"Step 3: Submit the Prolog program in the Dataverse"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This part is in progress \ud83d\udd27 Coming soon"})}),"\n",(0,i.jsx)(n.h2,{id:"step-4-create-the-governance-vc",children:"Step 4: Create the Governance VC"}),"\n",(0,i.jsx)(n.p,{children:"The Governance VP is a specific type of VP that details the governance rules applicable to a given resource, whether it is a Dataset, a Service, or a Zone. This VP addresses two key dimensions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Association with Codified Governance: It associates the resource with a URI that refers to the codified governance rules (governance as code). This URI points to a program in Prolog language that explicitly defines the governance rules."}),"\n",(0,i.jsx)(n.li,{children:"Textual Description of the Rules: In addition to the link to the codified rules, the VP provides a structured and hierarchical textual explanation of the governance rules, as set out in the Prolog program."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This bimodal approach not only guarantees the clarity and accessibility of the governance rules for human users but also ensures their direct and functional on-chain integration. The VP of Governance therefore plays a crucial role in clarifying and implementing governance guidelines for resources within the OKP4 dataverse."}),"\n",(0,i.jsxs)(n.p,{children:["Governance VPs play an essential role in the dataverse, applying universally to various categories of resources, such as ",(0,i.jsx)(n.a,{href:"/academy/part-2/resource-governance",children:"datasets, services"}),", and zones."]}),"\n",(0,i.jsxs)(n.p,{children:["Instantiate the template ",(0,i.jsx)(n.a,{href:"https://github.com/okp4/ontology/blob/main/src/example/governance/collab-AI-zone-governance.jsonld",children:"credential-governance-text"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Fill in the template with the elements you ",(0,i.jsx)(n.a,{href:"#step-1-define-the-governance-of-your-zone",children:"precedently defined"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The following code specifies that the Collaborative AI zone whose DID is ",(0,i.jsx)(n.code,{children:"<did:key:zQ3shunN7us5oKNYKKzprW8nP5HAoTf4t2Fxyudho5zMAR1PQ>"})," has a governance system that is described by the prolog program ",(0,i.jsx)(n.code,{children:"<cosmwasm:okp4-objectarium:okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx...>"})," for which a text description is also provided."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'{\n    "@context": [\n        "https://www.w3.org/2018/credentials/v1",\n        "https://w3id.org/okp4/ontology/v$major/schema/credential/governance/text/"\n    ],\n    "type": "VerifiableCredential",\n    "id": "https://w3id.org/okp4/ontology/v$major/schema/credential/governance/text/c29835be-9d4c-4a9a-8525-145bc85b6f95",\n    "credentialSubject": {\n        "id": "did:key:zQ3shunN7us5oKNYKKzprW8nP5HAoTf4t2Fxyudho5zMAR1PQ",\n        "type": ":GovernanceTextCredential",\n        "isGovernedBy": {\n            "type": ":GovernanceText",\n            "fromGovernance": "cosmwasm:{contract_name}:{contract_address}?query={contract_query}",\n            "hasChapter": {\n                "type": ":Chapter",\n                "hasTitle": "Collaborative AI governance",\n                "hasOrdinalNumber": "1",\n                "hasSection": {\n                    "type": ":Section",\n                    "hasTitle": "Zone Governance",\n                    "hasOrdinalNumber": "1.1",\n                    "hasSubsection": {\n                        "type": ":SubSection",\n                        "hasTitle": "Governers",\n                        "hasOrdinalNumber": "1.1.1",\n                        "hasArticle": {\n                            "type": ":Article",\n                            "hasTitle": "Conditions to amend the rules",\n                            "hasOrdinalNumber": "1.1.1.1",\n                            "hasParagraph": {\n                                "type": ":Paragraph",\n                                "hasTitle": "Governance can only be amended by the identity `did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3`",\n                                "hasOrdinalNumber": "1.1.1.1.1"\n                            },\n'})}),"\n",(0,i.jsx)(n.h2,{id:"step-5-sign-and-register-in-the-blockchain",children:"Step 5: Sign and register in the Blockchain"}),"\n",(0,i.jsx)(n.p,{children:"Now that you have created the VCs, you will sign them."}),"\n",(0,i.jsx)(n.p,{children:"Signing a verifiable credential involves creating a digital signature using cryptographic techniques. This signature is unique to both the document (in this case, the credential) and the signer's private key, making it nearly impossible to forge. The private key is kept secret by the signer, while the corresponding public key is made available for anyone wishing to verify the signature's authenticity."}),"\n",(0,i.jsx)(n.p,{children:"By signing the credential, any alteration to the credential's data after it has been signed will invalidate the signature. This ensures the data has not been tampered with and remains as it was when issued."}),"\n",(0,i.jsx)(n.p,{children:"To sign your VC, use this command:"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The command is coming soon \ud83d\udd27"})}),"\n",(0,i.jsx)(n.p,{children:"You can see that there is a new field in the jsonld with the cryptographic proof."}),"\n",(0,i.jsx)(n.p,{children:"The VC is now in the hands of the Holder. Note that it is possible that the Issuer is also the Holder."}),"\n",(0,i.jsxs)(n.p,{children:["The OKP4 blockchain can only register VCs in N-Quads format. Then, you must convert the jsonld files in N-Quads. You can use this tool: ",(0,i.jsx)(n.a,{href:"https://transform.tools/jsonld-to-nquads",children:"https://transform.tools/jsonld-to-nquads"})," ."]}),"\n",(0,i.jsx)(n.p,{children:"The final step is to register the VCs in the OKP4 blockchain by submitting them to the Dataverse smart contract. It's the role of the Registrant (who can be the Holder or another entity)."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"Note that as you interact with the OKP4 blockchain, you must pay fees in $KNOW at each transaction."})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# okp4d tx wasm execute $CONTRACT_ADDR \\ --from $MY_ADDR \\ --gas 10000000 \\ "{\\"submit_claims\\":{\\"metadata\\": \\"$(cat vc.nq | base64)\\"}}"\n'})}),"\n",(0,i.jsx)(n.p,{children:"With:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CONTRACT_ADDR"})," : dataverse contract address (always the same)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MY_ADDR"})," : registrant okp4 address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"vc.nq"})," : name of the verifiable credential signed in RDF in N-Quads format"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The Protocol will check the signature and if the public key corresponds to the proof in the VC, the VC is registered in the smart contract (Cognitarium)."}),"\n",(0,i.jsxs)(n.p,{children:["The command returns the hash of the transaction. You can find more details of this transaction in the ",(0,i.jsx)(n.a,{href:"https://explore.okp4.network/",children:"Explorer"}),". Select the network (Currently Drunemeton-Testnet), click on the Search icon, and paste the transaction hash."]}),"\n",(0,i.jsx)(n.h2,{id:"delete-a-zone-in-the-dataverse",children:"Delete a zone in the Dataverse"}),"\n",(0,i.jsx)(n.p,{children:"The deletion of a zone in the OKP4 Dataverse is carried out exclusively by deleting the governance VP associated with this zone. This deletion action can only be initiated following the rules established by the governance of the zone.\nIt is essential to stress the primacy of governance in this context. Suppose the established governance system does not designate a specific authority empowered to revoke the VP of Governance (or, more generally, the conditions that must be satisfied for its realization). In that case, the result is that the zone remains irrevocably integrated into the dataverse. This provision highlights the crucial importance of a systematic design of governance rules, particularly concerning the mechanisms for modifying and revoking zones."})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);