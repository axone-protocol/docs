"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[79351],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,k=s["".concat(i,".").concat(m)]||s[m]||c[m]||o;return t?r.createElement(k,p(p({ref:n},u),{},{components:t})):r.createElement(k,p({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=s;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var d=2;d<o;d++)p[d]=t[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},41843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const o={},p=void 0,l={unversionedId:"okp4d_query_bank",id:"okp4d_query_bank",title:"okp4d_query_bank",description:"okp4d query bank",source:"@site/commands/okp4d_query_bank.md",sourceDirName:".",slug:"/okp4d_query_bank",permalink:"/commands/next/okp4d_query_bank",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_authz_grants",permalink:"/commands/next/okp4d_query_authz_grants"},next:{title:"okp4d_query_bank_balances",permalink:"/commands/next/okp4d_query_bank_balances"}},i={},d=[{value:"okp4d query bank",id:"okp4d-query-bank",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"okp4d-query-bank"},"okp4d query bank"),(0,a.kt)("p",null,"Querying commands for the bank module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"okp4d query bank [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for bank\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query"},"okp4d query"),"\t - Querying subcommands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_bank_balances"},"okp4d query bank balances"),"\t - Query for account balances by address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_bank_denom-metadata"},"okp4d query bank denom-metadata"),"\t - Query the client metadata for coin denominations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_bank_send-enabled"},"okp4d query bank send-enabled"),"\t - Query for send enabled entries"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_bank_spendable-balances"},"okp4d query bank spendable-balances"),"\t - Query for account spendable balances by address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/next/okp4d_query_bank_total"},"okp4d query bank total"),"\t - Query the total supply of coins of the chain")))}c.isMDXComponent=!0}}]);