"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[6822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="cw-law-stone Schema",l={unversionedId:"cw-law-stone",id:"version-v1.0.0/cw-law-stone",title:"cw-law-stone Schema",description:"Overview",source:"@site/contracts_versioned_docs/version-v1.0.0/cw-law-stone.md",sourceDirName:".",slug:"/cw-law-stone",permalink:"/contracts/v1.0.0/cw-law-stone",draft:!1,tags:[],version:"v1.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in cw-law-stone Schema",permalink:"/contracts/v1.0.0/cw-law-stone-responses"},next:{title:"Untitled string in cw-storage Schema",permalink:"/contracts/v1.0.0/cw-storage-executemsg-definitions-binary"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"cw-law-stone Type",id:"cw-law-stone-type",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cw-law-stone-schema"},"cw-law-stone Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined\n")),(0,r.kt)("h1",{id:"cw-law-stone"},"CW Law Stone"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-law-stone")," smart contract aims to provide GaaS (i.e. Governance as a Service) in any ",(0,r.kt)("a",{parentName:"p",href:"https://cosmos.network/"},"Cosmos blockchains")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm")," framework and the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.okp4.network/modules/next/logic"},"Logic")," OKP4 module."),(0,r.kt)("p",null,"This contract is built around a Prolog program describing the law by rules and facts. The law stone is immutable, this means it can only been questioned, there is no update mechanisms."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-law-stone")," responsibility is to guarantee the availability of its rules in order to question them, but not to ensure the rules application."),(0,r.kt)("p",null,"To ensure reliability over time, the associated Prolog program is stored and pinned in a ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-storage")," contract. Moreover, all the eventual loaded files must be stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-storage")," contract as well, allowing the contract to pin them."),(0,r.kt)("p",null,"To be able to free the underlying resources (i.e. objects in ",(0,r.kt)("inlineCode",{parentName:"p"},"cw-storage"),") if not used anymore, the contract admin can break the stone."),(0,r.kt)("p",null,"\u27a1\ufe0f Checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/contracts/tree/main/contracts/cw-law-stone/exemples/"},"examples")," for usage information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:n(9317).Z,title:"open original schema"},"cw-law-stone.json"))))),(0,r.kt)("h2",{id:"cw-law-stone-type"},"cw-law-stone Type"),(0,r.kt)("p",null,"unknown (",(0,r.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-law-stone"},"cw-law-stone"),")"))}m.isMDXComponent=!0},9317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/cw-law-stone-7bb9d4efa48cf65f7792d19a29e989c8.json"}}]);