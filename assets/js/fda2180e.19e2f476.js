"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[15802],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),k=m(a),u=n,N=k["".concat(p,".").concat(u)]||k[u]||s[u]||l;return a?r.createElement(N,o(o({ref:e},d),{},{components:a})):r.createElement(N,o({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},56658:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={},o="Law Stone",i={unversionedId:"okp4-law-stone",id:"okp4-law-stone",title:"Law Stone",description:"Overview",source:"@site/contracts/okp4-law-stone.md",sourceDirName:".",slug:"/okp4-law-stone",permalink:"/contracts/next/okp4-law-stone",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Dataverse",permalink:"/contracts/next/okp4-dataverse"},next:{title:"Objectarium",permalink:"/contracts/next/okp4-objectarium"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"InstantiateMsg",id:"instantiatemsg",level:2},{value:"ExecuteMsg",id:"executemsg",level:2},{value:"ExecuteMsg::BreakStone",id:"executemsgbreakstone",level:3},{value:"QueryMsg",id:"querymsg",level:2},{value:"QueryMsg::Ask",id:"querymsgask",level:3},{value:"QueryMsg::Program",id:"querymsgprogram",level:3},{value:"QueryMsg::ProgramCode",id:"querymsgprogramcode",level:3},{value:"Responses",id:"responses",level:2},{value:"ask",id:"ask",level:3},{value:"program",id:"program",level:3},{value:"program_code",id:"program_code",level:3},{value:"Definitions",id:"definitions",level:2},{value:"Answer",id:"answer",level:3},{value:"Binary",id:"binary",level:3},{value:"Result",id:"result",level:3},{value:"Substitution",id:"substitution",level:3},{value:"Term",id:"term",level:3}],d={toc:m};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"law-stone"},"Law Stone"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"okp4-law-stone")," smart contract aims to provide GaaS (i.e. Governance as a Service) in any ",(0,n.kt)("a",{parentName:"p",href:"https://cosmos.network/"},"Cosmos blockchains")," using the ",(0,n.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm")," framework and the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.okp4.network/modules/next/logic"},"Logic")," OKP4 module."),(0,n.kt)("p",null,"This contract is built around a Prolog program describing the law by rules and facts. The law stone is immutable, this means it can only be questioned, there are no update mechanisms."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"okp4-law-stone")," responsibility is to guarantee the availability of its rules in order to question them, but not to ensure the rules application."),(0,n.kt)("p",null,"To ensure reliability over time, the associated Prolog program is stored and pinned in a ",(0,n.kt)("inlineCode",{parentName:"p"},"okp4-objectarium")," contract. Moreover, all the eventual loaded files must be stored in a ",(0,n.kt)("inlineCode",{parentName:"p"},"okp4-objectarium")," contract as well, allowing the contract to pin them."),(0,n.kt)("p",null,"To be able to free the underlying resources (i.e. objects in ",(0,n.kt)("inlineCode",{parentName:"p"},"okp4-objectarium"),") if not used anymore, the contract admin can break the stone."),(0,n.kt)("p",null,"\u27a1\ufe0f Checkout the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/okp4/contracts/tree/main/contracts/okp4-law-stone/examples/"},"examples")," for usage information."),(0,n.kt)("h2",{id:"instantiatemsg"},"InstantiateMsg"),(0,n.kt)("p",null,"Instantiate message"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"program")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"#binary"},"Binary")),". The Prolog program carrying law rules and facts.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"storage_address")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"string"),". The ",(0,n.kt)("inlineCode",{parentName:"td"},"okp4-objectarium")," contract address on which to store the law program.")))),(0,n.kt)("h2",{id:"executemsg"},"ExecuteMsg"),(0,n.kt)("p",null,"Execute messages"),(0,n.kt)("h3",{id:"executemsgbreakstone"},"ExecuteMsg::BreakStone"),(0,n.kt)("p",null,"Break the stone making this contract unusable, by clearing all the related resources: - Unpin all the pinned objects on ",(0,n.kt)("inlineCode",{parentName:"p"},"okp4-objectarium")," contracts, if any. - Forget the main program (i.e. or at least unpin it). Only the contract admin is authorized to break it, if any. If already broken, this is a no-op."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"literal"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"break_stone"'))))),(0,n.kt)("h2",{id:"querymsg"},"QueryMsg"),(0,n.kt)("p",null,"Query messages"),(0,n.kt)("h3",{id:"querymsgask"},"QueryMsg::Ask"),(0,n.kt)("p",null,"If not broken, ask the logic module the provided query with the law program loaded."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ask")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"object"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ask.query")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"string"),".")))),(0,n.kt)("h3",{id:"querymsgprogram"},"QueryMsg::Program"),(0,n.kt)("p",null,"If not broken, returns the law program location information."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"literal"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"program"'))))),(0,n.kt)("h3",{id:"querymsgprogramcode"},"QueryMsg::ProgramCode"),(0,n.kt)("p",null,"ProgramCode returns the law program code."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"literal"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'"program_code"'))))),(0,n.kt)("h2",{id:"responses"},"Responses"),(0,n.kt)("h3",{id:"ask"},"ask"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"property"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"answer")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("a",{parentName:"strong",href:"#answer"},"Answer"),"|","null"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"gas_used")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"integer"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"height")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"integer"),".")))),(0,n.kt)("h3",{id:"program"},"program"),(0,n.kt)("p",null,"ProgramResponse carry elements to locate the program in a ",(0,n.kt)("inlineCode",{parentName:"p"},"okp4-objectarium")," contract."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"property"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"object_id")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"string"),". The program object id in the ",(0,n.kt)("inlineCode",{parentName:"td"},"okp4-objectarium")," contract.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"storage_address")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"string"),". The ",(0,n.kt)("inlineCode",{parentName:"td"},"okp4-objectarium")," contract address on which the law program is stored.")))),(0,n.kt)("h3",{id:"program_code"},"program_code"),(0,n.kt)("p",null,"Binary is a wrapper around Vec","<","u8",">"," to add base64 de/serialization with serde. It also adds some helper methods to help encode inline."),(0,n.kt)("p",null,"This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec","<","u8",">",". See also ","<",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"},"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"),">","."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"string"),".")))),(0,n.kt)("h2",{id:"definitions"},"Definitions"),(0,n.kt)("h3",{id:"answer"},"Answer"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"property"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"has_more")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"boolean"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"results")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"Array","<",(0,n.kt)("a",{parentName:"strong",href:"#result"},"Result"),">"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"success")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"boolean"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"variables")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"Array","<","string",">"),".")))),(0,n.kt)("h3",{id:"binary"},"Binary"),(0,n.kt)("p",null,"A string containing Base64-encoded data."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"string"),".")))),(0,n.kt)("h3",{id:"result"},"Result"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"property"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"substitutions")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"Array","<",(0,n.kt)("a",{parentName:"strong",href:"#substitution"},"Substitution"),">"),".")))),(0,n.kt)("h3",{id:"substitution"},"Substitution"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"property"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"term")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"object"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"variable")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"string"),".")))),(0,n.kt)("h3",{id:"term"},"Term"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"property"),(0,n.kt)("th",{parentName:"tr",align:null},"description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"arguments")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"Array","<",(0,n.kt)("a",{parentName:"strong",href:"#term"},"Term"),">"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"(Required.) ")," ",(0,n.kt)("strong",{parentName:"td"},"string"),".")))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Rendered by ",(0,n.kt)("a",{parentName:"em",href:"https://fadroma.tech"},"Fadroma")," (",(0,n.kt)("a",{parentName:"em",href:"https://www.npmjs.com/package/@fadroma/schema"},"@fadroma/schema 1.1.0"),") from ",(0,n.kt)("inlineCode",{parentName:"em"},"okp4-law-stone.json")," (",(0,n.kt)("inlineCode",{parentName:"em"},"092608edf6c36d25"),")")))}s.isMDXComponent=!0}}]);