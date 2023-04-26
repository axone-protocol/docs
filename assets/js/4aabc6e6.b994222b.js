(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[64591],{35897:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return h},toc:function(){return d}});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=(a(29420),["components"]),s={sidebar_position:9},l="Token Model",h={unversionedId:"whitepaper/token-model",id:"whitepaper/token-model",title:"Token Model",description:"Utility",source:"@site/docs/whitepaper/token-model.md",sourceDirName:"whitepaper",slug:"/whitepaper/token-model",permalink:"/whitepaper/token-model",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/whitepaper/token-model.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"whitepaper",previous:{title:"Roles",permalink:"/whitepaper/roles"},next:{title:"Tokenomics",permalink:"/whitepaper/tokenomics"}},c={},d=[{value:"Utility",id:"utility",level:2},{value:"Rewards",id:"rewards",level:3},{value:"Transaction Fees",id:"transaction-fees",level:3},{value:"Micropayments",id:"micropayments",level:3},{value:"Staking",id:"staking",level:2},{value:"Staking Validators &amp; Delegators",id:"staking-validators--delegators",level:3},{value:"Staking Services",id:"staking-services",level:3},{value:"Curation",id:"curation",level:2},{value:"Curation Shares",id:"curation-shares",level:3},{value:"Curation Fees",id:"curation-fees",level:3},{value:"Burn &amp; Mint Process",id:"burn--mint-process",level:3},{value:"Bonding Curve 101 Model",id:"bonding-curve-101-model",level:3},{value:"Risks",id:"risks",level:3},{value:"Governance",id:"governance",level:2},{value:"Liquidity",id:"liquidity",level:2},{value:"Insurance &amp; Sybil control",id:"insurance--sybil-control",level:2},{value:"Insurance",id:"insurance",level:3},{value:"Sybil control",id:"sybil-control",level:3}],u={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"token-model"},"Token Model"),(0,r.kt)("div",{className:"text--center"},(0,r.kt)("img",{src:"/img/content/whitepaper/token-model-2.webp",alt:"Token Model",width:"50%"})),(0,r.kt)("h2",{id:"utility"},"Utility"),(0,r.kt)("p",null,"$KNOW is the native token of the OKP4 Blockchain and are the only staking token of our Ecosystem. They are a license for the holder to validate, delegate to other Validators or vote. $KNOW tokens can also be used to pay for transaction fees. Additional inflationary $KNOW and block transaction fees are rewarded to Validators and Delegators."),(0,r.kt)("h3",{id:"rewards"},"Rewards"),(0,r.kt)("p",null,"According to the adopted business model, $KNOW tokens are at the center of our economy and will be the common currency. Indeed, they allow first of all consumers to pay for the creation of knowledge as well as to remunerate all Providers to the creation of this knowledge (Data & Services Providers)."),(0,r.kt)("h3",{id:"transaction-fees"},"Transaction Fees"),(0,r.kt)("p",null,"Transaction fees on the OKP4 Blockchain will be paid in $KNOW. These fees will go to reward the Validators and Delegators who keep the network running."),(0,r.kt)("p",null,"Transaction fees will be relatively low as Validators are fairly incentivized thanks to the block reward. They will be variable, depending on the size and type of the transaction."),(0,r.kt)("p",null,"In addition, each Data Space will be able to add an additional transaction fee for each transaction within that Data Space if it wishes (governance)."),(0,r.kt)("h3",{id:"micropayments"},"Micropayments"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"staking"},"Staking"),(0,r.kt)("h3",{id:"staking-validators--delegators"},"Staking Validators & Delegators"),(0,r.kt)("p",null,"Following our dPoS (delegated proof-of-stake) blockchain model, it is possible to stake tokens to validate the network and receive associated rewards. A Validator wishing to withdraw will have to wait a period of 14 days before his decision is executed (unbounding period)."),(0,r.kt)("p",null,"For more information, please click ",(0,r.kt)("a",{parentName:"p",href:"/whitepaper/roles#validators"},"here"),"."),(0,r.kt)("p",null,"If you don't want to or can't run nodes, it is possible to delegate your tokens to Validators to earn rewards."),(0,r.kt)("p",null,"For more information, please click ",(0,r.kt)("a",{parentName:"p",href:"/whitepaper/roles#delegators"},"here"),"."),(0,r.kt)("h3",{id:"staking-services"},"Staking Services"),(0,r.kt)("p",null,'As said previously: "The Provider will be able to create a descriptive page for his repository at any time. However, in order for a Consumer to be able to invoke and use this service, he will have to stake $KNOW in proportion to the hourly fee that he will define himself."'),(0,r.kt)("p",null,"Therefore, the amount of $KNOW to stake will depend on the price that the Provider asks for. And this for several reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Economic security: $KNOW that is staked can be slashed (same principle as for validators but with different rules). It provides security for Consumers in case they pay for a service that is not available or stops in the middle of a treatment. It also prevents Service Providers to deposit wrong services and operate bad computation."),(0,r.kt)("li",{parentName:"ul"},"Sybil resistance: Only Providers who are willing to invest resources can participate. This will prevent deposits of inefficient and useless services.")),(0,r.kt)("p",null,"Calculation: Price per hour ($KNOW) * 50 = amount of $KNOW to stake"),(0,r.kt)("p",null,"What if I want to remove my service from use, without being slashed?"),(0,r.kt)("p",null,'If you delete a service that is not in use by Consumers, it disappears instantly (but still remains visible on its page and on the Catalog as a "non-usable service"; marked with a flag). However, if this service is in full use and/or have a waiting list, you will not be able to remove it immediately as this would cut off current usage. You can on the service page, take a closing order that will have the effect of closing access to the waiting list for the use of the service. Once the waiting list is over, the service will close automatically so that the Provider has nothing else to do. Everything that follows will also be done automatically. If the Provider does not respect these rules, it will be slashed. The staked tokens will then be available for withdrawal once it is closed.'),(0,r.kt)("h2",{id:"curation"},"Curation"),(0,r.kt)("h3",{id:"curation-shares"},"Curation Shares"),(0,r.kt)("p",null,"Curation Shares are the continuous tokens OKP4 uses to incentivize Curators towards the shared goal of identifying quality digital resources. They are managed by OKP4 bonding curve contract."),(0,r.kt)("p",null,"Properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limitless: the supply of curation shares is limitless. There\u2019s no hard cap to the number of shares that Curators can mint"),(0,r.kt)("li",{parentName:"ul"},"Deterministic: the utilization of a bonding curve facilitates a predetermined and fixed price discovery mechanism for the curation shares"),(0,r.kt)("li",{parentName:"ul"},"Continuous: the smart contract continuously determines the price depending on the purchase and sale of curation shares"),(0,r.kt)("li",{parentName:"ul"},"Liquidity: the bonding curve acts as automated market maker, which allows Curators to buy or sell curation shares instantly and at any time")),(0,r.kt)("p",null,"OKP4 Ecosystem uses a bonding curve to coordinate the work of Curators to achieve the shared goal of indexing the contents of quality items. Curators are incentivized in an economic game to identify high-quality items with attractive earning potentials and try signal on these subgraphs early on."),(0,r.kt)("h3",{id:"curation-fees"},"Curation Fees"),(0,r.kt)("p",null,"It should be noted that there is an entry fee of 2% for the mint of shares. These fees will go directly into the DAO's treasury."),(0,r.kt)("h3",{id:"burn--mint-process"},"Burn & Mint Process"),(0,r.kt)("p",null,'It is possible at any time to buy shares. This process is called "mint".'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Work in progress")),(0,r.kt)("p",null,'In the same way, it is possible to sell shares at any time. This process is called "burn".'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Work in progress")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is important to note that as a Curator, you are confronted with the risk of withdrawing less $KNOW from the bounding curve than you started with. In the worst-case scenario, your curation shares value decreases substantially so that you receive only a tiny fraction of the $KNOW back that you initially deposited.")),(0,r.kt)("h3",{id:"bonding-curve-101-model"},"Bonding Curve 101 Model"),(0,r.kt)("p",null,"A bonding curve describes the relationship between the price and supply of an asset. It is a mathematical concept modelling the idea that the price of an asset (with a limited quantity) increases slightly for subsequent buyers with each purchase. The reasoning behind the increase in price is that the freely available supply is reduced with every unit that is acquired. The mechanism of a bonding curve rewards the earliest investors with higher profits. The basic idea behind the concept of a bonding curve is quite intuitive: the supply of a token determines its price. The price increases when the number of distributed tokens increases and vice versa."),(0,r.kt)("p",null,"Each dataset or service has a bonding curve on which curation shares are minted when a Curator decides to add a signal. The bonding curve is the same for all items. These curves are designed in such a way that the mint price of a curation share increases linearly with the number of shares left to mint. Which means that for each share minted, it will get more expensive to purchase a share (conversely, for each share burned, the price will be lower)."),(0,r.kt)("p",null,"Here is an example of what we mean, see the bonding curve below:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Work in progress")),(0,r.kt)("p",null,"The $KNOW valuation of curation shares is determined by the bonding curve and can be volatile. It is possible to suffer big losses (or make big gains). Signaling early means each share costs less $KNOW. By extension, this means you earn more Curator royalties / $KNOW than later Curators for the same item."),(0,r.kt)("h3",{id:"risks"},"Risks"),(0,r.kt)("p",null,"Being a Curator in our Ecosystem comes with certain risks. Let\u2019s have a look at the risks Curators are confronted with."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"New market risk: the query market is inherently young and there is risk that your %APY may be lower than you expect due to nascent market dynamics."),(0,r.kt)("li",{parentName:"ol"},"Bonding curve risk: asset depreciation as a result of depositing into the bonding curve of an item whose curation shares are being burned by other Curators."),(0,r.kt)("li",{parentName:"ol"},"Non-functional risk: an item can fail due to a bug. A failed item does not accrue royalties. As a result, you will have to wait until the Provider fixes the bug and deploys a new version."),(0,r.kt)("li",{parentName:"ol"},"Item assessment risk: marking false judgments about the attractiveness of an item."),(0,r.kt)("li",{parentName:"ol"},"Gas price risk: high gas prices could reduce your profit margin, especially if you are curating with a smaller stake of $KNOW."),(0,r.kt)("li",{parentName:"ol"},'Curation taxes risk: 2% curation fee. This can become costly if Curators often switch to another subgraph or have to commit to the latest version of the subgraph. It is not a "risk", but it is something to keep in mind.')),(0,r.kt)("h2",{id:"governance"},"Governance"),(0,r.kt)("p",null,"Governance will be done in $KNOW. Staked $KNOW holders can vote. All proposals require a minimum $KNOW deposit. For each proposal (if the minimum deposit amount is reached), voters may vote to accept or decline.\nSeveral cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the proposal is accepted by the majority, the deposited $KNOWs will be returned to their owners"),(0,r.kt)("li",{parentName:"ul"},"If the proposal is rejected by the majority, the deposited $KNOWs will be returned to their owners"),(0,r.kt)("li",{parentName:"ul"},"If the proposal is rejected with a veto (33%), the deposited $KNOWs will be burned"),(0,r.kt)("li",{parentName:"ul"},"If the deposit amount is not reached (by passing the proposal pool), the deposited $KNOWs are returned to their owners")),(0,r.kt)("p",null,"For more information on the governance of the protocol and its parameters, please click ",(0,r.kt)("a",{parentName:"p",href:"okp4-blockchain#governance--dao"},"here"),"."),(0,r.kt)("h2",{id:"liquidity"},"Liquidity"),(0,r.kt)("p",null,"At the launch of the token, the liquidity associated supply will be locked. This liquidity will be used for decentralized exchanges and for centralized exchanges in order to have a ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"K"),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mi",{parentName:"mrow"},"W"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"KNOW/")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"NO"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"))))),"ATOM & ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"K"),(0,r.kt)("mi",{parentName:"mrow"},"N"),(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mi",{parentName:"mrow"},"W"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"KNOW/")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"K"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"NO"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"W"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/"))))),"OSMO pair at first."),(0,r.kt)("p",null,"In order to ensure our back-up we have a part of the DAO treasury wallet that can be used to provide liquidity for a given period of time if needed."),(0,r.kt)("p",null,"In addition we will be able to provide liquidity for all new Data Space governance tokens so that they can be traded under the best conditions."),(0,r.kt)("h2",{id:"insurance--sybil-control"},"Insurance & Sybil control"),(0,r.kt)("h3",{id:"insurance"},"Insurance"),(0,r.kt)("p",null,"We will provide insurance to all Consumers in case of interrupted workflow during knowledge creation. In case a digital resource is instantly withdrawn, the knowledge creator will be reimbursed on the full amount he paid."),(0,r.kt)("h3",{id:"sybil-control"},"Sybil control"),(0,r.kt)("p",null,"A Sybil attack is a type of security threat on an online system where a person tries to take control of the network by creating multiple accounts, nodes or computers. Attackers may therefore be able to vote against honest nodes on the network to refuse to receive or transmit blocks, thus blocking other users on the network. In very large-scale Sybil attacks, where attackers manage to control the majority of the network's computing power, they can conduct a 51% attack. This gives them the ability to change the order of transactions or even reverse the transactions made."),(0,r.kt)("p",null,'The dPoS (delegated proof-of-stake) mechanism we have ensures that it becomes very expensive for an attacker to attack our network with a Sybil attack. Our staking requirements provide a defense against such attacks. Votes are weighted by the amount of "stake", which are tokens that are locked to a node. This way, the number of nodes created by the attacker does not matter, because if the stake is spread over several nodes, they each have very little voting weight. This significantly increases the cost of attacking our network, as an attacker would have to buy an overwhelming quantity of tokens to stake.'))}m.isMDXComponent=!0},11748:function(e,t,a){var i={"./locale":89234,"./locale.js":89234};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=r,e.exports=n,n.id=11748}}]);