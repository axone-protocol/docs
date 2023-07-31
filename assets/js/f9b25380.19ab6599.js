"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[38755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=l(n),u=a,b=k["".concat(s,".").concat(u)]||k[u]||m[u]||r;return n?i.createElement(b,o(o({ref:t},c),{},{components:n})):i.createElement(b,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},59726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const r={},o="Untitled object in okp4-objectarium Schema",p={unversionedId:"okp4-objectarium-responses-bucketresponse-definitions-bucketlimits",id:"version-v2.1.0/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits",title:"Untitled object in okp4-objectarium Schema",description:"BucketLimits is the type of the limits of a bucket.",source:"@site/contracts_versioned_docs/version-v2.1.0/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits.md",sourceDirName:".",slug:"/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits",permalink:"/contracts/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits",draft:!1,tags:[],version:"v2.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in okp4-objectarium Schema",permalink:"/contracts/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size"},next:{title:"Passthrough Schema",permalink:"/contracts/okp4-objectarium-responses-bucketresponse-definitions-compressionalgorithm-oneof-passthrough"}},s={},l=[{value:"BucketLimits Type",id:"bucketlimits-type",level:2},{value:"max_object_pins",id:"max_object_pins",level:2},{value:"max_object_pins Type",id:"max_object_pins-type",level:3},{value:"max_object_size",id:"max_object_size",level:2},{value:"max_object_size Type",id:"max_object_size-type",level:3},{value:"max_objects",id:"max_objects",level:2},{value:"max_objects Type",id:"max_objects-type",level:3},{value:"max_total_size",id:"max_total_size",level:2},{value:"max_total_size Type",id:"max_total_size-type",level:3}],c={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"untitled-object-in-okp4-objectarium-schema"},"Untitled object in okp4-objectarium Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/bucket/definitions/BucketLimits\n")),(0,a.kt)("p",null,"BucketLimits is the type of the limits of a bucket."),(0,a.kt)("p",null,"The limits are optional and if not set, there is no limit."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:n(9819).Z,title:"open original schema"},"okp4-objectarium.json*"))))),(0,a.kt)("h2",{id:"bucketlimits-type"},"BucketLimits Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")," (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits"},"Details"),")"),(0,a.kt)("h1",{id:"bucketlimits-properties"},"BucketLimits Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#max_object_pins"},"max","_","object","_","pins")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_object_pins"},"okp4-objectarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#max_object_size"},"max","_","object","_","size")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_object_size"},"okp4-objectarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#max_objects"},"max","_","objects")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_objects",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_objects"},"okp4-objectarium"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#max_total_size"},"max","_","total","_","size")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_total_size"},"okp4-objectarium"))))),(0,a.kt)("h2",{id:"max_object_pins"},"max","_","object","_","pins"),(0,a.kt)("p",null,"The maximum number of pins in the bucket for an object."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max_object_pins")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is optional")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_object_pins"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"max_object_pins-type"},"max","_","object","_","pins Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins"},"Details"),")"),(0,a.kt)("p",null,"any of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins-anyof-0",title:"check type definition"},"Untitled undefined type in okp4-objectarium"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins-anyof-1",title:"check type definition"},"Untitled null in okp4-objectarium")))),(0,a.kt)("h2",{id:"max_object_size"},"max","_","object","_","size"),(0,a.kt)("p",null,"The maximum size of the objects in the bucket."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max_object_size")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is optional")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_object_size"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"max_object_size-type"},"max","_","object","_","size Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size"},"Details"),")"),(0,a.kt)("p",null,"any of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size-anyof-0",title:"check type definition"},"Untitled undefined type in okp4-objectarium"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size-anyof-1",title:"check type definition"},"Untitled null in okp4-objectarium")))),(0,a.kt)("h2",{id:"max_objects"},"max","_","objects"),(0,a.kt)("p",null,"The maximum number of objects in the bucket."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max_objects")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is optional")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_objects"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_objects",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_objects"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"max_objects-type"},"max","_","objects Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_objects"},"Details"),")"),(0,a.kt)("p",null,"any of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_objects-anyof-0",title:"check type definition"},"Untitled undefined type in okp4-objectarium"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_objects-anyof-1",title:"check type definition"},"Untitled null in okp4-objectarium")))),(0,a.kt)("h2",{id:"max_total_size"},"max","_","total","_","size"),(0,a.kt)("p",null,"The maximum total size of the objects in the bucket."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"max_total_size")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is optional")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_total_size"},"okp4-objectarium")))),(0,a.kt)("h3",{id:"max_total_size-type"},"max","_","total","_","size Type"),(0,a.kt)("p",null,"merged type (",(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size"},"Details"),")"),(0,a.kt)("p",null,"any of"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size-anyof-0",title:"check type definition"},"Untitled undefined type in okp4-objectarium"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/contracts/next/okp4-objectarium-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size-anyof-1",title:"check type definition"},"Untitled null in okp4-objectarium")))))}m.isMDXComponent=!0},9819:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/okp4-objectarium-eada0cda6e11102840a1c57adfa7132e.json"}}]);