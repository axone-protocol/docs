"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[76662],{3905:(t,e,i)=>{i.d(e,{Zo:()=>s,kt:()=>d});var a=i(67294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e){if(null==t)return{};var i,a,n=function(t,e){if(null==t)return{};var i,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)i=r[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var o=a.createContext({}),m=function(t){var e=a.useContext(o),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},s=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},_=a.forwardRef((function(t,e){var i=t.components,n=t.mdxType,r=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),_=m(i),d=n,c=_["".concat(o,".").concat(d)]||_[d]||u[d]||r;return i?a.createElement(c,l(l({ref:e},s),{},{components:i})):a.createElement(c,l({ref:e},s))}));function d(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=i.length,l=new Array(r);l[0]=_;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var m=2;m<r;m++)l[m]=i[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}_.displayName="MDXCreateElement"},49207:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=i(87462),n=(i(67294),i(3905));const r={},l="StoreLimitsInput Schema",p={unversionedId:"okp4-cognitarium-instantiatemsg-definitions-storelimitsinput",id:"okp4-cognitarium-instantiatemsg-definitions-storelimitsinput",title:"StoreLimitsInput Schema",description:"Contains requested limitations regarding store usages.",source:"@site/contracts/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput.md",sourceDirName:".",slug:"/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput",permalink:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in okp4-cognitarium Schema",permalink:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count"},next:{title:"Untitled string in okp4-cognitarium Schema",permalink:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-uint128"}},o={},m=[{value:"StoreLimitsInput Type",id:"storelimitsinput-type",level:2},{value:"max_byte_size",id:"max_byte_size",level:2},{value:"max_byte_size Type",id:"max_byte_size-type",level:3},{value:"max_byte_size Default Value",id:"max_byte_size-default-value",level:3},{value:"max_insert_data_byte_size",id:"max_insert_data_byte_size",level:2},{value:"max_insert_data_byte_size Type",id:"max_insert_data_byte_size-type",level:3},{value:"max_insert_data_byte_size Default Value",id:"max_insert_data_byte_size-default-value",level:3},{value:"max_insert_data_triple_count",id:"max_insert_data_triple_count",level:2},{value:"max_insert_data_triple_count Type",id:"max_insert_data_triple_count-type",level:3},{value:"max_insert_data_triple_count Default Value",id:"max_insert_data_triple_count-default-value",level:3},{value:"max_query_limit",id:"max_query_limit",level:2},{value:"max_query_limit Type",id:"max_query_limit-type",level:3},{value:"max_query_limit Constraints",id:"max_query_limit-constraints",level:3},{value:"max_query_limit Default Value",id:"max_query_limit-default-value",level:3},{value:"max_query_variable_count",id:"max_query_variable_count",level:2},{value:"max_query_variable_count Type",id:"max_query_variable_count-type",level:3},{value:"max_query_variable_count Constraints",id:"max_query_variable_count-constraints",level:3},{value:"max_query_variable_count Default Value",id:"max_query_variable_count-default-value",level:3},{value:"max_triple_byte_size",id:"max_triple_byte_size",level:2},{value:"max_triple_byte_size Type",id:"max_triple_byte_size-type",level:3},{value:"max_triple_byte_size Default Value",id:"max_triple_byte_size-default-value",level:3},{value:"max_triple_count",id:"max_triple_count",level:2},{value:"max_triple_count Type",id:"max_triple_count-type",level:3},{value:"max_triple_count Default Value",id:"max_triple_count-default-value",level:3}],s={toc:m};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"storelimitsinput-schema"},"StoreLimitsInput Schema"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/instantiate/definitions/StoreLimitsInput\n")),(0,n.kt)("p",null,"Contains requested limitations regarding store usages."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,n.kt)("td",{parentName:"tr",align:"left"},"none"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{target:"_blank",href:i(38426).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,n.kt)("h2",{id:"storelimitsinput-type"},"StoreLimitsInput Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"object")," (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput"},"StoreLimitsInput"),")"),(0,n.kt)("h1",{id:"storelimitsinput-properties"},"StoreLimitsInput Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#max_byte_size"},"max","_","byte","_","size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_byte_size"},"okp4-cognitarium"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#max_insert_data_byte_size"},"max","_","insert","_","data","_","byte","_","size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_insert_data_byte_size"},"okp4-cognitarium"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#max_insert_data_triple_count"},"max","_","insert","_","data","_","triple","_","count")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_insert_data_triple_count"},"okp4-cognitarium"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#max_query_limit"},"max","_","query","_","limit")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"integer")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_query_limit",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_query_limit"},"okp4-cognitarium"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#max_query_variable_count"},"max","_","query","_","variable","_","count")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"integer")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_query_variable_count",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_query_variable_count"},"okp4-cognitarium"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#max_triple_byte_size"},"max","_","triple","_","byte","_","size")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_triple_byte_size"},"okp4-cognitarium"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"#max_triple_count"},"max","_","triple","_","count")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,n.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_triple_count"},"okp4-cognitarium"))))),(0,n.kt)("h2",{id:"max_byte_size"},"max","_","byte","_","size"),(0,n.kt)("p",null,"The maximum number of bytes the store can contains. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. Default to ","[","Uint128::MAX] if not set, which can be considered as no limit."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"max_byte_size")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"is optional")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type: merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size"},"Details"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"cannot be null")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"defined in: ",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_byte_size"},"okp4-cognitarium")))),(0,n.kt)("h3",{id:"max_byte_size-type"},"max","_","byte","_","size Type"),(0,n.kt)("p",null,"merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size"},"Details"),")"),(0,n.kt)("p",null,"all of"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_byte_size-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,n.kt)("h3",{id:"max_byte_size-default-value"},"max","_","byte","_","size Default Value"),(0,n.kt)("p",null,"The default value is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"340282366920938463463374607431768211455"\n')),(0,n.kt)("h2",{id:"max_insert_data_byte_size"},"max","_","insert","_","data","_","byte","_","size"),(0,n.kt)("p",null,"The maximum number of bytes an insert data query can contains. Default to ","[","Uint128::MAX] if not set, which can be considered as no limit."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"max_insert_data_byte_size")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"is optional")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type: merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size"},"Details"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"cannot be null")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"defined in: ",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_insert_data_byte_size"},"okp4-cognitarium")))),(0,n.kt)("h3",{id:"max_insert_data_byte_size-type"},"max","_","insert","_","data","_","byte","_","size Type"),(0,n.kt)("p",null,"merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size"},"Details"),")"),(0,n.kt)("p",null,"all of"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_byte_size-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,n.kt)("h3",{id:"max_insert_data_byte_size-default-value"},"max","_","insert","_","data","_","byte","_","size Default Value"),(0,n.kt)("p",null,"The default value is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"340282366920938463463374607431768211455"\n')),(0,n.kt)("h2",{id:"max_insert_data_triple_count"},"max","_","insert","_","data","_","triple","_","count"),(0,n.kt)("p",null,"The maximum number of triples an insert data query can contains (after parsing). Default to ","[","Uint128::MAX] if not set, which can be considered as no limit."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"max_insert_data_triple_count")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"is optional")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type: merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count"},"Details"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"cannot be null")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"defined in: ",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_insert_data_triple_count"},"okp4-cognitarium")))),(0,n.kt)("h3",{id:"max_insert_data_triple_count-type"},"max","_","insert","_","data","_","triple","_","count Type"),(0,n.kt)("p",null,"merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count"},"Details"),")"),(0,n.kt)("p",null,"all of"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_insert_data_triple_count-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,n.kt)("h3",{id:"max_insert_data_triple_count-default-value"},"max","_","insert","_","data","_","triple","_","count Default Value"),(0,n.kt)("p",null,"The default value is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"340282366920938463463374607431768211455"\n')),(0,n.kt)("h2",{id:"max_query_limit"},"max","_","query","_","limit"),(0,n.kt)("p",null,"The maximum limit of a query, i.e. the maximum number of triples returned by a select query. Default to 30 if not set."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"max_query_limit")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"is optional")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type: ",(0,n.kt)("inlineCode",{parentName:"p"},"integer"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"cannot be null")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"defined in: ",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_query_limit",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_query_limit"},"okp4-cognitarium")))),(0,n.kt)("h3",{id:"max_query_limit-type"},"max","_","query","_","limit Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"integer")),(0,n.kt)("h3",{id:"max_query_limit-constraints"},"max","_","query","_","limit Constraints"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"minimum"),": the value of this number must greater than or equal to: ",(0,n.kt)("inlineCode",{parentName:"p"},"0")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"unknown format"),": the value of this string must follow the format: ",(0,n.kt)("inlineCode",{parentName:"p"},"uint32")),(0,n.kt)("h3",{id:"max_query_limit-default-value"},"max","_","query","_","limit Default Value"),(0,n.kt)("p",null,"The default value is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"30\n")),(0,n.kt)("h2",{id:"max_query_variable_count"},"max","_","query","_","variable","_","count"),(0,n.kt)("p",null,"The maximum number of variables a query can select. Default to 30 if not set."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"max_query_variable_count")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"is optional")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type: ",(0,n.kt)("inlineCode",{parentName:"p"},"integer"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"cannot be null")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"defined in: ",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_query_variable_count",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_query_variable_count"},"okp4-cognitarium")))),(0,n.kt)("h3",{id:"max_query_variable_count-type"},"max","_","query","_","variable","_","count Type"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"integer")),(0,n.kt)("h3",{id:"max_query_variable_count-constraints"},"max","_","query","_","variable","_","count Constraints"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"minimum"),": the value of this number must greater than or equal to: ",(0,n.kt)("inlineCode",{parentName:"p"},"0")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"unknown format"),": the value of this string must follow the format: ",(0,n.kt)("inlineCode",{parentName:"p"},"uint32")),(0,n.kt)("h3",{id:"max_query_variable_count-default-value"},"max","_","query","_","variable","_","count Default Value"),(0,n.kt)("p",null,"The default value is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"30\n")),(0,n.kt)("h2",{id:"max_triple_byte_size"},"max","_","triple","_","byte","_","size"),(0,n.kt)("p",null,"The maximum number of bytes the store can contains for a single triple. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. The limit is used to prevent storing very large triples, especially literals. Default to ","[","Uint128::MAX] if not set, which can be considered as no limit."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"max_triple_byte_size")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"is optional")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type: merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size"},"Details"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"cannot be null")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"defined in: ",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_triple_byte_size"},"okp4-cognitarium")))),(0,n.kt)("h3",{id:"max_triple_byte_size-type"},"max","_","triple","_","byte","_","size Type"),(0,n.kt)("p",null,"merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size"},"Details"),")"),(0,n.kt)("p",null,"all of"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_byte_size-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,n.kt)("h3",{id:"max_triple_byte_size-default-value"},"max","_","triple","_","byte","_","size Default Value"),(0,n.kt)("p",null,"The default value is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"340282366920938463463374607431768211455"\n')),(0,n.kt)("h2",{id:"max_triple_count"},"max","_","triple","_","count"),(0,n.kt)("p",null,"The maximum number of triples the store can contains. Default to ","[","Uint128::MAX] if not set, which can be considered as no limit."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"max_triple_count")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"is optional")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Type: merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count"},"Details"),")")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"cannot be null")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"defined in: ",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count",title:"undefined#/instantiate/definitions/StoreLimitsInput/properties/max_triple_count"},"okp4-cognitarium")))),(0,n.kt)("h3",{id:"max_triple_count-type"},"max","_","triple","_","count Type"),(0,n.kt)("p",null,"merged type (",(0,n.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count"},"Details"),")"),(0,n.kt)("p",null,"all of"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-instantiatemsg-definitions-storelimitsinput-properties-max_triple_count-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,n.kt)("h3",{id:"max_triple_count-default-value"},"max","_","triple","_","count Default Value"),(0,n.kt)("p",null,"The default value is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'"340282366920938463463374607431768211455"\n')))}u.isMDXComponent=!0},38426:(t,e,i)=>{i.d(e,{Z:()=>a});const a=i.p+"assets/files/okp4-cognitarium-38b87179f0c3c7c6f7b35f81306caf25.json"}}]);