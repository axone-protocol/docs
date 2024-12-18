---
sidebar_position: 3
---

# Explorer

The ability to interact seamlessly with a blockchain is a crucial skill. Whether tracking transactions or executing smart contract messages, having the right tools at your disposal can make all the difference.

That's where the [Axone Explorer](https://explore.axone.xyz/Axone%20testnet) comes in. Are you ready to unpack its capabilities? Let's embark on a journey of exploration and discovery into the Axone blockchain **🚀**.

## What is the Axone Explorer?

An Axone blockchain explorer, such as [the Axone Explorer](https://explore.axone.xyz/Axone%20testnet), bridges users and the Axone network. It's essentially an intuitive interface that allows users to interact with the blockchain.

Think of an explorer as your personal guide to the Axone blockchain. It's more than just a viewing platform, you can:

- Send transactions.
- Deploy and interact with CosmWasm smart contracts.
- Participate in governance.

Anyone can build their own Axone blockchain explorer, allowing customization to meet specific needs. By querying your blockchain node for information and presenting it in a user-friendly format, you can tailor the explorer to your preferences.

However, building an explorer from scratch demands substantial time, resources, and technical expertise. To save effort, you can use the [Ping Pub Explorer](https://github.com/ping-pub/explorer), a lightweight tool designed for Cosmos-based blockchains by [Ping Pub](https://ping.pub/).

## Transaction analysis with the Axone Explorer

A transaction on the blockchain is a record of some blockchain state change, like the transfer of tokens from one account to another or the execution of a smart contract.

The [Axone Explorer](https://explore.axone.xyz/Axone%20testnet) lets you view and analyze transactions in detail. Each block contains multiple validated transactions. You can explore the most recently validated blocks through the ["Blocks" menu](https://explore.axone.xyz/Axone%20testnet/block). Simply click on a block to see all the transactions it includes.

Before moving on to transactions with smart contracts, let's begin with a basic operation: a transfer of $AXONE tokens.

:::info

You need to [set up a wallet with Keplr and own some $AXONE tokens](../tutorials/keplr-1).

:::

1. Ensure to use the [`axone-dentrite-1`](https://explore.axone.xyz/Axone%20testnet).

- Link your Axone account to the explorer.
- Click on the wallet button (upper on the right), "Connect wallet", "Keplr", "Connect" and then on "Approve".

You'll see your Axone wallet address if you click again on the wallet button. Click on it to copy the address.

2. Now,you are ready to send $AXONE via the explorer interface :

- Click on the "Send" button from the Dashboard.
- Send a few $AXONE tokens to another Axone wallet, `axone1jkullqh0dzn6ye6whfytd5dm0l04ksm3lzcq78` as the recipient for example.
- Click on "Send" and "Approve" to confirm the transfer.

<div style={{ display: "flex", justifyContent: "center" }}><img src="/img/content/tutorials/explorermaj-1.webp"></img></div>

Once completed, click on "View transaction".

3. Here are what the Axone Explorer shows us for [the `Send` transaction details](https://explore.axone.xyz/Axone%20testnet/tx/B8B8A8002C1CAB0DF752705AEC92090FD6B2CE8ACD26E05A1E95202CB3B1E75B).

- **Transaction Hash:** `B8B8A8002C1CAB0DF752705AEC92090FD6B2CE8ACD26E05A1E95202CB3B1E75B` as a unique identifier, like a receipt that proves a transaction has occurred.
- **Height**: `1543311` is the block number in which the transaction has been validated.
- **Gas:** Computational effort limit to execute the transaction. Here the spent gas is `84794`. The transaction would have failed if it needed more than `104787`.
- **Fees:** `0.00262 AXONE` paid to compensate for the computational effort. The more complex a transaction, the higher the gas and, consequently, the fee. Fees also help prevent spam transactions on the network.
- **@type:** Each message type corresponds to a specific action on the blockchain. For example, a message with `@type` set to `/cosmos.bank.v1beta1.MsgSend` represents a token transfer operation, while a message with `@type` set to `/cosmos.staking.v1beta1.MsgDelegate` represents a delegation operation in the staking module.
- **From and To Addresses:** Unique identifiers for accounts on the blockchain. Tokens are transferred from the sender's address `axone17sc02mcgjzdv5l4jwnzffxw7g60y5ta4zwy04g` to the recipient's address `axone1jkullqh0dzn6ye6whfytd5dm0l04ksm3lzcq78`.
- **Amount**: `0.5 AXONE` sent
- **JSON:** Two main components (`tx` and `tx_response`) which provide insights into the transaction, its execution status and related metadata.

You can also retrieve a transaction you executed by clicking the "Search" button upper on the right, providing your Axone address, and clicking "Confirm". Click on the hash in the "Transactions" section to get the details.

If you have the transaction hash, you can also directly get transaction details by providing the hash in the Search modal.

## Recap'

- You can check any blockchain transaction details with an explorer.
- Transfer, delegation and governance operations are also possible with this type of user interface.

Explorers are powerful tools that allow you to interact with the Axone blockchain in a user-friendly way. So why wait? Start exploring the Axone network today!
