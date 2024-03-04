"use strict";(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[34900],{69522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var o=t(85893),r=t(11151);const i={sidebar_position:18},d="uri_encoded/3",s={id:"uri_encoded_3",title:"uri_encoded_3",description:"[//]: # (This file is auto-generated. Please do not modify it yourself.)",source:"@site/predicates/uri_encoded_3.md",sourceDirName:".",slug:"/uri_encoded_3",permalink:"/fr/predicates/next/uri_encoded_3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"defaultSidebar",previous:{title:"string_bytes_3",permalink:"/fr/predicates/next/string_bytes_3"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"uri_encoded3",children:"uri_encoded/3"}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"uri_encoded/3"})," is a predicate that unifies the given URI component with the given encoded or decoded string."]}),"\n",(0,o.jsx)(n.p,{children:"The signature is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"uri_encoded(+Component, +Value, -Encoded) is det\nuri_encoded(+Component, -Value, +Encoded) is det\n"})}),"\n",(0,o.jsx)(n.p,{children:"Where:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Component represents the component of the URI to be escaped. It can be the atom query, fragment, path or segment."}),"\n",(0,o.jsx)(n.li,{children:"Decoded represents the decoded string to be escaped."}),"\n",(0,o.jsx)(n.li,{children:"Encoded represents the encoded string."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more information on URI encoding, refer to ",(0,o.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc3986#section-2.1",children:"RFC 3986"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'# Escape the given string to be used in the path component.\n- uri_encoded(path, "foo/bar", Encoded).\n\n# Unescape the given string to be used in the path component.\n- uri_encoded(path, Decoded, foo%2Fbar).\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>d});var o=t(67294);const r={},i=o.createContext(r);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);