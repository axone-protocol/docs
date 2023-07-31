"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[69678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(n),k=a,u=d["".concat(s,".").concat(k)]||d[k]||c[k]||p;return n?r.createElement(u,i(i({ref:t},m),{},{components:n})):r.createElement(u,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const p={},i="ObjectResponse Schema",o={unversionedId:"okp4-objectarium-responses-objectresponse",id:"okp4-objectarium-responses-objectresponse",title:"ObjectResponse Schema",description:"ObjectResponse is the response of the Object query.",source:"@site/contracts/okp4-objectarium-responses-objectresponse.md",sourceDirName:".",slug:"/okp4-objectarium-responses-objectresponse",permalink:"/contracts/next/okp4-objectarium-responses-objectresponse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in okp4-objectarium Schema",permalink:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-size"},next:{title:"Passthrough Schema",permalink:"/contracts/next/okp4-objectarium-responses-objectsresponse-definitions-compressionalgorithm-oneof-passthrough"}},s={},l=[{value:"object Type",id:"object-type",level:2},{value:"compressed_size",id:"compressed_size",level:2},{value:"compressed_size Type",id:"compressed_size-type",level:3},{value:"compression_algorithm",id:"compression_algorithm",level:2},{value:"compression_algorithm Type",id:"compression_algorithm-type",level:3},{value:"id",id:"id",level:2},{value:"id Type",id:"id-type",level:3},{value:"is_pinned",id:"is_pinned",level:2},{value:"is_pinned Type",id:"is_pinned-type",level:3},{value:"owner",id:"owner",level:2},{value:"owner Type",id:"owner-type",level:3},{value:"size",id:"size",level:2},{value:"size Type",id:"size-type",level:3},{value:"Definitions group CompressionAlgorithm",id:"definitions-group-compressionalgorithm",level:2},{value:"Definitions group Uint128",id:"definitions-group-uint128",level:2}],m={toc:l};function c(e){let{components:t,...p}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"objectresponse-schema"},"ObjectResponse Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/object\n")),(0,a.kt)("p",null,"ObjectResponse is the response of the Object query."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:n(78567).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,a.kt)("h2",{id:"object-type"},"object Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")," (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse"},"ObjectResponse"),")"),(0,a.kt)("h1",{id:"object-properties"},"object Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#compressed_size"},"compressed","_","size")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compressed_size",title:"undefined#/responses/object/properties/compressed_size"},"okp4-objectarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#compression_algorithm"},"compression","_","algorithm")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compression_algorithm",title:"undefined#/responses/object/properties/compression_algorithm"},"okp4-objectarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#id"},"id")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-id",title:"undefined#/responses/object/properties/id"},"okp4-objectarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#is_pinned"},"is","_","pinned")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-is_pinned",title:"undefined#/responses/object/properties/is_pinned"},"okp4-objectarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#owner"},"owner")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-owner",title:"undefined#/responses/object/properties/owner"},"okp4-objectarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#size"},"size")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-size",title:"undefined#/responses/object/properties/size"},"okp4-objectarium"))))),(0,a.kt)("h2",{id:"compressed_size"},"compressed","_","size"),(0,a.kt)("p",null,"The size of the object when compressed. If the object is not compressed, the value is the same as ",(0,a.kt)("inlineCode",{parentName:"p"},"size"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compressed_size")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compressed_size"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compressed_size",title:"undefined#/responses/object/properties/compressed_size"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"compressed_size-type"},"compressed","_","size Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compressed_size"},"Details"),")"),(0,a.kt)("p",null,"all of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compressed_size-allof-0",title:"check type definition"},"Untitled undefined type in okp4-objectarium"))),(0,a.kt)("h2",{id:"compression_algorithm"},"compression","_","algorithm"),(0,a.kt)("p",null,"The compression algorithm used to compress the content of the object."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compression_algorithm")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compression_algorithm"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compression_algorithm",title:"undefined#/responses/object/properties/compression_algorithm"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"compression_algorithm-type"},"compression","_","algorithm Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compression_algorithm"},"Details"),")"),(0,a.kt)("p",null,"all of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-compression_algorithm-allof-0",title:"check type definition"},"Untitled undefined type in okp4-objectarium"))),(0,a.kt)("h2",{id:"id"},"id"),(0,a.kt)("p",null,"The id of the object."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"id")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-id",title:"undefined#/responses/object/properties/id"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"id-type"},"id Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h2",{id:"is_pinned"},"is","_","pinned"),(0,a.kt)("p",null,"Tells if the object is pinned by at least one address."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"is_pinned")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-is_pinned",title:"undefined#/responses/object/properties/is_pinned"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"is_pinned-type"},"is","_","pinned Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h2",{id:"owner"},"owner"),(0,a.kt)("p",null,"The owner of the object."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"owner")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-owner",title:"undefined#/responses/object/properties/owner"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"owner-type"},"owner Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h2",{id:"size"},"size"),(0,a.kt)("p",null,"The size of the object."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"size")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-size"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-size",title:"undefined#/responses/object/properties/size"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"size-type"},"size Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-size"},"Details"),")"),(0,a.kt)("p",null,"all of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/contracts/next/okp4-objectarium-responses-objectresponse-properties-size-allof-0",title:"check type definition"},"Untitled undefined type in okp4-objectarium"))),(0,a.kt)("h1",{id:"objectresponse-definitions"},"ObjectResponse Definitions"),(0,a.kt)("h2",{id:"definitions-group-compressionalgorithm"},"Definitions group CompressionAlgorithm"),(0,a.kt)("p",null,"Reference this group by using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"$ref":"undefined#/responses/object/definitions/CompressionAlgorithm"}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined by")))),(0,a.kt)("h2",{id:"definitions-group-uint128"},"Definitions group Uint128"),(0,a.kt)("p",null,"Reference this group by using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"$ref":"undefined#/responses/object/definitions/Uint128"}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined by")))))}c.isMDXComponent=!0},78567:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/okp4-objectarium-eada0cda6e11102840a1c57adfa7132e.json"}}]);