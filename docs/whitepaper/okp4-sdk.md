---
sidebar_position: 7
---

# OKP4 SDK

## OKP4 Design System

The [OKP4 Design System](https://github.com/okp4/ui) is an open-source set of components and resources created to facilitate the design and development of web interfaces in the OKP4 Ecosystem for everyone. This design system serves as a reference for teams working around the OKP4 Ecosystem, enabling them to design and develop web interfaces with speed, consistency and quality.

![OKP4 Design System](/img/content/whitepaper/okp4-design-system-overview-1.png)

![OKP4 Design System](/img/content/whitepaper/okp4-design-system-overview-2.png)

The OKP4 Design System follows the [Atomic Design methodology](https://atomicdesign.bradfrost.com/), a methodology composed of five distinct stages working together to create interface design systems in a more deliberate and hierarchical manner.

<div className="text--center">
  <p>
    <img src="/img/content/whitepaper/atomic-design.png" alt="Atomic Design" width="600" />
  </p>
</div>

- **Atoms**: are the smallest possible components. The OKP4 Design System offers the basic building blocks for building interfaces such as: [typography](https://github.com/okp4/ui/issues/98), [themes](https://github.com/okp4/ui/issues/96), language, [buttons](https://github.com/okp4/ui/issues/119), [toaster](https://github.com/okp4/ui/issues/179), [cards](https://github.com/okp4/ui/issues/120), etc.
- **Molecules**: are the composition of one or more components of atoms.
- **Organisms**: are the combination of molecules that work together or, if necessary, with atoms, to form more elaborate interfaces. The OKP4 Design System offers advanced organisms for the OKP4 Ecosystem like a Token Faucet, a Web Wallet, a Dataverse Explorer...


## Data Space governance templates

As the Dataverse will contain more and more Data Spaces, governance templates will be more and more available to create a Data Space quickly. 

A user will able to use a template and create his own library of templates. 

## OKP4 Discord Bot

The OKP4 Discord Bot is a general-purpose open-source bot that facilitates the integration of any blockchain of the Cosmos Ecosystem into a [Discord](https://discord.com/) server.

The main functionality offered by the bot is to allow the request of tokens for a [Cosmos](https://cosmos.network/) testnet account address for free using a discord command on a channel.

For instance:

```text
■ John — Today 16:14
$request okp41nc75uehak9a5f5slexfpxrxy5vh8e8phzmrq6e

■ okp4-discord-bot — Today 16:15
@John, ✅ $tx_info 5737BD7D25F0E4C6900412B06945722C664F1AD5A58BD8CFBDEB499B8B0A0602
```

Other features are also supported including:

- `$node_status`: Displays the current status of the node (configured)
- `$balance`: Show address balance
- `$tx_info`: Show transaction information for a specific transaction ID

```text
■ John — Today 16:14
$tx_info 5737BD7D25F0E4C6900412B06945722C664F1AD5A58BD8CFBDEB499B8B0A0602

■ okp4-discord-bot — Today 16:15
--------  ----------------------------------------------------------------
txhash	  5737BD7D25F0E4C6900412B06945722C664F1AD5A58BD8CFBDEB499B8B0A0602
status	  Success
height	  1072882
timestamp 2022-06-13 16:12
gas	      57530 / 200000
fee	      0 KNOW
memo	  Sent by økp4 faucet
--------  ----------------------------------------------------------------
@Type     /cosmos.bank.v1beta1.MsgSend
From      okp41rhd8744u4vqvcjuvyfm8fea4k9mefe3k57qz27
To        okp41nc75uehak9a5f5slexfpxrxy5vh8e8phzmrq6e
Amount    100 UKNOW
```
