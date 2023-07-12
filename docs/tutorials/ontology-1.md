---
sidebar_position: 6
---

# Leverage the ontology

![Tutorials overview](/img/content/tutorials/ontology-1.webp)

This tutorial unveils the concept of ontology and figure out its crucial role in the OKP4 protocol.

An ontology describes knowledge. We can represent it as a graph that fixes the meaning of concepts and the relationships that unite them.

If you’re looking to explore the various formats to encode ontologies and understand how a CosmWasm smart contract operates all the on-chain structured data within the OKP4 blockchain, you’re on the right page. Prepare yourself for an enlightening adventure where the semantic web ([Web 3.0](https://en.wikipedia.org/wiki/Semantic_Web)) meets the decentralized web ([Web3](https://en.wikipedia.org/wiki/Web3))!

## Why use an ontology on the OKP4 blockchain?

### What is the OKP4 protocol?

OKP4 is a decentralized protocol for off-chain digital resource sharing. The Cosmos-based blockchain allows anyone to define rules, intending to share any resource and create a new generation of applications on top of them without exposing the data and without the need to trust a party.

The shared resources information and all activity logs proceeded by the blockchain need to be stored in a structured, interoperable and highly extensible manner. But how can we declare and analyze the metadata related to the resources? That’s where ontology comes in handy.

### What is an ontology?

An ontology is a data model describing a specific domain's concepts and relationships. It helps specify what entities exist, how they are related, and how they can be classified. It's a means of encapsulating knowledge about a domain in a structured, reusable format, both understandable by humans and manageable by machines.

[RDF/XML](https://en.wikipedia.org/wiki/RDF/XML), [Turtle](https://en.wikipedia.org/wiki/Turtle_(syntax)), and [NTriples/NQuads](https://en.wikipedia.org/wiki/N-Triples) are the most common file formats for expressing data, using [semantic triples](https://en.wikipedia.org/wiki/Semantic_triple) comprising a subject, predicate, and object.

### The OKP4 ontology

The [OKP4 ontology](https://ontology.okp4.space) describes and defines the different forms of vocabulary used in the OKP4 protocol in a standard and well-designed format. You notably should follow the OKP4 ontology to reference resources (services, datasets, …) you want to share.  

:::info

Check out [the OKP4 ontology GitHub repository](https://github.com/okp4/ontology) to get all [the different OKP4 specifications](https://github.com/okp4/ontology/tree/main/src) and [some examples](https://github.com/okp4/ontology/tree/main/example).

You can read [this article about the OKP4 ontology](https://blog.okp4.network/okp4-knowledge-sharing-through-ontology-driven-dataverse-a-new-approach-to-knowledge-description-f9b81d4484c8) from the blog to dig into the details.

:::

## **Semantic data expression with RDF triples**

### Creating meaningful relationships

In the realm of the semantic web, RDF (Resource Description Framework) is a common standard used to express these relationships.

RDF encodes information in triple structures. The basic structure of an RDF triple is subject-predicate-object, much like a simple sentence in the English language.

1. **Subject**: The subject is the entity or resource the statement is about. It's typically a URI (Uniform Resource Identifier) which uniquely identifies a resource.
2. **Predicate**: The predicate (also called a property) is a specific aspect, characteristic, attribute, or relation that describes the subject. It's also typically a URI.
3. **Object**: The object is the value of the attribute defined by the predicate for the subject. It can be a URI or a literal (like a string or a number).

In RDF, **prefixes** are used as a shorthand notation for long URIs to make the data more readable and less verbose. They're similar to namespaces in programming languages. For instance, instead of writing `http://www.w3.org/2001/XMLSchema#integer`, you could declare a prefix `xsd` to represent the `http://www.w3.org/2001/XMLSchema` URI and then use `xsd:integer`.

### **Turtle**

Turtle (Terse RDF Triple Language) is a syntax that allows RDF to be completely written in a compact and natural text form, with abbreviations for common usage patterns and datatypes.

Here's an RDF triple written in Turtle format (`.ttl` file):

```turtle
@prefix ex: <http://example.com/stuff/1.0/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ex:Alice ex:hasAge "30"^^xsd:integer .
```

In this example:

- **`ex:Alice`** is the subject (using `ex` as a prefix for the `http://example.com/stuff/1.0/` URI).
- **`ex:hasAge`** is the predicate.
- **`"30"^^xsd:integer`** is the object, a literal of datatype integer (using **`xsd`** as a prefix for the XML Schema Datatype namespace).

In the Turtle syntax, the semicolon (**`;`**) is used as a shorthand to reduce verbosity when multiple predicates and objects have the same subject. It allows you to write multiple predicates and objects for the same subject without having to repeat the subject.
The comma (**`,`**) is used as a shorthand for reducing verbosity when the same subject and predicate have multiple objects.

Suppose we want to express that Alice is 30 years old person, and her email is `alice@example.com`:

```turtle
@prefix ex: <http://example.com/stuff/1.0/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ex:Alice a <http://www.w3.org/2002/07/owl#Person> ;
         ex:hasAge "30"^^xsd:integer ;
         ex:hasEmail "alice@example.com" .
```

Note that the lowercase "a" is a special abbreviation for the RDF type property, which states that a resource is an instance of a particular class. This is essentially equivalent to **`<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>`**, and it's used to indicate the type of a resource.

### Express RDF data in an XML format: **RDF/XML**

Here's an XML file example of how you might express the facts about Alice in RDF/XML:

```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
         xmlns:ex="http://example.com/stuff/1.0/"
         xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
  <rdf:Description rdf:about="http://example.com/stuff/1.0/Alice">
    <rdf:type rdf:resource="http://www.w3.org/2002/07/owl#Person"/>
    <ex:hasAge rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">30</ex:hasAge>
    <ex:hasEmail>alice@example.com</ex:hasEmail>    
  </rdf:Description>
</rdf:RDF>

```

### Line-based, plain text format: N-Triples

Here's the same data represented with N-Triples (`.nt` file):

```ntriples
<http://example.com/stuff/1.0/Alice> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Person> .
<http://example.com/stuff/1.0/Alice> <http://example.com/stuff/1.0/hasAge> "30"^^<http://www.w3.org/2001/XMLSchema#integer> .
<http://example.com/stuff/1.0/Alice> <http://example.com/stuff/1.0/hasEmail> "alice@example.com" .
```

### **N-Triples with a graph name: N-Quads**

In addition to the subject, predicate, and object of a triple, N-Quads add a fourth component, the graph name. Here's the data represented as N-Quads (`.nq` file):

```nquads
<http://example.com/stuff/1.0/Alice> <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> <http://www.w3.org/2002/07/owl#Person> <http://example.org/mygraph> .
<http://example.org/person/john> <http://example.org/stuff/1.0/hasAge> "25" <http://example.org/mygraph> .
<http://example.com/stuff/1.0/Alice> <http://example.com/stuff/1.0/hasEmail> "alice@example.com" <http://example.com/mygraph> .
```

In this example, **`<http://example.org/mygraph>`** is the name of the graph where the triples are stored.

### Real-world examples: open datasets

Ontologies are widely used for open data. You can find out some file examples in the “Linked data” section of [datasets referenced by the Publications Office of the European Union](https://data.europa.eu/data/datasets).  

## Store and query RDF triples with the OKP4 blockchain

### The `cognitarium` smart contract

The [`cognitarium`](https://github.com/okp4/contracts/tree/main/contracts/okp4-cognitarium) smart contract enables the usage of RDF graphs triples in any [Cosmos blockchains](https://cosmos.network/) (and therefore the OKP4 blockchain) using the [CosmWasm](https://cosmwasm.com/) framework.

You can insert and query semantic data in Turtle, RDF/XML, N-Triples or N-Quads as well with an `cognitarium` instance. Turtle is the default format.

You can query (`select`) any `cognitarium` instance, but you can only insert data in one you instantiated.

### `cognitarium` instantiation

Let's create a new graph database to populate the ontology using the [`okp4d` CLI](https://docs.okp4.network/tutorials/cli-1), with a `cognitarium` smart contract instantiation (`CODE_ID = 7`).

```bash
okp4d tx wasm instantiate 7 \
--from okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \
--label "ontology-tutorial-ex-$(date +%s)" \
--admin okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \
--chain-id okp4-nemeton-1 \
--gas 1000000 \
--node https://api.testnet.okp4.network:443/rpc \
"{}"
```

Here the smart contract is instantiated with the wallet `okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5`. Replace it with your own okp4 address!
The `label` parameter should also be unique, hence the use of `date`.

You can specify a `limits` parameter. If `{}` is provided (as above), the default values are:

```json
{ 
  "limits": {
		  "max_byte_size": "340282366920938463463374607431768211455",
		  "max_insert_data_byte_size": "340282366920938463463374607431768211455",
		  "max_insert_data_triple_count": "340282366920938463463374607431768211455",
		  "max_query_limit": 30,
		  "max_query_variable_count": 30,
		  "max_triple_byte_size": "340282366920938463463374607431768211455",
		  "max_triple_count": "340282366920938463463374607431768211455"
	}
}
```

For this tutorial, the instantiate transaction hash is [E0985541A08D1DCCA4F362DE445E44FB26A3AB374F84F9335B3EFCF247F263DA](https://explore.okp4.network/OKP4%20testnet/tx/E0985541A08D1DCCA4F362DE445E44FB26A3AB374F84F9335B3EFCF247F263DA), which results in an `okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars` contract address. Here is the CLI command to retrieve the resulting address:

```bash
okp4d query tx E0985541A08D1DCCA4F362DE445E44FB26A3AB374F84F9335B3EFCF247F263DA \
--node https://api.testnet.okp4.network:443/rpc \
--output json \
| jq '.logs[0].events[] | select(.type == "instantiate").attributes[] | select(.key == "_contract_address").value'
```

### Semantic data storing

You should execute an `InsertData` message of a `cognitarium` smart contract you instantiated to insert RDF triples. You have to provide as inputs the triples `data` base64 encoded and the `format`, among:

- `"turtle"` (default)
- `rdf_xml`
- `n_triples`
- `n_quads`

Let’s reference in the OKP4 protocol a service with a Turtle file example [03230ce7-d8cb-410e-919e-19c480c1dd75.ttl](https://github.com/okp4/ontology/blob/f5f3f641aa9ad30d0e86a741a375a3ee290e9893/example/rhizome/service/03230ce7-d8cb-410e-919e-19c480c1dd75.ttl):

```bash
okp4d tx wasm execute okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars \
--from okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \
--gas 10000000 \
--node https://api.testnet.okp4.network:443/rpc \
--chain-id okp4-nemeton-1 \
"{\"insert_data\":{\"format\": \"turtle\", \"data\": \"$(cat 03230ce7-d8cb-410e-919e-19c480c1dd75.ttl | base64 | tr -d '\n\r')\"}}"
```

You have to change the `cognitarium` smart contract address `okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars` and set your okp4 wallet address (instead of `okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5`) to make it work on your side.

Here is an insertion example with another format, [sample.nq](https://github.com/okp4/contracts/blob/c9eec716247f96c885135c526eb548846ccdfb1a/contracts/okp4-cognitarium/testdata/sample.nq) (NQuads) file:

```bash
okp4d tx wasm execute okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars \
--from okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \
--gas 10000000 \
--node https://api.testnet.okp4.network:443/rpc \
--chain-id okp4-nemeton-1 \
"{\"insert_data\":{\"format\": \"n_quads\", \"data\": \"$(cat sample.nq | base64 | tr -d '\n\r')\"}}"
```

You can use `okp4d query txs` and filter by `wasm.action=insert` event to get all data inserted in any cognitarium instances:

```bash
okp4d query txs \
--events 'wasm.action=insert' \
--chain-id okp4-nemeton-1 \
--node https://api.testnet.okp4.network:443/rpc --output json | jq \
'{total_count: .total_count, txs: [.txs[] | {task_id: 5, tx: .txhash, date: .timestamp, okp4_sender: .tx.body.messages[0].sender, task_data: { cognitarium_sc_addr: .tx.body.messages[0].contract, data: .tx.body.messages[0].msg.insert_data.data | @base64d  } }]}'
```

### Retrieve stored triples

A `select` query on a `cognitarium` instance enables you to fetch and filter the data. The `select.query` JSON should contain the following:

- `prefixes` array: to declare a `prefix` and its related `namespace`
- `limit`: the number of elements to return
- `where`: filters and variable declarations
- `select` array: all `variable` names you declared in `where` you want to get

`where` should be an array of elements specifying triple filterings. You have to specify `subject`, `predicate` and `object` as a `variable`, or, alternatively, a `prefixed` or `full` `named_node`.

`object` can also be a `simple` `literal`.

Let’s query the previously referenced service example, [03230ce7-d8cb-410e-919e-19c480c1dd75.ttl](https://github.com/okp4/ontology/blob/f5f3f641aa9ad30d0e86a741a375a3ee290e9893/example/rhizome/service/03230ce7-d8cb-410e-919e-19c480c1dd75.ttl).
Here is the JSON payload to get service ids with tag `stockage`, as the service `03230ce7-d8cb-410e-919e-19c480c1dd75`:

```json
{
  "select": {
    "query": {
      "prefixes": [
        {
          "prefix": "core",
          "namespace": "https://ontology.okp4.space/core/"
        }
      ],
      "select": [
        {
          "variable": "serviceId"
        }
      ],
      "where": [
        {
          "simple": {
            "triple_pattern": {
              "subject": {
                "variable": "serviceMetadataId"
              },
              "predicate": {
                "node": {
                  "named_node": {
                    "full": "https://ontology.okp4.space/core/describes"
                  }
                }
              },
              "object": {
                "variable": "serviceId"
              }
            }
          }
        },
        {
          "simple": {
            "triple_pattern": {
              "subject": {
                "variable": "serviceMetadataId"
              },
              "predicate": {
                "node": {
                  "named_node": {
                    "prefixed": "core:hasTag"
                  }
                }
              },
              "object": {
                "literal": {
                  "simple": "stockage"
                }
              }
            }
          }
        }
      ],
      "limit": 2
    }
  }
}
```

We are trying to match these two triples:  

```turtle
@prefix core: https://ontology.okp4.space/core/ .
@prefix service: <https://ontology.okp4.space/dataverse/service/> .

https://ontology.okp4.space/dataverse/service/metadata/be67f7df-ff02-47c8-b55f-865b387c68ca core:describes service:03230ce7-d8cb-410e-919e-19c480c1dd75 ;
core:hasTag "stockage" .
```

`https://ontology.okp4.space/dataverse/service/metadata/be67f7df-ff02-47c8-b55f-865b387c68ca` is the `serviceMetadataId` variable, `https://ontology.okp4.space/dataverse/service/03230ce7-d8cb-410e-919e-19c480c1dd75` is `serviceId`.

To query the `cognitarium` smart contract at address `okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars` with the JSON payload above, you can use the CLI with the command as follows:  

```bash
okp4d query wasm contract-state smart okp41wn625s4jcmvk0szpl85rj5azkfc6suyvf75q6vrddscjdphtve8sug4ars \
--chain-id okp4-nemeton-1 \
--node https://api.testnet.okp4.network:443/rpc \
--output json \
'{"select":{"query":{"prefixes":[{"prefix":"core","namespace":"https://ontology.okp4.space/core/"}],"select":[{"variable":"serviceId"}],"where":[{"simple":{"triple_pattern":{"subject":{"variable":"serviceMetadataId"},"predicate":{"node":{"named_node":{"full":"https://ontology.okp4.space/core/describes"}}},"object":{"variable":"serviceId"}}}},{"simple":{"triple_pattern":{"subject":{"variable":"serviceMetadataId"},"predicate":{"node":{"named_node":{"prefixed":"core:hasTag"}}},"object":{"literal":{"simple":"stockage"}}}}}],"limit":2}}}' \
| jq '.data.results.bindings'

: '
[
  {
    "serviceId": {
      "type": "uri",
      "value": {
        "full": "https://ontology.okp4.space/dataverse/service/03230ce7-d8cb-410e-919e-19c480c1dd75"
      }
    }
  }
]
'
```

## Recap’

- We need to store data within the OKP4 blockchain to reference resources and their relationships with sharing rules, and service executions, among other pieces of information. The structuration is defined with an ontology.
- The `cognitarium` smart contract enables the storage and query of semantic data, expressed with RDF triples (subject-predicate-object). It's a relevant solution for the needed ontology expressiveness.
- Various formats exist for RDF triples; Turtle, RDF/XML, NTriples/NQuads are those supported.

As you embark on your journey with OKP4, you're crafting the future of semantic web-enabled decentralized systems. And that is a frontier worth exploring!
The marriage between the blockchain with smart contract technology and ontology isn't just a fancy trend; it's a transformative union that paves the way for novel applications, greater efficiency, and unprecedented interoperability.
