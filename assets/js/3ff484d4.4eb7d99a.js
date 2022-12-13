"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[8016],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,g=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={},l=void 0,u={unversionedId:"okp4d_query_staking_delegations",id:"okp4d_query_staking_delegations",title:"okp4d_query_staking_delegations",description:"okp4d query staking delegations",source:"@site/commands/okp4d_query_staking_delegations.md",sourceDirName:".",slug:"/okp4d_query_staking_delegations",permalink:"/commands/okp4d_query_staking_delegations",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_staking_delegations-to",permalink:"/commands/okp4d_query_staking_delegations-to"},next:{title:"okp4d_query_staking_historical-info",permalink:"/commands/okp4d_query_staking_historical-info"}},p={},d=[{value:"okp4d query staking delegations",id:"okp4d-query-staking-delegations",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-query-staking-delegations"},"okp4d query staking delegations"),(0,i.kt)("p",null,"Query all delegations made by one delegator"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Query delegations for an individual delegator on all validators."),(0,i.kt)("p",null,"Example:\n$ okp4d query staking delegations okp41gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query staking delegations [delegator-addr] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --count-total       count total number of records in delegations to query for\n      --height int        Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help              help for delegations\n      --limit uint        pagination limit of delegations to query for (default 100)\n      --node string       &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n      --offset uint       pagination offset of delegations to query for\n  -o, --output string     Output format (text|json) (default "text")\n      --page uint         pagination page of delegations to query for. This sets offset to a multiple of limit (default 1)\n      --page-key string   pagination page-key of delegations to query for\n      --reverse           results are sorted in descending order\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/okp4d_query_staking"},"okp4d query staking"),"\t - Querying commands for the staking module")))}f.isMDXComponent=!0}}]);