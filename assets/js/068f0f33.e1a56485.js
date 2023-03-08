"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[98452],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},75206:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={},l="StoreObject Schema",s={unversionedId:"cw-storage-executemsg-oneof-storeobject",id:"cw-storage-executemsg-oneof-storeobject",title:"StoreObject Schema",description:"StoreObject store an object to the bucket and make the sender the owner of the object. The object is referenced by the hash of its content and this value is returned. If the object is already stored, an error is returned. If pin is true, the object is pinned for the sender.",source:"@site/contracts/cw-storage-executemsg-oneof-storeobject.md",sourceDirName:".",slug:"/cw-storage-executemsg-oneof-storeobject",permalink:"/contracts/cw-storage-executemsg-oneof-storeobject",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Untitled object in cw-storage Schema",permalink:"/contracts/cw-storage-executemsg-oneof-storeobject-properties-store_object"},next:{title:"Untitled string in cw-storage Schema",permalink:"/contracts/cw-storage-executemsg-oneof-unpinobject-properties-unpin_object-properties-id"}},p={},u=[{value:"0 Type",id:"0-type",level:2},{value:"store_object",id:"store_object",level:2},{value:"store_object Type",id:"store_object-type",level:3}],f={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"storeobject-schema"},"StoreObject Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"undefined#/execute/oneOf/0\n")),(0,o.kt)("p",null,"StoreObject store an object to the bucket and make the sender the owner of the object. The object is referenced by the hash of its content and this value is returned. If the object is already stored, an error is returned. If pin is true, the object is pinned for the sender."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Abstract"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Extensible"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Status"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Identifiable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Custom Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Additional Properties"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Access Restrictions"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Defined In"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Can be instantiated"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Unknown status"),(0,o.kt)("td",{parentName:"tr",align:"left"},"No"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Forbidden"),(0,o.kt)("td",{parentName:"tr",align:"left"},"none"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{target:"_blank",href:r(55804).Z,title:"open original schema"},"cw-storage.json*"))))),(0,o.kt)("h2",{id:"0-type"},"0 Type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"object")," (",(0,o.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-storeobject"},"StoreObject"),")"),(0,o.kt)("h1",{id:"0-properties"},"0 Properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Nullable"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Defined by"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#store_object"},"store","_","object")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"object")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Required"),(0,o.kt)("td",{parentName:"tr",align:"left"},"cannot be null"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/contracts/cw-storage-executemsg-oneof-storeobject-properties-store_object",title:"undefined#/execute/oneOf/0/properties/store_object"},"cw-storage"))))),(0,o.kt)("h2",{id:"store_object"},"store","_","object"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"store_object")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"is required")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Type: ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," (",(0,o.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-storeobject-properties-store_object"},"Details"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"cannot be null")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"defined in: ",(0,o.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-storeobject-properties-store_object",title:"undefined#/execute/oneOf/0/properties/store_object"},"cw-storage")))),(0,o.kt)("h3",{id:"store_object-type"},"store","_","object Type"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"object")," (",(0,o.kt)("a",{parentName:"p",href:"/contracts/cw-storage-executemsg-oneof-storeobject-properties-store_object"},"Details"),")"))}d.isMDXComponent=!0},55804:function(e,t,r){t.Z=r.p+"assets/files/cw-storage-821bbbe12acf8425e218c68e57f61d3d.json"}}]);