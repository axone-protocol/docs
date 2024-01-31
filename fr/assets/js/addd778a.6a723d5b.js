"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[8877],{20492:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,readingTime:()=>l,toc:()=>d});var a=t(85893),n=t(11151);const s={sidebar_class_name:"hidden"},r="Verifiable Claims Principles",o={id:"academy/verifiable-claims",title:"Verifiable Claims Principles",description:"Reading time:  min",source:"@site/docs/academy/verifiable-claims.md",sourceDirName:"academy",slug:"/academy/verifiable-claims",permalink:"/fr/academy/verifiable-claims",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/academy/verifiable-claims.md",tags:[],version:"current",lastUpdatedAt:1706713357,formattedLastUpdatedAt:"31 janv. 2024",frontMatter:{sidebar_class_name:"hidden"},sidebar:"mainSidebar",previous:{title:"Define any rule",permalink:"/fr/academy/rules"},next:{title:"OKP4 NFT tutorial",permalink:"/fr/nft-tutorial/en"}},c={},l=6,d=[{value:"Verifiable Credentials and claims",id:"verifiable-credentials-and-claims",level:2},{value:"Example: Issuing a Digital Passport",id:"example-issuing-a-digital-passport",level:3},{value:"Verifiable claims in the OKP4 protocol",id:"verifiable-claims-in-the-okp4-protocol",level:2},{value:"Resource materiality",id:"resource-materiality",level:3},{value:"Claim and revocation",id:"claim-and-revocation",level:3},{value:"Self-sovereign governance principles",id:"self-sovereign-governance-principles",level:4},{value:"Registration of Verifiable Presentation in the OKP4 Protocol",id:"registration-of-verifiable-presentation-in-the-okp4-protocol",level:2}];function h(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"verifiable-claims-principles",children:"Verifiable Claims Principles"}),"\n",(0,a.jsxs)("i",{children:["Reading time: ",l," min"]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Verifiable Credentials"})," are a key concept in the world of digital identity, particularly in decentralized identity systems. A Verifiable Credential is a form of digital evidence that attests an information or a characteristic about a person, organization, or object. A trusted entity that issues these credentials is called the ",(0,a.jsx)(i.strong,{children:"Issuer"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"verifiable-credentials-and-claims",children:"Verifiable Credentials and claims"}),"\n",(0,a.jsx)(i.p,{children:"Commonly, a credential is a certificate, proof, or qualification of competence or authority issued to an entity (corporate or individual) by a third party with the authority or presumed competence to do so. It may be proof of authority, status, rights, privileges, or others, usually written. For example, a diploma is a credential issued to a graduate by a university. The diploma includes information such as the graduate's name, the issue date, the degree obtained, and the field of study. It also bears the signature of those in charge of the institution, such as the rector or dean. The diploma serves as official proof that the individual has completed a certain level of education."}),"\n",(0,a.jsx)(i.p,{children:'A credential may contain several claims. For example, a diploma contains the claims "I have a degree in Biology" and "My diploma was issued on 19/06/2023".'}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"Verifiable Credentials"})," (VCs) can be digitally authenticated, meaning that the credential receiver can verify its origin and integrity without contacting the issuer directly. The holder of the Verifiable Credential can control how and to whom his or her information is shared. For example, a person holds the VC for his degree, the Issuer of which is the university where he studied. When this person applies for a job, he or she can share this VC with the company to provide proof of his or her background and skills. The company does not need to contact the university to verify the authenticity of the VC."]}),"\n",(0,a.jsxs)(i.p,{children:["In the ",(0,a.jsx)(i.a,{href:"https://www.w3.org/TR/vc-data-model/",children:"W3C standard"}),", a credential is a set of one or more ",(0,a.jsx)(i.strong,{children:"claims"})," made by the same entity. Credentials include an identifier and metadata describing the credential's properties, such as the issuer, the expiry date and time, a representative image, a public key to use for verification purposes, the revocation mechanism, and so on. The issuer might sign the metadata. A verifiable credential is a set of tamper-evident claims and metadata that cryptographically prove who issued it."]}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:"/img/content/academy/verifiable-claims-1.webp",alt:"Verifiable claims W3C",style:{maxHeight:"340px"}})}),"\n",(0,a.jsxs)(i.admonition,{type:"info",children:[(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.strong,{children:"claim"})," is an assertion made about a subject."]}),(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.strong,{children:"credential"})," is a set of one or more claims made by an issuer."]}),(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.strong,{children:"verifiable credential"})," is a tamper-evident credential that has authorship that can be cryptographically verified. These verifiable credentials can be used to build verifiable presentations, which can also be cryptographically verified."]}),(0,a.jsxs)(i.p,{children:["A ",(0,a.jsx)(i.strong,{children:"verifiable presentation"})," is a tamper-evident presentation encoded in such a way that authorship of the data can be trusted after a process of cryptographic verification."]})]}),"\n",(0,a.jsx)(i.h3,{id:"example-issuing-a-digital-passport",children:"Example: Issuing a Digital Passport"}),"\n",(0,a.jsx)(i.p,{children:"A government authority issues a digital passport to a citizen."}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:"/img/content/academy/verifiable-claims-2.webp",alt:"Verifiable claims passport example",style:{maxHeight:"650px"}})}),"\n",(0,a.jsx)(i.p,{children:"Use when traveling :"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Airport Verification: When traveling, the passport holder presents his or her digital passport at the airport."}),"\n",(0,a.jsx)(i.li,{children:"Verifier (Customs): Customs officers use a system that verifies the passport's digital signature and metadata to confirm its authenticity."}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"The digital signature and metadata ensure enhanced security by preventing forgery and guaranteeing data integrity. Compliance with W3C standards facilitates fast, efficient data verification by verifiers."}),"\n",(0,a.jsx)(i.h2,{id:"verifiable-claims-in-the-okp4-protocol",children:"Verifiable claims in the OKP4 protocol"}),"\n",(0,a.jsxs)(i.p,{children:["The ",(0,a.jsx)(i.a,{href:"https://docs.okp4.network/academy/resources#ontology-how-its-represented-semantic-description",children:"OKP4 ontology"})," is used to describe the Dataverse. In the Dataverse, resources are identified by their DID. Resources are described by claims referenced in the ontology as Verifiable Presentations (VPs) whose subject is the resource's DID. In this way, each resource is described by a set of associated claims."]}),"\n",(0,a.jsx)(i.p,{children:"It's important to note that the existence of a resource is conditional on the presence of at least one relevant claim. In other words, although the universe of potential resources is infinite, a resource only becomes concrete and tangible when a corresponding claim is established."}),"\n",(0,a.jsx)(i.admonition,{type:"note",children:(0,a.jsx)(i.p,{children:"This notion is analogous to that of crypto-currency wallets. Although all addresses theoretically exist, they only take on practical significance (such as indicating a balance) when participating in a transaction."})}),"\n",(0,a.jsx)(i.p,{children:"Verifiable Credentials obey schemas that describe a particular aspect of a resource. Certain VCs apply depending on the nature of the resource. A VC describing an entity or organization does not apply to the same resource as a VC describing a dataset. This is why VCs are organized in schemas."}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:"/img/content/academy/verifiable-claims-3.webp",alt:"Verifiable claims attached to a resource",style:{maxHeight:"400px"}})}),"\n",(0,a.jsx)(i.h3,{id:"resource-materiality",children:"Resource materiality"}),"\n",(0,a.jsxs)(i.p,{children:["It has been established that the concrete existence of a resource depends on the presence of a claim concerning it. More specifically, ",(0,a.jsx)(i.strong,{children:"the Resource Governance VC ensures the existence of a resource in the protocol"}),": a resource or zone exists in the protocol only if governance is attached to it.\nThese VCs play a crucial role in regulating and managing resources. They define the parameters for controlling, managing, and interacting with the resource and thus regulate its use, sharing, and modification in the dataverse. These VCs guarantee order and compliance with established resource management standards."]}),"\n",(0,a.jsx)(i.h3,{id:"claim-and-revocation",children:"Claim and revocation"}),"\n",(0,a.jsx)(i.h4,{id:"self-sovereign-governance-principles",children:"Self-sovereign governance principles"}),"\n",(0,a.jsx)(i.p,{children:'Except from Governance credentials, resources are considered to be under "Self-Sovereign" management according to the following two principles:'}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Free Issuance of Claims"}),": In this framework, any entity (individual, organization, service, etc.) can issue claims on the resource concerned, ",(0,a.jsx)(i.strong,{children:"with the exception of governance claims"}),", which are issued by the identities themselves."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Unilateral revocation of claims"}),": This principle stipulates that claims can only be revoked by the entity that issued them. This means that if Entity A issues a claim on the resource, only Entity A can revoke that claim. This principle is unalterable and remains independent of any intervention or modification by governance structures."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:'Self-sovereign governance is particularly well suited to environments where autonomy and decentralization are paramount, as is the case in the OKP4 dataverse. However, we must remain vigilant to the "gossip effect": given that any entity can issue credentials, there is a risk that unverified or inaccurate information will be disseminated. This phenomenon poses a significant challenge in balancing individual freedom and collective interest. Such dynamics need to be carefully considered when designing governance schemes in Zones.'}),"\n",(0,a.jsx)(i.h2,{id:"registration-of-verifiable-presentation-in-the-okp4-protocol",children:"Registration of Verifiable Presentation in the OKP4 Protocol"}),"\n",(0,a.jsx)(i.p,{children:"Once the Issuer successfully issues the Verifiable Credentials (VCs) associated with a resource or a Zone to the Holder, the Registrant will record a Verifiable Presentation (VP) in the OKP4 blockchain. A VP consists of a set of VCs. The Registrant can be either the Holder or a third party."}),"\n",(0,a.jsx)(i.p,{children:"Recording VPs in the blockchain, rather than individual VCs, ensures the confidentiality of specific properties by only revealing a restricted set of properties on the public chain."}),"\n",(0,a.jsx)("center",{children:(0,a.jsx)("img",{src:"/img/content/academy/verifiable-claims-4.webp",alt:"Verifiable presentation W3C",style:{maxHeight:"360px"}})})]})}function p(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>o,a:()=>r});var a=t(67294);const n={},s=a.createContext(n);function r(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);