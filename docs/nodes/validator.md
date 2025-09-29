---
sidebar_position: 1
---

# Create a Validator

This guide walks you through the basic steps to set up a validator on the Axone testnet. It focuses on the setup process and does not discuss validator architecture or security measures.

## Prerequisites

Before following these steps, ensure you have a fully synchronized full node running. If you haven’t set one up yet, refer to the [Node Installation Guide](installation) instructions.

## 1. Create or restore a key pair

The first step is to create a new key pair for your validator. Replace `WALLET_NAME` with a key name of your choice and run the following:

```bash
axoned keys add WALLET_NAME
```

:::warning
After generating a new key, you’ll receive its information along with a seed phrase. This phrase is critical: store it in a safe place, as it’s the sole backup for restoring your keys. Losing it means losing access to your $AXONE tokens forever.
:::

Alternatively, you can restore an existing wallet with a mnemonic seed phrase. Replace `WALLET_NAME` with a key name of your choice and run the following:

```bash
axoned keys add WALLET_NAME --recover
```

Then get your public address:

```bash
axoned keys show WALLET_NAME --address
```

## 2. Get testnet $AXONE

The validator registration process involves sending a create-validator transaction, which requires gas fees. Before proceeding, make sure to send funds to the address you generated earlier.

You can get testnet $AXONE tokens from faucet:

- [Axone testnet faucet](https://faucet.axone.xyz)
  
To verify your balance, use this command:

```bash
axoned query bank balances WALLET_NAME
```

## 3. Create a validator

Once your node is fully synchronized and you've acquired the necessary $AXONE tokens, you can proceed with validator registration.

To establish a validator with an initial self-delegation, prepare a `validator.json` configuration file and execute the create-validator transaction.

1. Obtain your validator public key by running the following command:

   ```bash
   axoned comet show-validator
   ```

   The command output will resemble the following example (with a different validator key):

   ```bash
   {"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A/iJGMhwsd5J4y0weGxmSqT2q1G9g0nFo6GgCHBopwc0"}
   ```

2. Create a file named `validator.json` with the following contents:

   ```json
   {
     "pubkey": {
       "@type": "/cosmos.crypto.ed25519.PubKey",
       "key": "A/iJGMhwsd5J4y0weGxmSqT2q1G9g0nFo6GgCHBopwc0"
     },
     "amount": "1000000uaxone",
     "moniker": "your validator human-readable name (moniker)",
     "identity": "your validator identity signature",
     "website": "(optional) your validator website",
     "security": "(optional) your validator security contact",
     "details": "(optional) your validator details",
     "commission-rate": "0.1",
     "commission-max-rate": "0.2",
     "commission-max-change-rate": "0.01",
     "min-self-delegation": "1"
   }
   ```

   Max-change-rate, set the initial self-delegation `amount`, and must replace the key field with your own validator `key` from earlier.

  :::warning
  When setting commission parameters, the `commission-max-change-rate` is measured **in percentage points** of the `commission-rate`.  
  For example: changing from `1%` to `2%` represents a `100%` relative increase,  
  but the `commission-max-change-rate` value would be `0.01` (1 percentage point).
  :::


4. You're now ready to submit the transaction and create your validator
   ```bash
   axoned tx staking create-validator validator.json \
     --from=WALLET_NAME \
     --chain-id=axone-dentrite-1 \
     --fees=900000uaxone \
     --gas auto \
     --gas-adjustment 1.6
   ```
   :::tip
   This is just a sample transaction. To explore all available parameters and customization flags for your validator, run: `axoned tx staking create-validator --help`
   :::

## 4. Make sure to create backups of all important files before proceeding

To ensure validator recovery in case of failure or data loss, you must create encrypted backups of these critical files:

- `priv_validator_key.json`
- `node_key.json`

## 5. Check your validator

Check if your validator is in the active set by running this command:

```bash
axoned query consensus comet validator-set | grep "$(axoned comet show-address)"
```

An empty output indicates your validator is not currently in the active set.
