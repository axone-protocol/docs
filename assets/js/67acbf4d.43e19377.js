"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[11544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,b=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="PinObject Schema",p={unversionedId:"cw-storage-executemsg-oneof-pinobject",id:"version-v1.0.0/cw-storage-executemsg-oneof-pinobject",title:"PinObject Schema",description:"PinObject pins the object in the bucket for the considered sender. If the object is already pinned for the sender, this is a no-op. While an object is pinned, it cannot be removed from the storage.",source:"@site/contracts_versioned_docs/version-v1.0.0/cw-storage-executemsg-oneof-pinobject.md",sourceDirName:".",slug:"/cw-storage-executemsg-oneof-pinobject",permalink:"/contracts/v1.0.0/cw-storage-executemsg-oneof-pinobject",draft:!1,tags:[],version:"v1.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled object in cw-storage Schema",permalink:"/contracts/v1.0.0/cw-storage-executemsg-oneof-pinobject-properties-pin_object"},next:{title:"Untitled undefined type in cw-storage Schema",permalink:"/contracts/v1.0.0/cw-storage-executemsg-oneof-storeobject-properties-store_object-properties-data"}},c={},l=[{value:"2 Type",id:"2-type",level:2},{value:"pin_object",id:"pin_object",level:2},{value:"pin_object Type",id:"pin_object-type",level:3}],s={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pinobject-schema"},"PinObject Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/execute/oneOf/2\n")),(0,a.kt)("p",null,"PinObject pins the object in the bucket for the considered sender. If the object is already pinned for the sender, this is a no-op. While an object is pinned, it cannot be removed from the storage."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,a.kt)("td",{parentName:"tr",align:"left"},"none"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{target:"_blank",href:n(49568).Z,title:"open original schema"},"cw-storage.json*"))))),(0,a.kt)("h2",{id:"2-type"},"2 Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")," (",(0,a.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-executemsg-oneof-pinobject"},"PinObject"),")"),(0,a.kt)("h1",{id:"2-properties"},"2 Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"#pin_object"},"pin","_","object")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,a.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"/contracts/v1.0.0/cw-storage-executemsg-oneof-pinobject-properties-pin_object",title:"undefined#/execute/oneOf/2/properties/pin_object"},"cw-storage"))))),(0,a.kt)("h2",{id:"pin_object"},"pin","_","object"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pin_object")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"is required")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type: ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," (",(0,a.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-executemsg-oneof-pinobject-properties-pin_object"},"Details"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"cannot be null")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"defined in: ",(0,a.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-executemsg-oneof-pinobject-properties-pin_object",title:"undefined#/execute/oneOf/2/properties/pin_object"},"cw-storage")))),(0,a.kt)("h3",{id:"pin_object-type"},"pin","_","object Type"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"object")," (",(0,a.kt)("a",{parentName:"p",href:"/contracts/v1.0.0/cw-storage-executemsg-oneof-pinobject-properties-pin_object"},"Details"),")"))}d.isMDXComponent=!0},49568:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/cw-storage-417a61b4e56ba9fde8291095fc9d45fd.json"}}]);