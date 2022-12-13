"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[934],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,c=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=c,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function m(e,n){var t=arguments,c=n&&n.mdxType;if("string"==typeof e||c){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29086:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=t(87462),c=t(63366),a=(t(67294),t(3905)),i=["components"],o={},u=void 0,l={unversionedId:"okp4d_query_ibc_channel_unreceived-acks",id:"okp4d_query_ibc_channel_unreceived-acks",title:"okp4d_query_ibc_channel_unreceived-acks",description:"okp4d query ibc channel unreceived-acks",source:"@site/commands/okp4d_query_ibc_channel_unreceived-acks.md",sourceDirName:".",slug:"/okp4d_query_ibc_channel_unreceived-acks",permalink:"/commands/okp4d_query_ibc_channel_unreceived-acks",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_ibc_channel_packet-receipt",permalink:"/commands/okp4d_query_ibc_channel_packet-receipt"},next:{title:"okp4d_query_ibc_channel_unreceived-packets",permalink:"/commands/okp4d_query_ibc_channel_unreceived-packets"}},p={},s=[{value:"okp4d query ibc channel unreceived-acks",id:"okp4d-query-ibc-channel-unreceived-acks",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:s};function m(e){var n=e.components,t=(0,c.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"okp4d-query-ibc-channel-unreceived-acks"},"okp4d query ibc channel unreceived-acks"),(0,a.kt)("p",null,"Query all the unreceived acks associated with a channel"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Given a list of acknowledgement sequences from counterparty, determine if an ack on the counterparty chain has been received on the executing chain."),(0,a.kt)("p",null,"The return value represents:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unreceived packet acknowledgement: packet commitment exists on original sending (executing) chain and ack exists on receiving chain.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"okp4d query ibc channel unreceived-acks [port-id] [channel-id] [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"okp4d query ibc channel unreceived-acks [port-id] [channel-id] --sequences=1,2,3\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --height int             Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help                   help for unreceived-acks\n      --node string            &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string          Output format (text|json) (default "text")\n      --sequences int64Slice   comma separated list of packet sequence numbers (default [])\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --chain-id string   The network chain ID (default "okp4d")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/commands/okp4d_query_ibc_channel"},"okp4d query ibc channel"),"\t - IBC channel query subcommands")))}m.isMDXComponent=!0}}]);