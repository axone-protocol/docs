"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[92793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):m(m({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=p(r),s=a,k=c["".concat(i,".").concat(s)]||c[s]||l[s]||o;return r?n.createElement(k,m(m({ref:t},d),{},{components:r})):n.createElement(k,m({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,m=new Array(o);m[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,m[1]=u;for(var p=2;p<o;p++)m[p]=r[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},45208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>m,default:()=>l,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},m=void 0,u={unversionedId:"okp4d_query",id:"version-v5.0.0/okp4d_query",title:"okp4d_query",description:"okp4d query",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query.md",sourceDirName:".",slug:"/okp4d_query",permalink:"/commands/okp4d_query",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_migrate",permalink:"/commands/okp4d_migrate"},next:{title:"okp4d_query_account",permalink:"/commands/okp4d_query_account"}},i={},p=[{value:"okp4d query",id:"okp4d-query",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"okp4d-query"},"okp4d query"),(0,a.kt)("p",null,"Querying subcommands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"okp4d query [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n  -h, --help              help for query\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d"},"okp4d"),"\t - OKP4 Daemon \ud83d\udc79"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_account"},"okp4d query account"),"\t - Query for account by address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_auth"},"okp4d query auth"),"\t - Querying commands for the auth module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_authz"},"okp4d query authz"),"\t - Querying commands for the authz module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_bank"},"okp4d query bank"),"\t - Querying commands for the bank module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_block"},"okp4d query block"),"\t - Get verified data for the block at given height"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_distribution"},"okp4d query distribution"),"\t - Querying commands for the distribution module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_evidence"},"okp4d query evidence"),"\t - Query for evidence by hash or for all (paginated) submitted evidence"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_feegrant"},"okp4d query feegrant"),"\t - Querying commands for the feegrant module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_gov"},"okp4d query gov"),"\t - Querying commands for the governance module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_group"},"okp4d query group"),"\t - Querying commands for the group module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_ibc"},"okp4d query ibc"),"\t - Querying commands for the IBC module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_ibc-fee"},"okp4d query ibc-fee"),"\t - IBC relayer incentivization query subcommands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_ibc-transfer"},"okp4d query ibc-transfer"),"\t - IBC fungible token transfer query subcommands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_interchain-accounts"},"okp4d query interchain-accounts"),"\t - IBC interchain accounts query subcommands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_logic"},"okp4d query logic"),"\t - Querying commands for the logic module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_mint"},"okp4d query mint"),"\t - Querying commands for the minting module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_params"},"okp4d query params"),"\t - Querying commands for the params module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_slashing"},"okp4d query slashing"),"\t - Querying commands for the slashing module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_staking"},"okp4d query staking"),"\t - Querying commands for the staking module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_tendermint-validator-set"},"okp4d query tendermint-validator-set"),"\t - Get the full tendermint validator set at given height"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_tx"},"okp4d query tx"),'\t - Query for a transaction by hash, "',"<","addr",">","/","<","seq",">",'" combination or comma-separated signatures in a committed block'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_txs"},"okp4d query txs"),"\t - Query for paginated transactions that match a set of events"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_upgrade"},"okp4d query upgrade"),"\t - Querying commands for the upgrade module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_wasm"},"okp4d query wasm"),"\t - Querying commands for the wasm module")))}l.isMDXComponent=!0}}]);