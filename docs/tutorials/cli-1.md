---
sidebar_position: 3
---

# Interactions with the CLI

![OKP4 with Keplr](/img/content/tutorials/cli.webp)

This guide will walk you through connecting with the OKP4 network using a Command Line Interface (CLI). Picture the CLI as a control panel, allowing you to tap into the pulsing core of OKP4's advanced technology. Thanks to the CLI, you can query the chain, uncover deep insights, and execute transactions with a mere command line.

Let’s explore the core concepts of the OKP4 blockchain and list the most crucial commands. Have a comfortable seat, launch your favourite terminal shell, and prepare for an exhilarating adventure!

## Installing the OKP4 CLI

The `okp4d` is a text-based interface that allows users to interact with and query the OKP4 blockchain directly through commands typed in a terminal. The CLI serves as a tool for executing transactions and retrieving information from the blockchain.

You'll need the [`okp4d`](https://github.com/okp4/okp4d) binary on your machine before we can start playing around with the CLI.

### `okp4d` requirements

1. You can install the CLI on your Mac or Linux distribution (arm64 & amd64), but there’s no available Windows build yet.
2. Ensure that Go is installed on your machine. You can download it from [Go's official website](https://golang.org/dl/) if it isn't.

### `okp4d` one-liner installer script

```bash
curl https://i.jpillora.com/okp4/okp4d@v4.1.0! | bash
```

### Build the `okp4d` CLI from source

If the one-liner script fails, don't worry. Certain aspects, such as your computer's unique characteristics (particularly for Mac M1/M2 users), can occasionally cause issues.

1. Clone the OKP4 repository from GitHub:

```bash
git clone https://github.com/okp4/okp4d.git && cd okp4d 
```

2. Build and install:

```bash
git checkout v4.1.0
make build 
make install
```

3. Verify the installation:

```bash
okp4d version
```

## Get started with the OKP4 CLI

Let's start with some essential notions and commands to get you up and running!

### Get a wallet by creating a new key pair

A key pair is created to obtain a wallet in order to establish secure ownership and control over your cryptocurrency assets on the OKP4 blockchain. The key pair consists of two cryptographic keys: public and private keys.

When creating a wallet, you’re typically provided with a mnemonic consisting of 12, 24, or sometimes more words. This mnemonic acts as a human-readable representation of the underlying cryptographic information. It is easier to remember and write down than the complex numbers and characters representing the private key.

The mnemonic serves as a backup mechanism for the wallet. You can regenerate the key pair by inputting the mnemonic into any compatible wallet software to recover access to your funds.

```bash
# Import from a mnemonic. You can replace "mywallet" with another wallet name 
okp4d keys add --recover mywallet

# Or create a new one. You can replace "mywallet" with another wallet name  
okp4d keys add mywallet 
```

:::danger

If you create a new key pair, the terminal displays a list of 24 words. Store this mnemonic phrase in a safe place.

:::

### Get your wallet address

The public key is used to generate the wallet address. It functions similarly to a bank account number, allowing others to send funds to that address.

```bash
# Replace "mywallet" with your wallet name 
okp4d keys show mywallet 

: '
- address: okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5
  name: mywallet
  pubkey: '{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A5wBjmKRVyE5lwqRmCF0v7MNTqR1/vm8WkkoPLQR03JN"}'
  type: local
'
```

Here the terminal returns `okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5` as the OKP4 address.

### Check your wallet balance

A wallet balance refers to the amount of cryptocurrency or digital assets held in a specific wallet address. It represents the total value of funds that are available for spending or transferring from that particular wallet.

The following command indicates that `okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5` OKP4 wallet holds 1 KNOW (1 KNOW = 1,000,000 uKNOW).

```bash
okp4d query bank balances okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \
--node https://api.testnet.okp4.network:443/rpc

: '
balances:
- amount: "1000000"
  denom: uknow
pagination:
  next_key: null
  total: "0"
'
```

:::tip

Provide your OKP4 address to the [faucet](https://faucet.okp4.network/) to receive 1 $KNOW (test tokens).

:::

### Get the total supply of $KNOW

Wondering about the number of coins in circulation? Watch out for the inflation rate with the `okp4d query bank total` command.

```bash
okp4d query bank total \
--node https://api.testnet.okp4.network:443/rpc
```

### Send some $KNOW to another wallet

Here is the command to send 0.5 KNOW (`500000 uknow`) from the wallet `mywallet` you control to the wallet with the OKP4 address `okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg`:

```bash
okp4d tx bank send mywallet okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg \
500000uknow \
--chain-id okp4-nemeton-1 --node https://api.testnet.okp4.network:443/rpc
```

You should type `y` to confirm the transaction. Then the terminal returns a `txhash`, a unique identifier that helps track and verify the transaction on the OKP4 blockchain.

### Get transaction info from a `txhash`

A transaction hash, also known as a transaction ID or TXID, is a string of alphanumeric characters generated by applying a hash function to the transaction data. The transaction hash serves as a digital fingerprint that uniquely identifies and tracks a specific transaction within the blockchain. It is commonly used to verify a transaction's status, details, and authenticity on the blockchain.

Let’s analyze a transaction executed for the previous part of this tutorial, `txhash = 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1`:

```bash
okp4d query tx 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1 \
--node https://api.testnet.okp4.network:443/rpc

: '
...
body:
    extension_options: []
    memo: ""
    messages:
    - "@type": /cosmos.bank.v1beta1.MsgSend
      amount:
      - amount: "500000"
        denom: uknow
      from_address: okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5
      to_address: okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg
...
'
```

As a lot of data is returned, you can ask for a JSON output and use [jq](https://jqlang.github.io/jq/) to display only what you need:

```bash
okp4d query tx 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1 \
--node https://api.testnet.okp4.network:443/rpc \
--output json | jq '.tx.body.messages[0]'

: '
...
{
  "@type": "/cosmos.bank.v1beta1.MsgSend",
  "from_address": "okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5",
  "to_address": "okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg",
  "amount": [
    {
      "denom": "uknow",
      "amount": "500000"
    }
  ]
}
'
```

## Blockchain mastery with advanced commands

Are you now comfortable with the CLI? Let's go further so that the OKP4 blockchain no longer holds any secrets for you!

### Get all transactions from a filter function

You can search for specific transactions and filter according to transaction event values with the [`okp4d query txs` command](https://docs.okp4.network/commands/okp4d_query_txs).

For example, if we analyze the log events for the transaction `txhash = 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1`, we notice that we can have the `recipient`, `sender` and `amount` from the event type `transfer`:

```bash
okp4d query tx 4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1 \
--node https://api.testnet.okp4.network:443/rpc \
--output json | jq '.logs[0].events[] | select(.type == "transfer").attributes'

: '
[
  {
    "key": "recipient",
    "value": "okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg"
  },
  {
    "key": "sender",
    "value": "okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"
  },
  {
    "key": "amount",
    "value": "500000uknow"
  }
]
'
```

Thus we can get all transfer transactions where the recipient is `okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg` and the amount is `500000uknow`:

```bash
okp4d query txs \
--events 'transfer.recipient=okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg&transfer.amount=500000uknow' \
--node https://api.testnet.okp4.network:443/rpc \
--page 1 --limit 1000 \
--output json | jq '{total_count: .total_count, txs: [.txs[] | {txhash: .txhash, date: .timestamp, txdata: .logs[0].events[] | select(.type == "transfer").attributes}]}'

: '
{
  "total_count": "1",
  "txs": [
    {
      "txhash": "4DB4644E6146DE0E7239C5273F79C931193F542D62979ACB907C9368A315DCE1",
      "date": "2023-06-18T13:34:23Z",
      "txdata": [
        {
          "key": "recipient",
          "value": "okp41r0pf2d78w8w29sm9a6qm8x6yqshezm0k6vwcrg"
        },
        {
          "key": "sender",
          "value": "okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5"
        },
        {
          "key": "amount",
          "value": "500000uknow"
        }
      ]
    }
  ]
}
'
```

*Note the `--page 1 --limit 1000` parameters to set the results pagination.*  

### Smart contracts operations

A smart contract is a self-executing contract with the terms of the agreement directly written into code. It is stored and executed publicly on the blockchain, enabling decentralized and automated transactions, agreements, and functionalities. OKP4 uses the `wasm` module to operate smart contracts.  

#### Smart contract instantiation

Smart contract instantiation is creating and deploying a smart contract instance on the OKP4 (Cosmos-based) appchain. You must provide a `CODE_ID` to specify which smart contract code you want to instantiate.

|CODE_ID|Smart contract|Description|
|-|-|-|
|4|[`objectarium`](https://github.com/okp4/contracts/tree/main/contracts/okp4-objectarium)|Unstructured object storage|
|5|[`law-stone`](https://github.com/okp4/contracts/tree/main/contracts/okp4-law-stone)|Source of rules|
|6|[`cognitarium`](https://github.com/okp4/contracts/tree/main/contracts/okp4-cognitarium)|Structured object storage, ontology|

Let’s create a new `objectarium` instance. The [msg.rs](https://github.com/okp4/contracts/blob/main/contracts/okp4-objectarium/src/msg.rs) source file indicates we only need to provide a bucket name.

```bash
okp4d tx wasm instantiate 4 \
--label "cli-tuto" \
--from okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \
--admin okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5 \
--gas 1000000 \
--chain-id okp4-nemeton-1 --node https://api.testnet.okp4.network:443/rpc \
'{"bucket":"cli-tutorial-bucket"}'
```

:::caution
Replace `okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5` with the OKP4 wallet you control!
:::

You get a new `txhash`; let’s get the created smart contract address:

```bash
okp4d query tx CB200354719B58A990A077337686CFAF64E95893037AF599DABC2E3B72297FD9 \
--node https://api.testnet.okp4.network:443/rpc \
--output json | jq '.logs[0].events[] | select(.type == "instantiate").attributes[] | select(.key == "_contract_address").value'
    
# "okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85"
```

#### Smart contract execution

Once a smart contract is instantiated, it can be executed or triggered to perform specific actions or transactions. This can involve invoking functions within the contract's code, which may update data, transfer assets, or trigger other operations on the app chain.

Let’s add a text object to the `objectarium` instance we just created (address = `okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85`). The [msg.rs](https://github.com/okp4/contracts/blob/main/contracts/okp4-objectarium/src/msg.rs) source file indicates we can use the `store_object` method with `data` and `pin` arguments.

```bash
echo "Hello OKP4 Builders !" > text-ex.txt && \
okp4d tx wasm execute okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85 \
--from mywallet \
--gas 1000000 \
--chain-id okp4-nemeton-1 --node https://api.testnet.okp4.network:443/rpc \
"{\"store_object\":{\"data\": \"$(cat text-ex.txt | base64)\", \"pin\":true}}"
```

:::caution
Replace `mywallet` with the name of the OKP4 wallet you control!
:::

You get a new `txhash`; let’s get the created object `id`:

```bash
okp4d query tx 75A2158C63B2860CE85FECD996DE4A7C0590CA55D8231D86D07E08CD570E3E4A \
--node https://api.testnet.okp4.network:443/rpc \
--output json | jq '.logs[0].events[].attributes[] | select(.key == "id").value'
    
# "1fce568de3168c21f4b6363449c9d6a59071286a89dd07dea916874037418d6f"
```

#### Smart contract query

A query gives the ability to retrieve data or information from a smart contract without modifying the state of the blockchain. Queries allow users or applications to fetch specific data or execute read-only functions from the smart contract to gather information.

Let’s check the text is correctly stored on-chain, with an `object_data` of the `objectarium` instance we just created (address = `okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85`, id = `1fce568de3168c21f4b6363449c9d6a59071286a89dd07dea916874037418d6f`).

```bash
okp4d query wasm contract-state smart okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85 \
--output json \
--chain-id okp4-nemeton-1 \
--node https://api.testnet.okp4.network:443/rpc \
"{\"object_data\": {\"id\":\"1fce568de3168c21f4b6363449c9d6a59071286a89dd07dea916874037418d6f\"}}" \
| jq '.data' | tr -d '"' | base64 -d
    
# Hello OKP4 Builders !
```

#### Analyze smart contracts activities

* Wondering how many `law-stone` are instantiated, and for each instance what are its contract address, the OKP4 address of the creator, and the rules program?

```bash
okp4d query txs \
--events 'instantiate.code_id=5' \
--chain-id okp4-nemeton-1 \
--node https://api.testnet.okp4.network:443/rpc --output json | jq \
'{total_count: .total_count, txs: [.txs[] | {date: .timestamp, sc_addr: .logs[0].events[] | select (.type == "instantiate").attributes[0].value  , txdata: .tx.body.messages[0] | { sender: .sender, program: .msg.program }}]}'
```

* Did the wallet `okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5` execute transactions to the smart contract `okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85`?  

```bash
okp4d query txs \
--events 'message.sender=okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5&execute._contract_address=okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85' \
--chain-id okp4-nemeton-1 \
--node https://api.testnet.okp4.network:443/rpc --output json | jq \
'{total_count: .total_count, txs: [.txs[] | {date: .timestamp, wasm_action: [ .logs[0].events[] | select(.type == "wasm").attributes[] ] }]}'
    
: '
    {
      "total_count": "1",
      "txs": [
        {
          "date": "2023-06-18T15:51:09Z",
          "wasm_action": [
            {
              "key": "_contract_address",
              "value": "okp41tca04wdta7pyzzyetgqyl2rn9v5vgxq0cwvdduel8sgw4g64at7q8jja85"
            },
            {
              "key": "action",
              "value": "store_object"
            },
            {
              "key": "id",
              "value": "1fce568de3168c21f4b6363449c9d6a59071286a89dd07dea916874037418d6f"
            }
          ]
        }
      ]
    }
'
```

## Recap’

* The CLI allows you to communicate with the OKP4 blockchain
* To get started, you should install the `okp4d` CLI and create (or import) a wallet
* Both native and smart contracts transactions are supported

We've just scratched the surface of what's possible with the OKP4 CLI! For a more detailed look at available commands, please check our full documentation at [OKP4 Documentation](https://docs.okp4.network/commands/okp4d).

Remember, the blockchain space moves quickly, and OKP4 is no exception. Stay in touch with our updates and feel free to join our active developer community. We're thrilled to have you onboard!
