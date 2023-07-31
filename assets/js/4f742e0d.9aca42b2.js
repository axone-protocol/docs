(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[21182],{32064:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));t(20701);const o={sidebar_position:3},r="Running a node",s={unversionedId:"nodes/run-node",id:"nodes/run-node",title:"Running a node",description:"This document explains the main steps to configure a node to join an existing network, and make it validator.",source:"@site/docs/nodes/run-node.md",sourceDirName:"nodes",slug:"/nodes/run-node",permalink:"/nodes/run-node",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/nodes/run-node.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"nodes",previous:{title:"Installation",permalink:"/nodes/installation"},next:{title:"Upgrade",permalink:"/nodes/upgrade"}},l={},d=[{value:"\u2699\ufe0f Init",id:"\ufe0f-init",level:2},{value:"Chain ID",id:"chain-id",level:3},{value:"Choose a moniker",id:"choose-a-moniker",level:3},{value:"Initialize the node",id:"initialize-the-node",level:3},{value:"Set Genesis",id:"set-genesis",level:3},{value:"Add peers",id:"add-peers",level:3},{value:"\ud83d\ude80 Run",id:"-run",level:2},{value:"Syncing the node",id:"syncing-the-node",level:3},{value:"\ud83d\udc68\u200d\u2696\ufe0f Becoming validator",id:"\ufe0f-becoming-validator",level:2}],p={toc:d};function k(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-a-node"},"Running a node"),(0,a.kt)("p",null,"This document explains the main steps to configure a node to join an existing network, and make it validator."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The steps detailed here are to be adjusted depending on the network you're joining.")),(0,a.kt)("h2",{id:"\ufe0f-init"},"\u2699\ufe0f Init"),(0,a.kt)("p",null,"Joining a network require at least 3 elements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The network's ",(0,a.kt)("inlineCode",{parentName:"li"},"chain-id"),"."),(0,a.kt)("li",{parentName:"ul"},"The network's Genesis."),(0,a.kt)("li",{parentName:"ul"},"Some network's peers.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"As a prerequisite, the ",(0,a.kt)("inlineCode",{parentName:"p"},"okp4d")," binary shall be installed, please find the instructions ",(0,a.kt)("a",{parentName:"p",href:"/nodes/installation"},"here"),".")),(0,a.kt)("h3",{id:"chain-id"},"Chain ID"),(0,a.kt)("p",null,"A network is identified by its chain id, when initializing a node's configuration it is recommended to provide it so the ",(0,a.kt)("inlineCode",{parentName:"p"},"client.toml")," configuration will be properly set, this will ease CLI commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"CHAIN_ID=okp4-testnet-1\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"chain-id")," values for each networks are detailed in the corresponding sections (i.e. ",(0,a.kt)("a",{parentName:"p",href:"/nodes/join-testnet#node-configuration"},"Join Testnet")," & ",(0,a.kt)("a",{parentName:"p",href:"/nodes/join-mainnet#node-configuration"},"Join Mainnet"),").")),(0,a.kt)("h3",{id:"choose-a-moniker"},"Choose a moniker"),(0,a.kt)("p",null,"The moniker helps identifying your node on the explorer interfaces, this is more human readable than a node ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'MONIKER="MiKnowTor"\n')),(0,a.kt)("h3",{id:"initialize-the-node"},"Initialize the node"),(0,a.kt)("p",null,"At this point, the node can be initialized:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"okp4d init $MONIKER --chain-id $CHAIN_ID\n")),(0,a.kt)("p",null,"This will generate, in the ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.okp4d")," folder, the following files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config/app.toml"),": Application-related configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config/client.toml"),": Client-oriented configuration file (not used when running a node)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config/config.toml"),": Tendermint-related configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config/genesis.json"),": The network's genesis file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config/node_key.json"),": Private key to use for node authentication in the p2p protocol."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config/priv_validator_key"),": Private key to use as a validator in the consensus protocol."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data"),": The node's database.")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The generated ",(0,a.kt)("inlineCode",{parentName:"p"},"config/priv_validator_key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"config/node_key.json")," are very sensible, if stolen the entire stake delegated to the validator is at risk.\n\u27a1\ufe0f See the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/security"},"Security")," section.")),(0,a.kt)("h3",{id:"set-genesis"},"Set Genesis"),(0,a.kt)("p",null,"Inside the network all the nodes share the same chain configuration and state, the genesis file providing the configuration and the base state all the nodes shall share it."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"config/genesis.json")," file shall be replaced with the one corresponding to the targeted network (i.e. ",(0,a.kt)("a",{parentName:"p",href:"/nodes/join-testnet#genesis"},"Join Testnet")," & ",(0,a.kt)("a",{parentName:"p",href:"/nodes/join-mainnet#genesis"},"Join Mainnet"),")."),(0,a.kt)("h3",{id:"add-peers"},"Add peers"),(0,a.kt)("p",null,"Joining a network is first of all being part of the P2P protocol. To do so your node must connect with others by specifying persistent peers, either in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config/config.toml"),", or through the ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p.persistent_peers")," argument of the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," command. Depending on the chosen network, refer to its section to find peers (i.e. ",(0,a.kt)("a",{parentName:"p",href:"/nodes/join-testnet#peers"},"Join Testnet")," & ",(0,a.kt)("a",{parentName:"p",href:"/nodes/join-mainnet#peers"},"Join Mainnet"),")."),(0,a.kt)("h2",{id:"-run"},"\ud83d\ude80 Run"),(0,a.kt)("p",null,"Let's invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"okp4d start\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Running a validator node being critical, consider ",(0,a.kt)("a",{parentName:"p",href:"/nodes/upgrade"},"automate upgrades")," and ",(0,a.kt)("a",{parentName:"p",href:"/nodes/security"},"secure your node"),".")),(0,a.kt)("h3",{id:"syncing-the-node"},"Syncing the node"),(0,a.kt)("p",null,"Your node will start beginning by syncing to the network, this step can take a long time depending on the blockchain size, you can query the sync status with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Query via the RPC (default port: 26657)\ncurl http://localhost:26657/status | jq .result.sync_info.catching_up\n")),(0,a.kt)("p",null,"During the sync process the node will apply each block on its state, you'll need to install binary upgrades at the correct heights (i.e. only on breaking upgrade cases) in order to sync your node. Please refer to your targeted network upgrades history (i.e. ",(0,a.kt)("a",{parentName:"p",href:"/nodes/join-testnet#upgrades"},"Join Testnet")," & ",(0,a.kt)("a",{parentName:"p",href:"/nodes/join-mainnet#upgrades"},"Join Mainnet"),")."),(0,a.kt)("h2",{id:"\ufe0f-becoming-validator"},"\ud83d\udc68\u200d\u2696\ufe0f Becoming validator"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Your node shall be fully synced before upgrading it to a validator. It can't take part in the validation consensus without sharing the same state than the others, and risk thus to be slashed and jailed.")),(0,a.kt)("p",null,"To make your node validator you need to submit a ",(0,a.kt)("inlineCode",{parentName:"p"},"create-validator")," transaction referencing it by its public key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'PUB_KEY=$(okp4d tendermint show-validator)\nokp4d tx staking create-validator \\\n  --amount 1000000uknow \\\n  --commission-max-change-rate "0.1" \\\n  --commission-max-rate "0.20" \\\n  --commission-rate "0.1" \\\n  --min-self-delegation "1" \\\n  --details "Don\'t stop me KNOW" \\\n  --pubkey=$PUB_KEY \\\n  --moniker "$MONIKER_NAME" \\\n  --chain-id $CHAIN_ID \\\n  --gas-prices 0.025uknow \\\n  --from <key-name>\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is an example transaction, to customize your validator explore the available flags:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"okp4d tx staking create-validator --help\n"))))}k.isMDXComponent=!0},11748:(e,n,t)=>{var i={"./locale":89234,"./locale.js":89234};function a(e){var n=o(e);return t(n)}function o(e){if(!t.o(i,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=o,e.exports=a,a.id=11748}}]);