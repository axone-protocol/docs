"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[80933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const i={},a=void 0,s={unversionedId:"okp4d_add-genesis-account",id:"version-v5.0.0/okp4d_add-genesis-account",title:"okp4d_add-genesis-account",description:"okp4d add-genesis-account",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_add-genesis-account.md",sourceDirName:".",slug:"/okp4d_add-genesis-account",permalink:"/commands/okp4d_add-genesis-account",draft:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d",permalink:"/commands/okp4d"},next:{title:"okp4d_collect-gentxs",permalink:"/commands/okp4d_collect-gentxs"}},c={},d=[{value:"okp4d add-genesis-account",id:"okp4d-add-genesis-account",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}],l={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"okp4d-add-genesis-account"},"okp4d add-genesis-account"),(0,r.kt)("p",null,"Add a genesis account to genesis.json"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("p",null,"Add a genesis account to genesis.json. The provided account must specify\nthe account address or key name and a list of initial coins. If a key name is given,\nthe address will be looked up in the local Keybase. The list of initial tokens must\ncontain valid denominations. Accounts may optionally be supplied with vesting parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"okp4d add-genesis-account [address_or_key_name] [coin][,[coin]] [flags]\n")),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'      --grpc-addr string         the gRPC endpoint to use for this chain\n      --grpc-insecure            allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int               Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help                     help for add-genesis-account\n      --home string              The application home directory (default "/home/john/.okp4d")\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test) (default "test")\n      --node string              &lt;host&gt;:&lt;port&gt; to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string            Output format (text|json) (default "text")\n      --vesting-amount string    amount of coins for vesting accounts\n      --vesting-cliff-time int   schedule cliff time (unix epoch) for vesting accounts\n      --vesting-end-time int     schedule end time (unix epoch) for vesting accounts\n      --vesting-start-time int   schedule start time (unix epoch) for vesting accounts\n')),(0,r.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/commands/next/okp4d"},"okp4d"),"\t - OKP4 Daemon \ud83d\udc79")))}p.isMDXComponent=!0}}]);