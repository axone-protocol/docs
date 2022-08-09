---
sidebar_position: 5
---

# Security

:::info COMMING SOON

✍️ _Under active writing..._

:::

## Keys

## Backup

## Monitoring

## Sentry node architecture

While deploying a node, the validator should never go down.
To ensure that, we recommend you to use a **sentry node architecture**.

It can be described via the following schematic:

![architecture schematic](/img/content/nodes/sna.png)

This architecture places the **validator** behind 3 **sentries**.
If a sentry falls, the validator will still be up and the 2 others will still be reachable, the node will thus continue to operate normally.

The validator must have a persistent storage, it will hold the blockchain.

The API will be load balanced via the sentries and each of them will expose a peer-to-peer port.
It will mitigate the load on the validator who can focus on processing blocks.

With this architecture, the persistent peers and external addresses are slightly different:

- Each sentry and the validator must have their persistent peers set to each other's
- Each sentry must have their external addresses set to their IP with their P2P port (must be exposed)
- Each sentry but **not the validator** must have a node already on the network registered as persistent peer.
