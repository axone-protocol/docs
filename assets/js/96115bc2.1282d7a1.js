"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[84835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},o="Untitled string in okp4-law-stone Schema",l={unversionedId:"okp4-law-stone-instantiatemsg-definitions-binary",id:"version-v2.1.0/okp4-law-stone-instantiatemsg-definitions-binary",title:"Untitled string in okp4-law-stone Schema",description:"Binary is a wrapper around Vec&lt;u8&gt; to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-law-stone-instantiatemsg-definitions-binary.md",sourceDirName:".",slug:"/okp4-law-stone-instantiatemsg-definitions-binary",permalink:"/contracts/okp4-law-stone-instantiatemsg-definitions-binary",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ExecuteMsg Schema",permalink:"/contracts/okp4-law-stone-executemsg"},next:{title:"Untitled undefined type in okp4-law-stone Schema",permalink:"/contracts/okp4-law-stone-instantiatemsg-definitions"}},s={},p=[{value:"Binary Type",id:"binary-type",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"untitled-string-in-okp4-law-stone-schema"},"Untitled string in okp4-law-stone Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/instantiate/definitions/Binary\n")),(0,r.kt)("p",null,"Binary is a wrapper around ",(0,r.kt)("code",null,"Vec","<","u8",">")," to add base64 de/serialization with serde. It also adds some helper methods to help encode inline."),(0,r.kt)("p",null,"This is only needed as serde-json-{core,wasm} has a horrible encoding for ",(0,r.kt)("code",null,"Vec","<","u8",">"),". See also ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"},"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:n(83978).Z,title:"open original schema"},"okp4-law-stone.json*"))))),(0,r.kt)("h2",{id:"binary-type"},"Binary Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")))}d.isMDXComponent=!0},83978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/okp4-law-stone-f26aee4b82425895e7f93cb468b1b639.json"}}]);