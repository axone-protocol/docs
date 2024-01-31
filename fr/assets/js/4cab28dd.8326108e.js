"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[56121],{40055:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(85893),a=n(11151);const r={},s=void 0,o={id:"okp4d_tx_distribution_withdraw-all-rewards",title:"okp4d_tx_distribution_withdraw-all-rewards",description:"okp4d tx distribution withdraw-all-rewards",source:"@site/commands_versioned_docs/version-v5.0.0/okp4d_tx_distribution_withdraw-all-rewards.md",sourceDirName:".",slug:"/okp4d_tx_distribution_withdraw-all-rewards",permalink:"/fr/commands/okp4d_tx_distribution_withdraw-all-rewards",draft:!1,unlisted:!1,tags:[],version:"v5.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_distribution_set-withdraw-addr",permalink:"/fr/commands/okp4d_tx_distribution_set-withdraw-addr"},next:{title:"okp4d_tx_distribution_withdraw-rewards",permalink:"/fr/commands/okp4d_tx_distribution_withdraw-rewards"}},d={},l=[{value:"okp4d tx distribution withdraw-all-rewards",id:"okp4d-tx-distribution-withdraw-all-rewards",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(t){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"okp4d-tx-distribution-withdraw-all-rewards",children:"okp4d tx distribution withdraw-all-rewards"}),"\n",(0,i.jsx)(e.p,{children:"withdraw all delegations rewards for a delegator"}),"\n",(0,i.jsx)(e.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(e.p,{children:"Withdraw all rewards for a single delegator.\nNote that if you use this command with --broadcast-mode=sync or --broadcast-mode=async, the max-msgs flag will automatically be set to 0."}),"\n",(0,i.jsx)(e.p,{children:"Example:\n$ okp4d tx distribution withdraw-all-rewards --from mykey"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"okp4d tx distribution withdraw-all-rewards [flags]\n"})}),"\n",(0,i.jsx)(e.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for withdraw-all-rewards\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --max-msgs int             Limit the number of messages per tx (0 for unlimited)\n      --node string              <host>:<port> to tendermint rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux), this is an advanced feature\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,i.jsx)(e.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"/fr/commands/next/okp4d_tx_distribution",children:"okp4d tx distribution"}),"\t - Distribution transactions subcommands"]}),"\n"]})]})}function u(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(c,{...t})}):c(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>s});var i=n(67294);const a={},r=i.createContext(a);function s(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);