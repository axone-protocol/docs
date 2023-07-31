"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[14651],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=o(a),u=i,d=c["".concat(l,".").concat(u)]||c[u]||k[u]||r;return a?n.createElement(d,p(p({ref:t},m),{},{components:a})):n.createElement(d,p({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,p=new Array(r);p[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var o=2;o<r;o++)p[o]=a[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},12027:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(87462),i=(a(67294),a(3905));const r={},p="BucketResponse Schema",s={unversionedId:"cw-storage-responses-bucketresponse",id:"version-v1.0.0/cw-storage-responses-bucketresponse",title:"BucketResponse Schema",description:"BucketResponse is the response of the Bucket query.",source:"@site/contracts_versioned_docs/version-v1.0.0/cw-storage-responses-bucketresponse.md",sourceDirName:".",slug:"/cw-storage-responses-bucketresponse",permalink:"/contracts/v1.0.0/cw-storage-responses-bucketresponse",draft:!1,tags:[],version:"v1.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled undefined type in cw-storage Schema",permalink:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-pagination"},next:{title:"Untitled string in cw-storage Schema",permalink:"/contracts/v1.0.0/cw-storage-responses-objectpinsresponse-definitions-pageinfo-properties-cursor"}},l={},o=[{value:"bucket Type",id:"bucket-type",level:2},{value:"limits",id:"limits",level:2},{value:"limits Type",id:"limits-type",level:3},{value:"name",id:"name",level:2},{value:"name Type",id:"name-type",level:3},{value:"pagination",id:"pagination",level:2},{value:"pagination Type",id:"pagination-type",level:3},{value:"Definitions group BucketLimits",id:"definitions-group-bucketlimits",level:2},{value:"max_object_pins",id:"max_object_pins",level:3},{value:"max_object_pins Type",id:"max_object_pins-type",level:4},{value:"max_object_size",id:"max_object_size",level:3},{value:"max_object_size Type",id:"max_object_size-type",level:4},{value:"max_objects",id:"max_objects",level:3},{value:"max_objects Type",id:"max_objects-type",level:4},{value:"max_total_size",id:"max_total_size",level:3},{value:"max_total_size Type",id:"max_total_size-type",level:4},{value:"Definitions group PaginationConfig",id:"definitions-group-paginationconfig",level:2},{value:"default_page_size",id:"default_page_size",level:3},{value:"default_page_size Type",id:"default_page_size-type",level:4},{value:"default_page_size Constraints",id:"default_page_size-constraints",level:4},{value:"max_page_size",id:"max_page_size",level:3},{value:"max_page_size Type",id:"max_page_size-type",level:4},{value:"max_page_size Constraints",id:"max_page_size-constraints",level:4},{value:"Definitions group Uint128",id:"definitions-group-uint128",level:2}],m={toc:o};function k(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bucketresponse-schema"},"BucketResponse Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/responses/bucket\n")),(0,i.kt)("p",null,"BucketResponse is the response of the Bucket query."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{target:"_blank",href:a(49568).Z,title:"open original schema"},"cw-storage.json*"))))),(0,i.kt)("h2",{id:"bucket-type"},"bucket Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"object")," (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse"},"BucketResponse"),")"),(0,i.kt)("h1",{id:"bucket-properties"},"bucket Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#limits"},"limits")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-limits",title:"undefined#/responses/bucket/properties/limits"},"cw-storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#name"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-name",title:"undefined#/responses/bucket/properties/name"},"cw-storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#pagination"},"pagination")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-pagination",title:"undefined#/responses/bucket/properties/pagination"},"cw-storage"))))),(0,i.kt)("h2",{id:"limits"},"limits"),(0,i.kt)("p",null,"The limits of the bucket."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"limits")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-limits"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-limits",title:"undefined#/responses/bucket/properties/limits"},"cw-storage")))),(0,i.kt)("h3",{id:"limits-type"},"limits Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-limits"},"Details"),")"),(0,i.kt)("p",null,"all of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-limits-allof-0",title:"check type definition"},"Untitled undefined type in cw-storage"))),(0,i.kt)("h2",{id:"name"},"name"),(0,i.kt)("p",null,"The name of the bucket."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-name",title:"undefined#/responses/bucket/properties/name"},"cw-storage")))),(0,i.kt)("h3",{id:"name-type"},"name Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h2",{id:"pagination"},"pagination"),(0,i.kt)("p",null,"The configuration for paginated query."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pagination")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is required")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-pagination"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-pagination",title:"undefined#/responses/bucket/properties/pagination"},"cw-storage")))),(0,i.kt)("h3",{id:"pagination-type"},"pagination Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-pagination"},"Details"),")"),(0,i.kt)("p",null,"all of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-properties-pagination-allof-0",title:"check type definition"},"Untitled undefined type in cw-storage"))),(0,i.kt)("h1",{id:"bucketresponse-definitions"},"BucketResponse Definitions"),(0,i.kt)("h2",{id:"definitions-group-bucketlimits"},"Definitions group BucketLimits"),(0,i.kt)("p",null,"Reference this group by using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"$ref":"undefined#/responses/bucket/definitions/BucketLimits"}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#max_object_pins"},"max","_","object","_","pins")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_object_pins"},"cw-storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#max_object_size"},"max","_","object","_","size")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_object_size"},"cw-storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#max_objects"},"max","_","objects")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_objects",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_objects"},"cw-storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#max_total_size"},"max","_","total","_","size")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Merged"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_total_size"},"cw-storage"))))),(0,i.kt)("h3",{id:"max_object_pins"},"max","_","object","_","pins"),(0,i.kt)("p",null,"The maximum number of pins in the bucket for an object."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"max_object_pins")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_object_pins"},"cw-storage")))),(0,i.kt)("h4",{id:"max_object_pins-type"},"max","_","object","_","pins Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins"},"Details"),")"),(0,i.kt)("p",null,"any of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins-anyof-0",title:"check type definition"},"Untitled undefined type in cw-storage"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_pins-anyof-1",title:"check type definition"},"Untitled null in cw-storage")))),(0,i.kt)("h3",{id:"max_object_size"},"max","_","object","_","size"),(0,i.kt)("p",null,"The maximum size of the objects in the bucket."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"max_object_size")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_object_size"},"cw-storage")))),(0,i.kt)("h4",{id:"max_object_size-type"},"max","_","object","_","size Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size"},"Details"),")"),(0,i.kt)("p",null,"any of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size-anyof-0",title:"check type definition"},"Untitled undefined type in cw-storage"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_object_size-anyof-1",title:"check type definition"},"Untitled null in cw-storage")))),(0,i.kt)("h3",{id:"max_objects"},"max","_","objects"),(0,i.kt)("p",null,"The maximum number of objects in the bucket."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"max_objects")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_objects"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_objects",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_objects"},"cw-storage")))),(0,i.kt)("h4",{id:"max_objects-type"},"max","_","objects Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_objects"},"Details"),")"),(0,i.kt)("p",null,"any of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_objects-anyof-0",title:"check type definition"},"Untitled undefined type in cw-storage"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_objects-anyof-1",title:"check type definition"},"Untitled null in cw-storage")))),(0,i.kt)("h3",{id:"max_total_size"},"max","_","total","_","size"),(0,i.kt)("p",null,"The maximum total size of the objects in the bucket."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"max_total_size")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size"},"Details"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"cannot be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size",title:"undefined#/responses/bucket/definitions/BucketLimits/properties/max_total_size"},"cw-storage")))),(0,i.kt)("h4",{id:"max_total_size-type"},"max","_","total","_","size Type"),(0,i.kt)("p",null,"merged type (",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size"},"Details"),")"),(0,i.kt)("p",null,"any of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size-anyof-0",title:"check type definition"},"Untitled undefined type in cw-storage"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-bucketlimits-properties-max_total_size-anyof-1",title:"check type definition"},"Untitled null in cw-storage")))),(0,i.kt)("h2",{id:"definitions-group-paginationconfig"},"Definitions group PaginationConfig"),(0,i.kt)("p",null,"Reference this group by using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"$ref":"undefined#/responses/bucket/definitions/PaginationConfig"}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#default_page_size"},"default","_","page","_","size")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"can be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-paginationconfig-properties-default_page_size",title:"undefined#/responses/bucket/definitions/PaginationConfig/properties/default_page_size"},"cw-storage"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#max_page_size"},"max","_","page","_","size")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("td",{parentName:"tr",align:"left"},"can be null"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-paginationconfig-properties-max_page_size",title:"undefined#/responses/bucket/definitions/PaginationConfig/properties/max_page_size"},"cw-storage"))))),(0,i.kt)("h3",{id:"default_page_size"},"default","_","page","_","size"),(0,i.kt)("p",null,"The default number of elements in a page."),(0,i.kt)("p",null,"Shall be less or equal than ",(0,i.kt)("inlineCode",{parentName:"p"},"max_page_size"),". Default to '10' if not set."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"default_page_size")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"can be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-paginationconfig-properties-default_page_size",title:"undefined#/responses/bucket/definitions/PaginationConfig/properties/default_page_size"},"cw-storage")))),(0,i.kt)("h4",{id:"default_page_size-type"},"default","_","page","_","size Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"integer")),(0,i.kt)("h4",{id:"default_page_size-constraints"},"default","_","page","_","size Constraints"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"minimum"),": the value of this number must greater than or equal to: ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"unknown format"),": the value of this string must follow the format: ",(0,i.kt)("inlineCode",{parentName:"p"},"uint32")),(0,i.kt)("h3",{id:"max_page_size"},"max","_","page","_","size"),(0,i.kt)("p",null,"The maximum elements a page can contains."),(0,i.kt)("p",null,"Shall be less than ",(0,i.kt)("inlineCode",{parentName:"p"},"u32::MAX - 1"),". Default to '30' if not set."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"max_page_size")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"is optional")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"can be null")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"defined in: ",(0,i.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-responses-bucketresponse-definitions-paginationconfig-properties-max_page_size",title:"undefined#/responses/bucket/definitions/PaginationConfig/properties/max_page_size"},"cw-storage")))),(0,i.kt)("h4",{id:"max_page_size-type"},"max","_","page","_","size Type"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"integer")),(0,i.kt)("h4",{id:"max_page_size-constraints"},"max","_","page","_","size Constraints"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"minimum"),": the value of this number must greater than or equal to: ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"unknown format"),": the value of this string must follow the format: ",(0,i.kt)("inlineCode",{parentName:"p"},"uint32")),(0,i.kt)("h2",{id:"definitions-group-uint128"},"Definitions group Uint128"),(0,i.kt)("p",null,"Reference this group by using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"$ref":"undefined#/responses/bucket/definitions/Uint128"}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Defined by")))))}k.isMDXComponent=!0},49568:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/cw-storage-417a61b4e56ba9fde8291095fc9d45fd.json"}}]);