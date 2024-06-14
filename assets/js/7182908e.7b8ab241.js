"use strict";(self.webpackChunk_axone_docs=self.webpackChunk_axone_docs||[]).push([[9876],{26861:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=s(85893),t=s(11151);const i={},d="Law Stone",c={id:"axone-law-stone",title:"Law Stone",description:"Overview",source:"@site/contracts/axone-law-stone.md",sourceDirName:".",slug:"/axone-law-stone",permalink:"/contracts/next/axone-law-stone",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Dataverse",permalink:"/contracts/next/axone-dataverse"},next:{title:"Objectarium",permalink:"/contracts/next/axone-objectarium"}},l={},o=[{value:"Overview",id:"overview",level:2},{value:"InstantiateMsg",id:"instantiatemsg",level:2},{value:"ExecuteMsg",id:"executemsg",level:2},{value:"ExecuteMsg::BreakStone",id:"executemsgbreakstone",level:3},{value:"QueryMsg",id:"querymsg",level:2},{value:"QueryMsg::Ask",id:"querymsgask",level:3},{value:"QueryMsg::Program",id:"querymsgprogram",level:3},{value:"QueryMsg::ProgramCode",id:"querymsgprogramcode",level:3},{value:"Responses",id:"responses",level:2},{value:"ask",id:"ask",level:3},{value:"program",id:"program",level:3},{value:"program_code",id:"program_code",level:3},{value:"Definitions",id:"definitions",level:2},{value:"Answer",id:"answer",level:3},{value:"Binary",id:"binary",level:3},{value:"Result",id:"result",level:3},{value:"Substitution",id:"substitution",level:3}];function h(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"law-stone",children:"Law Stone"}),"\n",(0,n.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"axone-law-stone"})," smart contract aims to provide GaaS (i.e. Governance as a Service) in any ",(0,n.jsx)(r.a,{href:"https://cosmos.network/",children:"Cosmos blockchains"})," using the ",(0,n.jsx)(r.a,{href:"https://cosmwasm.com/",children:"CosmWasm"})," framework and the ",(0,n.jsx)(r.a,{href:"https://docs.axone.xyz/modules/next/logic",children:"Logic"})," AXONE module."]}),"\n",(0,n.jsx)(r.p,{children:"This contract is built around a Prolog program describing the law by rules and facts. The law stone is immutable, this means it can only be questioned, there are no update mechanisms."}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"axone-law-stone"})," responsibility is to guarantee the availability of its rules in order to question them, but not to ensure the rules application."]}),"\n",(0,n.jsxs)(r.p,{children:["To ensure reliability over time, the associated Prolog program is stored and pinned in a ",(0,n.jsx)(r.code,{children:"axone-objectarium"})," contract. Moreover, all the eventual loaded files must be stored in a ",(0,n.jsx)(r.code,{children:"axone-objectarium"})," contract as well, allowing the contract to pin them."]}),"\n",(0,n.jsxs)(r.p,{children:["To be able to free the underlying resources (i.e. objects in ",(0,n.jsx)(r.code,{children:"axone-objectarium"}),") if not used anymore, the contract admin can break the stone."]}),"\n",(0,n.jsxs)(r.p,{children:["\u27a1\ufe0f Checkout the ",(0,n.jsx)(r.a,{href:"https://github.com/axone-protocol/contracts/tree/main/contracts/axone-law-stone/examples/",children:"examples"})," for usage information."]}),"\n",(0,n.jsx)(r.h2,{id:"instantiatemsg",children:"InstantiateMsg"}),"\n",(0,n.jsx)(r.p,{children:"Instantiate message"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"parameter"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"program"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"#binary",children:"Binary"})}),". The Prolog program carrying law rules and facts."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"storage_address"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"string"}),". The ",(0,n.jsx)(r.code,{children:"axone-objectarium"})," contract address on which to store the law program."]})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"executemsg",children:"ExecuteMsg"}),"\n",(0,n.jsx)(r.p,{children:"Execute messages"}),"\n",(0,n.jsx)(r.h3,{id:"executemsgbreakstone",children:"ExecuteMsg::BreakStone"}),"\n",(0,n.jsxs)(r.p,{children:["Break the stone making this contract unusable, by clearing all the related resources: - Unpin all the pinned objects on ",(0,n.jsx)(r.code,{children:"axone-objectarium"})," contracts, if any. - Forget the main program (i.e. or at least unpin it)."]}),"\n",(0,n.jsx)(r.p,{children:"Only the creator address (the address that instantiated the contract) is authorized to invoke this message. If already broken, this is a no-op."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"parameter"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"break_stone"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"object"}),"."]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"querymsg",children:"QueryMsg"}),"\n",(0,n.jsx)(r.p,{children:"Query messages"}),"\n",(0,n.jsx)(r.h3,{id:"querymsgask",children:"QueryMsg::Ask"}),"\n",(0,n.jsxs)(r.p,{children:["Submits a Prolog query string to the ",(0,n.jsx)(r.code,{children:"Logic"})," module, evaluating it against the law program associated with this contract."]}),"\n",(0,n.jsxs)(r.p,{children:["If the law stone is broken the query returns a response with the error ",(0,n.jsx)(r.code,{children:"error(system_error(broken_law_stone),root)"})," set in the ",(0,n.jsx)(r.code,{children:"answer"})," field."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"parameter"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ask"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"object"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ask.query"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"string"}),"."]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"querymsgprogram",children:"QueryMsg::Program"}),"\n",(0,n.jsx)(r.p,{children:"Retrieves the location metadata of the law program bound to this contract."}),"\n",(0,n.jsxs)(r.p,{children:["This includes the contract address of the ",(0,n.jsx)(r.code,{children:"objectarium"})," and the program object ID, where the law program's code can be accessed."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"parameter"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"program"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"object"}),"."]})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"querymsgprogramcode",children:"QueryMsg::ProgramCode"}),"\n",(0,n.jsx)(r.p,{children:"Fetches the raw code of the law program tied to this contract."}),"\n",(0,n.jsxs)(r.p,{children:["If the law stone is broken, the query may fail if the program is no longer available in the ",(0,n.jsx)(r.code,{children:"Objectarium"}),"."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"parameter"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"program_code"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"object"}),"."]})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"responses",children:"Responses"}),"\n",(0,n.jsx)(r.h3,{id:"ask",children:"ask"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"property"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"answer"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:"#answer",children:"Answer"}),"|null"]}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"gas_used"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"integer"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"height"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"integer"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"user_output"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:"string|null"}),"."]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"program",children:"program"}),"\n",(0,n.jsxs)(r.p,{children:["ProgramResponse carry elements to locate the program in a ",(0,n.jsx)(r.code,{children:"axone-objectarium"})," contract."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"property"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"object_id"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"string"}),". The program object id in the ",(0,n.jsx)(r.code,{children:"axone-objectarium"})," contract."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"storage_address"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"string"}),". The ",(0,n.jsx)(r.code,{children:"axone-objectarium"})," contract address on which the law program is stored."]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"program_code",children:"program_code"}),"\n",(0,n.jsx)(r.p,{children:"Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline."}),"\n",(0,n.jsxs)(r.p,{children:["This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>. See also <",(0,n.jsx)(r.a,{href:"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md",children:"https://github.com/CosmWasm/cosmwasm/blob/main/docs/MESSAGE_TYPES.md"}),">."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:"string"}),"."]})})})]}),"\n",(0,n.jsx)(r.h2,{id:"definitions",children:"Definitions"}),"\n",(0,n.jsx)(r.h3,{id:"answer",children:"Answer"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"property"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"has_more"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"boolean"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"results"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsxs)(r.strong,{children:["Array<",(0,n.jsx)(r.a,{href:"#result",children:"Result"}),">"]}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"variables"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"Array<string>"}),"."]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"binary",children:"Binary"}),"\n",(0,n.jsx)(r.p,{children:"A string containing Base64-encoded data."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsx)(r.tr,{children:(0,n.jsx)(r.th,{children:"type"})})}),(0,n.jsx)(r.tbody,{children:(0,n.jsx)(r.tr,{children:(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:"string"}),"."]})})})]}),"\n",(0,n.jsx)(r.h3,{id:"result",children:"Result"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"property"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"error"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:"string|null"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"substitutions"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsxs)(r.strong,{children:["Array<",(0,n.jsx)(r.a,{href:"#substitution",children:"Substitution"}),">"]}),"."]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"substitution",children:"Substitution"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"property"}),(0,n.jsx)(r.th,{children:"description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"expression"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"string"}),"."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"variable"})}),(0,n.jsxs)(r.td,{children:["_(Required.) _ ",(0,n.jsx)(r.strong,{children:"string"}),"."]})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsxs)(r.em,{children:["Rendered by ",(0,n.jsx)(r.a,{href:"https://fadroma.tech",children:"Fadroma"})," (",(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@fadroma/schema",children:"@fadroma/schema 1.1.0"}),") from ",(0,n.jsx)(r.code,{children:"axone-law-stone.json"})," (",(0,n.jsx)(r.code,{children:"58a14576c3c1d7fe"}),")"]})})]})}function a(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>d});var n=s(67294);const t={},i=n.createContext(t);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);