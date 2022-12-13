"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[4407],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31527:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),c=["components"],o={},l=void 0,s={unversionedId:"okp4d_query_ibc_client",id:"okp4d_query_ibc_client",title:"okp4d_query_ibc_client",description:"okp4d query ibc client",source:"@site/commands/okp4d_query_ibc_client.md",sourceDirName:".",slug:"/okp4d_query_ibc_client",permalink:"/commands/okp4d_query_ibc_client",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_ibc_channel_unreceived-packets",permalink:"/commands/okp4d_query_ibc_channel_unreceived-packets"},next:{title:"okp4d_query_ibc_client_consensus-state-heights",permalink:"/commands/okp4d_query_ibc_client_consensus-state-heights"}},u={},p=[{value:"okp4d query ibc client",id:"okp4d-query-ibc-client",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"okp4d-query-ibc-client"},"okp4d query ibc client"),(0,a.kt)("p",null,"IBC client query subcommands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"okp4d query ibc client [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for client\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc"},"okp4d query ibc"),"\t - Querying commands for the IBC module"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client_consensus-state"},"okp4d query ibc client consensus-state"),"\t - Query the consensus state of a client at a given height"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client_consensus-state-heights"},"okp4d query ibc client consensus-state-heights"),"\t - Query the heights of all consensus states of a client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client_consensus-states"},"okp4d query ibc client consensus-states"),"\t - Query all the consensus states of a client."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client_header"},"okp4d query ibc client header"),"\t - Query the latest header of the running chain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client_params"},"okp4d query ibc client params"),"\t - Query the current ibc client parameters"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client_self-consensus-state"},"okp4d query ibc client self-consensus-state"),"\t - Query the self consensus state for this chain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client_state"},"okp4d query ibc client state"),"\t - Query a client state"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client_states"},"okp4d query ibc client states"),"\t - Query all available light clients"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_client_status"},"okp4d query ibc client status"),"\t - Query client status")))}m.isMDXComponent=!0}}]);