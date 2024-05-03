"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[66658],{78524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(85893),a=n(11151);const s={},o=void 0,r={id:"okp4d_tx_sign-batch",title:"okp4d_tx_sign-batch",description:"okp4d tx sign-batch",source:"@site/commands_versioned_docs/version-v7.1.0/okp4d_tx_sign-batch.md",sourceDirName:".",slug:"/okp4d_tx_sign-batch",permalink:"/commands/okp4d_tx_sign-batch",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_tx_multisign-batch",permalink:"/commands/okp4d_tx_multisign-batch"},next:{title:"okp4d_tx_sign",permalink:"/commands/okp4d_tx_sign"}},l={},c=[{value:"okp4d tx sign-batch",id:"okp4d-tx-sign-batch",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"okp4d-tx-sign-batch",children:"okp4d tx sign-batch"}),"\n",(0,i.jsx)(t.p,{children:"Sign transaction batch files"}),"\n",(0,i.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:"Sign batch files of transactions generated with --generate-only.\nThe command processes list of transactions from a file (one StdTx each line), or multiple files.\nThen generates signed transactions or signatures and print their JSON encoding, delimited by '\\n'.\nAs the signatures are generated, the command updates the account and sequence number accordingly."}),"\n",(0,i.jsx)(t.p,{children:"If the --signature-only flag is set, it will output the signature parts only."}),"\n",(0,i.jsx)(t.p,{children:"The --offline flag makes sure that the client will not reach out to full node.\nAs a result, the account and the sequence number queries will not be performed and\nit is required to set such parameters manually. Note, invalid values will cause\nthe transaction to fail. The sequence will be incremented automatically for each\ntransaction that is signed."}),"\n",(0,i.jsx)(t.p,{children:"If --account-number or --sequence flag is used when offline=false, they are ignored and\noverwritten by the default flag values."}),"\n",(0,i.jsx)(t.p,{children:"The --multisig=<multisig_key> flag generates a signature on behalf of a multisig\naccount key. It implies --signature-only."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"okp4d tx sign-batch [file] ([file2]...) [flags]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'  -a, --account-number uint      The account number of the signing account (offline mode only)\n      --append                   Combine all message and generate single signed transaction for broadcast.\n      --aux                      Generate aux signer data instead of sending a tx\n  -b, --broadcast-mode string    Transaction broadcasting mode (sync|async) (default "sync")\n      --chain-id string          The network chain ID (default "okp4d")\n      --dry-run                  ignore the --gas flag and perform a simulation of a transaction, but don\'t broadcast it (when enabled, the local Keybase is not accessible)\n      --fee-granter string       Fee granter grants fees for the transaction\n      --fee-payer string         Fee payer pays fees for the transaction instead of deducting from the signer\n      --fees string              Fees to pay along with transaction; eg: 10uatom\n      --from string              Name or address of private key with which to sign\n      --gas string               gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically. Note: "auto" option doesn\'t always report accurate results. Set a valid coin value to adjust the result. Can be used instead of "fees". (default 200000)\n      --gas-adjustment float     adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored  (default 1)\n      --gas-prices string        Gas prices in decimal format to determine the transaction fee (e.g. 0.1uatom)\n      --generate-only            Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)\n  -h, --help                     help for sign-batch\n      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --ledger                   Use a connected Ledger device\n      --multisig string          Address or key name of the multisig account on behalf of which the transaction shall be signed\n      --node string              <host>:<port> to CometBFT rpc interface for this chain (default "tcp://localhost:26657")\n      --note string              Note to add a description to the transaction (previously --memo)\n      --offline                  Offline mode (does not allow any online functionality)\n  -o, --output string            Output format (text|json) (default "json")\n      --output-document string   The document will be written to the given file instead of STDOUT\n  -s, --sequence uint            The sequence number of the signing account (offline mode only)\n      --sign-mode string         Choose sign mode (direct|amino-json|direct-aux|textual), this is an advanced feature\n      --signature-only           Print only the generated signature, then exit\n      --timeout-height uint      Set a block timeout height to prevent the tx from being committed past a certain height\n      --tip string               Tip is the amount that is going to be transferred to the fee payer on the target chain. This flag is only valid when used with --aux, and is ignored if the target chain didn\'t enable the TipDecorator\n  -y, --yes                      Skip tx broadcasting prompt confirmation\n'})}),"\n",(0,i.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/commands/next/okp4d_tx",children:"okp4d tx"}),"\t - Transactions subcommands"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var i=n(67294);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);