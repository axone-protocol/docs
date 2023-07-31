"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[73119],{3905:(e,r,o)=>{o.d(r,{Zo:()=>l,kt:()=>d});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function p(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?p(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function u(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},p=Object.keys(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)o=p[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var a=t.createContext({}),s=function(e){var r=t.useContext(a),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},l=function(e){var r=s(e.components);return t.createElement(a.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),g=s(o),d=n,f=g["".concat(a,".").concat(d)]||g[d]||c[d]||p;return o?t.createElement(f,i(i({ref:r},l),{},{components:o})):t.createElement(f,i({ref:r},l))}));function d(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=o.length,i=new Array(p);i[0]=g;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<p;s++)i[s]=o[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},97172:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var t=o(87462),n=(o(67294),o(3905));const p={},i=void 0,u={unversionedId:"okp4d_query_group_group-policies-by-group",id:"version-v5.0.0/okp4d_query_group_group-policies-by-group",title:"okp4d_query_group_group-policies-by-group",description:"okp4d query group group-policies-by-group",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_group_group-policies-by-group.md",sourceDirName:".",slug:"/okp4d_query_group_group-policies-by-group",permalink:"/commands/okp4d_query_group_group-policies-by-group",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_group_group-policies-by-admin",permalink:"/commands/okp4d_query_group_group-policies-by-admin"},next:{title:"okp4d_query_group_group-policy-info",permalink:"/commands/okp4d_query_group_group-policy-info"}},a={},s=[{value:"okp4d query group group-policies-by-group",id:"okp4d-query-group-group-policies-by-group",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:s};function c(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,t.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"okp4d-query-group-group-policies-by-group"},"okp4d query group group-policies-by-group"),(0,n.kt)("p",null,"Query for group policies by group id with pagination flags"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"okp4d query group group-policies-by-group [group-id] [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --count-total        count total number of records in groups-policies-by-group to query for\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for group-policies-by-group\n      --limit uint         pagination limit of groups-policies-by-group to query for (default 100)\n      --node string        &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint        pagination offset of groups-policies-by-group to query for\n  -o, --output string      Output format (text|json) (default "text")\n      --page uint          pagination page of groups-policies-by-group to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string    pagination page-key of groups-policies-by-group to query for\n      --reverse            results are sorted in descending order\n')),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_group"},"okp4d query group"),"\t - Querying commands for the group module")))}c.isMDXComponent=!0}}]);