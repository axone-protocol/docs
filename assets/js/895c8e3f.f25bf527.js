"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[8248],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=c,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(k,a(a({ref:n},l),{},{components:t})):r.createElement(k,a({ref:n},l))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var i=t.length,a=new Array(i);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:c,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89140:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=t(87462),c=t(63366),i=(t(67294),t(3905)),a=["components"],o={},p=void 0,u={unversionedId:"okp4d_query_ibc_channel_unreceived-packets",id:"okp4d_query_ibc_channel_unreceived-packets",title:"okp4d_query_ibc_channel_unreceived-packets",description:"okp4d query ibc channel unreceived-packets",source:"@site/commands/okp4d_query_ibc_channel_unreceived-packets.md",sourceDirName:".",slug:"/okp4d_query_ibc_channel_unreceived-packets",permalink:"/commands/okp4d_query_ibc_channel_unreceived-packets",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_ibc_channel_unreceived-acks",permalink:"/commands/okp4d_query_ibc_channel_unreceived-acks"},next:{title:"okp4d_query_ibc_client",permalink:"/commands/okp4d_query_ibc_client"}},l={},s=[{value:"okp4d query ibc channel unreceived-packets",id:"okp4d-query-ibc-channel-unreceived-packets",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:s};function m(e){var n=e.components,t=(0,c.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"okp4d-query-ibc-channel-unreceived-packets"},"okp4d query ibc channel unreceived-packets"),(0,i.kt)("p",null,"Query all the unreceived packets associated with a channel"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Determine if a packet, given a list of packet commitment sequences, is unreceived."),(0,i.kt)("p",null,"The return value represents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unreceived packet commitments: no acknowledgement exists on receiving chain for the given packet commitment sequence on sending chain.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query ibc channel unreceived-packets [port-id] [channel-id] [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"okp4d query ibc channel unreceived-packets [port-id] [channel-id] --sequences=1,2,3\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --height int             Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help                   help for unreceived-packets\n      --node string            &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string          Output format (text|json) (default "text")\n      --sequences int64Slice   comma separated list of packet sequence numbers (default [])\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_channel"},"okp4d query ibc channel"),"\t - IBC channel query subcommands")))}m.isMDXComponent=!0}}]);