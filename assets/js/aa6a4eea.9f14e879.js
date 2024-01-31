"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[19719],{79725:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>r});var a=t(85893),s=t(11151);const o={},c=void 0,i={id:"okp4d_tx_interchain-accounts_host_generate-packet-data",title:"okp4d_tx_interchain-accounts_host_generate-packet-data",description:"okp4d tx interchain-accounts host generate-packet-data",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_tx_interchain-accounts_host_generate-packet-data.md",sourceDirName:".",slug:"/okp4d_tx_interchain-accounts_host_generate-packet-data",permalink:"/commands/okp4d_tx_interchain-accounts_host_generate-packet-data",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_interchain-accounts_host",permalink:"/commands/okp4d_tx_interchain-accounts_host"},next:{title:"okp4d_tx_logic",permalink:"/commands/okp4d_tx_logic"}},d={},r=[{value:"okp4d tx interchain-accounts host generate-packet-data",id:"okp4d-tx-interchain-accounts-host-generate-packet-data",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"okp4d-tx-interchain-accounts-host-generate-packet-data",children:"okp4d tx interchain-accounts host generate-packet-data"}),"\n",(0,a.jsx)(e.p,{children:"Generates ICA packet data."}),"\n",(0,a.jsx)(e.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(e.p,{children:'generate-packet-data accepts a message string and serializes it\ninto packet data which is outputted to stdout. It can be used in conjunction with send-tx"\nwhich submits pre-built packet data containing messages to be executed on the host chain.'}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"okp4d tx interchain-accounts host generate-packet-data [message] [flags]\n"})}),"\n",(0,a.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'okp4d tx interchain-accounts host generate-packet-data \'{\n    "@type":"/cosmos.bank.v1beta1.MsgSend",\n    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n    "amount": [\n        {\n            "denom": "stake",\n            "amount": "1000"\n        }\n    ]\n}\' --memo memo\n\n\nokp4d tx interchain-accounts host generate-packet-data \'[{\n    "@type":"/cosmos.bank.v1beta1.MsgSend",\n    "from_address":"cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n    "to_address":"cosmos10h9stc5v6ntgeygf5xf945njqq5h32r53uquvw",\n    "amount": [\n        {\n            "denom": "stake",\n            "amount": "1000"\n        }\n    ]\n},\n{\n\t"@type": "/cosmos.staking.v1beta1.MsgDelegate",\n\t"delegator_address": "cosmos15ccshhmp0gsx29qpqq6g4zmltnnvgmyu9ueuadh9y2nc5zj0szls5gtddz",\n\t"validator_address": "cosmosvaloper1qnk2n4nlkpw9xfqntladh74w6ujtulwnmxnh3k",\n\t"amount": {\n\t\t"denom": "stake",\n\t\t"amount": "1000"\n\t}\n}]\'\n'})}),"\n",(0,a.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"  -h, --help          help for generate-packet-data\n      --memo string   an optional memo to be included in the interchain account packet data\n"})}),"\n",(0,a.jsx)(e.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'      --chain-id string   The network chain ID (default "okp4d")\n'})}),"\n",(0,a.jsx)(e.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"/commands/next/okp4d_tx_interchain-accounts_host",children:"okp4d tx interchain-accounts host"}),"\t - IBC interchain accounts host transaction subcommands"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(h,{...n})}):h(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>i,a:()=>c});var a=t(67294);const s={},o=a.createContext(s);function c(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);