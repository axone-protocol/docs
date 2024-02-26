"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[33790],{29110:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=n(85893),s=n(11151);const r={sidebar_position:11},a="eddsa_verify/4",d={id:"eddsa_verify_4",title:"eddsa_verify_4",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates/eddsa_verify_4.md",sourceDirName:".",slug:"/eddsa_verify_4",permalink:"/predicates/eddsa_verify_4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"defaultSidebar",previous:{title:"ecdsa_verify_4",permalink:"/predicates/ecdsa_verify_4"},next:{title:"hex_bytes_2",permalink:"/predicates/hex_bytes_2"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const i={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"eddsa_verify4",children:"eddsa_verify/4"}),"\n",(0,t.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"eddsa_verify/4"})," determines if a given signature is valid as per the EdDSA algorithm for the provided data, using the specified public key."]}),"\n",(0,t.jsx)(i.p,{children:"The signature is as follows:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-text",children:"eddsa_verify(+PubKey, +Data, +Signature, +Options) is semi-det\n"})}),"\n",(0,t.jsx)(i.p,{children:"Where:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"PubKey is the encoded public key as a list of bytes."}),"\n",(0,t.jsx)(i.li,{children:"Data is the message to verify, represented as either a hexadecimal atom or a list of bytes. It's important that the message isn't pre-hashed since the Ed25519 algorithm processes messages in two passes when signing."}),"\n",(0,t.jsx)(i.li,{children:"Signature represents the signature corresponding to the data, provided as a list of bytes."}),"\n",(0,t.jsx)(i.li,{children:"Options are additional configurations for the verification process. Supported options include: encoding(+Format) which specifies the encoding used for the Data, and type(+Alg) which chooses the algorithm within the EdDSA family (see below for details)."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"For Format, the supported encodings are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"hex (default), the hexadecimal encoding represented as an atom."}),"\n",(0,t.jsx)(i.li,{children:"octet, the plain byte encoding depicted as a list of integers ranging from 0 to 255."}),"\n",(0,t.jsx)(i.li,{children:"text, the plain text encoding represented as an atom."}),"\n",(0,t.jsx)(i.li,{children:"utf8 (default), the UTF-8 encoding represented as an atom."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"For Alg, the supported algorithms are:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"ed25519 (default): The EdDSA signature scheme using SHA-512 (SHA-2) and Curve25519."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-text",children:"# Verify a signature for a given hexadecimal data.\n- eddsa_verify([127, ...], '9b038f8ef6918cbb56040dfda401b56b...', [23, 56, ...], [encoding(hex), type(ed25519)])\n\n# Verify a signature for binary data.\n- eddsa_verify([127, ...], [56, 90, ..], [23, 56, ...], [encoding(octet), type(ed25519)])\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>a});var t=n(67294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);