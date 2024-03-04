"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[81880],{14934:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>t,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(85893),d=r(11151);const i={sidebar_position:4},a="bech32_address/2",c={id:"bech32_address_2",title:"bech32_address_2",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates_versioned_docs/version-v7.0.0/bech32_address_2.md",sourceDirName:".",slug:"/bech32_address_2",permalink:"/predicates/bech32_address_2",draft:!1,unlisted:!1,tags:[],version:"v7.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"bank_spendable_balances_2",permalink:"/predicates/bank_spendable_balances_2"},next:{title:"block_height_1",permalink:"/predicates/block_height_1"}},t={},o=[{value:"Description",id:"description",level:2},{value:"Signature",id:"signature",level:2},{value:"Examples",id:"examples",level:2},{value:"Decode Bech32 Address into its Address Pair representation",id:"decode-bech32-address-into-its-address-pair-representation",level:3},{value:"Decode Hrp and Address from a bech32 address",id:"decode-hrp-and-address-from-a-bech32-address",level:3},{value:"Extract Address only for OKP4 bech32 address",id:"extract-address-only-for-okp4-bech32-address",level:3},{value:"Encode Address Pair into Bech32 Address",id:"encode-address-pair-into-bech32-address",level:3},{value:"Check if a bech32 address is part of the okp4 protocol",id:"check-if-a-bech32-address-is-part-of-the-okp4-protocol",level:3},{value:"Error on Incorrect Bech32 Address format",id:"error-on-incorrect-bech32-address-format",level:3},{value:"Error on Incorrect Bech32 Address type",id:"error-on-incorrect-bech32-address-type",level:3}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"bech32_address2",children:"bech32_address/2"}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"bech32_address/2"})," is a predicate that convert a ",(0,n.jsx)(s.a,{href:"https://docs.cosmos.network/main/build/spec/addresses/bech32#hrp-table",children:"bech32"})," encoded string into ",(0,n.jsx)(s.a,{href:"https://fr.wikipedia.org/wiki/Base64",children:"base64"})," bytes and give the address prefix, or convert a prefix (HRP) and ",(0,n.jsx)(s.a,{href:"https://fr.wikipedia.org/wiki/Base64",children:"base64"})," encoded bytes to ",(0,n.jsx)(s.a,{href:"https://docs.cosmos.network/main/build/spec/addresses/bech32#hrp-table",children:"bech32"})," encoded string."]}),"\n",(0,n.jsx)(s.h2,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-text",children:"bech32_address(-Address, +Bech32) is det\nbech32_address(+Address, -Bech32) is det\n"})}),"\n",(0,n.jsx)(s.p,{children:"where:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Address is a pair of the HRP (Human-Readable Part) which holds the address prefix and a list of numbers ranging from 0 to 255 that represent the base64 encoded bech32 address string."}),"\n",(0,n.jsx)(s.li,{children:"Bech32 is an Atom or string representing the bech32 encoded string address"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.h3,{id:"decode-bech32-address-into-its-address-pair-representation",children:"Decode Bech32 Address into its Address Pair representation"}),"\n",(0,n.jsxs)(s.p,{children:["This scenario demonstrates how to parse a provided bech32 address string into its ",(0,n.jsx)(s.code,{children:"Address"})," pair representation.\nAn ",(0,n.jsx)(s.code,{children:"Address"})," is a compound term ",(0,n.jsx)(s.code,{children:"-"})," with two arguments, the first being the human-readable part (Hrp) and the second\nbeing the numeric address as a list of integers ranging from 0 to 255 representing the bytes of the address in\nbase 64."]}),"\n",(0,n.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-prolog",children:"bech32_address(Address, 'okp415wn30a9z4uc692s0kkx5fp5d4qfr3ac7sj9dqn').\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"When"})," the query is run"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'has_more: false\nvariables: ["Address"]\nresults:\n- substitutions:\n  - variable: Address\n    expression: "okp4-[163,167,23,244,162,175,49,162,170,15,181,141,68,134,141,168,18,56,247,30]"\n'})}),"\n",(0,n.jsx)(s.h3,{id:"decode-hrp-and-address-from-a-bech32-address",children:"Decode Hrp and Address from a bech32 address"}),"\n",(0,n.jsx)(s.p,{children:"This scenario illustrates how to decode a bech32 address into the human-readable part (Hrp) and the numeric address.\nThe process extracts these components from a given bech32 address string, showcasing the ability to parse and\nseparate the address into its constituent parts."}),"\n",(0,n.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-prolog",children:"bech32_address(-(Hrp, Address), 'okp415wn30a9z4uc692s0kkx5fp5d4qfr3ac7sj9dqn').\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"When"})," the query is run"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'has_more: false\nvariables: ["Hrp", "Address"]\nresults:\n- substitutions:\n  - variable: Hrp\n    expression: "okp4"\n  - variable: Address\n    expression: "[163,167,23,244,162,175,49,162,170,15,181,141,68,134,141,168,18,56,247,30]"\n'})}),"\n",(0,n.jsx)(s.h3,{id:"extract-address-only-for-okp4-bech32-address",children:"Extract Address only for OKP4 bech32 address"}),"\n",(0,n.jsx)(s.p,{children:"This scenario demonstrates how to extract the address from a bech32 address string, specifically for a known\nprotocol, in this case, the okp4 protocol."}),"\n",(0,n.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-prolog",children:"bech32_address(-(okp4, Address), 'okp415wn30a9z4uc692s0kkx5fp5d4qfr3ac7sj9dqn').\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"When"})," the query is run"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'has_more: false\nvariables: ["Address"]\nresults:\n- substitutions:\n  - variable: Address\n    expression: "[163,167,23,244,162,175,49,162,170,15,181,141,68,134,141,168,18,56,247,30]"\n'})}),"\n",(0,n.jsx)(s.h3,{id:"encode-address-pair-into-bech32-address",children:"Encode Address Pair into Bech32 Address"}),"\n",(0,n.jsxs)(s.p,{children:["This scenario demonstrates how to encode an ",(0,n.jsx)(s.code,{children:"Address"})," pair representation into a bech32 address string."]}),"\n",(0,n.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-prolog",children:"bech32_address(-('okp4', [163,167,23,244,162,175,49,162,170,15,181,141,68,134,141,168,18,56,247,30]), Bech32).\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"When"})," the query is run"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'has_more: false\nvariables: ["Bech32"]\nresults:\n- substitutions:\n  - variable: Bech32\n    expression: "okp415wn30a9z4uc692s0kkx5fp5d4qfr3ac7sj9dqn"\n'})}),"\n",(0,n.jsx)(s.h3,{id:"check-if-a-bech32-address-is-part-of-the-okp4-protocol",children:"Check if a bech32 address is part of the okp4 protocol"}),"\n",(0,n.jsx)(s.p,{children:"This scenario shows how to check if a bech32 address is part of the okp4 protocol."}),"\n",(0,n.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Given"})," the program:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-prolog",children:"okp4_addr(Addr) :- bech32_address(-('okp4', _), Addr).\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-prolog",children:"okp4_addr('okp41p8u47en82gmzfm259y6z93r9qe63l25dfwwng6').\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"When"})," the query is run"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"has_more: false\nresults:\n- substitutions:\n"})}),"\n",(0,n.jsx)(s.h3,{id:"error-on-incorrect-bech32-address-format",children:"Error on Incorrect Bech32 Address format"}),"\n",(0,n.jsxs)(s.p,{children:["This scenario demonstrates the system's response to an incorrect bech32 address format.\nIn this case, the system generates a ",(0,n.jsx)(s.code,{children:"domain_error"}),", indicating that the provided argument does not meet the\nexpected format for a bech32 address."]}),"\n",(0,n.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-prolog",children:"bech32_address(Address, okp4incorrect).\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"When"})," the query is run"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'has_more: false\nvariables: ["Address"]\nresults:\n- error: "error(domain_error(encoding(bech32),okp4incorrect),[d,e,c,o,d,i,n,g, ,b,e,c,h,3,2, ,f,a,i,l,e,d,:, ,i,n,v,a,l,i,d, ,s,e,p,a,r,a,t,o,r, ,i,n,d,e,x, ,-,1],bech32_address/2)"\n'})}),"\n",(0,n.jsx)(s.h3,{id:"error-on-incorrect-bech32-address-type",children:"Error on Incorrect Bech32 Address type"}),"\n",(0,n.jsxs)(s.p,{children:["This scenario demonstrates the system's response to an incorrect bech32 address type.\nIn this case, the system generates a ",(0,n.jsx)(s.code,{children:"type_error"}),", indicating that the provided argument does not meet the\nexpected type."]}),"\n",(0,n.jsx)(s.p,{children:"Here's the steps of the scenario:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Given"})," the query:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-prolog",children:"bech32_address(-('okp4', X), foo(bar)).\n"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"When"})," the query is run"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Then"})," the answer we get is:"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:'has_more: false\nvariables: ["X"]\nresults:\n- error: "error(type_error(atom,foo(bar)),bech32_address/2)"\n'})})]})}function l(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>c,a:()=>a});var n=r(67294);const d={},i=n.createContext(d);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);