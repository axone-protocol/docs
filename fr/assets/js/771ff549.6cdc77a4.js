"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[9224],{88041:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>l,readingTime:()=>u,toc:()=>p});var t=n(85893),r=n(11151),s=n(41756);const a=JSON.parse('{"quizTitle":"Test your knowledge!","nrOfQuestions":"5","questions":[{"question":"What role does an Issuer play in decentralized identity?","questionType":"text","answerSelectionType":"single","answers":["It verifies and confirms the authenticity of credentials.","It receives and stores identification information.","It signs reliable data in the form of Verifiable Credentials.","It coordinates communication between the various players."],"correctAnswer":"3","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"How does Zero-knowledge proof work in the context of decentralized identity?","questionType":"text","answerSelectionType":"single","answers":["It reveals the all information at each verification.","It allows information to be shared without revealing all details.","It encrypts data in an irreversible manner.","It modifies the data so as not to reveal the identity of the holder."],"correctAnswer":"2","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"What is a DID?","questionType":"text","answerSelectionType":"single","answers":["A unique identifier for sovereign, verifiable digital identification.","An encryption method used to protect online identities.","A centralized system for managing digital identities.","A communication protocol for blockchain networks."],"correctAnswer":"1","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"What is the role of the Registrant in the OKP4 protocol?","questionType":"text","answerSelectionType":"single","answers":["It verifies and approves resource claims.","It registers the Verifiable Presentation of a resource on the blockchain.","It creates and manages resource DIDs.","It encrypts information for enhanced security."],"correctAnswer":"2","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"},{"question":"What are the advantages of owning several DIDs?","questionType":"text","answerSelectionType":"single","answers":["Lower transaction costs on the blockchain.","Improved data processing speed.","Separation of contexts, increased confidentiality and risk isolation.","Centralized information for simpler management."],"correctAnswer":"3","messageForCorrectAnswer":"Correct answer. Good job.","messageForIncorrectAnswer":"Incorrect answer. Please try again.","point":"1"}]}');var o=n.t(a,2);const d={sidebar_position:1},c="Decentralized identity",l={id:"academy/part-2/decentralized-identity",title:"Decentralized identity",description:"Reading time:  min",source:"@site/docs/academy/part-2/decentralized-identity.mdx",sourceDirName:"academy/part-2",slug:"/academy/part-2/decentralized-identity",permalink:"/fr/academy/part-2/decentralized-identity",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/academy/part-2/decentralized-identity.mdx",tags:[],version:"current",lastUpdatedAt:1707846447,formattedLastUpdatedAt:"13 f\xe9vr. 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"academy",previous:{title:"AI Factory: A Use Case Unveiling",permalink:"/fr/academy/part-1/ai-factory"},next:{title:"Verifiable Claims Principles",permalink:"/fr/academy/part-2/verifiable-claims"}},h={},u=11,p=[{value:"Decentralized identity roles",id:"decentralized-identity-roles",level:2},{value:"Issuers",id:"issuers",level:3},{value:"Holders",id:"holders",level:3},{value:"Verifiers",id:"verifiers",level:3},{value:"Example: apply for a job",id:"example-apply-for-a-job",level:3},{value:"DID",id:"did",level:2},{value:"Example: An Autonomous Vehicle as a DID Holder",id:"example-an-autonomous-vehicle-as-a-did-holder",level:3},{value:"DID Document",id:"did-document",level:3},{value:"A verification method: the did Method",id:"a-verification-method-the-did-method",level:3}];function y(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"decentralized-identity",children:"Decentralized identity"}),"\n",(0,t.jsxs)("i",{children:["Reading time: ",u," min"]}),"\n",(0,t.jsxs)(i.p,{children:["Unlike traditional identity systems, where personal identification information is centralized and often managed by a single entity (such as a company or government), ",(0,t.jsx)(i.strong,{children:"decentralized identity"})," enables individuals to control and manage their own identification data. This model, also known as Self-Sovereign Identity (SSI), offers several key advantages."]}),"\n",(0,t.jsx)(i.p,{children:"It enhances security and privacy, as data is not stored in a central location vulnerable to attack or abuse.\nIt increases transparency and trust, as users can choose how, when, and with whom to share their information without relying on intermediaries.\nThis reduces the risk of censorship or manipulation by third parties."}),"\n",(0,t.jsx)(i.p,{children:"The importance of decentralized identity lies in its ability to give individuals back the power over their personal information in an increasingly digital world, offering a new approach to identity management that is secure, transparent, and user-centric."}),"\n",(0,t.jsx)(i.h2,{id:"decentralized-identity-roles",children:"Decentralized identity roles"}),"\n",(0,t.jsxs)(i.p,{children:["Decentralized identity allows users to manage their personal information in their own wallet. This data, called ",(0,t.jsx)(i.strong,{children:"credentials"}),", is created, issued, and cryptographically signed by an entity called ",(0,t.jsx)(i.strong,{children:"Issuer"})," to a ",(0,t.jsx)(i.strong,{children:"Holder"}),". The Holder can share this data with a third party, called a Verifier."]}),"\n",(0,t.jsx)(i.h3,{id:"issuers",children:"Issuers"}),"\n",(0,t.jsxs)(i.p,{children:["An Issuer is an entity that issues trustworthy data in the form of ",(0,t.jsx)(i.strong,{children:"Verifiable Credentials"}),". Issuers can be institutional organizations (government, bank, insurance company, etc.) or any other person or organization (a friend, a local business, a DAO, etc.). The only requirement for an issuer is its ability to certify a fact or characteristic relating to another person."]}),"\n",(0,t.jsx)(i.h3,{id:"holders",children:"Holders"}),"\n",(0,t.jsx)(i.p,{children:"A Holder can be a person, organization, product, or object possessing a set of attributes certified by an Issuer. This holder can store and manage these attributes in the form of Verifiable Credentials and decide with whom to share this information."}),"\n",(0,t.jsx)(i.h3,{id:"verifiers",children:"Verifiers"}),"\n",(0,t.jsx)(i.p,{children:"A Verifier is an entity empowered to authenticate the legitimacy and veracity of a Verifiable Credential through a Verifiable Presentation submitted to it. The verifier can confirm that the information presented originates from the correct and authorized Issuer and that the Verifiable Credential has not been altered in any way. Generally, the verifier can also check that the Verifiable Credential has not expired or been revoked."}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:"/img/content/academy/decentralised-identity-1.webp",alt:"Decentralised Identity tryptic",style:{maxHeight:"340px"}})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Zero-knowledge proof"})," (ZKP) technology can be used to share proof of identity or authorization without revealing the complete identity of the holder."]}),"\n",(0,t.jsx)(i.p,{children:"Note that blockchain technologies generally support decentralized identity. Therefore, each data exchange between your wallet and an Issuer or Verifier may involve fees."}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Note on Blockchain Fees:"})," The fees associated with blockchain transactions can vary due to several factors, including network congestion and transaction complexity. As these fees are not fixed and can change over time, we recommend consulting the documentation of the relevant blockchain or your wallet provider to get the most current information on transaction fees."]})}),"\n",(0,t.jsx)(i.h3,{id:"example-apply-for-a-job",children:"Example: apply for a job"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Issuer - University"}),":"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Role"}),": Issues digital diplomas."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Action"}),": A university (Issuer) issues a digital diploma to one of its former students. The university digitally signs the certificate, guaranteeing its authenticity."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Holder - Graduate"}),":"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Role"}),": Receives and holds claims (attestations)."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Action"}),": The graduate (Holder) receives the digital diploma and stores it in his or her digital wallet. This wallet enables him to manage his digital credentials and attestations securely."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Verifier - Potential Employer"}),":"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Role"}),": Verifies claims to confirm their validity."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.em,{children:"Action"}),": When the graduate applies for a job, the potential employer (Verifier) asks for proof of qualification. The graduate then shares his digital diploma with the employer. The employer can then verify the diploma's authenticity using the university's public key. If the digital signature matches, the employer can be sure that the diploma is genuine and has been issued by the university mentioned."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"How the process works"}),":"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Diploma issuance: The university creates a digital diploma and digitally signs it."}),"\n",(0,t.jsx)(i.li,{children:"Diploma storage: The graduate receives and securely stores the diploma in his/her digital wallet."}),"\n",(0,t.jsx)(i.li,{children:"Sharing and verification: When applying for a job, the graduate shares the diploma with the employer. The employer then verifies the digital signature against the university's public key."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This scenario illustrates how decentralized identity systems facilitate the secure and verifiable exchange of identity information while enabling individuals to control which aspects of their identity are shared and with whom."}),"\n",(0,t.jsx)(i.h2,{id:"did",children:"DID"}),"\n",(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.strong,{children:"DID"}),", or ",(0,t.jsx)(i.strong,{children:"Decentralized Identifier"}),", is a unique identifier that enables sovereign, verifiable digital identification. Unlike traditional identifiers, such as those provided by online services like user accounts or social security numbers, DIDs are entirely controlled by the individual, organization, or entity they refer to."]}),"\n",(0,t.jsx)(i.p,{children:"A DID applies to anything that has an identity. An entity is something with a distinct and independent existence. It can be a person but also an organization, an animal, an object, and, in the case of the OKP4 protocol, a dataset or a digital service."}),"\n",(0,t.jsx)(i.p,{children:"An infinite number of DIDs can be attached to the same identity, which offers several advantages:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Separation of contexts"}),": An identity can have several DIDs, each used in a different context (professional, personal, leisure, etc.). This allows the individual or entity to present only the information relevant to each context without exposing the whole identity or other irrelevant information."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Privacy"}),": With multiple DIDs, controlling which information is shared with whom is possible. This reduces the risk of profiling or tracking by third parties. Using different DIDs in different contexts makes it more difficult for observers to correlate all actions and interactions to a single identity."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Security"}),": If one DID is compromised, other DIDs and associated contexts remain secure. This isolates the risk and minimizes damage."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Flexibility and scalability"}),": Users can create new DIDs as their needs and contexts evolve without being limited by rigid identifiers."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"DIDs are managed by decentralized networks, notably blockchains. This means that no single central authority controls identity information, offering greater security and resilience against single points of failure. Users have total control over their DIDs. They can create, update, or delete their identifiers without the need for a central authority."}),"\n",(0,t.jsxs)(i.p,{children:["The DID is a ",(0,t.jsx)(i.a,{href:"https://www.w3.org/TR/did-core/",children:"W3C"})," standard designed to be interoperable across different systems and networks, facilitating their use in diverse digital contexts."]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:"/img/content/academy/decentralised-identity-2.webp",alt:"DID",style:{maxHeight:"300px"}})}),"\n",(0,t.jsx)(i.h3,{id:"example-an-autonomous-vehicle-as-a-did-holder",children:"Example: An Autonomous Vehicle as a DID Holder"}),"\n",(0,t.jsx)(i.p,{children:"In the near future, autonomous vehicles could be equipped with their own decentralized identity (DID). These DIDs enable the vehicle to interact autonomously with various services and infrastructures without human intervention."}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"How the process works"}),":"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Identity creation: An autonomous vehicle manufacturer generates a DID for each vehicle it produces. This DID serves as a digital identifier for the vehicle."}),"\n",(0,t.jsx)(i.li,{children:"Autonomous Interactions: The vehicle uses its DID to authenticate itself and communicate with intelligent road infrastructures, recharging services, parking payment systems, etc."}),"\n",(0,t.jsx)(i.li,{children:"Security and Privacy Management: The DID enables the vehicle to maintain high security and privacy, as it can prove its identity without revealing sensitive information."}),"\n",(0,t.jsx)(i.li,{children:"Updates and Maintenance: The DID can also be used to manage vehicle software updates, maintenance, and interactions with insurance companies and regulatory authorities."}),"\n",(0,t.jsx)(i.li,{children:"Transactions and Services: The vehicle can make and receive payments using its DID, enabling direct transactions for electric recharging or maintenance services."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Benefits"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Increased autonomy: The vehicle can operate more independently, reducing the need for human interaction."}),"\n",(0,t.jsx)(i.li,{children:"Security and reliability: DIDs provide a secure framework for transactions and communications."}),"\n",(0,t.jsx)(i.li,{children:"Traceability and Accountability: Every vehicle interaction can be traced through its DID, offering greater accountability in case of problems."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"did-document",children:"DID Document"}),"\n",(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.strong,{children:"Decentralized Identifier Document"})," contains key information that enables an entity (individual, organization, or object) to autonomously and securely manage its digital identity. Here are the typical elements found in a DID Document (not exclusive):"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"DID Identifier"}),"\nThis is the entity's unique identifier, typically in the form of a URI (Uniform Resource Identifier)."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:['Example : "id": "did:key',":zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",'"']}),"\n",(0,t.jsxs)(i.ol,{start:"2",children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"DID Context"}),"\nIt provides information about the DID context or schema, usually by referencing a URL where the DID specification is defined."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:['Example : "@context": "',(0,t.jsx)(i.a,{href:"https://www.w3.org/ns/did/v1",children:"https://www.w3.org/ns/did/v1"}),'".']}),"\n",(0,t.jsxs)(i.ol,{start:"3",children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Verification Method"}),"\nA DID document can include specific methods, such as public keys (a kind of digital key), that help verify the identity of the DID holder or authorize interactions with their digital identity. For example, a public key can validate a digital signature by ensuring it corresponds with the holder's private key, which is a unique digital key they possess. These verification methods can vary greatly."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Each Verification Key itself lists:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["An ",(0,t.jsx)(i.strong,{children:"ID"})," for the specific key"]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.strong,{children:"controller"}),": the identifier of the person or company with control over that key"]}),"\n",(0,t.jsxs)(i.li,{children:["The ",(0,t.jsx)(i.strong,{children:"type of cryptographic key"})]}),"\n",(0,t.jsxs)(i.li,{children:["The verification key material such as ",(0,t.jsx)(i.strong,{children:"publicKeyMultibase"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "@context": [\n    "https://www.w3.org/ns/did/v1",\n    {\n      "EcdsaSecp256k1VerificationKey2019": "https://w3id.org/security#EcdsaSecp256k1VerificationKey2019",\n      "publicKeyJwk": {\n        "@id": "https://w3id.org/security#publicKeyJwk",\n        "@type": "@json"\n      }\n    }\n  ],\n  "id": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",\n  "verificationMethod": [\n    {\n      "id": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3#zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",\n      "type": "EcdsaSecp256k1VerificationKey2019",\n      "controller": "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3",\n      "publicKeyJwk": {\n        "kty": "EC",\n        "crv": "secp256k1",\n        "x": "uVZWlVGe_zZ23csMuwOQJqz-u2HQ1cynU3bK6k6l__w",\n        "y": "ltrjoHVtNHm49or8n-MkWNwo39cGdF7BWZnXZg8QxUc"\n      }\n    }\n  ],\n  "authentication": [\n    "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3#zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3"\n  ],\n  "assertionMethod": [\n    "did:key:zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3#zQ3shs7auhJSmVJpiUbQWco6bxxEhSqWnVEPvaBHBRvBKw6Q3"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["You can use this tool to resolve a DID : ",(0,t.jsx)(i.a,{href:"https://resolver.identity.foundation/",children:"https://resolver.identity.foundation/"})]}),"\n",(0,t.jsxs)(i.h3,{id:"a-verification-method-the-did-method",children:["A verification method: the did",":key"," Method"]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsxs)(i.strong,{children:["did",":key"," method"]})," is a specific way to create and use DIDs that is focused on simplicity and universality. Here's an overview of the main features:\nDirect Incorporation of Public Key: In the did",":key"," method, the DID directly encodes the public key itself. This means the DID is self-describing and doesn't require an external resolution to a DID document."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Simplicity: It is one of the simplest forms of DID, as it doesn't rely on a blockchain or a distributed ledger. The did",":key"," method generates DIDs that are entirely independent of any registry, network, or company."]}),"\n",(0,t.jsxs)(i.li,{children:["Instantaneous Resolution: Because the public key information is embedded in the DID, resolving a did",":key"," DID to its DID document is a straightforward, computation-only process. There is no need to interact with a ledger or network to retrieve the DID document."]}),"\n",(0,t.jsxs)(i.li,{children:["Support for Multiple Cryptographic Algorithms: The did",":key"," method supports various cryptographic algorithms, allowing for generating different types of keys (like RSA, ECDSA, Ed25519, etc.)."]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["A did",":key"," DID looks like this: did:key",":z12ab34cd56ef78gh90i","..."]}),"\n",(0,t.jsxs)(i.p,{children:["The limitations of the did",":key"," method are:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["No Dynamic Updates: Since did",":key"," DIDs are static and don't reference an external source for their DID document, they cannot be updated. Any change in the key or other details requires the generation of a new DID."]}),"\n",(0,t.jsx)(i.li,{children:"No Privacy Layer: The method exposes the public key openly, which might not be desirable in all scenarios, especially where privacy is a concern."}),"\n"]}),"\n",(0,t.jsx)(i.h1,{id:"decentralized-identity-in-okp4-protocol",children:"Decentralized identity in OKP4 Protocol"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/academy/part-1/resources#ontology-how-its-represented-semantic-description",children:"OKP4 ontology"})})," is used to describe the dataverse. In the dataverse, resources are identified by their DID."]}),"\n",(0,t.jsx)(i.p,{children:"Understanding and distinguishing key roles is essential when claiming a resource in the OKP4 dataverse. Although these roles are distinct, they can be exercised by the same or different entities. Here's a detailed explanation of each role:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Registrant"}),": This entity initiates the process of declaring the resource on the blockchain. It is also responsible for the financial aspects of the process, including transaction fees. It is important to note that the Declarer can be any entity that is able and willing to declare the resource in the OKP4 protocol."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Holder"}),": This role is assigned to the DID of the resource itself. The holder embodies the digital identity of the resource in the dataverse, thus constituting a central point for any interaction or transaction concerning this resource."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Issuer"}),": The issuer, whose DID is linked to creating the Verifiable Credential, plays a decisive role. It ensures the authenticity and legitimacy of the resource's claim, guaranteeing its official recognition in the protocol."]}),"\n"]}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:"/img/content/academy/decentralised-identity-3.webp",alt:"Decentralised Identity and OKP4",style:{maxHeight:"340px"}})}),"\n",(0,t.jsx)(i.p,{children:"In the case of the declaration of a digital resource in the Dataverse, the Provider has three roles at the same time:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Issuer as he declares the metadata of its resource"}),"\n",(0,t.jsx)(i.li,{children:"Holder as he is the owner of the resource"}),"\n",(0,t.jsx)(i.li,{children:"Registrant as he declares the verifiable presentations in the OKP4 Protocol so that it can be used"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"In the case of a declaration of reputation, the roles are handled by distinct entities:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The Issuer is a trusted authority"}),"\n",(0,t.jsx)(i.li,{children:"The Holder is the Provider subject of the reputation claim"}),"\n",(0,t.jsx)(i.li,{children:"The Registrant can be the Provider, the Issuer, or a third-party"}),"\n"]}),"\n",(0,t.jsx)(s.Z,{quiz:o})]})}function m(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}}}]);