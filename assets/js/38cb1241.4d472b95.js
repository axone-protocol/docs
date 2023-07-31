"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[67997],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),d=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),c=d(r),u=n,k=c["".concat(i,".").concat(u)]||c[u]||l[u]||o;return r?a.createElement(k,s(s({ref:t},p),{},{components:r})):a.createElement(k,s({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:n,s[1]=m;for(var d=2;d<o;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},13169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,m={unversionedId:"okp4d_query_wasm",id:"okp4d_query_wasm",title:"okp4d_query_wasm",description:"okp4d query wasm",source:"@site/commands/okp4d_query_wasm.md",sourceDirName:".",slug:"/okp4d_query_wasm",permalink:"/commands/next/okp4d_query_wasm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_upgrade_plan",permalink:"/commands/next/okp4d_query_upgrade_plan"},next:{title:"okp4d_query_wasm_build-address",permalink:"/commands/next/okp4d_query_wasm_build-address"}},i={},d=[{value:"okp4d query wasm",id:"okp4d-query-wasm",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:d};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"okp4d-query-wasm"},"okp4d query wasm"),(0,n.kt)("p",null,"Querying commands for the wasm module"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"okp4d query wasm [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help   help for wasm\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query"},"okp4d query"),"\t - Querying subcommands"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_build-address"},"okp4d query wasm build-address"),"\t - build contract address"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_code"},"okp4d query wasm code"),"\t - Downloads wasm bytecode for given code id"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_code-info"},"okp4d query wasm code-info"),"\t - Prints out metadata of a code id"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_contract"},"okp4d query wasm contract"),"\t - Prints out metadata of a contract given its address"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_contract-history"},"okp4d query wasm contract-history"),"\t - Prints out the code history for a contract given its address"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_contract-state"},"okp4d query wasm contract-state"),"\t - Querying commands for the wasm module"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_libwasmvm-version"},"okp4d query wasm libwasmvm-version"),"\t - Get libwasmvm version"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_list-code"},"okp4d query wasm list-code"),"\t - List all wasm bytecode on the chain"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_list-contract-by-code"},"okp4d query wasm list-contract-by-code"),"\t - List wasm all bytecode on the chain for given code id"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_list-contracts-by-creator"},"okp4d query wasm list-contracts-by-creator"),"\t - List all contracts by creator"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_params"},"okp4d query wasm params"),"\t - Query the current wasm parameters"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm_pinned"},"okp4d query wasm pinned"),"\t - List all pinned code ids")))}l.isMDXComponent=!0}}]);