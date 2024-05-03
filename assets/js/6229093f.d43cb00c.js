"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[4611],{18770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(85893),o=n(11151);const s={},r=void 0,a={id:"okp4d_keys_migrate",title:"okp4d_keys_migrate",description:"okp4d keys migrate",source:"@site/commands_versioned_docs/version-v7.1.0/okp4d_keys_migrate.md",sourceDirName:".",slug:"/okp4d_keys_migrate",permalink:"/commands/okp4d_keys_migrate",draft:!1,unlisted:!1,tags:[],version:"v7.1.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"okp4d_keys_list",permalink:"/commands/okp4d_keys_list"},next:{title:"okp4d_keys_mnemonic",permalink:"/commands/okp4d_keys_mnemonic"}},d={},l=[{value:"okp4d keys migrate",id:"okp4d-keys-migrate",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"okp4d-keys-migrate",children:"okp4d keys migrate"}),"\n",(0,i.jsx)(t.p,{children:"Migrate keys from amino to proto serialization format"}),"\n",(0,i.jsx)(t.h3,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsxs)(t.p,{children:["Migrate keys from Amino to Protocol Buffers records.\nFor each key material entry, the command will check if the key can be deserialized using proto.\nIf this is the case, the key is already migrated. Therefore, we skip it and continue with a next one.\nOtherwise, we try to deserialize it using Amino into LegacyInfo. If this attempt is successful, we serialize\nLegacyInfo to Protobuf serialization format and overwrite the keyring entry. If any error occurred, it will be\noutputted in CLI and migration will be continued until all keys in the keyring DB are exhausted.\nSee ",(0,i.jsx)(t.a,{href:"https://github.com/cosmos/cosmos-sdk/pull/9695",children:"https://github.com/cosmos/cosmos-sdk/pull/9695"}),"  for more details."]}),"\n",(0,i.jsx)(t.p,{children:"It is recommended to run in 'dry-run' mode first to verify all key migration material."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"okp4d keys migrate [flags]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"  -h, --help   help for migrate\n"})}),"\n",(0,i.jsx)(t.h3,{id:"options-inherited-from-parent-commands",children:"Options inherited from parent commands"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'      --keyring-backend string   Select keyring\'s backend (os|file|kwallet|pass|test|memory) (default "test")\n      --keyring-dir string       The client Keyring directory; if omitted, the default \'home\' directory will be used\n      --output string            Output format (text|json) (default "text")\n'})}),"\n",(0,i.jsx)(t.h3,{id:"see-also",children:"SEE ALSO"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/commands/next/okp4d_keys",children:"okp4d keys"}),"\t - Manage your application's keys"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(67294);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);