"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[85687],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=l(n),f=a,u=d["".concat(p,".").concat(f)]||d[f]||m[f]||o;return n?r.createElement(u,i(i({ref:e},c),{},{components:n})):r.createElement(u,i({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83462:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Untitled undefined type in okp4-objectarium Schema",s={unversionedId:"okp4-objectarium-instantiatemsg-definitions-compressionalgorithm",id:"okp4-objectarium-instantiatemsg-definitions-compressionalgorithm",title:"Untitled undefined type in okp4-objectarium Schema",description:"CompressionAlgorithm is an enumeration that defines the different compression algorithms supported for compressing the content of objects. The compression algorithm specified here are relevant algorithms for compressing data on-chain, which means that they are fast to compress and decompress, and have a low computational cost.",source:"@site/contracts/okp4-objectarium-instantiatemsg-definitions-compressionalgorithm.md",sourceDirName:".",slug:"/okp4-objectarium-instantiatemsg-definitions-compressionalgorithm",permalink:"/contracts/next/okp4-objectarium-instantiatemsg-definitions-compressionalgorithm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Snappy Schema",permalink:"/contracts/next/okp4-objectarium-instantiatemsg-definitions-compressionalgorithm-oneof-snappy"},next:{title:"MD5 Schema",permalink:"/contracts/next/okp4-objectarium-instantiatemsg-definitions-hashalgorithm-oneof-md5"}},p={},l=[{value:"CompressionAlgorithm Type",id:"compressionalgorithm-type",level:2}],c={toc:l};function m(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"untitled-undefined-type-in-okp4-objectarium-schema"},"Untitled undefined type in okp4-objectarium Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/instantiate/definitions/CompressionAlgorithm\n")),(0,a.kt)("p",null,"CompressionAlgorithm is an enumeration that defines the different compression algorithms supported for compressing the content of objects. The compression algorithm specified here are relevant algorithms for compressing data on-chain, which means that they are fast to compress and decompress, and have a low computational cost."),(0,a.kt)("p",null,"The order of the compression algorithms is based on their estimated computational cost (quite opinionated) during both compression and decompression, ranging from the lowest to the highest. This particular order is utilized to establish the default compression algorithm for storing an object."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown identifiability"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Allowed"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:n(78567).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,a.kt)("h2",{id:"compressionalgorithm-type"},"CompressionAlgorithm Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-instantiatemsg-definitions-compressionalgorithm"},"Details"),")"),(0,a.kt)("p",null,"one (and only one) of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-instantiatemsg-definitions-compressionalgorithm-oneof-passthrough",title:"check type definition"},"Passthrough"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-instantiatemsg-definitions-compressionalgorithm-oneof-snappy",title:"check type definition"},"Snappy")))))}m.isMDXComponent=!0},78567:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/files/okp4-objectarium-eada0cda6e11102840a1c57adfa7132e.json"}}]);