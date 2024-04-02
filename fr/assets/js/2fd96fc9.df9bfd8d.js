"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[72525],{83945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,readingTime:()=>c,toc:()=>h});var o=t(85893),r=t(11151);const s={sidebar_position:4},i="Explorer",a={id:"tutorials/explorer-sc",title:"Explorer",description:"Axone with Keplr",source:"@site/docs/tutorials/explorer-sc.md",sourceDirName:"tutorials",slug:"/tutorials/explorer-sc",permalink:"/fr/tutorials/explorer-sc",draft:!1,unlisted:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/tutorials/explorer-sc.md",tags:[],version:"current",lastUpdatedAt:1712045359,formattedLastUpdatedAt:"2 avr. 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorials",previous:{title:"Interactions with the CLI",permalink:"/fr/tutorials/cli-1"},next:{title:"Manage rules with Prolog",permalink:"/fr/tutorials/prolog-1"}},l={},c=4,h=[{value:"What is the Axone Explorer?",id:"what-is-the-axone-explorer",level:2},{value:"Transaction analysis with the Axone Explorer",id:"transaction-analysis-with-the-axone-explorer",level:2},{value:"Recap&#39;",id:"recap",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"explorer",children:"Explorer"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Axone with Keplr",src:t(18865).Z+"",width:"3168",height:"1192"})}),"\n",(0,o.jsx)(n.p,{children:"The ability to interact seamlessly with a blockchain is a crucial skill. Whether tracking transactions or executing smart contract messages, having the right tools at your disposal can make all the difference."}),"\n",(0,o.jsxs)(n.p,{children:["That's where the ",(0,o.jsx)(n.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet",children:"Axone Explorer"})," comes in. Are you ready to unpack its capabilities? Let's embark on a journey of exploration and discovery into the Axone blockchain ",(0,o.jsx)(n.strong,{children:"\ud83d\ude80"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"what-is-the-axone-explorer",children:"What is the Axone Explorer?"}),"\n",(0,o.jsxs)(n.p,{children:["An Axone blockchain explorer, such as ",(0,o.jsx)(n.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet",children:"the Axone Explorer"}),", bridges users and the Axone network. It's essentially an intuitive interface that allows users to interact with the blockchain."]}),"\n",(0,o.jsx)(n.p,{children:"Think of an explorer as your personal guide to the Axone blockchain. It's more than just a viewing platform, you can:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Send transactions."}),"\n",(0,o.jsx)(n.li,{children:"Deploy and interact with CosmWasm smart contracts."}),"\n",(0,o.jsx)(n.li,{children:"Participate in governance."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Watch out for this ",(0,o.jsx)(n.a,{href:"https://github.com/okp4/awesome#-block-explorers",children:"list of Axone explorers"}),". Anyone can build his own Axone blockchain explorer. This means you can tailor an explorer to your specific needs: from your blockchain node, querying it for information and presenting the result in a user-friendly format."]}),"\n",(0,o.jsxs)(n.p,{children:["But while building your own explorer is possible, it requires significant time, resources, and technical expertise. Thus you can use ",(0,o.jsx)(n.a,{href:"https://github.com/okp4/ping-explorer",children:"the explorer from the Axone team"}),", a robust and user-friendly tool powered by ",(0,o.jsx)(n.a,{href:"https://ping.pub/",children:"ping.pub"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"transaction-analysis-with-the-axone-explorer",children:"Transaction analysis with the Axone Explorer"}),"\n",(0,o.jsx)(n.p,{children:"A transaction on the blockchain is a record of some blockchain state change, like the transfer of tokens from one account to another or the execution of a smart contract."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet",children:"Axone Explorer"})," allows you to view and analyze these transactions in detail.\nSeveral transactions are validated in a block. You can check the last validated blocks via the ",(0,o.jsx)(n.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet/block",children:'"Blocks" menu'}),' . Click on the "Transactions tab" to get the transactions in recent blocks.']}),"\n",(0,o.jsx)(n.p,{children:"Before moving on to transactions with smart contracts, let's begin with a basic operation: a transfer of $AXONE tokens."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["You need to ",(0,o.jsx)(n.a,{href:"https://docs.okp4.network/tutorials/keplr-1",children:"set up a wallet with Keplr and own some $AXONE tokens"}),"."]})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Ensure to use the ",(0,o.jsx)(n.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet",children:"drunemeton testnet"})," and not the ",(0,o.jsx)(n.a,{href:"https://explore.okp4.network/OKP4%20devnet",children:"nemeton testnet"})," or the devnet."]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Link your Axone account to the explorer."}),"\n",(0,o.jsx)(n.li,{children:'Click on the wallet button (upper on the right), "Connect wallet", "Keplr", "Connect" and then on "Approve".'}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You'll see your Axone wallet address if you click again on the wallet button. Click on it to copy the address."}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Now,you are ready to send $AXONE via the explorer interface :"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Click on the "Send" button from the Dashboard.'}),"\n",(0,o.jsxs)(n.li,{children:["Send a few $AXONE tokens to another Axone wallet, ",(0,o.jsx)(n.code,{children:"okp41wuxc2mzy0wp27cdcfnde3vz07eurpd7grfmq6n"})," as the recipient for example."]}),"\n",(0,o.jsx)(n.li,{children:'Click on "Send" and "Approve" to confirm the transfer.'}),"\n"]}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"/img/content/tutorials/explorermaj-1.webp"})}),"\n",(0,o.jsx)(n.p,{children:'Once completed, click on "View transaction".'}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["Here are what the Axone Explorer shows us for ",(0,o.jsxs)(n.a,{href:"https://explore.okp4.network/OKP4%20Drunemeton%20testnet/tx/C131C3AFC90C92BCAC5044438D68984B842A481869B40CD831CC40AD1E983F2A",children:["the ",(0,o.jsx)(n.code,{children:"Send"})," transaction details"]}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Transaction Hash:"})," ",(0,o.jsx)(n.code,{children:"C131C3AFC90C92BCAC5044438D68984B842A481869B40CD831CC40AD1E983F2A"})," as a unique identifier, like a receipt that proves a transaction has occurred."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Height"}),": ",(0,o.jsx)(n.code,{children:"363073"})," is the block number in which the transaction has been validated."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Gas:"})," Computational effort limit to execute the transaction. Here the spent gas is ",(0,o.jsx)(n.code,{children:"71918"}),". The transaction would have failed if it needed more than ",(0,o.jsx)(n.code,{children:"200000"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Fees:"})," ",(0,o.jsx)(n.code,{children:"0.005 AXON"})," paid to compensate for the computational effort. The more complex a transaction, the higher the gas and, consequently, the fee. Fees also help prevent spam transactions on the network."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"@type:"})," Each message type corresponds to a specific action on the blockchain. For example, a message with ",(0,o.jsx)(n.code,{children:"@type"})," set to ",(0,o.jsx)(n.code,{children:"/cosmos.bank.v1beta1.MsgSend"})," represents a token transfer operation, while a message with ",(0,o.jsx)(n.code,{children:"@type"})," set to ",(0,o.jsx)(n.code,{children:"/cosmos.staking.v1beta1.MsgDelegate"})," represents a delegation operation in the staking module."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"From and To Addresses:"})," Unique identifiers for accounts on the blockchain. Tokens are transferred from the sender's address ",(0,o.jsx)(n.code,{children:"okp41yxrseqc9weu6cm0gm85yu64x9xdf3k5z8nwknf"})," to the recipient's address ",(0,o.jsx)(n.code,{children:"okp41wuxc2mzy0wp27cdcfnde3vz07eurpd7grfmq6n"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Amount"}),": ",(0,o.jsx)(n.code,{children:"0.05 AXON"})," sent"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"JSON:"})," Two main components (",(0,o.jsx)(n.code,{children:"tx"})," and ",(0,o.jsx)(n.code,{children:"tx_response"}),") which provide insights into the transaction, its execution status and related metadata."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'You can also retrieve a transaction you executed by clicking the "Search" button upper on the right, providing your Axone address, and clicking "Confirm". Click on the hash in the "Transactions" section to get the details.'}),"\n",(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:"/img/content/tutorials/explorer-2.webp"})}),"\n",(0,o.jsx)(n.p,{children:"If you have the transaction hash, you can also directly get transaction details by providing the hash in the Search modal."}),"\n",(0,o.jsx)(n.h2,{id:"recap",children:"Recap'"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You can check any blockchain transaction details with an explorer."}),"\n",(0,o.jsx)(n.li,{children:"Transfer, delegation and governance operations are also possible with this type of user interface."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Explorers are powerful tools that allow you to interact with the Axone blockchain in a user-friendly way. So why wait? Start exploring the Axone network today!"})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},18865:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/explorer-0-9db9e1ac77c3cafa8e8507aa273d2232.webp"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);