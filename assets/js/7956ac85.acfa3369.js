"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[922],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>_});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(i),_=r,k=d["".concat(p,".").concat(_)]||d[_]||u[_]||a;return i?n.createElement(k,s(s({ref:t},m),{},{components:i})):n.createElement(k,s({ref:t},m))}));function _(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<a;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},37110:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=i(87462),r=(i(67294),i(3905));const a={},s="StoreLimits Schema",o={unversionedId:"okp4-cognitarium-responses-storeresponse-definitions-storelimits",id:"version-v2.1.0/okp4-cognitarium-responses-storeresponse-definitions-storelimits",title:"StoreLimits Schema",description:"Contains limitations regarding store usages.",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-cognitarium-responses-storeresponse-definitions-storelimits.md",sourceDirName:".",slug:"/okp4-cognitarium-responses-storeresponse-definitions-storelimits",permalink:"/contracts/okp4-cognitarium-responses-storeresponse-definitions-storelimits",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in okp4-cognitarium Schema",permalink:"/contracts/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_count"},next:{title:"Untitled undefined type in okp4-cognitarium Schema",permalink:"/contracts/okp4-cognitarium-responses-storeresponse-definitions-storestat-properties-byte_size-allof-0"}},p={},l=[{value:"StoreLimits Type",id:"storelimits-type",level:2},{value:"max_byte_size",id:"max_byte_size",level:2},{value:"max_byte_size Type",id:"max_byte_size-type",level:3},{value:"max_insert_data_byte_size",id:"max_insert_data_byte_size",level:2},{value:"max_insert_data_byte_size Type",id:"max_insert_data_byte_size-type",level:3},{value:"max_insert_data_triple_count",id:"max_insert_data_triple_count",level:2},{value:"max_insert_data_triple_count Type",id:"max_insert_data_triple_count-type",level:3},{value:"max_query_limit",id:"max_query_limit",level:2},{value:"max_query_limit Type",id:"max_query_limit-type",level:3},{value:"max_query_limit Constraints",id:"max_query_limit-constraints",level:3},{value:"max_query_variable_count",id:"max_query_variable_count",level:2},{value:"max_query_variable_count Type",id:"max_query_variable_count-type",level:3},{value:"max_query_variable_count Constraints",id:"max_query_variable_count-constraints",level:3},{value:"max_triple_byte_size",id:"max_triple_byte_size",level:2},{value:"max_triple_byte_size Type",id:"max_triple_byte_size-type",level:3},{value:"max_triple_count",id:"max_triple_count",level:2},{value:"max_triple_count Type",id:"max_triple_count-type",level:3}],m={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"storelimits-schema"},"StoreLimits Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/store/definitions/StoreLimits\n")),(0,r.kt)("p",null,"Contains limitations regarding store usages."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,r.kt)("td",{parentName:"tr",align:"left"},"none"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{target:"_blank",href:i(62804).Z,title:"open original schema"},"okp4-cognitarium.json*"))))),(0,r.kt)("h2",{id:"storelimits-type"},"StoreLimits Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")," (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits"},"StoreLimits"),")"),(0,r.kt)("h1",{id:"storelimits-properties"},"StoreLimits Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#max_byte_size"},"max","_","byte","_","size")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_byte_size",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_byte_size"},"okp4-cognitarium"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#max_insert_data_byte_size"},"max","_","insert","_","data","_","byte","_","size")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_byte_size",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_insert_data_byte_size"},"okp4-cognitarium"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#max_insert_data_triple_count"},"max","_","insert","_","data","_","triple","_","count")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_triple_count",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_insert_data_triple_count"},"okp4-cognitarium"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#max_query_limit"},"max","_","query","_","limit")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_query_limit",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_query_limit"},"okp4-cognitarium"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#max_query_variable_count"},"max","_","query","_","variable","_","count")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"integer")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_query_variable_count",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_query_variable_count"},"okp4-cognitarium"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#max_triple_byte_size"},"max","_","triple","_","byte","_","size")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_byte_size",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_triple_byte_size"},"okp4-cognitarium"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#max_triple_count"},"max","_","triple","_","count")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_count",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_triple_count"},"okp4-cognitarium"))))),(0,r.kt)("h2",{id:"max_byte_size"},"max","_","byte","_","size"),(0,r.kt)("p",null,"The maximum number of bytes the store can contains. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_byte_size")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_byte_size"},"Details"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_byte_size",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_byte_size"},"okp4-cognitarium")))),(0,r.kt)("h3",{id:"max_byte_size-type"},"max","_","byte","_","size Type"),(0,r.kt)("p",null,"merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_byte_size"},"Details"),")"),(0,r.kt)("p",null,"all of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_byte_size-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,r.kt)("h2",{id:"max_insert_data_byte_size"},"max","_","insert","_","data","_","byte","_","size"),(0,r.kt)("p",null,"The maximum number of bytes an insert data query can contains."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_insert_data_byte_size")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_byte_size"},"Details"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_byte_size",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_insert_data_byte_size"},"okp4-cognitarium")))),(0,r.kt)("h3",{id:"max_insert_data_byte_size-type"},"max","_","insert","_","data","_","byte","_","size Type"),(0,r.kt)("p",null,"merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_byte_size"},"Details"),")"),(0,r.kt)("p",null,"all of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_byte_size-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,r.kt)("h2",{id:"max_insert_data_triple_count"},"max","_","insert","_","data","_","triple","_","count"),(0,r.kt)("p",null,"The maximum number of triples an insert data query can contains (after parsing)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_insert_data_triple_count")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_triple_count"},"Details"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_triple_count",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_insert_data_triple_count"},"okp4-cognitarium")))),(0,r.kt)("h3",{id:"max_insert_data_triple_count-type"},"max","_","insert","_","data","_","triple","_","count Type"),(0,r.kt)("p",null,"merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_triple_count"},"Details"),")"),(0,r.kt)("p",null,"all of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_insert_data_triple_count-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,r.kt)("h2",{id:"max_query_limit"},"max","_","query","_","limit"),(0,r.kt)("p",null,"The maximum limit of a query, i.e. the maximum number of triples returned by a select query."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_query_limit")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_query_limit",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_query_limit"},"okp4-cognitarium")))),(0,r.kt)("h3",{id:"max_query_limit-type"},"max","_","query","_","limit Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"integer")),(0,r.kt)("h3",{id:"max_query_limit-constraints"},"max","_","query","_","limit Constraints"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"minimum"),": the value of this number must greater than or equal to: ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"unknown format"),": the value of this string must follow the format: ",(0,r.kt)("inlineCode",{parentName:"p"},"uint32")),(0,r.kt)("h2",{id:"max_query_variable_count"},"max","_","query","_","variable","_","count"),(0,r.kt)("p",null,"The maximum number of variables a query can select."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_query_variable_count")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_query_variable_count",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_query_variable_count"},"okp4-cognitarium")))),(0,r.kt)("h3",{id:"max_query_variable_count-type"},"max","_","query","_","variable","_","count Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"integer")),(0,r.kt)("h3",{id:"max_query_variable_count-constraints"},"max","_","query","_","variable","_","count Constraints"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"minimum"),": the value of this number must greater than or equal to: ",(0,r.kt)("inlineCode",{parentName:"p"},"0")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"unknown format"),": the value of this string must follow the format: ",(0,r.kt)("inlineCode",{parentName:"p"},"uint32")),(0,r.kt)("h2",{id:"max_triple_byte_size"},"max","_","triple","_","byte","_","size"),(0,r.kt)("p",null,"The maximum number of bytes the store can contains for a single triple. The size of a triple is counted as the sum of the size of its subject, predicate and object, including the size of data types and language tags if any. The limit is used to prevent storing very large triples, especially literals."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_triple_byte_size")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_byte_size"},"Details"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_byte_size",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_triple_byte_size"},"okp4-cognitarium")))),(0,r.kt)("h3",{id:"max_triple_byte_size-type"},"max","_","triple","_","byte","_","size Type"),(0,r.kt)("p",null,"merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_byte_size"},"Details"),")"),(0,r.kt)("p",null,"all of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_byte_size-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))),(0,r.kt)("h2",{id:"max_triple_count"},"max","_","triple","_","count"),(0,r.kt)("p",null,"The maximum number of triples the store can contains."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"max_triple_count")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"is required")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type: merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_count"},"Details"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"cannot be null")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"defined in: ",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_count",title:"undefined#/responses/store/definitions/StoreLimits/properties/max_triple_count"},"okp4-cognitarium")))),(0,r.kt)("h3",{id:"max_triple_count-type"},"max","_","triple","_","count Type"),(0,r.kt)("p",null,"merged type (",(0,r.kt)("a",{parentName:"p",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_count"},"Details"),")"),(0,r.kt)("p",null,"all of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/contracts/next/okp4-cognitarium-responses-storeresponse-definitions-storelimits-properties-max_triple_count-allof-0",title:"check type definition"},"Untitled undefined type in okp4-cognitarium"))))}u.isMDXComponent=!0},62804:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/files/okp4-cognitarium-34f8dee3f448cb3f845117fb3974c24b.json"}}]);