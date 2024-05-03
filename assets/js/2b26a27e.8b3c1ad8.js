"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[77791],{86102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(85893),o=n(11151);const s={},i=void 0,r={id:"okp4d_tx_wasm_grant_store-code",title:"okp4d_tx_wasm_grant_store-code",description:"okp4d tx wasm grant store-code",source:"@site/commands_versioned_docs/version-v7.0.0/okp4d_tx_wasm_grant_store-code.md",sourceDirName:".",slug:"/okp4d_tx_wasm_grant_store-code",permalink:"/commands/v7.0.0/okp4d_tx_wasm_grant_store-code",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_wasm_grant_contract",permalink:"/commands/v7.0.0/okp4d_tx_wasm_grant_contract"},next:{title:"okp4d_tx_wasm_instantiate",permalink:"/commands/v7.0.0/okp4d_tx_wasm_instantiate"}},d={},c=[{value:"okp4d tx wasm grant store-code",id:"okp4d-tx-wasm-grant-store-code",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"okp4d-tx-wasm-grant-store-code",children:"okp4d tx wasm grant store-code"}),"\n",(0,a.jsx)(t.p,{children:"Grant authorization to upload contract code on behalf of you"}),"\n",(0,a.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsxs)(t.p,{children:["Grant authorization to an address.\nExamples:\n$ okp4d tx grant store-code <grantee_addr> 13a1fc994cc6d1c81b746ee0c0ff6f90043875e0bf1d9be6b7d779fc978dc2a5",":everybody","  1wqrtry681b746ee0c0ff6f90043875e0bf1d9be6b7d779fc978dc2a5",":nobody"," --expiration 1667979596"]}),"\n",(0,a.jsxs)(t.p,{children:["$ okp4d tx grant store-code <grantee_addr> *",":okp4d1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm",",okp4d1vx8knpllrj7n963p9ttd80w47kpacrhuts497x"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"okp4d tx wasm grant store-code [grantee] [code_hash:permission] [flags]\n"})}),"\n",(0,a.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --expiration int           The Unix timestamp.\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for store-code\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "os")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,a.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/commands/next/okp4d_tx_wasm_grant",children:"okp4d tx wasm grant"}),"\t - Grant a authz permission"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(67294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);