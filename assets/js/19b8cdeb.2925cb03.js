(self.webpackChunk_okp4_docs=self.webpackChunk_okp4_docs||[]).push([[90092],{5307:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=(a(29420),["components"]),l={sidebar_position:5},s="Manage rules with Prolog",p={unversionedId:"tutorials/prolog-1",id:"tutorials/prolog-1",title:"Manage rules with Prolog",description:"Tutorials overview",source:"@site/docs/tutorials/prolog-1.mdx",sourceDirName:"tutorials",slug:"/tutorials/prolog-1",permalink:"/tutorials/prolog-1",draft:!1,editUrl:"https://github.com/okp4/docs/edit/main/docs/tutorials/prolog-1.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorials",previous:{title:"Explorer & smart contracts",permalink:"/tutorials/explorer-sc"},next:{title:"Video Tuto #1 - Architecture",permalink:"/tutorials/nonos-tuto-1"}},c={},d=[{value:"Why use Prolog on the OKP4 blockchain?",id:"why-use-prolog-on-the-okp4-blockchain",level:2},{value:"What is the OKP4 protocol?",id:"what-is-the-okp4-protocol",level:3},{value:"What is the Prolog language?",id:"what-is-the-prolog-language",level:3},{value:"How the OKP4 protocol leverages Prolog language?",id:"how-the-okp4-protocol-leverages-prolog-language",level:3},{value:"Your first Prolog program",id:"your-first-prolog-program",level:2},{value:"Understanding Prolog",id:"understanding-prolog",level:3},{value:"Facts",id:"facts",level:4},{value:"Rules",id:"rules",level:4},{value:"Queries",id:"queries",level:4},{value:"Prolog predicates",id:"prolog-predicates",level:4},{value:"Installing Prolog",id:"installing-prolog",level:3},{value:"Running Prolog",id:"running-prolog",level:3},{value:"An example related to sharing resource rules",id:"an-example-related-to-sharing-resource-rules",level:3},{value:"Storing and querying a Prolog program with the OKP4 blockchain",id:"storing-and-querying-a-prolog-program-with-the-okp4-blockchain",level:2},{value:"Prolog query with the <code>okp4d</code> CLI",id:"prolog-query-with-the-okp4d-cli",level:3},{value:"How to store rules (a Prolog program) on-chain with the <code>okp4d</code> CLI",id:"how-to-store-rules-a-prolog-program-on-chain-with-the-okp4d-cli",level:3},{value:"<code>law-stone</code> instantiate considerations",id:"law-stone-instantiate-considerations",level:4},{value:"<code>law-stone</code> instantiate transaction results",id:"law-stone-instantiate-transaction-results",level:4},{value:"How to ask for validation rules (Prolog program) on-chain with the <code>okp4d</code> CLI",id:"how-to-ask-for-validation-rules-prolog-program-on-chain-with-the-okp4d-cli",level:3},{value:"Built-in Prolog predicates within the OKP4 blockchain",id:"built-in-prolog-predicates-within-the-okp4-blockchain",level:2},{value:"Related to the blockchain state",id:"related-to-the-blockchain-state",level:3},{value:"<code>bank_balances/2</code>",id:"bank_balances2",level:4},{value:"<code>block_height/1</code>",id:"block_height1",level:4},{value:"<code>block_time/1</code>",id:"block_time1",level:4},{value:"<code>consult/1</code>",id:"consult1",level:4},{value:"Useful Prolog predicates in a blockchain context",id:"useful-prolog-predicates-in-a-blockchain-context",level:3},{value:"<code>bech32_address/2</code>",id:"bech32_address2",level:4},{value:"<code>hex_bytes/2</code>, <code>sha_hash/2</code>",id:"hex_bytes2-sha_hash2",level:4},{value:"Recap\u2019",id:"recap",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-rules-with-prolog"},"Manage rules with Prolog"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tutorials overview",src:a(81915).Z,width:"3168",height:"1192"})),(0,r.kt)("p",null,"Welcome OKP4 builders to an exciting journey at the crossroads of Prolog and blockchain!"),(0,r.kt)("p",null,'This tutorial delves into the fascinating realm of logic programming and its profound impact on the "law" governing off-chain resources usages. Whether aspiring to develop on the OKP4 protocol or are intrigued by one of the core OKP4 protocol\u2019s concepts, this tutorial will equip you with the knowledge of programming rules with Prolog and how to use it to set up and enforce rules without trusting a central authority.'),(0,r.kt)("h2",{id:"why-use-prolog-on-the-okp4-blockchain"},"Why use Prolog on the OKP4 blockchain?"),(0,r.kt)("h3",{id:"what-is-the-okp4-protocol"},"What is the OKP4 protocol?"),(0,r.kt)("p",null,"OKP4 is a governance infrastructure for off-chain digital resources. OKP4 is a Cosmos-based blockchain that allows anyone to define on-chain rules, intending to share any resource and create a new generation of applications on top of them without exposing the data and without the need to trust a party."),(0,r.kt)("p",null,"The rules define access conditions and the revenue-sharing model, for example. But how can we define programmatically these terms? Here comes Prolog."),(0,r.kt)("h3",{id:"what-is-the-prolog-language"},"What is the Prolog language?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prolog")," (short for ",(0,r.kt)("strong",{parentName:"p"},"Programming in Logic"),") is a high-level programming language associated with artificial intelligence and computational linguistics. It's unique for its usage of formal logic and the concept of predicate calculus."),(0,r.kt)("p",null,"The declarative nature of Prolog makes it an excellent choice for establishing governance rules in decentralized systems where rules can be explicitly stated and enforced. Unlike procedural languages, where the control flow is explicitly coded, Prolog uses a declarative approach where you declare the facts and rules."),(0,r.kt)("h3",{id:"how-the-okp4-protocol-leverages-prolog-language"},"How the OKP4 protocol leverages Prolog language?"),(0,r.kt)("p",null,"The OKP4 blockchain has a Prolog interpreter built-in, the \u201clogic module\u201d, which enables the definition of complex business logic and agreement conditions using a concise and human-readable syntax."),(0,r.kt)("p",null,"Decentralized programs (smart contracts executions) operated by the OKP4 blockchain nodes are thus able to load and query Prolog code."),(0,r.kt)("p",null,"Using Prolog improves the readability and understandability of smart contracts, making them easier to audit, verify, and maintain."),(0,r.kt)("h2",{id:"your-first-prolog-program"},"Your first Prolog program"),(0,r.kt)("h3",{id:"understanding-prolog"},"Understanding Prolog"),(0,r.kt)("p",null,"Prolog programs are ",(0,r.kt)("strong",{parentName:"p"},".pl")," files containing ",(0,r.kt)("strong",{parentName:"p"},"facts"),", ",(0,r.kt)("strong",{parentName:"p"},"rules"),", and ",(0,r.kt)("strong",{parentName:"p"},"queries"),"."),(0,r.kt)("h4",{id:"facts"},"Facts"),(0,r.kt)("p",null,"Facts in Prolog are basic assertions about your world. For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"memberOf(alice, council).\nmemberOf(bob, council).\n")),(0,r.kt)("p",null,"This states the facts that ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bob")," are members of the ",(0,r.kt)("inlineCode",{parentName:"p"},"council"),"."),(0,r.kt)("h4",{id:"rules"},"Rules"),(0,r.kt)("p",null,"Rules are logical formulas that define relationships between facts. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"can_vote(X) :- memberOf(X, council).\n")),(0,r.kt)("p",null,"This rule states that someone ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," can vote if ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," is a council member."),(0,r.kt)("h4",{id:"queries"},"Queries"),(0,r.kt)("p",null,"Queries are how you ask questions about the facts and rules. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"?- can_vote(alice).\n")),(0,r.kt)("p",null,"This query asks if ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," can vote. Given our facts and rules, it would answer ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h4",{id:"prolog-predicates"},"Prolog predicates"),(0,r.kt)("p",null,"Predicates are logical units that encompass facts and rules related to a specific concept or relationship. They provide a way to group related facts and rules under a common name. Predicates are defined by one or more clauses, where each clause specifies a condition or set of conditions that must be satisfied for the predicate to be true. Predicates can consist of facts only, rules only, or a combination of both."),(0,r.kt)("p",null,'Predicates have a name and a fixed number of arguments. The number of arguments a predicate takes is called its "arity".'),(0,r.kt)("p",null,"Here are some examples of predicates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent(john, jim)."),": This predicate, named ",(0,r.kt)("inlineCode",{parentName:"li"},"parent"),', has arity 2. It states a relationship that "John is a parent of Jim".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"greater_than(5, 3)."),": The predicate, named ",(0,r.kt)("inlineCode",{parentName:"li"},"greater_than"),", also has arity 2. It would be used in a Prolog program to state that 5 is greater than 3.")),(0,r.kt)("p",null,"The SWI Prolog website gives you all its ",(0,r.kt)("a",{parentName:"p",href:"https://www.swi-prolog.org/pldoc/man?section=builtin"},"built-in predicates"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The OKP4 blockchain uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ichiban/prolog/"},"ichiban/prolog"),", a different Prolog interpreter. Natively available predicates differ.  ")),(0,r.kt)("h3",{id:"installing-prolog"},"Installing Prolog"),(0,r.kt)("p",null,"Prolog has various distributions, but SWI-Prolog is widely adopted and well-documented, which makes it a suitable choice for beginners."),(0,r.kt)("p",null,"On a Debian-based Linux distro, you can install SWI-Prolog using apt-get:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install swi-prolog\n")),(0,r.kt)("p",null,"On macOS, you can use Homebrew:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install swi-prolog\n")),(0,r.kt)("p",null,"On Windows, you can download the installer from the official ",(0,r.kt)("a",{parentName:"p",href:"https://www.swi-prolog.org/download/stable"},"SWI-Prolog website"),"."),(0,r.kt)("h3",{id:"running-prolog"},"Running Prolog"),(0,r.kt)("p",null,"To load facts and rules in SWI-Prolog (SWIPL), you can follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file with a ",(0,r.kt)("inlineCode",{parentName:"p"},".pl")," extension, ",(0,r.kt)("inlineCode",{parentName:"p"},"my_knowledgebase.pl"),", for example.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Define your facts and rules using Prolog syntax. In this example, we have two facts (",(0,r.kt)("inlineCode",{parentName:"p"},"memberOf/2"),") and one rule (",(0,r.kt)("inlineCode",{parentName:"p"},"can_vote/1"),")."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"% Facts\nmemberOf(alice, council).\nmemberOf(bob, council).\n\n% Rules\ncan_vote(X) :- memberOf(X, council).\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Start a Prolog interpreter session by typing ",(0,r.kt)("inlineCode",{parentName:"li"},"swipl")," in your terminal:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swipl\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Load the file into SWIPL by typing ",(0,r.kt)("inlineCode",{parentName:"li"},"[filename].")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"consult('filename')."),", where ",(0,r.kt)("inlineCode",{parentName:"li"},"filename")," is the name of your file without the ",(0,r.kt)("inlineCode",{parentName:"li"},".pl")," extension. For example, if your file is named ",(0,r.kt)("inlineCode",{parentName:"li"},"my_knowledgebase.pl"),", you can use either of the following commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"?- [my_knowledgebase].\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"?- consult('my_knowledgebase').\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"SWIPL will read and load the file, making the facts and rules available for querying. You can now use the loaded knowledge base in your Prolog sessions.")),(0,r.kt)("p",null,"For example, if you type ",(0,r.kt)("inlineCode",{parentName:"p"},"can_vote(alice)."),", you get the following answer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"?- can_vote(alice).\ntrue.\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"can_vote(marc).")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"?- can_vote(marc).\nfalse.\n")),(0,r.kt)("p",null,"Here is an answer with substitutions (type ",(0,r.kt)("inlineCode",{parentName:"p"},";")," after the first result to get another)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"?- can_vote(X).\nX = alice ;\nX = bob.\n")),(0,r.kt)("h3",{id:"an-example-related-to-sharing-resource-rules"},"An example related to sharing resource rules"),(0,r.kt)("p",null,"Here's an example of how Prolog can be used to define and enforce governance rules for accessing shared private datasets between different companies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"% Facts\ncompany(company1).\ncompany(company2).\ncompany(company3).\n\ndataset(company1, dataset1).\ndataset(company2, dataset2).\ndataset(company3, dataset3).\n\npermission(company1, read, dataset2).\npermission(company2, read, dataset1).\npermission(company2, read, dataset3).\npermission(company3, read, dataset1).\n\n% Rules\nhas_permission(Company, Action, Dataset) :-\n    permission(Company, Action, Dataset).\n")),(0,r.kt)("p",null,"In the above example, we define the companies using the ",(0,r.kt)("inlineCode",{parentName:"p"},"company/1")," fact and the datasets using the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset/2")," fact. The ",(0,r.kt)("inlineCode",{parentName:"p"},"permission/3")," fact associates a company with an action (e.g., read) and a specific dataset, indicating each company's permissions over the datasets."),(0,r.kt)("p",null,"Once we load this Prolog code into a Prolog interpreter or compiler, we can query the system to check if a company has permission to perform a specific action on a dataset. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prolog"},"?- consult(sharing_resources).\ntrue.\n\n?- has_permission(company1, read, dataset2).\ntrue.\n")),(0,r.kt)("p",null,"The Prolog interpreter will evaluate the rules and facts and respond with ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),' if company1 has the "read" permission for dataset2.'),(0,r.kt)("p",null,"This example demonstrates how a Prolog code can define and enforce conditions for accessing shared private datasets between companies. By leveraging Prolog's logical inference capabilities, you can create flexible and scalable rules that control data access and permissions across multiple organizations in a secure and controlled manner."),(0,r.kt)("h2",{id:"storing-and-querying-a-prolog-program-with-the-okp4-blockchain"},"Storing and querying a Prolog program with the OKP4 blockchain"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To continue, you should:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.okp4.network/nodes/installation"},"Install the OKP4 daemon CLI")),(0,r.kt)("li",{parentName:"ol"},"Create a wallet or import one from your seed:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Import from a mnemonic, you can replace "mywallet" with another wallet name\nokp4d keys add --recover mywallet\n\n# or create a new one, you can replace "mywallet" with another wallet name\nokp4d keys add mywallet\n\n# Get your address and name of your keys\nokp4d keys list\n')),(0,r.kt)("ol",{parentName:"admonition",start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://faucet.okp4.network/"},"Get $KNOW test tokens")))),(0,r.kt)("h3",{id:"prolog-query-with-the-okp4d-cli"},"Prolog query with the ",(0,r.kt)("inlineCode",{parentName:"h3"},"okp4d")," CLI"),(0,r.kt)("p",null,"The following command calls the logic module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# load with facts and rules inline, query can_vote(X).:\nokp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--program "memberOf(alice, council). memberOf(bob,council). can_vote(X) :- memberOf(X, council)." \\\n"can_vote(X)."\n\n# load facts and rules from a local Prolog file, query can_vote(X).:\nokp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--program-file my_knowledgebase.pl \\\n"can_vote(X)."\n\n\n# Returns only one suitable substitution\n: \'\nanswer:\n  has_more: true\n  results:\n  - substitutions:\n    - term:\n        arguments: []\n        name: alice\n      variable: X\n  success: true\n  variables:\n  - X\ngas_used: "12531"\nheight: "2637781"\n\'\n')),(0,r.kt)("p",null,"You can optionally use the ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2014-program")," flag to provide rules and facts.\nThe query above asks for a valid substitution of X for the ",(0,r.kt)("inlineCode",{parentName:"p"},"can_vote(X)")," rule. ",(0,r.kt)("inlineCode",{parentName:"p"},"alice")," is the first valid substitution found."),(0,r.kt)("h3",{id:"how-to-store-rules-a-prolog-program-on-chain-with-the-okp4d-cli"},"How to store rules (a Prolog program) on-chain with the ",(0,r.kt)("inlineCode",{parentName:"h3"},"okp4d")," CLI"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/contracts/tree/main/contracts/okp4-law-stone"},(0,r.kt)("inlineCode",{parentName:"a"},"law-stone"))," smart contract aims to provide GaaS (i.e. Governance as a Service) in any ",(0,r.kt)("a",{parentName:"p",href:"https://cosmos.network/"},"Cosmos blockchains")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm")," framework and the logic OKP4 module."),(0,r.kt)("p",null,"To store a Prolog program and be able to query it later within the OKP4 blockchain, you have to instantiate a new ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone"),"."),(0,r.kt)("h4",{id:"law-stone-instantiate-considerations"},(0,r.kt)("inlineCode",{parentName:"h4"},"law-stone")," instantiate considerations"),(0,r.kt)("p",null,"The identifier assigned to this smart contract once compiled and deployed on the testnet (",(0,r.kt)("inlineCode",{parentName:"p"},"chain-id = okp4-nemeton-1"),") is ",(0,r.kt)("inlineCode",{parentName:"p"},"CODE_ID = 5"),".",(0,r.kt)("br",{parentName:"p"}),"\n","You have to provide two parameters to instantiate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"program"),": the base64 encoded program (Prolog code)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"storage_address"),": another smart contract, ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/okp4/contracts/tree/main/contracts/okp4-objectarium"},(0,r.kt)("inlineCode",{parentName:"a"},"objectarium")),", stores unstructured data as Prolog programs. You should specify the address of an ",(0,r.kt)("inlineCode",{parentName:"li"},"objectarium")," contract on which the program will be stored and pinned (pinning prevents its removal and thus ensure its availability).")),(0,r.kt)("p",null,"You can use the following command to store the local ",(0,r.kt)("inlineCode",{parentName:"p"},"my_knowledgebase.pl")," Prolog program, with ",(0,r.kt)("inlineCode",{parentName:"p"},"okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx")," as a deployed ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d tx wasm instantiate 5 \\\n--from mywallet \\\n--label "rules-tutorial-ex-$(date +%s)" \\\n--no-admin \\\n--chain-id okp4-nemeton-1 \\\n--gas 1000000 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n"{\\"program\\":\\"$(cat my_knowledgebase.pl | base64)\\", \\"storage_address\\": \\"okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx\\"}"\n')),(0,r.kt)("p",null,"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," value by your wallet name. You can also change the ",(0,r.kt)("inlineCode",{parentName:"p"},"--label")," name as you want but note it should be unique.\nYou can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-admin")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"--admin YOUR_OKP4_ADDR")," if you want to be able to \u201cbreak\u201d (to remove the stored program)."),(0,r.kt)("h4",{id:"law-stone-instantiate-transaction-results"},(0,r.kt)("inlineCode",{parentName:"h4"},"law-stone")," instantiate transaction results"),(0,r.kt)("p",null,"The following command gets you the contract address of the last ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CODE_ID = 5")),") instantiated by the okp4 address ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"okp41z4ldttn975ku764er2nvtfq47n6n7jfxnkc2k9"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query txs \\\n--events \'message.sender=okp41z4ldttn975ku764er2nvtfq47n6n7jfxnkc2k9&instantiate.code_id=5\' \\\n--chain-id okp4-nemeton-1 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json | jq \'.txs[-1].logs[-1].events[] | select(.type == "instantiate").attributes[] | select(.key == "_contract_address").value\'\n\n# "okp41dey5a35ssvfulh2xud3nkwk423fp0t40nga4a8xykx9frmhm6jpqne0alf"\n')),(0,r.kt)("p",null,"You may want to know the ",(0,r.kt)("inlineCode",{parentName:"p"},"object_id")," of the Prolog program you stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," contract. Here is how you can have it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query txs --events \'message.sender=okp41z4ldttn975ku764er2nvtfq47n6n7jfxnkc2k9&instantiate.code_id=5\' \\\n--chain-id okp4-nemeton-1  --node https://api.testnet.okp4.network:443/rpc \\\n--output json | jq \'.txs[-1].logs[-1].events[] | select(.type == "wasm").attributes[] | select(.key == "id").value\'\n\n# "2625337e6025495a87cb32eb7f5a042f31e4385fd7e34c90d661bfc94dd539e3"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," smart contract has a query method to get the base64 stored data by its object ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query wasm contract-state smart okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx \\\n--output json \\\n--chain-id okp4-nemeton-1 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n"{\\"object_data\\": {\\"id\\":\\"2625337e6025495a87cb32eb7f5a042f31e4385fd7e34c90d661bfc94dd539e3\\"}}" \\\n| jq \'.data\' | tr -d \'"\'\n\n# JSBGYWN0cwptZW1iZXIoYWxpY2UsIGNvdW5jaWwpLgptZW1iZXIoYm9iLCBjb3VuY2lsKS4KCiUgUnVsZXMKY2FuX3ZvdGUoWCkgOi0gbWVtYmVyKFgsIGNvdW5jaWwpLg==\n')),(0,r.kt)("p",null,"To get the Prolog code, you need to decode the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo \"JSBGYWN0cwptZW1iZXIoYWxpY2UsIGNvdW5jaWwpLgptZW1iZXIoYm9iLCBjb3VuY2lsKS4KCiUgUnVsZXMKY2FuX3ZvdGUoWCkgOi0gbWVtYmVyKFgsIGNvdW5jaWwpLg\" | base64 -d\n\n# Returns the Prolog program\n: '\n% Facts\nmember(alice, council).\nmember(bob, council).\n\n% Rules\ncan_vote(X) :- member(X, council).\n'\n")),(0,r.kt)("p",null,"Let\u2019s combine it all! To get back the Prolog code stored in the last ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," (",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"CODE_ID = 5")),", storage-oriented ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," smart contract address = ",(0,r.kt)("inlineCode",{parentName:"p"},"okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx"),") instantiated by the okp4 address ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"okp41z4ldttn975ku764er2nvtfq47n6n7jfxnkc2k9")),", you can type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query wasm contract-state smart okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx \\\n--output json \\\n--chain-id okp4-nemeton-1 \\\n--node https://api.testnet.okp4.network:443/rpc \\\n"{\\"object_data\\": {\\"id\\": $(okp4d query txs --events \'message.sender=okp41z4ldttn975ku764er2nvtfq47n6n7jfxnkc2k9&instantiate.code_id=5\' \\\n--chain-id okp4-nemeton-1  --node https://api.testnet.okp4.network:443/rpc \\\n--output json | jq \'.txs[-1].logs[-1].events[] | select(.type == "wasm").attributes[] | select(.key == "id").value\')}}" \\\n| jq \'.data\' | tr -d \'"\' | base64 -d\n\n# Returns the Prolog program\n: \'\n% Facts\nmember(alice, council).\nmember(bob, council).\n\n% Rules\ncan_vote(X) :- member(X, council).\n\'\n')),(0,r.kt)("h3",{id:"how-to-ask-for-validation-rules-prolog-program-on-chain-with-the-okp4d-cli"},"How to ask for validation rules (Prolog program) on-chain with the ",(0,r.kt)("inlineCode",{parentName:"h3"},"okp4d")," CLI"),(0,r.kt)("p",null,"Now we have instantiated a ",(0,r.kt)("inlineCode",{parentName:"p"},"law-stone")," smart contract (address = ",(0,r.kt)("inlineCode",{parentName:"p"},"okp41dey5a35ssvfulh2xud3nkwk423fp0t40nga4a8xykx9frmhm6jpqne0alf"),"), we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Ask")," query to evaluate predicates against the underlying program:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query wasm contract-state smart okp41dey5a35ssvfulh2xud3nkwk423fp0t40nga4a8xykx9frmhm6jpqne0alf \\\n--node https://api.testnet.okp4.network:443/rpc \\\n"{\\"ask\\": {\\"query\\": \\"can_vote(X).\\"}}"\n\n# Returns only one suitable substitution\n: \'\nanswer:\n  has_more: true\n  results:\n  - substitutions:\n    - term:\n        arguments: []\n        name: alice\n      variable: X\n  success: true\n  variables:\n  - X\ngas_used: "12531"\nheight: "2637781"\n\'\n')),(0,r.kt)("h2",{id:"built-in-prolog-predicates-within-the-okp4-blockchain"},"Built-in Prolog predicates within the OKP4 blockchain"),(0,r.kt)("p",null,"The logic module interpreter can manage ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ichiban/prolog/wiki#predicates"},"ichiban/prolo built-in predicates")," and custom predicates. But their availability is conditioned to the interpreter configuration. For instance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"halt/1")," built-in predicate is not registered in the interpreter; its usage can stop a node.\nTo get the list of available predicates, you can query the logic module parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"okp4d --node \"https://api.testnet.okp4.network:443/rpc\" \\\n    query params subspace \\\n    logic Interpreter -ojson \\\n    | jq -r '.value | fromjson.registered_predicates[]'\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"It's worth noticing that, in the next version the logic module parameters won't be stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"params")," module anymore, but directly in the logic module itself, so the query to retrieve them will change. And the configuration will be based on white & black lists of predicates")),(0,r.kt)("p",null,"Several ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/okp4/okp4d/tree/main/x/logic/predicate"},"predicates have been specially created in the logic module")," to enable rules with the blockchain state or operate crypto utilities."),(0,r.kt)("h3",{id:"related-to-the-blockchain-state"},"Related to the blockchain state"),(0,r.kt)("h4",{id:"bank_balances2"},(0,r.kt)("inlineCode",{parentName:"h4"},"bank_balances/2")),(0,r.kt)("p",null,"Use this predicate to query the balance of an account:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n"bank_balances(okp416rry8kjuzpxezhf4g4lvjk67mkjc95lterek2u, [Unit-Nb])."\n\n# 9,899.958232 KNOW\n: \'\nanswer:\n  has_more: false\n  results:\n  - substitutions:\n    - term:\n        arguments: []\n        name: uknow\n      variable: Unit\n    - term:\n        arguments: []\n        name: "9899958232"\n      variable: Nb\n  success: true\n  variables:\n  - Nb\n  - Unit\ngas_used: "12814"\nheight: "2687300"\n\'\n')),(0,r.kt)("p",null,"You can thus check a balance threshold with a ",(0,r.kt)("inlineCode",{parentName:"p"},"bank_balances_has_sufficient_coin/3")," rule:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# bank_balances_has_sufficient_coin(Addr, Limit, Unit) :-\n#    bank_balances(Addr, [Unit-Nb]),\n#    compare(>, Nb, Limit).\n\nokp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--program "bank_balances_has_sufficient_coin(Addr, Limit, Unit) :- bank_balances(Addr, [Unit-Nb]), compare(>, Nb, Limit)." \\\n"bank_balances_has_sufficient_coin(okp416rry8kjuzpxezhf4g4lvjk67mkjc95lterek2u, 9899958230, uknow)."\n\n# OK\n: \'\nanswer:\n  has_more: false\n  results:\n  - substitutions: []\n  success: true\n  variables: []\ngas_used: "12815"\nheight: "2687574"\n\'\n\nokp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--program "bank_balances_has_sufficient_coin(Addr, Limit, Unit) :- bank_balances(Addr, [Unit-Nb]), compare(>, Nb, Limit)." \\\n"bank_balances_has_sufficient_coin(okp416rry8kjuzpxezhf4g4lvjk67mkjc95lterek2u, 99899958239, uknow)."\n\n# NOK\n: \'\nanswer:\n  has_more: false\n  results: []\n  success: false\n  variables: []\ngas_used: "12815"\nheight: "2687583"\n\'\n')),(0,r.kt)("h4",{id:"block_height1"},(0,r.kt)("inlineCode",{parentName:"h4"},"block_height/1")),(0,r.kt)("p",null,"It may be useful to know the ",(0,r.kt)("a",{parentName:"p",href:"https://academy.binance.com/en/glossary/block-height"},"block height"),". Here\u2019s how to get it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"okp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json \\\n\"block_height(X).\" | jq '.answer.results | last | .substitutions | last | .term.name'\n")),(0,r.kt)("h4",{id:"block_time1"},(0,r.kt)("inlineCode",{parentName:"h4"},"block_time/1")),(0,r.kt)("p",null,"The following command shows you how you can have the current time (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"Unix Epoch Time"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"okp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json \\\n\"block_time(X).\" | jq '.answer.results | last | .substitutions | last | .term.name'\n")),(0,r.kt)("h4",{id:"consult1"},(0,r.kt)("inlineCode",{parentName:"h4"},"consult/1")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ichiban/prolog/wiki#program"},(0,r.kt)("inlineCode",{parentName:"a"},"consult(:File)"))," predicate has been extended to enable data loading from any smart contract query through the ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmwasm")," URI."),(0,r.kt)("p",null,"The Logic module expects the ",(0,r.kt)("inlineCode",{parentName:"p"},"File")," variable to be a URI with the following form: ",(0,r.kt)("inlineCode",{parentName:"p"},"cosmwasm:{contract_name}:{contract_address}?query={contract_query}")),(0,r.kt)("p",null,"Where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{contract_name}"),": Only informative, represents the corresponding smart contract name or type (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"okp4-objectarium"),");"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{contract_address}"),": The smart contract address to query"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"{contract_query}"),": ",(0,r.kt)("a",{parentName:"li",href:"https://www.urlencoder.org/"},"Url encoded")," JSON query to perform on the targeted smart contract.")),(0,r.kt)("p",null,"Let\u2019s load the Prolog program stored with the ",(0,r.kt)("inlineCode",{parentName:"p"},"objectarium")," instance ",(0,r.kt)("inlineCode",{parentName:"p"},"address = okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx"),", id = ",(0,r.kt)("inlineCode",{parentName:"p"},"2625337e6025495a87cb32eb7f5a042f31e4385fd7e34c90d661bfc94dd539e3"),":"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Query payload details"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JSON Payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "object_data": { "id": "2625337e6025495a87cb32eb7f5a042f31e4385fd7e34c90d661bfc94dd539e3" } }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.urlencoder.org/"},"Url encoded")," payload:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"%7B%22object_data%22%3A%20%7B%22id%22%3A%222625337e6025495a87cb32eb7f5a042f31e4385fd7e34c90d661bfc94dd539e3%22%7D%7D"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n--output json \\\n"consult(\'cosmwasm:okp4-objectarium:okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx?query=%7B%22object_data%22%3A%7B%22id%22%3A%222625337e6025495a87cb32eb7f5a042f31e4385fd7e34c90d661bfc94dd539e3%22%7D%7D\'), source_file(File), can_vote(X)."\\\n| jq\n\n# "my_knowledgebase.pl" previously stored on-chain, now evaluates \'can_vote(X).\' from it: X = alice\n: \'\n{\n  "height": "2689546",\n  "gas_used": "99533",\n  "answer": {\n    "success": true,\n    "has_more": true,\n    "variables": [\n      "File",\n      "X"\n    ],\n    "results": [\n      {\n        "substitutions": [\n          {\n            "variable": "File",\n            "term": {\n              "name": "\'cosmwasm:okp4-objectarium:okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx?query=%7B%22object_data%22%3A%7B%22id%22%3A%222625337e6025495a87cb32eb7f5a042f31e4385fd7e34c90d661bfc94dd539e3%22%7D%7D\'",\n              "arguments": []\n            }\n          },\n          {\n            "variable": "X",\n            "term": {\n              "name": "alice",\n              "arguments": []\n            }\n          }\n        ]\n      }\n    ]\n  }\n}\n\'\n')),(0,r.kt)("h3",{id:"useful-prolog-predicates-in-a-blockchain-context"},"Useful Prolog predicates in a blockchain context"),(0,r.kt)("h4",{id:"bech32_address2"},(0,r.kt)("inlineCode",{parentName:"h4"},"bech32_address/2")),(0,r.kt)("p",null,"Want to know the ",(0,r.kt)("a",{parentName:"p",href:"https://www.stargaze.zone/"},"Stargaze")," (",(0,r.kt)("strong",{parentName:"p"},"stars"),") address from an OKP4 one? Here is an example to get it from ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"okp416rry8kjuzpxezhf4g4lvjk67mkjc95lterek2u"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n"bech32_address(-(Prefix, Words), okp416rry8kjuzpxezhf4g4lvjk67mkjc95lterek2u), bech32_address(-(stars, Words), StarsEncodedAddr)."\n\n# stars address (the result we are looking for):\n# stars16rry8kjuzpxezhf4g4lvjk67mkjc95ltqrtrak\n: \'\nanswer:\n  has_more: false\n  results:\n  - substitutions:\n    - term:\n        arguments: []\n        name: stars16rry8kjuzpxezhf4g4lvjk67mkjc95ltqrtrak\n      variable: StarsEncodedAddr\n    - term:\n        arguments: []\n        name: okp4\n      variable: Prefix\n    - term:\n        arguments: []\n        name: "[208,198,67,218,92,16,77,145,93,53,69,126,201,91,94,221,165,130,211,235]"\n      variable: Words\n  success: true\n  variables:\n  - Prefix\n  - StarsEncodedAddr\n  - Words\ngas_used: "12533"\nheight: "2687799"\n\'\n')),(0,r.kt)("h4",{id:"hex_bytes2-sha_hash2"},(0,r.kt)("inlineCode",{parentName:"h4"},"hex_bytes/2"),", ",(0,r.kt)("inlineCode",{parentName:"h4"},"sha_hash/2")),(0,r.kt)("p",null,"Compute the hash (and the hexa value) of a given data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'okp4d query logic ask \\\n--node https://api.testnet.okp4.network:443/rpc \\\n"sha_hash(\'OKP4 rocks\', Hash), hex_bytes(ResHex, Hash)."\n\n# ResHex = "\'01235249e3708ac819526bf602b2ec2ed98266a6b98b386dc02e6e6b9ed4709d\'"\n# Hash = "[1,35,82,73,227,112,138,200,25,82,107,246,2,178,236,46,217,130,102,166,185,139,56,109,192,46,110,107,158,212,112,157]"\n')),(0,r.kt)("h2",{id:"recap"},"Recap\u2019"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"OKP4 protocol orchestrates off-chain resources with on-chain governance rules."),(0,r.kt)("li",{parentName:"ol"},"These rules are written in Prolog, and the OKP4 blockchain can interpret Prolog code via a ",(0,r.kt)("inlineCode",{parentName:"li"},"logic")," module. Thus any smart contract instantiated on the OKP4 blockchain can evaluate Prolog queries."),(0,r.kt)("li",{parentName:"ol"},"Custom implementations make blockchain states and crypto utilities usable with any Prolog program queried on-chain."),(0,r.kt)("li",{parentName:"ol"},"One has to store its Prolog program with a ",(0,r.kt)("inlineCode",{parentName:"li"},"law-stone")," smart contract instantiation. The instantiated smart contract can be queried for a Prolog evaluation.")),(0,r.kt)("p",null,"Utilizing Prolog to enforce governance rules via the OKP4 blockchain paves the way for transparent and trustless sharing interactions and promotes interoperability without limits."),(0,r.kt)("p",null,"With this tutorial, you gain proficiency in Prolog and gain deeper insights into how you can implement advanced governance rules via the OKP4 protocol. A whole new field of possibilities opens up and everything remains to be created! Seize the opportunity to apply your newfound knowledge to real-world challenges \ud83d\ude80"))}m.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=11748},81915:function(e,t,a){"use strict";t.Z=a.p+"assets/images/prolog-fa96a7bdfdbeefee1760331dd2b1397a.webp"}}]);