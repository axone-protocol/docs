---
sidebar_position: 4
---

# Explorer

![OKP4 with Keplr](/img/content/tutorials/explorer-0.webp)

The ability to interact seamlessly with a blockchain is a crucial skill. Whether tracking transactions or executing smart contract messages, having the right tools at your disposal can make all the difference.

That's where the [OKP4 Explorer](https://explore.okp4.network/OKP4%20Drunemeton%20testnet) comes in. Are you ready to unpack its capabilities? Let's embark on a journey of exploration and discovery into the OKP4 blockchain **🚀**.

## What is the OKP4 Explorer?

An OKP4 blockchain explorer, such as [the OKP4 Explorer](https://explore.okp4.network/OKP4%20Drunemeton%20testnet), bridges users and the OKP4 network. It's essentially an intuitive interface that allows users to interact with the blockchain.

Think of an explorer as your personal guide to the OKP4 blockchain. It's more than just a viewing platform, you can:

- Send transactions.
- Deploy and interact with CosmWasm smart contracts.
- Participate in governance.

Watch out for this [list of OKP4 explorers](https://github.com/okp4/awesome#-block-explorers). Anyone can build his own OKP4 blockchain explorer. This means you can tailor an explorer to your specific needs: from your blockchain node, querying it for information and presenting the result in a user-friendly format.

But while building your own explorer is possible, it requires significant time, resources, and technical expertise. Thus you can use [the explorer from the OKP4 team](https://github.com/okp4/ping-explorer), a robust and user-friendly tool powered by [ping.pub](https://ping.pub/).

## Transaction analysis with the OKP4 Explorer

A transaction on the blockchain is a record of some blockchain state change, like the transfer of tokens from one account to another or the execution of a smart contract.

The [OKP4 Explorer](https://explore.okp4.network/OKP4%20Drunemeton%20testnet) allows you to view and analyze these transactions in detail.
Several transactions are validated in a block. You can check the last validated blocks via the ["Blocks" menu](https://explore.okp4.network/OKP4%20Drunemeton%20testnet/block) . Click on the "Transactions tab" to get the transactions in recent blocks.

Before moving on to transactions with smart contracts, let's begin with a basic operation: a transfer of $KNOW tokens.

:::info

You need to [set up a wallet with Keplr and own some $KNOW tokens](https://docs.okp4.network/tutorials/keplr-1).

:::

1. Ensure to use the [drunemeton testnet](https://explore.okp4.network/OKP4%20Drunemeton%20testnet) and not the [nemeton testnet](https://explore.okp4.network/OKP4%20devnet) or the devnet.

- Link your OKP4 account to the explorer.
- Click on the wallet button (upper on the right), "Connect wallet", "Keplr", "Connect" and then on "Approve".

You'll see your OKP4 wallet address if you click again on the wallet button. Click on it to copy the address.

2. Now,you are ready to send $KNOW via the explorer interface :

- Click on the "Send" button from the Dashboard.
- Send a few $KNOW tokens to another OKP4 wallet, `okp41wuxc2mzy0wp27cdcfnde3vz07eurpd7grfmq6n` as the recipient for example.
- Click on "Send" and "Approve" to confirm the transfer.

<center><img src="/img/content/tutorials/explorermaj-1.webp"></img></center>

Once completed, click on "View transaction".

3. Here are what the OKP4 Explorer shows us for [the `Send` transaction details](https://explore.okp4.network/OKP4%20Drunemeton%20testnet/tx/C131C3AFC90C92BCAC5044438D68984B842A481869B40CD831CC40AD1E983F2A).

- **Transaction Hash:** `C131C3AFC90C92BCAC5044438D68984B842A481869B40CD831CC40AD1E983F2A` as a unique identifier, like a receipt that proves a transaction has occurred.
- **Height**: `363073` is the block number in which the transaction has been validated.
- **Gas:** Computational effort limit to execute the transaction. Here the spent gas is `71918`. The transaction would have failed if it needed more than `200000`.
- **Fees:** `0.005 KNOW` paid to compensate for the computational effort. The more complex a transaction, the higher the gas and, consequently, the fee. Fees also help prevent spam transactions on the network.
- **@type:** Each message type corresponds to a specific action on the blockchain. For example, a message with `@type` set to `/cosmos.bank.v1beta1.MsgSend` represents a token transfer operation, while a message with `@type` set to `/cosmos.staking.v1beta1.MsgDelegate` represents a delegation operation in the staking module.
- **From and To Addresses:** Unique identifiers for accounts on the blockchain. Tokens are transferred from the sender's address `okp41yxrseqc9weu6cm0gm85yu64x9xdf3k5z8nwknf` to the recipient's address `okp41wuxc2mzy0wp27cdcfnde3vz07eurpd7grfmq6n`.
- **Amount**: `0.05 KNOW` sent
- **JSON:** Two main components (`tx` and `tx_response`) which provide insights into the transaction, its execution status and related metadata.

You can also retrieve a transaction you executed by clicking the "Search" button upper on the right, providing your OKP4 address, and clicking "Confirm". Click on the hash in the "Transactions" section to get the details.

<center><img src="/img/content/tutorials/explorer-2.webp"></img></center>

If you have the transaction hash, you can also directly get transaction details by providing the hash in the Search modal.

## Recap'

- You can check any blockchain transaction details with an explorer.
- Transfer, delegation and governance operations are also possible with this type of user interface.

Explorers are powerful tools that allow you to interact with the OKP4 blockchain in a user-friendly way. So why wait? Start exploring the OKP4 network today!
