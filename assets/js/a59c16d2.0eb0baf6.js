"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[57789],{53859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(85893),r=n(11151);const o={},i=void 0,a={id:"okp4d_query_txs",title:"okp4d_query_txs",description:"okp4d query txs",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_query_txs.md",sourceDirName:".",slug:"/okp4d_query_txs",permalink:"/commands/okp4d_query_txs",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_query_tx",permalink:"/commands/okp4d_query_tx"},next:{title:"okp4d_query_upgrade",permalink:"/commands/okp4d_query_upgrade"}},d={},c=[{value:"okp4d query txs",id:"okp4d-query-txs",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"okp4d-query-txs",children:"okp4d query txs"}),"\n",(0,s.jsx)(t.p,{children:"Query for paginated transactions that match a set of events"}),"\n",(0,s.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.p,{children:"Search for transactions that match the exact given events where results are paginated.\nEach event takes the form of '{eventType}.{eventAttribute}={value}'. Please refer\nto each module's documentation for the full set of events to query for. Each module\ndocuments its respective events under 'xx_events.md'."}),"\n",(0,s.jsx)(t.p,{children:"Example:\n$ okp4d query txs --events 'message.sender=cosmos1...&message.action=withdraw_delegator_reward' --page 1 --limit 30"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"okp4d query txs [flags]\n"})}),"\n",(0,s.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --events string      list of transaction events in the form of {eventType}.{eventAttribute}={value}\n      --grpc-addr string   the gRPC endpoint to use for this chain\n      --grpc-insecure      allow gRPC over insecure channels, if not TLS the server must use TLS\n      --height int         Use a specific height to query state at (this can error if the node is pruning state)\n  -h, --help               help for txs\n      --limit int          Query number of transactions results per page returned (default 100)\n      --node string        <host>:<port> to Tendermint RPC interface for this chain (default "tcp://localhost:26657")\n  -o, --output string      Output format (text|json) (default "text")\n      --page int           Query a specific page of paginated results (default 1)\n'})}),"\n",(0,s.jsx)(t.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'      --chain-id string   The network chain ID (default "okp4d")\n'})}),"\n",(0,s.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/commands/next/okp4d_query",children:"okp4d query"}),"\t - Querying subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);