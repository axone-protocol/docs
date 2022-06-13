"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[468],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},926:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return d}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),s=["components"],r={sidebar_position:8},l="Dataverse",p={unversionedId:"whitepaper/dataverse",id:"whitepaper/dataverse",title:"Dataverse",description:"Wallets/ID",source:"@site/docs/whitepaper/dataverse.md",sourceDirName:"whitepaper",slug:"/whitepaper/dataverse",permalink:"/docs/whitepaper/dataverse",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/dataverse.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Data Spaces",permalink:"/docs/whitepaper/data-spaces"},next:{title:"Roles",permalink:"/docs/whitepaper/roles"}},c={},d=[{value:"Wallets/ID",id:"walletsid",level:2},{value:"Portal",id:"portal",level:2},{value:"Catalogs",id:"catalogs",level:2},{value:"Files Deposit",id:"files-deposit",level:2},{value:"Metadata extraction",id:"metadata-extraction",level:2},{value:"Data Applications",id:"data-applications",level:2},{value:"Other applications",id:"other-applications",level:2},{value:"OKP4 Block explorer",id:"okp4-block-explorer",level:3},{value:"OKP4 Design System",id:"okp4-design-system",level:3},{value:"OKP4 Discord bot",id:"okp4-discord-bot",level:3}],u={toc:d};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dataverse"},"Dataverse"),(0,i.kt)("h2",{id:"walletsid"},"Wallets/ID"),(0,i.kt)("p",null,"To manage identities and associated assets circulating in the OKP4 ecosystem (KNOW and other coins that will emerge in the future), a non-custodial wallet application is necessary."),(0,i.kt)("p",null,"It means that the user controls his keys."),(0,i.kt)("p",null,"This enables anyone to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a private key and wallet"),(0,i.kt)("li",{parentName:"ul"},"Import/export identities from/to other SSI systems (self-sovereign identity)"),(0,i.kt)("li",{parentName:"ul"},"Control assets on the OKP4 ecosystem (send, stake, swap)"),(0,i.kt)("li",{parentName:"ul"},"Send assets out of the OKP4 ecosystem"),(0,i.kt)("li",{parentName:"ul"},"Create and manage multisig wallets"),(0,i.kt)("li",{parentName:"ul"},"Control datasets and services indexed in the ecosystem"),(0,i.kt)("li",{parentName:"ul"},"Control participation in Data Spaces"),(0,i.kt)("li",{parentName:"ul"},"Vote on DAO governance"),(0,i.kt)("li",{parentName:"ul"},"Vote on Data Space governance if eligible"),(0,i.kt)("li",{parentName:"ul"},"Curate data and services"),(0,i.kt)("li",{parentName:"ul"},"Create and interact with smart contracts")),(0,i.kt)("p",null,"Cosmos-native wallets such as ",(0,i.kt)("a",{parentName:"p",href:"https://wallet.keplr.app"},"Keplr")," will be able to perform most of these functions.\nBut functional doesn't mean optimal.\nIn terms of UX, many OKP4-specific actions and features will be necessary."),(0,i.kt)("p",null,"What if you could automatically import web2 platform data into your sovereign wallet while you interact with apps and pages in your browser? What if you could watch your data usage and token analytics in real time in your wallet? What if you could navigate across the graphs of your contributions? And many other data-specific features that generic-purpose wallets can't cover."),(0,i.kt)("p",null,"The OKP4 wallet will take the form of a web page and a dedicated browser extension. It will be extended to a smartphone application."),(0,i.kt)("h2",{id:"portal"},"Portal"),(0,i.kt)("p",null,"The OKP4 portal allows to interact with dataverse. It aggregates the dataverse services such as wallets, catalog, files deposit, dapps, block explorer and more."),(0,i.kt)("p",null,"Although parts of the portal is open (especially for content and support), each user can log in to get access to all the services."),(0,i.kt)("p",null,"Through the OKP4 portal, a user is informed in real time of the activities related to the Data Space of which he is a member and the datasets or services he provides. Thus, users follow their contribution to the Knowledge creation and the associated retributions.  "),(0,i.kt)("p",null,"The portal is customized according to the membership of the different Data Spaces and the roles of the user in them."),(0,i.kt)("h2",{id:"catalogs"},"Catalogs"),(0,i.kt)("p",null,"The catalog lists the datasets and services declared in the protocol."),(0,i.kt)("p",null,"As a reminder, a dataset or a service can participate in several Data Spaces by being stored at the source."),(0,i.kt)("p",null,"A user can see the datasets and services of the Data Spaces in which he participates but also those of the open Data Spaces. The user can apply different filters such as type (dataset or service), date of declaration, tags, spatial or temporal coverage."),(0,i.kt)("p",null,"The catalog includes a search engine and a recommendation system."),(0,i.kt)("p",null,"The catalog is available in several visualizations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cards")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"List")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Knowledge Graph"),": The knowledge graph represents the link between the entities (datasets and services) to create knowledge. It allows to visualize the contribution of datasets and services in the generation of new knowledge. This knownledge is expressed by a ",(0,i.kt)("a",{parentName:"li",href:"okp4-blockchain-architecture#ontology"},"formal ontology"),".")),(0,i.kt)("p",null,"According to the attached consents an element and its metadata will be visible or not."),(0,i.kt)("h2",{id:"files-deposit"},"Files Deposit"),(0,i.kt)("p",null,"OKP4 Files Deposit allows data providers to declare a dataset into the OKP4 Protocol.  "),(0,i.kt)("p",null,"The data provider can fill in the contextual metadata of the dataset. This information will allow other users to understand how the dataset is constructed. The completion of the metadata will improve the ranking of a dataset in the search engine of the catalog."),(0,i.kt)("p",null,"A data provider is not necessarily the owner of the dataset if it has permission to declare it in the protocole."),(0,i.kt)("p",null,"Each file deposit is a transaction that must be signed by a wallet. The data provider pays a transaction fee."),(0,i.kt)("h2",{id:"metadata-extraction"},"Metadata extraction"),(0,i.kt)("p",null,"Neque eius labore ipsum velit dolorem. Etincidunt est etincidunt velit modi dolore magnam adipisci. Neque est velit adipisci dolore est ipsum dolor. Quiquia sed porro quaerat dolore tempora sit. Eius est adipisci velit magnam quiquia."),(0,i.kt)("h2",{id:"data-applications"},"Data Applications"),(0,i.kt)("p",null,"Data applications are a suite of software that leverages outputs from a (or many) Data Space."),(0,i.kt)("p",null,"It can take many forms. For exemple it could be a BI software that enables data visualization, a push API, a script that performs actions automatically (e.g. a bot), etc."),(0,i.kt)("p",null,"The data application will be the medium through which tokens flow into the OKP4 ecosystem. Some data applications will enable end-users to interact with the blockchain through their wallets (thus paying on a per-transaction basis) while some others will have custom off-chain business model (such as a subscription model of exemple) and pay the ecosystem for the knowledge it creates."),(0,i.kt)("p",null,"Data Applications have dedicated identities and may have dedicated application treasury to pay for services on behalf of end-users, if enabled. This enables some web3-enabled applications to have seamless, web2-like UX."),(0,i.kt)("h2",{id:"other-applications"},"Other applications"),(0,i.kt)("h3",{id:"okp4-block-explorer"},"OKP4 Block explorer"),(0,i.kt)("p",null,"Block explorers are tools that help you understand what is happening on a blockchain. The OKP4 open-source explorer goes further than other explorers in the Cosmos ecosystem by making it possible for everyone to discover, understand and visualise all transactions that have been committed on the OKP4 mainnet network according to their business dimension:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data Space creation"),(0,i.kt)("li",{parentName:"ul"},"Data deposit and registration"),(0,i.kt)("li",{parentName:"ul"},"Data service executions"),(0,i.kt)("li",{parentName:"ul"},"Workflow executions"),(0,i.kt)("li",{parentName:"ul"},"metadata (ontology)"),(0,i.kt)("li",{parentName:"ul"},"Rule book"),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h3",{id:"okp4-design-system"},"OKP4 Design System"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/okp4/ui"},"OKP4 Design System")," is an open-source set of components and resources created to facilitate the design and development of web interfaces in the OKP4 ecosystem for everyone. This design system serves as a reference for teams working around the OKP4 ecosystem, enabling them to design and develop web interfaces with speed, consistency and quality."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OKP4 Design System",src:a(7095).Z,width:"3104",height:"1974"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"OKP4 Design System",src:a(1990).Z,width:"3104",height:"1974"})),(0,i.kt)("p",null,"The OKP4 Design System follows the ",(0,i.kt)("a",{parentName:"p",href:"https://atomicdesign.bradfrost.com/"},"Atomic Design methodology"),", a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner."),(0,i.kt)("div",{class:"text--center"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"/img/content/atomic-design.png",alt:"Atomic Design",width:"600"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Atoms"),": Atoms are the smallest possible components. The OKP4 Design System offers the basic building blocks for building interfaces such as: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/98"},"typography"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/96"},"themes"),", language, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/119"},"buttons"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/179"},"toaster"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/okp4/ui/issues/120"},"cards"),", etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Molecules"),":  Molecules are the composition of one or more components of atoms."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Organisms"),": Organisms are the combination of molecules that work together or, if necessary, with atoms, to form more elaborate interfaces. The OKP4 Design System offers advanced organisms for the OKP4 ecosystem like a Token Faucet, a Web Wallet, a Dataverse Explorer...")),(0,i.kt)("h3",{id:"okp4-discord-bot"},"OKP4 Discord bot"),(0,i.kt)("p",null,"The OKP4 Discord bot is a general-purpose open-source bot that facilitates the integration of any blockchain of the Cosmos ecosystem into a ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/"},"Discord")," server."),(0,i.kt)("p",null,"The main functionality offered by the bot is to allow the request of tokens for a ",(0,i.kt)("a",{parentName:"p",href:"https://cosmos.network/"},"Cosmos")," testnet account address for free using a discord command on a channel."),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u25a0 John \u2014 Today 16:14\n$request okp41nc75uehak9a5f5slexfpxrxy5vh8e8phzmrq6e\n \n\u25a0 okp4-discord-bot \u2014 Today 16:15\n@John, \u2705 $tx_info 5737BD7D25F0E4C6900412B06945722C664F1AD5A58BD8CFBDEB499B8B0A0602\n")),(0,i.kt)("p",null,"Other features are also supported including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$node_status"),": Displays the current status of the node (configured)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$balance"),": Show address balance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$tx_info"),": Show transaction information for a specific transaction ID")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u25a0 John \u2014 Today 16:14\n$tx_info 5737BD7D25F0E4C6900412B06945722C664F1AD5A58BD8CFBDEB499B8B0A0602\n \n\u25a0 okp4-discord-bot \u2014 Today 16:15\n--------  ----------------------------------------------------------------\ntxhash    5737BD7D25F0E4C6900412B06945722C664F1AD5A58BD8CFBDEB499B8B0A0602\nstatus    Success\nheight    1072882\ntimestamp 2022-06-13 16:12\ngas       57530 / 200000\nfee       0 KNOW\nmemo      Sent by \xf8kp4 faucet\n--------  ----------------------------------------------------------------\n@Type     /cosmos.bank.v1beta1.MsgSend\nFrom      okp41rhd8744u4vqvcjuvyfm8fea4k9mefe3k57qz27\nTo        okp41nc75uehak9a5f5slexfpxrxy5vh8e8phzmrq6e\nAmount    100 UKNOW\n")))}h.isMDXComponent=!0},7095:function(e,t,a){t.Z=a.p+"assets/images/okp4-design-system-overview-1-e9c93e08f3d3ff6132bc8f8a79cdb2bc.png"},1990:function(e,t,a){t.Z=a.p+"assets/images/okp4-design-system-overview-2-dd03ace17269c71ed9ba11e954f969dd.png"}}]);