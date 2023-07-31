"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[68079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=f(n),s=i,u=m["".concat(l,".").concat(s)]||m[s]||c[s]||a;return n?r.createElement(u,p(p({ref:t},d),{},{components:n})):r.createElement(u,p({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var f=2;f<a;f++)p[f]=n[f];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>f});var r=n(87462),i=(n(67294),n(3905));const a={},p="Prefixed Schema",o={unversionedId:"okp4-cognitarium-executemsg-definitions-iri-oneof-prefixed",id:"okp4-cognitarium-executemsg-definitions-iri-oneof-prefixed",title:"Prefixed Schema",description:"An IRI prefixed with a prefix. The prefixed IRI is expanded to a full IRI using the prefix definition specified in the query. For example, the prefixed IRI rdf//www.w3.org/1999/02/22-rdf-syntax-ns#type.",source:"@site/contracts/okp4-cognitarium-executemsg-definitions-iri-oneof-prefixed.md",sourceDirName:".",slug:"/okp4-cognitarium-executemsg-definitions-iri-oneof-prefixed",permalink:"/contracts/next/okp4-cognitarium-executemsg-definitions-iri-oneof-prefixed",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled string in okp4-cognitarium Schema",permalink:"/contracts/next/okp4-cognitarium-executemsg-definitions-iri-oneof-prefixed-properties-prefixed"},next:{title:"IRI Schema",permalink:"/contracts/next/okp4-cognitarium-executemsg-definitions-iri"}},l={},f=[{value:"0 Type",id:"0-type",level:2},{value:"prefixed",id:"prefixed",level:2},{value:"prefixed Type",id:"prefixed-type",level:3}],d={toc:f};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prefixed-schema"},"Prefixed Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/execute/definitions/IRI/oneOf/0\n")),(0,i.kt)("p",null,"An IRI prefixed with a prefix. The prefixed IRI is expanded to a full IRI using the prefix definition specified in the query. For example, the prefixed IRI ",(0,i.kt)("inlineCode",{parentName:"p"},"rdf:type")," is expanded to ",(0,i.kt)("inlineCode",{parentName:"p"},"http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:n(38426).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,i.kt)("h2",{id:"0-type"},"0 Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"object")," (",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-definitions-iri-oneof-prefixed"},"Prefixed"),")"),(0,i.kt)("h1",{id:"0-properties"},"0 Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#prefixed"},"prefixed")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-executemsg-definitions-iri-oneof-prefixed-properties-prefixed",title:"undefined#/execute/definitions/IRI/oneOf/0/properties/prefixed"},"okp4-cognitarium"))))),(0,i.kt)("h2",{id:"prefixed"},"prefixed"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"prefixed")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-executemsg-definitions-iri-oneof-prefixed-properties-prefixed",title:"undefined#/execute/definitions/IRI/oneOf/0/properties/prefixed"},"okp4-cognitarium")))),(0,i.kt)("h3",{id:"prefixed-type"},"prefixed Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")))}c.isMDXComponent=!0},38426:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/okp4-cognitarium-38b87179f0c3c7c6f7b35f81306caf25.json"}}]);