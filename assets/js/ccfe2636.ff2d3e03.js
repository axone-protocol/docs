"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[72694],{64004:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=s(85893),t=s(11151);const r={},d="Protobuf Documentation",l={id:"mint",title:"mint",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/modules_versioned_docs/version-v3.0.0/mint.md",sourceDirName:".",slug:"/mint",permalink:"/modules/mint",draft:!1,unlisted:!1,tags:[],version:"v3.0.0",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"logic",permalink:"/modules/logic"},next:{title:"vesting",permalink:"/modules/vesting"}},h={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"mint/v1beta1/mint.proto",id:"mintv1beta1mintproto",level:2},{value:"Minter",id:"minter",level:3},{value:"Params",id:"params",level:3},{value:"mint/v1beta1/genesis.proto",id:"mintv1beta1genesisproto",level:2},{value:"GenesisState",id:"genesisstate",level:3},{value:"mint/v1beta1/query.proto",id:"mintv1beta1queryproto",level:2},{value:"QueryAnnualProvisionsRequest",id:"queryannualprovisionsrequest",level:3},{value:"QueryAnnualProvisionsResponse",id:"queryannualprovisionsresponse",level:3},{value:"QueryInflationRequest",id:"queryinflationrequest",level:3},{value:"QueryInflationResponse",id:"queryinflationresponse",level:3},{value:"QueryParamsRequest",id:"queryparamsrequest",level:3},{value:"QueryParamsResponse",id:"queryparamsresponse",level:3},{value:"Query",id:"query",level:3},{value:"Scalar Value Types",id:"scalar-value-types",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"protobuf-documentation",children:"Protobuf Documentation"}),"\n",(0,i.jsx)("a",{name:"top"}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#mint/v1beta1/mint.proto",children:"mint/v1beta1/mint.proto"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.Minter",children:"Minter"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.Params",children:"Params"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#mint/v1beta1/genesis.proto",children:"mint/v1beta1/genesis.proto"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.GenesisState",children:"GenesisState"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#mint/v1beta1/query.proto",children:"mint/v1beta1/query.proto"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryAnnualProvisionsRequest",children:"QueryAnnualProvisionsRequest"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryAnnualProvisionsResponse",children:"QueryAnnualProvisionsResponse"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryInflationRequest",children:"QueryInflationRequest"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryInflationResponse",children:"QueryInflationResponse"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryParamsRequest",children:"QueryParamsRequest"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryParamsResponse",children:"QueryParamsResponse"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.Query",children:"Query"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#scalar-value-types",children:"Scalar Value Types"})}),"\n"]}),"\n",(0,i.jsx)("a",{name:"mint/v1beta1/mint.proto"}),"\n",(0,i.jsx)("p",{align:"right",children:(0,i.jsx)("a",{href:"#top",children:"Top"})}),"\n",(0,i.jsx)(n.h2,{id:"mintv1beta1mintproto",children:"mint/v1beta1/mint.proto"}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.Minter"}),"\n",(0,i.jsx)(n.h3,{id:"minter",children:"Minter"}),"\n",(0,i.jsx)(n.p,{children:"Minter represents the minting state."}),"\n",(0,i.jsxs)(n.p,{children:["At the beginning of the chain (first block) the mint module will recalculate the ",(0,i.jsx)(n.code,{children:"annual_provisions"})," and\n",(0,i.jsx)(n.code,{children:"target_supply"})," based on the genesis total token supply and the inflation configured.\nBy default inflation is set to 15%. If the genesis total token supply is 200M token, the ",(0,i.jsx)(n.code,{children:"annual_provision"})," will be 30M\nand ",(0,i.jsx)(n.code,{children:"target_supply"})," 230M."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Label"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"inflation"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#string",children:"string"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"current annual inflation rate"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"annual_provisions"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#string",children:"string"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"current annual expected provisions"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"target_supply"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#string",children:"string"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"target supply at end of period"})]})]})]}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.Params"}),"\n",(0,i.jsx)(n.h3,{id:"params",children:"Params"}),"\n",(0,i.jsx)(n.p,{children:"Params holds parameters for the mint module."}),"\n",(0,i.jsxs)(n.p,{children:["Configure the annual reduction factor will update at the each end of year the new token distribution rate by reducing\nthe actual inflation by the ",(0,i.jsx)(n.code,{children:"annual_reduction_factor"})," configured.\nBy default, ",(0,i.jsx)(n.code,{children:"annual_reduction_factor"})," is 20%. For example, with an initial inflation of 15%, at the end of the year,\nnew inflation will be 12%."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Label"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"mint_denom"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#string",children:"string"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"type of coin to mint"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"annual_reduction_factor"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#string",children:"string"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"annual reduction factor inflation rate change"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"blocks_per_year"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#uint64",children:"uint64"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"expected blocks per year"})]})]})]}),"\n",(0,i.jsx)("a",{name:"mint/v1beta1/genesis.proto"}),"\n",(0,i.jsx)("p",{align:"right",children:(0,i.jsx)("a",{href:"#top",children:"Top"})}),"\n",(0,i.jsx)(n.h2,{id:"mintv1beta1genesisproto",children:"mint/v1beta1/genesis.proto"}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.GenesisState"}),"\n",(0,i.jsx)(n.h3,{id:"genesisstate",children:"GenesisState"}),"\n",(0,i.jsx)(n.p,{children:"GenesisState defines the mint module's genesis state."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Label"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"minter"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.Minter",children:"Minter"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"minter is a space for holding current inflation information."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"params"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.Params",children:"Params"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"params defines all the paramaters of the module."})]})]})]}),"\n",(0,i.jsx)("a",{name:"mint/v1beta1/query.proto"}),"\n",(0,i.jsx)("p",{align:"right",children:(0,i.jsx)("a",{href:"#top",children:"Top"})}),"\n",(0,i.jsx)(n.h2,{id:"mintv1beta1queryproto",children:"mint/v1beta1/query.proto"}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.QueryAnnualProvisionsRequest"}),"\n",(0,i.jsx)(n.h3,{id:"queryannualprovisionsrequest",children:"QueryAnnualProvisionsRequest"}),"\n",(0,i.jsx)(n.p,{children:"QueryAnnualProvisionsRequest is the request type for the\nQuery/AnnualProvisions RPC method."}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.QueryAnnualProvisionsResponse"}),"\n",(0,i.jsx)(n.h3,{id:"queryannualprovisionsresponse",children:"QueryAnnualProvisionsResponse"}),"\n",(0,i.jsx)(n.p,{children:"QueryAnnualProvisionsResponse is the response type for the\nQuery/AnnualProvisions RPC method."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Label"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"annual_provisions"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#bytes",children:"bytes"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"annual_provisions is the current minting annual provisions value."})]})})]}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.QueryInflationRequest"}),"\n",(0,i.jsx)(n.h3,{id:"queryinflationrequest",children:"QueryInflationRequest"}),"\n",(0,i.jsx)(n.p,{children:"QueryInflationRequest is the request type for the Query/Inflation RPC method."}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.QueryInflationResponse"}),"\n",(0,i.jsx)(n.h3,{id:"queryinflationresponse",children:"QueryInflationResponse"}),"\n",(0,i.jsx)(n.p,{children:"QueryInflationResponse is the response type for the Query/Inflation RPC\nmethod."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Label"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"inflation"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#bytes",children:"bytes"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"inflation is the current minting inflation value."})]})})]}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.QueryParamsRequest"}),"\n",(0,i.jsx)(n.h3,{id:"queryparamsrequest",children:"QueryParamsRequest"}),"\n",(0,i.jsx)(n.p,{children:"QueryParamsRequest is the request type for the Query/Params RPC method."}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.QueryParamsResponse"}),"\n",(0,i.jsx)(n.h3,{id:"queryparamsresponse",children:"QueryParamsResponse"}),"\n",(0,i.jsx)(n.p,{children:"QueryParamsResponse is the response type for the Query/Params RPC method."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Label"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"params"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.Params",children:"Params"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"params defines the parameters of the module."})]})})]}),"\n",(0,i.jsx)("a",{name:"mint.v1beta1.Query"}),"\n",(0,i.jsx)(n.h3,{id:"query",children:"Query"}),"\n",(0,i.jsx)(n.p,{children:"Query provides defines the gRPC querier service."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Method Name"}),(0,i.jsx)(n.th,{children:"Request Type"}),(0,i.jsx)(n.th,{children:"Response Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"HTTP Verb"}),(0,i.jsx)(n.th,{children:"Endpoint"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Params"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryParamsRequest",children:"QueryParamsRequest"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryParamsResponse",children:"QueryParamsResponse"})}),(0,i.jsx)(n.td,{children:"Params returns the total set of minting parameters."}),(0,i.jsx)(n.td,{children:"GET"}),(0,i.jsx)(n.td,{children:"/cosmos/mint/v1beta1/params"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Inflation"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryInflationRequest",children:"QueryInflationRequest"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryInflationResponse",children:"QueryInflationResponse"})}),(0,i.jsx)(n.td,{children:"Inflation returns the current minting inflation value."}),(0,i.jsx)(n.td,{children:"GET"}),(0,i.jsx)(n.td,{children:"/cosmos/mint/v1beta1/inflation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"AnnualProvisions"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryAnnualProvisionsRequest",children:"QueryAnnualProvisionsRequest"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"#mint.v1beta1.QueryAnnualProvisionsResponse",children:"QueryAnnualProvisionsResponse"})}),(0,i.jsx)(n.td,{children:"AnnualProvisions current minting annual provisions value."}),(0,i.jsx)(n.td,{children:"GET"}),(0,i.jsx)(n.td,{children:"/cosmos/mint/v1beta1/annual_provisions"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"scalar-value-types",children:"Scalar Value Types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:".proto Type"}),(0,i.jsx)(n.th,{children:"Notes"}),(0,i.jsx)(n.th,{children:"C++"}),(0,i.jsx)(n.th,{children:"Java"}),(0,i.jsx)(n.th,{children:"Python"}),(0,i.jsx)(n.th,{children:"Go"}),(0,i.jsx)(n.th,{children:"C#"}),(0,i.jsx)(n.th,{children:"PHP"}),(0,i.jsx)(n.th,{children:"Ruby"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"double"})," double"]}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"double"}),(0,i.jsx)(n.td,{children:"double"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"float64"}),(0,i.jsx)(n.td,{children:"double"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"Float"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"float"})," float"]}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"float32"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"float"}),(0,i.jsx)(n.td,{children:"Float"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"int32"})," int32"]}),(0,i.jsx)(n.td,{children:"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint32 instead."}),(0,i.jsx)(n.td,{children:"int32"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"int32"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"int64"})," int64"]}),(0,i.jsx)(n.td,{children:"Uses variable-length encoding. Inefficient for encoding negative numbers \u2013 if your field is likely to have negative values, use sint64 instead."}),(0,i.jsx)(n.td,{children:"int64"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"int/long"}),(0,i.jsx)(n.td,{children:"int64"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"integer/string"}),(0,i.jsx)(n.td,{children:"Bignum"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"uint32"})," uint32"]}),(0,i.jsx)(n.td,{children:"Uses variable-length encoding."}),(0,i.jsx)(n.td,{children:"uint32"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"int/long"}),(0,i.jsx)(n.td,{children:"uint32"}),(0,i.jsx)(n.td,{children:"uint"}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"uint64"})," uint64"]}),(0,i.jsx)(n.td,{children:"Uses variable-length encoding."}),(0,i.jsx)(n.td,{children:"uint64"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"int/long"}),(0,i.jsx)(n.td,{children:"uint64"}),(0,i.jsx)(n.td,{children:"ulong"}),(0,i.jsx)(n.td,{children:"integer/string"}),(0,i.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"sint32"})," sint32"]}),(0,i.jsx)(n.td,{children:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s."}),(0,i.jsx)(n.td,{children:"int32"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"int32"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"sint64"})," sint64"]}),(0,i.jsx)(n.td,{children:"Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s."}),(0,i.jsx)(n.td,{children:"int64"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"int/long"}),(0,i.jsx)(n.td,{children:"int64"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"integer/string"}),(0,i.jsx)(n.td,{children:"Bignum"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"fixed32"})," fixed32"]}),(0,i.jsx)(n.td,{children:"Always four bytes. More efficient than uint32 if values are often greater than 2^28."}),(0,i.jsx)(n.td,{children:"uint32"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"uint32"}),(0,i.jsx)(n.td,{children:"uint"}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"fixed64"})," fixed64"]}),(0,i.jsx)(n.td,{children:"Always eight bytes. More efficient than uint64 if values are often greater than 2^56."}),(0,i.jsx)(n.td,{children:"uint64"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"int/long"}),(0,i.jsx)(n.td,{children:"uint64"}),(0,i.jsx)(n.td,{children:"ulong"}),(0,i.jsx)(n.td,{children:"integer/string"}),(0,i.jsx)(n.td,{children:"Bignum"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"sfixed32"})," sfixed32"]}),(0,i.jsx)(n.td,{children:"Always four bytes."}),(0,i.jsx)(n.td,{children:"int32"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"int32"}),(0,i.jsx)(n.td,{children:"int"}),(0,i.jsx)(n.td,{children:"integer"}),(0,i.jsx)(n.td,{children:"Bignum or Fixnum (as required)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"sfixed64"})," sfixed64"]}),(0,i.jsx)(n.td,{children:"Always eight bytes."}),(0,i.jsx)(n.td,{children:"int64"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"int/long"}),(0,i.jsx)(n.td,{children:"int64"}),(0,i.jsx)(n.td,{children:"long"}),(0,i.jsx)(n.td,{children:"integer/string"}),(0,i.jsx)(n.td,{children:"Bignum"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"bool"})," bool"]}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"bool"}),(0,i.jsx)(n.td,{children:"boolean"}),(0,i.jsx)(n.td,{children:"TrueClass/FalseClass"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"string"})," string"]}),(0,i.jsx)(n.td,{children:"A string must always contain UTF-8 encoded or 7-bit ASCII text."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"str/unicode"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"String (UTF-8)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)("a",{name:"bytes"})," bytes"]}),(0,i.jsx)(n.td,{children:"May contain any arbitrary sequence of bytes."}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"ByteString"}),(0,i.jsx)(n.td,{children:"str"}),(0,i.jsx)(n.td,{children:"[]byte"}),(0,i.jsx)(n.td,{children:"ByteString"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"String (ASCII-8BIT)"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var i=s(67294);const t={},r=i.createContext(t);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);