---
sidebar_position: 2
---

# Get started with OKP4 protocol: governance rules with Prolog

Welcome OKP4 builders to an exciting journey at the crossroads of Prolog and blockchain! 

This tutorial delves into the fascinating realm of logic programming and its profound impact on the "law" governing off-chain resources usages. Whether aspiring to develop on the OKP4 protocol or are intrigued by one of the core OKP4 protocol’s concepts, this tutorial will equip you with the knowledge of programming rules with Prolog and how to use it to set up and enforce rules without trusting a central authority.

## Why use Prolog on the OKP4 blockchain?

### What is the OKP4 protocol?

OKP4 is a governance infrastructure for off-chain digital resources. OKP4 is a Cosmos-based blockchain that allows anyone to define on-chain rules, intending to share any resource and create a new generation of applications on top of them without exposing the data and without the need to trust a party. 

The rules define access conditions and the revenue-sharing model, for example. But how can we define programmatically these terms? Here comes Prolog.

### What is the Prolog language?

**Prolog** (short for **Programming in Logic**) is a high-level programming language associated with artificial intelligence and computational linguistics. It's unique for its usage of formal logic and the concept of predicate calculus.

The declarative nature of Prolog makes it an excellent choice for establishing governance rules in decentralized systems where rules can be explicitly stated and enforced. Unlike procedural languages, where the control flow is explicitly coded, Prolog uses a declarative approach where you declare the facts and rules.

## How the OKP4 protocol leverages Prolog language?

The OKP4 blockchain has a Prolog interpreter built-in, the “logic module”, which enables the definition of complex business logic and agreement conditions using a concise and human-readable syntax.

Decentralized programs (smart contracts executions) operated by the OKP4 blockchain nodes are thus able to load and query Prolog code.

Using Prolog improves the readability and understandability of smart contracts, making them easier to audit, verify, and maintain.

## Your first Prolog program

## Understanding Prolog

Prolog programs are **.pl** files containing **facts**, **rules**, and **queries**.

### Facts

Facts in Prolog are basic assertions about your world. For instance:

```prolog
memberOf(alice, council).
memberOf(bob, council).

```

This states the facts that `alice` and `bob` are members of the `council`.

### Rules

Rules are logical formulas that define relationships between facts. For example:

```prolog
can_vote(X) :- memberOf(X, council).
```

This rule states that someone `X` can vote if `X` is a council member.

### Queries

Queries are how you ask questions about the facts and rules. For example:

```prolog
?- can_vote(alice).
```

This query asks if `alice` can vote. Given our facts and rules, it would answer `true`.

## Installing Prolog

Prolog has various distributions, but SWI-Prolog is widely adopted and well-documented, which makes it a suitable choice for beginners.

On a Debian-based Linux distro, you can install SWI-Prolog using apt-get:

```sh
sudo apt-get install swi-prolog

```

On macOS, you can use Homebrew:

```sh
brew install swi-prolog

```

On Windows, you can download the installer from the official [SWI-Prolog website](https://www.swi-prolog.org/download/stable).

## Running Prolog

To load facts and rules in SWI-Prolog (SWIPL), you can follow these steps:

1. Create a new file with a `.pl` extension, `my_knowledgebase.pl`, for example.

2. Define your facts and rules using Prolog syntax. Here's a simple example:

```prolog
% Facts
memberOf(alice, council).
memberOf(bob, council).

% Rules
can_vote(X) :- memberOf(X, council).
```

In this example, we have two facts (`memberOf/2`) and one rule (`can_vote/1`).

1. Start a Prolog interpreter session by typing `swipl` in your terminal:

```bash
swipl
```

1. Load the file into SWIPL by typing `[filename].` or `consult('filename').`, where `filename` is the name of your file without the `.pl` extension. For example, if your file is named `my_knowledgebase.pl`, you can use either of the following commands:

```prolog
?- [my_knowledgebase].

```

or

```prolog
?- consult('my_knowledgebase').
```

1. SWIPL will read and load the file, making the facts and rules available for querying. You can now use the loaded knowledge base in your Prolog sessions. 

For example,  if you type `can_vote(alice).`, you get the following answer:

```prolog
?- can_vote(alice).
true.
```

 `can_vote(marc).` returns `false`:

```prolog
?- can_vote(marc).
false.
```

Here is an answer with substitutions (type `;` after the first result to get another)

```prolog
?- can_vote(X).
X = alice ;
X = bob.
```

## An example related to sharing resource rules

Here's an example of how Prolog can be used to define and enforce governance rules for accessing shared private datasets between different companies:

```prolog
% Facts
company(company1).
company(company2).
company(company3).

dataset(company1, dataset1).
dataset(company2, dataset2).
dataset(company3, dataset3).

permission(company1, read, dataset2).
permission(company2, read, dataset1).
permission(company2, read, dataset3).
permission(company3, read, dataset1).

% Rules
has_permission(Company1, Action, Dataset) :-
    permission(Company1, Action, Dataset).

has_permission(Company1, Action, Dataset) :-
    permission(Company1, Action, Dataset2),
    has_permission(Company2, Action, Dataset),
    dataset(Company2, Dataset2).

```

In the above example, we define the companies using the `company/1` fact and the datasets using the `dataset/2` fact. The `permission/3` fact associates a company with an action (e.g., read) and a specific dataset, indicating each company's permissions over the datasets.

The `has_permission/3` rule defines that a company has a particular permission for a dataset if direct permission exists for that company and dataset combination. Additionally, it recursively checks if an intermediate company (Company2) has permission over another dataset (Dataset2) and Company1 has permission over Dataset2. This enables indirect permission delegation between companies, allowing access to shared datasets.

Once we load this Prolog code into a Prolog interpreter or compiler, we can query the system to check if a company has permission to perform a specific action on a dataset. For example:

```prolog
?- consult(sharing_resources).
true.

?- has_permission(company1, read, dataset2).
true .
```

The Prolog interpreter will evaluate the rules and facts and respond with `true` if company1 has the "read" permission for dataset2, directly or indirectly, through permission delegation.

This example demonstrates how Prolog code can define and enforce conditions for accessing shared private datasets between companies. By leveraging Prolog's logical inference capabilities, you can create flexible and scalable rules that control data access and permissions across multiple organizations in a secure and controlled manner.

# Storing and querying a Prolog program with the OKP4 blockchain

:::info
💡 To continue, you should:

1. [Install the OKP4 daemon CLI](https://docs.okp4.network/nodes/installation)
2. Create a wallet or import one from your seed:

```bash
# Import from a mnemonic, you can replace "mywallet" with another wallet name 
okp4d keys add --recover mywallet

# or create a new, you can replace "mywallet" with another wallet name  
okp4d keys add mywallet 

# Get your address and name of your keys
okp4d keys list
```

3. [Get $KNOW test tokens](https://faucet.okp4.network/)

:::

## Prolog query with the `okp4d` CLI

The following command calls the logic module: 

```bash
okp4d query logic ask --program "memberOf(alice, council). memberOf(bob,council). can_vote(X) :- memberOf(X, council)." "can_vote(X)." --node https://api.testnet.okp4.network:443/rpc

# alternative, does the same:
# okp4d query logic ask --program "$(cat my_knowledgebase.pl)" "can_vote(X)." --node https://api.testnet.okp4.network:443/rpc

# Returns only one suitable substitution
: '
answer:
  has_more: true
  results:
  - substitutions:
    - term:
        arguments: []
        name: alice
      variable: X
  success: true
  variables:
  - X
gas_used: "12531"
height: "2637781"
'
```

You can optionally use the `—-program` flag if you want to provide rules and facts. 
The query above asks a valid substitution of X, for the `can_vote(X)`  rule. `alice` is the first valid substitution found. 

## How to store rules (a Prolog program) on-chain with the `okp4d` CLI

The `[law-stone](https://github.com/okp4/contracts/tree/main/contracts/okp4-law-stone)` smart contract aims to provide GaaS (i.e. Governance as a Service) in any [Cosmos blockchains](https://cosmos.network/) using the [CosmWasm](https://cosmwasm.com/) framework and the logic OKP4 module.

To store a Prolog program and be able to query it later within the OKP4 blockchain, you have to instantiate a new `law-stone`. 

### `law-stone` instantiate considerations

The identifier assigned to this smart contract once it has been compiled and deployed on the testnet (`chain-id = okp4-nemeton-1`) is: `CODE_ID = 3`.  
You have to provide two parameters to instantiate:

1. `program`: the base64 encoded program (Prolog code)
2. `storage_address`:  another smart contract, `[objectarium](https://github.com/okp4/contracts/tree/main/contracts/okp4-objectarium)`, stores unstructured data as Prolog programs. You should specify the address of an `objectarium` contract on which the program will be stored and pinned (pinning prevents its removal and thus ensure its availability). 

You can use the following command to store a local `myknowledge.pl` Prolog program, with `okp416zrd20eqwx0nv05pu45na6jq345r6ggqrgx2sh79ln5z8vqvztgsqsfr4p` as a deployed `objectarium` instance: 

```bash
okp4d tx wasm instantiate 3 \
--from mywallet \
--label "rules-tutorial-ex-$(date +%s)" \
--no-admin \
--chain-id okp4-nemeton-1 \
--gas 1000000 \
--node https://api.testnet.okp4.network:443/rpc \
"{\"program\":\"$(cat sharing_resources.pl | base64)\", \"storage_address\": \"okp416zrd20eqwx0nv05pu45na6jq345r6ggqrgx2sh79ln5z8vqvztgsqsfr4p\"}"
```

You can also change the `—label` name as you want but note it should be unique. 
You can replace `—no admin` with `—admin YOUR_OKP4_ADDR` if you want to be able to “break” (to remove the stored program). 

## How to ask for validation rules (Prolog program) on-chain with the `okp4d` CLI

The `[law-stone](https://github.com/okp4/contracts/tree/main/contracts/okp4-law-stone)` smart c

# Custom Prolog predicates within the OKP4 blockchain

## Prolog predicates

In Prolog, a predicate can be considered a relation between several entities. Predicates have a name and a fixed number of arguments. The number of arguments a predicate takes is called its "arity".

Here are some examples of predicates:

- **`parent(john, jim).`** This predicate, named **`parent`**, has arity 2. It states a relationship that "John is a parent of Jim".
- **`greater_than(5, 3).`** The predicate, named **`greater_than`**, also has arity 2. It would be used in a Prolog program to state that 5 is greater than 3.

## Rules related to the OKP4 blockchain state

Several [predicates have been added in the logic module](https://github.com/okp4/okp4d/tree/main/x/logic/predicate) to create rules with the blockchain state or exploit crypto utilities. 

```prolog
member(alice, council).
member(bob, council).

```

This sta
