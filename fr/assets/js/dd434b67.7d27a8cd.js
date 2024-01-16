"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[62415],{50472:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,readingTime:()=>l,toc:()=>c});var t=i(85893),r=i(11151);const s={sidebar_position:9},d="Tendermint KMS + Ledger",o={id:"nodes/kms_ledger",title:"Tendermint KMS + Ledger",description:"Set up Tendermint KMS with the Tendermint Ledger app \\{synopsis\\}",source:"@site/docs/nodes/kms_ledger.md",sourceDirName:"nodes",slug:"/nodes/kms_ledger",permalink:"/fr/nodes/kms_ledger",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/nodes/kms_ledger.md",tags:[],version:"current",lastUpdatedAt:1704645411,formattedLastUpdatedAt:"7 janv. 2024",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"nodes",previous:{title:"Tendermint KMS",permalink:"/fr/nodes/kms"}},a={},l=3,c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Checklist",id:"checklist",level:2},{value:"Tendermint Validator app (for Ledger devices)",id:"tendermint-validator-app-for-ledger-devices",level:2},{value:"KMS configuration",id:"kms-configuration",level:2},{value:"Config file",id:"config-file",level:3},{value:"Generate secret key",id:"generate-secret-key",level:3},{value:"Retrieve validator key",id:"retrieve-validator-key",level:3},{value:"Okp4d configuration",id:"okp4d-configuration",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tendermint-kms--ledger",children:"Tendermint KMS + Ledger"}),"\n",(0,t.jsx)(n.p,{children:"Set up Tendermint KMS with the Tendermint Ledger app {synopsis}"}),"\n",(0,t.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://shop.ledger.com/",children:"Ledger device"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://www.ledger.com/ledger-live",children:"Install Ledger Live"})," {prereq}"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"checklist",children:"Checklist"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["\ud83d\udea7  The following instructions are a brief walkthrough and not a comprehensive guideline. You should consider and research more about the ",(0,t.jsx)(n.a,{href:"/fr/nodes/security",children:"security implications"})," of activating an external KMS."]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u2705 Ledger ",(0,t.jsx)(n.a,{href:"https://shop.ledger.com/pages/ledger-nano-x",children:"Nano X"})," or ",(0,t.jsx)(n.a,{href:"https://shop.ledger.com/products/ledger-nano-s",children:"Nano S"})," device (compare ",(0,t.jsx)(n.a,{href:"https://shop.ledger.com/pages/hardware-wallets-comparison",children:"here"}),")"]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 ",(0,t.jsx)(n.a,{href:"https://www.ledger.com/ledger-live",children:"Ledger Live"})," installed"]}),"\n",(0,t.jsxs)(n.li,{children:["\u2705 Tendermint app installed (only in ",(0,t.jsx)(n.code,{children:"Developer Mode"}),")"]}),"\n",(0,t.jsx)(n.li,{children:"\u2705 Latest Versions (Firmware and Tendermint app)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tendermint-validator-app-for-ledger-devices",children:"Tendermint Validator app (for Ledger devices)"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["\ud83d\udea8",(0,t.jsx)(n.strong,{children:"IMPORTANT"}),": KMS and Ledger Tendermint app are currently work in progress. Details may vary. Use under ",(0,t.jsx)(n.strong,{children:"your own risk"})]})}),"\n",(0,t.jsx)(n.p,{children:"You should be able to find the Tendermint app in Ledger Live."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You will need to enable ",(0,t.jsx)(n.code,{children:"Developer Mode"})," in Ledger Live ",(0,t.jsx)(n.code,{children:"Settings"})," in order to find the app."]})}),"\n",(0,t.jsx)(n.h2,{id:"kms-configuration",children:"KMS configuration"}),"\n",(0,t.jsx)(n.p,{children:"In this section, we will configure a KMS to use a Ledger device running the Tendermint Validator App."}),"\n",(0,t.jsx)(n.h3,{id:"config-file",children:"Config file"}),"\n",(0,t.jsxs)(n.p,{children:["You can find other configuration examples ",(0,t.jsx)(n.a,{href:"https://github.com/iqlusioninc/tmkms/blob/master/tmkms.toml.example",children:"here"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"~/.tmkms/tmkms.toml"})," file with the following content (use an adequate ",(0,t.jsx)(n.code,{children:"chain_id"}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'# Example KMS configuration file\n[[validator]]\naddr = "tcp://localhost:26658"                  # or "unix:///path/to/socket"\nchain_id = "okp4-nemeton-1"\nreconnect = true                                # true is the default\nsecret_key = "~/.tmkms/secret_connection.key"\n\n[[providers.ledger]]\nchain_ids = ["okp4-nemeton-1"]\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit ",(0,t.jsx)(n.code,{children:"addr"})," to point to your ",(0,t.jsx)(n.code,{children:"okp4d"})," instance."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Adjust ",(0,t.jsx)(n.code,{children:"chain-id"})," to match your ",(0,t.jsx)(n.code,{children:".okp4d/config/config.toml"})," settings."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"provider.ledger"})," has not additional parameters at the moment, however, it is important that you keep that header to enable the feature."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Plug your Ledger device and open the Tendermint validator app."})}),"\n",(0,t.jsx)(n.h3,{id:"generate-secret-key",children:"Generate secret key"}),"\n",(0,t.jsxs)(n.p,{children:["Now you need to generate a ",(0,t.jsx)(n.code,{children:"secret_key"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tmkms keygen ~/.tmkms/secret_connection.key\n"})}),"\n",(0,t.jsx)(n.h3,{id:"retrieve-validator-key",children:"Retrieve validator key"}),"\n",(0,t.jsxs)(n.p,{children:["The last step is to retrieve the validator key that you will use in ",(0,t.jsx)(n.code,{children:"okp4d"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Start the KMS:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tmkms start -c ~/.tmkms/tmkms.toml\n"})}),"\n",(0,t.jsx)(n.p,{children:"The output should look similar to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"07:28:24 [INFO] tmkms 0.11.0 starting up...\n07:28:24 [INFO] [keyring:ledger:ledger] added validator key okp4valconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f\n07:28:24 [INFO] KMS node ID: 1BC12314E2E1C29015B66017A397F170C6ECDE4A\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The KMS may complain that it cannot connect to ",(0,t.jsx)(n.code,{children:"okp4d"}),". That is fine, we will fix it in the next section.\nThis output indicates the validator key linked to this particular device is: ",(0,t.jsx)(n.code,{children:"okp4valconspub1zcjduepqy53m39prgp9dz3nz96kaav3el5e0th8ltwcf8cpavqdvpxgr5slsd6wz6f"}),"\nTake note of the validator pubkey that appears in your screen. ",(0,t.jsx)(n.em,{children:"We will use it in the next section."})]}),"\n",(0,t.jsx)(n.h2,{id:"okp4d-configuration",children:"Okp4d configuration"}),"\n",(0,t.jsxs)(n.p,{children:["You need to enable KMS access by editing ",(0,t.jsx)(n.code,{children:".okp4d/config/config.toml"}),". In this file, modify ",(0,t.jsx)(n.code,{children:"priv_validator_laddr"})," to create a listening address/port or a unix socket in ",(0,t.jsx)(n.code,{children:"okp4d"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'...\n# TCP or UNIX socket address for Tendermint to listen on for\n# connections from an external PrivValidator process\npriv_validator_laddr = "tcp://127.0.0.1:26658"\n...\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Let's assume that you have set up your validator account and called it ",(0,t.jsx)(n.code,{children:"kmsval"}),". You can tell okp4d the key that we've got in the previous section."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"okp4d gentx --name kmsval --pubkey <pub_key>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now start ",(0,t.jsx)(n.code,{children:"okp4d"}),". You should see that the KMS connects and receives a signature request."]}),"\n",(0,t.jsx)(n.p,{children:"Once the Ledger device receives the first message, it will ask for confirmation that the values are adequate."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tendermint Ledger app &quot;Init Validation&quot;",src:i(21452).Z+"",width:"300",height:"150"})}),"\n",(0,t.jsx)(n.p,{children:"Click the right button, if the height and round are correct."}),"\n",(0,t.jsx)(n.p,{children:"After that, you will see that the KMS will start forwarding all signature requests to the Ledger app:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tendermint Ledger app &quot;Proposal&quot;",src:i(76367).Z+"",width:"313",height:"150"})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The word ",(0,t.jsx)(n.code,{children:"TEST"})," in the second picture, second line appears because they were taken on a pre-release version.\nOnce the app as been released in Ledger's app store, this word should NOT appear."]})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21452:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/kms_tm_ledger_01-81dd2c6c77e1560f1b2942964f17aea9.webp"},76367:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/kms_tm_ledger_02-2e049be05213ea79434899c8ed8f22d0.webp"},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>d});var t=i(67294);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);