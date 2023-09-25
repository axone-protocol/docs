---
sidebar_position: 7
---

# Build a Web App

![Build a web interface with the OKP4 network](/img/content/tutorials/webapp-0.webp)

This tutorial guides you on building a web application that interacts seamlessly with the OKP4 protocol, a Cosmos-based blockchain. Whether you're a seasoned developer or just starting out, this tutorial will walk you through every step of the process using the [Vite](https://vitejs.dev/) framework and [graz](https://graz.sh/) hooks. By the end, you'll have the pieces of code you need to develop a front end ready to harness the power of the OKP4 blockchain **🚀**.

:::note

This is a step-by-step tutorial, but you can also directly check out [the Web UI boilerplates repository](https://github.com/okp4/web-ui-boilerplates).

:::

**Prerequisites:**

- Basic understanding of blockchain and a [browser wallet set up with some $KNOW tokens](https://docs.okp4.network/tutorials/keplr-1)
- Familiarity with JavaScript and modern web development, [Node.js](https://nodejs.org/) installed on your machine. This guide uses [Node.JS v18.18 (LTS)](https://nodejs.org/fr/blog/release/v18.18.0). You'll see commands with `npm`, but you’re encouraged to use `yarn` or `pnpm` as well.

## Importance of user interfaces interacting with the OKP4 protocol

The OKP4 protocol is a blockchain built on the Cosmos SDK that enables providers to share resources like web services or datasets with anyone without the need to trust a party. A provider describes resources ([RDF triples](https://docs.okp4.network/tutorials/ontology-1)) and rules ([Prolog program to define access conditions, revenue sharing, and more](https://docs.okp4.network/tutorials/prolog-1)), and consumers send requests to the blockchain which guarantees the respect of sharing conditions.

In essence, user interfaces are the key to democratizing the power of the OKP4 blockchain, making it usable and beneficial for everyone. For most users, [interacting with the protocol via terminal commands](https://docs.okp4.network/tutorials/cli-1) or delving into the intricacies of defining rules with the Prolog language remains a daunting, if not insurmountable, challenge. Similarly, the manipulation and understanding of RDF triples for semantic data can be complex without the right tools.

This is where the significance of user-friendly interfaces comes into play. A well-designed user interface abstracts the complexities of the underlying protocol, offering a more intuitive and ergonomic experience. It bridges the gap between advanced blockchain technology and everyday users, ensuring that the benefits of the OKP4 protocol are accessible to a broader audience. Without these interfaces, the potential of the OKP4 protocol would remain largely untapped, confined to the realm of tech-savvy individuals.

## Setting up the development environment

### Vite project

Let’s initiate a project with the [Vite framework](https://vitejs.dev/), which offers a lightning-fast cold server start and blazingly fast hot updates:

```bash
npm create vite@4.4.1 # you're free to use the latest version, but to ensure compatibility this guide provides a specific version
```

Choose the **React** framework and the **TypeScript + SWC** variant.

Once you've initialized your project with Vite, the next step is to install the necessary dependencies :

```bash
npm i
```

With the dependencies in place, it's time to fire up our development server. This will allow you to see real-time changes. Start the development server with:

```bash
npm run dev
```

Now, with the server running, you can navigate to the provided local URL in your browser and witness the live development environment. The updates will reflect instantly as you change the code, giving you a dynamic and efficient development experience.

### Node.JS polyfills

As we’ll deal with libraries and dependencies that were originally designed for a Node.js environment, browsers don't natively support these modules. To bridge this gap and ensure that the Vite project runs smoothly in the browser, providing "polyfills" for these Node.js modules is necessary.

Thus, install **`node-stdlib-browser`** and the **`vite-plugin-node-stdlib-browser`** plugin:

```bash
# you're free to use the latest versions, but to ensure compatibility this guide provides specific versions
npm i -D node-stdlib-browser@1.2.0 vite-plugin-node-stdlib-browser@0.2.1
```

Then, modify the Vite config file (`vite.config.ts`):  

```ts
import { defineConfig } from "vite";
import nodePolyfills from "vite-plugin-node-stdlib-browser";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [nodePolyfills(), react()],
});
```

### Cosmos SDK utilities and type definitions

Now, install some packages to equip the project with a suite of tools and libraries essential for interacting with the blockchain, handling encoding/decoding, ensuring transactional integrity, and working with specific data structures defined by the OKP4 protocol.

```bash
# you're free to use the latest versions, but to ensure compatibility this guide provides specific versions
npm i graz@0.0.50 @cosmjs/encoding@0.31.1 @cosmjs/proto-signing@0.31.1 cosmjs-types@0.8.0 @okp4/cognitarium-schema@2.1.0 @okp4/law-stone-schema@2.1.0
```

- **graz**: a collection of React hooks containing everything you need to start working with the [Cosmos ecosystem](https://cosmos.network/)
- **@cosmjs/encoding**: to transform data into a format that can be easily transported or stored.
- **@cosmjs/proto-signing**: to ensure the data's authenticity and integrity
- **cosmjs-types**: TypeScript type definitions related to Protocol Buffers used by Cosmos SDK
- **@okp4/cognitarium-schema** and **@okp4/law-stone-schema**: schema definitions related to the OKP4 protocol. Schemas define the structure of transaction data, ensuring consistency and validity

## Connect the web app to the OKP4 testnet

Integrating a provider within the React UI is essential to establish the connection with a browser wallet like Keplr. Here is how to wrap the app with **`<GrazProvider />` (**`main.tsx` file)

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GrazProvider } from "graz";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GrazProvider>
            <App />
        </GrazProvider>
    </React.StrictMode>
);
```

Then, configure `graz` in the `App.tsx` file providing the OKP4 testnet information, and use the `useActiveChain` hook to check the connection to `okp4-nemeton-1`:

```tsx
import "./App.css";
import { configureGraz, useActiveChain } from "graz";

configureGraz({
    defaultChain: {
        chainId: "okp4-nemeton-1",
        currencies: [
            {
                coinDenom: "know",
                coinMinimalDenom: "uknow",
                coinDecimals: 6,
                coinGeckoId: "OKP4 nemeton",
                coinImageUrl:
                    "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png",
            },
        ],
        rpc: "https://api.testnet.okp4.network:443/rpc",
        rest: "https://api.testnet.okp4.network:443/",
    },
});

function App() {
    const activeChain = useActiveChain();

    return (
        <div>
            <span>Connected to {activeChain?.chainId}</span>
        </div>
    );
}

export default App;
```

For clarity, it’s better to provide full information for a configuration with the OKP4 testnet in a `constants.ts` file:

```ts
export const OKP4TestnetChain = {
  chainId: "okp4-nemeton-1",
  currencies: [
    {
      coinDenom: "know",
      coinMinimalDenom: "uknow",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png",
    },
  ],
  path: "okp4testnet",
  rest: "https://api.testnet.okp4.network:443/",
  rpc: "https://api.testnet.okp4.network/rpc",
  bech32Config: {
    bech32PrefixAccAddr: "okp4",
    bech32PrefixAccPub: "okp4pub",
    bech32PrefixValAddr: "okp4valoper",
    bech32PrefixValPub: "okp4valoperpub",
    bech32PrefixConsAddr: "okp4valcons",
    bech32PrefixConsPub: "okp4valconspub",
  },
  chainName: "okp4testnet",
  feeCurrencies: [
    {
      coinDenom: "know",
      coinMinimalDenom: "uknow",
      coinDecimals: 6,
      coinImageUrl:
        "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png",
    },
  ],
  stakeCurrency: {
    coinDenom: "know",
    coinMinimalDenom: "uknow",
    coinDecimals: 6,
    coinImageUrl:
      "https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/okp4testnet/images/okp4.png",
  },
  bip44: {
    coinType: 118,
  },
};
```

## Connect your wallet and see your account information

Users must link their OKP4 account to the app to interact with the blockchain. Users can securely manage and authorise transactions directly from the browser by connecting their Keplr wallet (or browser extension alternative like [Leap](https://www.leapwallet.io/)). All state-changing actions on the blockchain are executed using the user's private key stored in Keplr, ensuring security through cryptographic signatures.

### Basic connection

Let’s create a `Connection` component with a `Connection.tsx` file created in a `components` folder:

```tsx
import {
    useAccount,
    useDisconnect,
    useSuggestChainAndConnect,
    WalletType,
} from "graz";
import { ChainInfo, Key } from "graz/dist/keplr";

export function Connection({ chainInfo }: { chainInfo: ChainInfo }) {
    const { suggestAndConnect } = useSuggestChainAndConnect();
    const { disconnect } = useDisconnect();
    const {
        data: account,
        isConnected,
    }: { data: Key | null; isConnected: boolean } = useAccount();

    const gas = {
        price: "0.012",
        denom: "uknow",
    };

    return (
        <div>
            {isConnected ? (
                <>
                    <div>Linked wallet address: {account?.bech32Address}</div>
                    <button onClick={() => disconnect(true)}>Disconnect</button>
                </>
            ) : (
                <>
                    <button
                        onClick={() =>
                            suggestAndConnect({
                                chainInfo,
                                walletType: WalletType.KEPLR,
                                gas,
                            })
                        }
                    >
                        Connect with Keplr
                    </button>
                </>
            )}
        </div>
    );
}
```

`useSuggestChainAndConnect` hook provides a `suggestAndConnect` function to add the OKP4 chain in the browser wallet networks list and to connect to the user’s OKP4 account. `useAccount` hook is useful to know if the app is connected to an account and also to get the user’s wallet address.

Export the `Connection` component with an `index.ts` file in the `components` folder:

```tsx
import { Connection } from "./Connection";
export { Connection };
```

Now add the `Connection` component in the main `App.tsx` file:

```tsx
import { configureGraz } from "graz";
import {
  Connection
} from "./components";
import "./App.css";
import {
  OKP4TestnetChain,
} from "./constants";

configureGraz({
  defaultChain: OKP4TestnetChain,
});

function App() {
  return (
    <>
      <h1>OKP4 Vite Starter</h1>

      <Connection chainInfo={OKP4TestnetChain} />

    </>
  );
}

export default App;
```

![Result with Connection component](/img/content/tutorials/webapp-1.webp)

### Connection with Metamask

[Metamask is the most popular crypto wallet](https://www.techopedia.com/cryptocurrency/metamask-wallet-review) but does not support Cosmos-based accounts. Fortunately, [Metamask can be extended with plug-ins](https://snaps.metamask.io/), and the Leap wallet team built one to enable all Cosmos-based chains with Metamask.

`graz` enables the app to be compatible with several wallet extensions, including Metamask. As the `getAvailableWallets` hook returns the list of wallets on the user’s device, add the support of all compatible wallets with the following code in the `Connection.tsx` file:

```tsx
import {
    getAvailableWallets,
    useAccount,
    useDisconnect,
    useSuggestChainAndConnect,
    WalletType,
} from "graz";
import { ChainInfo, Key } from "graz/dist/keplr";

export function Connection({ chainInfo }: { chainInfo: ChainInfo }) {
    const wallets = getAvailableWallets();
    const { suggestAndConnect } = useSuggestChainAndConnect();
    const { disconnect } = useDisconnect();
    const {
        data: account,
        isConnected,
    }: { data: Key | null; isConnected: boolean } = useAccount();

    const gas = {
        price: "0.012",
        denom: "uknow",
    };

    return (
        <div>
            {isConnected ? (
                <>
                    <div>Linked wallet address: {account?.bech32Address}</div>
                    <button onClick={() => disconnect(true)}>Disconnect</button>
                </>
            ) : (
                <>
                    {wallets.keplr && (
                        <button
                            onClick={() =>
                                suggestAndConnect({
                                    chainInfo,
                                    walletType: WalletType.KEPLR,
                                    gas,
                                })
                            }
                        >
                            Connect with Keplr
                        </button>
                    )}
                    {wallets.leap && (
                        <button
                            onClick={() =>
                                suggestAndConnect({
                                    chainInfo,
                                    walletType: WalletType.LEAP,
                                    gas,
                                })
                            }
                        >
                            Connect with Leap
                        </button>
                    )}
                    {wallets.cosmostation && (
                        <button
                            onClick={() =>
                                suggestAndConnect({
                                    chainInfo,
                                    walletType: WalletType.COSMOSTATION,
                                    gas,
                                })
                            }
                        >
                            Connect with Cosmostation
                        </button>
                    )}
                    {wallets.walletconnect && (
                        <button
                            onClick={() =>
                                suggestAndConnect({
                                    chainInfo,
                                    walletType: WalletType.WALLETCONNECT,
                                    gas,
                                })
                            }
                        >
                            Connect with WalletConnect
                        </button>
                    )}
                    {wallets.wc_keplr_mobile && (
                        <button
                            onClick={() =>
                                suggestAndConnect({
                                    chainInfo,
                                    walletType: WalletType.WC_KEPLR_MOBILE,
                                    gas,
                                })
                            }
                        >
                            Connect with Keplr Mobile
                        </button>
                    )}
                    {wallets.wc_leap_mobile && (
                        <button
                            onClick={() =>
                                suggestAndConnect({
                                    chainInfo,
                                    walletType: WalletType.WC_LEAP_MOBILE,
                                    gas,
                                })
                            }
                        >
                            Connect with Leap Mobile
                        </button>
                    )}
                    {wallets.wc_cosmostation_mobile && (
                        <button
                            onClick={() =>
                                suggestAndConnect({
                                    chainInfo,
                                    walletType:
                                        WalletType.WC_COSMOSTATION_MOBILE,
                                    gas,
                                })
                            }
                        >
                            Connect with Cosmostation Mobile
                        </button>
                    )}
                    {wallets.metamask_snap_leap && (
                        <button
                            onClick={() =>
                                suggestAndConnect({
                                    chainInfo,
                                    walletType: WalletType.METAMASK_SNAP_LEAP,
                                    gas,
                                })
                            }
                        >
                            Connect with Metamask
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
```

You can now connect an OKP4 account to the app with Metamask:

![Connect to OKP4 with Metamask](/img/content/tutorials/webapp-2.webp)

## Get user balance

`useBalance` hook returns the number of tokens the user holds in the wallet. Here is an example of a  `Balance` component (`Balance.tsx` in the `components` folder):

```tsx
import { useAccount, useBalance } from "graz";
import { Coin } from "graz/dist/cosmjs";

export function Balance() {
    const { isConnected }: { isConnected: boolean } = useAccount();

    const {
        data: balance,
        isLoading,
    }: { data: Coin | undefined; isLoading: boolean } = useBalance("uknow");

    return (
        <div>
            {isConnected ? (
                isLoading ? (
                    <div>Fetching balances...</div>
                ) : balance?.amount ? (
                    <div>
                        Balance: {Number(balance?.amount) / 1000000} $KNOW
                    </div>
                ) : (
                    <div>This wallet does not hold $KNOW tokens</div>
                )
            ) : (
                "No balance to display, please connect"
            )}
        </div>
    );
}
```

Once `components/index.ts` and `App.tsx` files are updated, you can now see the connected account balance:

![Result with Balance component](/img/content/tutorials/webapp-3.webp)

## Interactions with OKP4 smart contracts

### Instantiation components

This part shows off how to instantiate smart contracts deployed on the OKP4 blockchain, that’s to say:

- how to create a database which will welcome RDF triples describing the resources (`cognitarium` smart contract)
- how to add Prolog rules (`law-stone` smart contract)

A generic `Instantiate` component (`Instantiate.tsx` file in the `components` folder) receives a smart contract `codeId` ([related to the smart contract to instantiate](https://docs.okp4.network/tutorials/explorer-sc#instantiate-okp4-smart-contracts)), and the transaction arguments `instantitateArgs` (with `msg` as the payload). The `useInstantitateContract` hook returns an `instantiateContract` function. This function will be invoked with [a signing client](https://hackmd.io/@0xGhastly/H1GlUwiZh) and the transaction arguments to instantiate. See also `onSuccess` and `onError` functions provided to the hook, callback functions called regarding the instantiate action status.

```tsx
import {
    InstantiateContractMutationArgs,
    useAccount,
    useCosmWasmSigningClient,
    useInstantiateContract,
} from "graz";
import {
    InstantiateOptions,
    InstantiateResult,
    SigningCosmWasmClient,
} from "graz/dist/cosmjs";

type InstatiateProps = {
    codeId: number;
    instantiateArgs: {
        label: string;
        msg: Record<string, unknown>;
        options: InstantiateOptions | undefined;
    };
    textButton: string;
};

export function Instantiate({
    codeId,
    instantiateArgs,
    textButton,
}: InstatiateProps) {
    const { isConnected }: { isConnected: boolean } = useAccount();

    const { data: signingClient }: { data: SigningCosmWasmClient | undefined } =
        useCosmWasmSigningClient();

    const { instantiateContract } = useInstantiateContract({
        codeId,
        onError: (
            error: unknown,
            data: InstantiateContractMutationArgs<Record<string, unknown>>
        ): void => console.error("instantiate error", { error, data }),
        onSuccess: (data: InstantiateResult) => {
            const {
                contractAddress,
                events,
                logs,
                gasUsed,
                height,
                transactionHash,
            } = data;
            console.log(
                `New instance (code id = ${codeId}): ${contractAddress}`,
                {
                    transactionHash,
                    events,
                    logs,
                    gasUsed,
                    height,
                }
            );
        },
    });

    return (
        <div>
            {isConnected ? (
                <button
                    onClick={() =>
                        instantiateContract({
                            signingClient,
                            ...instantiateArgs,
                        })
                    }
                >
                    {textButton}
                </button>
            ) : (
                <span>Please connect to instantiate</span>
            )}
        </div>
    );
}
```

#### Create a triple store: instantiate a `cognitarium` smart contract

Now we can add `InstantitateCognitarium`, a specific component to [instantiate `cognitarium` smart contract](https://docs.okp4.network/contracts/okp4-cognitarium#instantiatemsg) (`InstantiateCognitarium.tsx` file in the `components` folder) that uses the generic  `Instantiate` component:

```tsx
import { useAccount } from "graz";
import { InstantiateOptions } from "graz/dist/cosmjs";
import { Key } from "graz/dist/keplr";
import { InstantiateMsg, StoreLimitsInput } from "@okp4/cognitarium-schema";
import { Instantiate } from "./Instantiate";

export function InstantiateCognitarium({ codeId }: { codeId: number }) {
    const { data: account }: { data: Key | null } = useAccount();

    const label: string = `cogniatarium-frontdemo-${new Date().valueOf()}`;

    const limits: StoreLimitsInput = {
        max_byte_size: "340282366920938463463374607431768211455",
        max_insert_data_byte_size: "340282366920938463463374607431768211455",
        max_insert_data_triple_count: "340282366920938463463374607431768211455",
        max_query_limit: 30,
        max_query_variable_count: 30,
        max_triple_byte_size: "340282366920938463463374607431768211455",
        max_triple_count: "340282366920938463463374607431768211455",
    };

    const msg: InstantiateMsg = {
        limits,
    };

    const options: InstantiateOptions = {
        memo: "cognitarium instantiation from the frontdemo",
        admin: account?.bech32Address,
    };

    return (
        <Instantiate
            codeId={codeId}
            instantiateArgs={{
                label,
                msg,
                options,
            }}
            textButton="Instantiate a contract (create database)"
        />
    );
}
```

#### Add rules: instantiate a `law stone` smart contract

The approach is the same to [instantiate a `law stone` smart contract](https://docs.okp4.network/contracts/okp4-law-stone#instantiatemsg). But the Prolog program should be base64-encoded. Here is a helper function (created in an `utils.ts` file):

```tsx
/**
 * Encodes a given string into a Base64 format suitable for message transactions.
 * 
 * @param data - The input string to be encoded.
 * @returns The Base64-encoded version of the input string.
 */
export function encodeForMsgTx(data: string): string {
    const encoder = new TextEncoder();

    // 1: split the UTF-16 string into an array of bytes
    const charCodes = encoder.encode(data);

    // 2: concatenate byte data to create a binary string
    const concatenedStr = String.fromCharCode(...charCodes);

    // 3: base64 encode
    return btoa(concatenedStr);
}
```

Let’s define the Prolog program to send in the transaction:

```prolog
% alice and bob can vote as they are voters, once this prolog program is stored
% "7845" to be replaed by the epoch value of the instantiate transaction time
program_creation_epoch(7845).
voter(alice).
voter(bob).

can_vote(X) :- voter(X), block_time(T), program_creation_epoch(C), T > C.
```

Here is the code for the `InstantiateLawStone.tsx` file in the `components` folder:

```tsx
import { useAccount } from "graz";
import { InstantiateOptions } from "graz/dist/cosmjs";
import { Key } from "graz/dist/keplr";
import { InstantiateMsg } from "@okp4/law-stone-schema";
import { Instantiate } from "./Instantiate";
import { encodeForMsgTx } from "../utils";

export function InstantiateLawStone({ codeId }: { codeId: number }) {
    const { data: account }: { data: Key | null } = useAccount();

    const label: string = `lawstone-frontdemo-${new Date().valueOf()}`;

    const prologRules: string = `program_creation_epoch(${
        new Date().valueOf() / 1000
    }).
voter(alice).
voter(bob).

can_vote(X) :- voter(X), block_time(T), program_creation_epoch(C), T > C.
`;

    const msg: InstantiateMsg = {
        program: encodeForMsgTx(prologRules),
        storage_address:
            "okp41lppz4x9dtmccek2m6cezjlwwzup6pdqrkvxjpk95806c3dewgrfq602kgx",
    };

    const options: InstantiateOptions = {
        memo: "law-stone instantiation from the frontdemo",
        admin: account?.bech32Address,
    };

    return (
        <Instantiate
            codeId={codeId}
            instantiateArgs={{
                label,
                msg,
                options,
            }}
            textButton="Instantiate a contract (store new rules)"
        />
    );
}
```

#### Use the app to instantiate a smart contract

To test the above components, we have to define the `codeId` values (in the `constants.ts` file, for example):

```tsx
export const LAWSTONE_CODE_ID = 5;
export const COGNITARIUM_CODE_ID = 7;
```

Update `components/index.ts` and then `App.tsx`:

```tsx
import { configureGraz } from "graz";
import {
    Balance,
    Connection,
    InstantiateCognitarium,
    InstantiateLawStone,
} from "./components";
import "./App.css";
import {
    COGNITARIUM_CODE_ID,
    LAWSTONE_CODE_ID,
    OKP4TestnetChain,
} from "./constants";

configureGraz({
    defaultChain: OKP4TestnetChain,
});

function App() {
    return (
        <>
            <h1>OKP4 Vite Starter</h1>

            <Connection chainInfo={OKP4TestnetChain} />
            <Balance></Balance>
            <InstantiateCognitarium codeId={COGNITARIUM_CODE_ID} />
            <InstantiateLawStone codeId={LAWSTONE_CODE_ID} />
        </>
    );
}

export default App;
```

Now buttons are available to test the instantiations:

![Result with Instantiate component](/img/content/tutorials/webapp-4.webp)

Here is the result in the DevTools console for a `cognitarium` instance created (`address = okp41mnrjmkmv2hx448qq54snt24js43nesk9esn52jzl5fv4c33w6a6smke3n2`):

```json
{
    "transactionHash": "F374351671118E17E99DE160E2AFC6821EAF13383D664751E2BF0577BA94E1B6",
    "events": [
        ...,
        {
            "type": "instantiate",
            "attributes": [
                {
                    "key": "_contract_address",
                    "value": "okp41mnrjmkmv2hx448qq54snt24js43nesk9esn52jzl5fv4c33w6a6smke3n2"
                },
                {
                    "key": "code_id",
                    "value": "7"
                }
            ]
        }
    ],
    "logs": [...],
    "gasUsed": 191064,
    "height": 4204508
}
```

Here is the result in the DevTools console for a `law stone` instance created (`address = okp41j7f3mcqynl6ux8seaagvn4t09gg9k9wstkqkffu2dnpr3crghhrqdz6cl8`):

```json
{
    "transactionHash": "9AB49E81C1A7FA868DD7498D213D31AAE2C9A97765CF4F519C4A17EE70D7EE84",
    "events": [
        ...,
        {
            "type": "instantiate",
            "attributes": [
                {
                    "key": "_contract_address",
                    "value": "okp41j7f3mcqynl6ux8seaagvn4t09gg9k9wstkqkffu2dnpr3crghhrqdz6cl8"
                },
                {
                    "key": "code_id",
                    "value": "5"
                }
            ]
        }
    ],
    "logs": [...],
    "gasUsed": 334562,
    "height": 4204371
}
```

### Execute components

This part shows off how to execute messages on the OKP4 blockchain, that’s to say:

- insert RDF triples (`cognitarium` smart contract)

A generic `Execute` component (`Execute.tsx` file in the `components` folder) receives a smart contract address `contractAddress` and the transaction arguments `executeArgs` (with `msg` as the payload). The `useExecuteContract` hook returns an `executeContract` function. This function will be invoked with [a signing client](https://hackmd.io/@0xGhastly/H1GlUwiZh) and the transaction arguments to execute. See also `onSuccess` and `onError` functions provided to the hook, callback functions called regarding the execute action status.

```tsx
import {
    ExecuteContractMutationArgs,
    useAccount,
    useCosmWasmSigningClient,
    useExecuteContract,
} from "graz";
import { ExecuteResult, SigningCosmWasmClient } from "graz/dist/cosmjs";

type ExecuteProps = {
    contractAddress: string;
    executeArgs: {
        msg: Record<string, unknown>;
        memo: string | undefined;
    };
    textButton: string;
};

export function Execute({
    contractAddress,
    executeArgs,
    textButton,
}: ExecuteProps) {
    const { isConnected }: { isConnected: boolean } = useAccount();

    const { data: signingClient }: { data: SigningCosmWasmClient | undefined } =
        useCosmWasmSigningClient();

    const { executeContract } = useExecuteContract({
        contractAddress,

        onError: (
            error: unknown,
            data: ExecuteContractMutationArgs<Record<string, unknown>>
        ): void => console.error("execute error", { error, data }),

        onSuccess: (data: ExecuteResult) => {
            const {
                logs,
                height,
                transactionHash,
                events,
                gasWanted,
                gasUsed,
            } = data;
            console.log(`Execution on ${contractAddress} OK`, {
                logs,
                height,
                transactionHash,
                events,
                gasWanted,
                gasUsed,
            });
        },
    });

    return (
        <div>
            {isConnected ? (
                <button
                    onClick={() =>
                        executeContract({
                            signingClient,
                            ...executeArgs,
                        })
                    }
                >
                    {textButton}
                </button>
            ) : (
                <span>Please connect to execute</span>
            )}
        </div>
    );
}
```

#### Insert RDF triples in a triple store: execute an `InsertData` message to a  `cognitarium` instance

Here is `ExecuteCognitarium`, a specific component to [execute an `InsertData` message to a `cognitarium` instance](https://docs.okp4.network/contracts/okp4-cognitarium#executemsginsertdata) (`ExecuteCognitarium.tsx` file in the `components` folder) that uses the generic  `Execute` component:

```tsx
import { ExecuteMsg, InsertData } from "@okp4/cognitarium-schema";
import { Execute } from "./Execute";
import { encodeForMsgTx } from "../utils";

export function ExecuteCognitarium({
    contractAddress,
}: {
    contractAddress: string;
}) {
    const serviceDataTurtle = `@prefix category: <https://ontology.okp4.space/thesaurus/service-category/> .
@prefix core: <https://ontology.okp4.space/core/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix service: <https://ontology.okp4.space/dataverse/service/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://ontology.okp4.space/dataverse/service/metadata/be67f7df-ff02-47c8-b55f-865b387c68ca> a owl:NamedIndividual,
        <https://ontology.okp4.space/metadata/service/GeneralMetadata> ;
    core:describes service:03230ce7-d8cb-410e-919e-19c480c1dd75 ;
    core:hasCategory category:Storage ;
    core:hasDescription "Service de stockage de données"@fr ;
    core:hasDescription "Data storage service"@en ;
    core:hasDescription "Datenspeicherungsdienst"@de ;
    core:hasPublisher "OKP4" ;
    core:hasTag "stockage" ;
    core:hasTitle "Clever Cloud Data Storage"@en .

<https://ontology.okp4.space/dataverse/service/metadata/ae18aa63-bbfc-44e4-bc4a-29f3fab3bec0> a owl:NamedIndividual,
        <https://ontology.okp4.space/metadata/AuditMetadata> ;
    core:createdBy <did:key:z6Mkg6zUc9QFnHtfSnawoXVB269ko7wgmZXLHVJDwweDqL3y> ;
    core:createdOn "2023-07-04T10:00:00Z"^^xsd:dateTimeStamp ;
    core:describes service:03230ce7-d8cb-410e-919e-19c480c1dd75 ;
    core:lastModifiedBy <did:key:z6Mkg6zUc9QFnHtfSnawoXVB269ko7wgmZXLHVJDwweDqL3y> ;
    core:updatedOn "2023-07-04T10:00:00Z"^^xsd:dateTimeStamp .

service:03230ce7-d8cb-410e-919e-19c480c1dd75 a owl:NamedIndividual,
        core:Service ;
    core:hasIdentifier <urn:uuid:03230ce7-d8cb-410e-919e-19c480c1dd75> ;
    core:hasIdentity <did:key:z6Mkg6zUc9QFnHtfSnawoXVB269ko7wgmZXLHVJDwweDqL3y> ;
    core:hasRegistrar <did:key:z6Mkg6zUc9QFnHtfSnawoXVB269ko7wgmZXLHVJDwweDqL3y> .`;

    const insert_data: InsertData = {
        data: encodeForMsgTx(serviceDataTurtle),
    };
    const msg: ExecuteMsg = {
        insert_data,
    };

    const memo = "cognitarium insertion from the frontdemo";

    return (
        <Execute
            contractAddress={contractAddress}
            executeArgs={{
                msg,
                memo,
            }}
            textButton="Execute a message (insert data)"
        />
    );
}
```

You can notice the usage of `encodeForMsgTx` function to encode the RDF triples (Turtle format) in base64.

#### Use the app to execute a smart contract

Update `components/index.ts` and then `App.tsx` (replace `okp41mnrjmkmv2hx448qq54snt24js43nesk9esn52jzl5fv4c33w6a6smke3n2` by the address of a `cognitarium` instance the connected account created):

```jsx
import { configureGraz } from "graz";
import {
    Balance,
    Connection,
    ExecuteCognitarium,
    InstantiateCognitarium,
    InstantiateLawStone,
} from "./components";
import "./App.css";
import {
    COGNITARIUM_CODE_ID,
    LAWSTONE_CODE_ID,
    OKP4TestnetChain,
} from "./constants";

configureGraz({
    defaultChain: OKP4TestnetChain,
});

function App() {
    return (
        <>
            <h1>OKP4 Vite Starter</h1>

            <Connection chainInfo={OKP4TestnetChain} />
            <Balance></Balance>
            <InstantiateCognitarium codeId={COGNITARIUM_CODE_ID} />
            <ExecuteCognitarium contractAddress="okp41mnrjmkmv2hx448qq54snt24js43nesk9esn52jzl5fv4c33w6a6smke3n2" />
            <InstantiateLawStone codeId={LAWSTONE_CODE_ID} />
        </>
    );
}

export default App;
```

![Result with Execute component](/img/content/tutorials/webapp-5.webp)

Here is the result in the DevTools console for an insert (`cognitarium` instance `address = okp41mnrjmkmv2hx448qq54snt24js43nesk9esn52jzl5fv4c33w6a6smke3n2`):

```tsx
{
    "logs": [...],
    "height": 4204601,
    "transactionHash": "67CC47857CE9CF584B0AEF4B944B102E9FCBD9538425166D4F695DA201848E3F",
    "events": [...],
    "gasWanted": 1240011,
    "gasUsed": 904297
}
```

### Query components

This part shows off how to query messages on the OKP4 blockchain, that’s to say:

- select some RDF triples with filters (`cognitarium`smart contract)
- evaluate Prolog rules (`law stone` smart contract)

A generic `Query` component (Query`.tsx` file in the `components` folder) receives a smart contract address `contractAddress`, the query `query` and a callback function `onQueryResult`. The `useQuerySmart` hook is invoked when the component mounts and returns the result of the message query.

```tsx
import { ReactElement, useEffect } from "react";
import { useQuerySmart } from "graz";

type QueryProps = {
    contractAddress: string;
    query: Record<string, unknown>;
    onQueryResult: (data?: Record<string, unknown>) => ReactElement;
    textButton: string;
};

export function Query({ contractAddress, query, onQueryResult }: QueryProps) {
    const { data, isLoading } = useQuerySmart<Record<string, unknown>, boolean>(
        contractAddress,
        query
    );

    useEffect(() => {
        console.log(`Result from smart query on ${contractAddress}`, {
            query,
            response: data,
        });
    }, [data, query, contractAddress]);

    return (
        <div>
            {isLoading || !data ? <span>Loading...</span> : onQueryResult(data)}
        </div>
    );
}
```

#### Select some RDF triples in a triple store:  query a `Select` message to a  `cognitarium` instance

Here is `QueryCognitarium`, a specific component to [query a `Select` message to a `cognitarium` instance](https://docs.okp4.network/contracts/okp4-cognitarium#querymsgselect) (`QueryCognitarium.tsx` file in the `components` folder) that uses the generic  `Query` component:

```tsx
import {
    PurpleTriplePattern,
    PurpleVarOrNode,
    PurpleVarOrNodeOrLiteral,
    QueryPrefix,
    QueryWhere,
    Select,
    SelectClass,
    SelectItem,
    SelectQuery,
    SelectResponse,
    Value,
} from "@okp4/cognitarium-schema";
import { Query } from "./Query";

function onQueryResult(data?: Record<string, unknown>) {
    if (!data) return <></>;

    const selectResult: SelectResponse = data as unknown as SelectResponse;

    return (
        <div>
            {selectResult?.results?.bindings.length ? (
                selectResult?.results?.bindings.map(
                    (res: Record<string, Value>, index: number) => {
                        return (
                            <div key={index}>
                                <pre style={{ textAlign: "left" }}>
                                    {JSON.stringify(res, undefined, 50)}
                                </pre>
                            </div>
                        );
                    }
                )
            ) : (
                <></>
            )}
        </div>
    );
}

export function QueryCognitarium({
    contractAddress,
}: {
    contractAddress: string;
}) {
    const prefixes: QueryPrefix[] = [
        {
            namespace: "https://ontology.okp4.space/core/",
            prefix: "core",
        },
    ];

    const selectItems: SelectItem[] = [
        {
            variable: "subjectVar",
        },
        {
            variable: "predicateVar",
        },

        {
            variable: "objectVar",
        },
    ];

    const subjectFilter: PurpleVarOrNode = {
        variable: "subjectVar",
    };
    const predicateFilter: PurpleVarOrNode = {
        variable: "predicateVar",
    };
    const objectFilter: PurpleVarOrNodeOrLiteral = {
        variable: "objectVar",
    };
    const triplePatternFilter: PurpleTriplePattern = {
        subject: subjectFilter,
        predicate: predicateFilter,
        object: objectFilter,
    };

    const where: QueryWhere[] = [
        {
            simple: {
                triple_pattern: triplePatternFilter,
            },
        },
    ];

    const limit: number = 2;

    const selectQuery: SelectQuery = {
        prefixes,
        select: selectItems,
        where,
        limit,
    };
    const select: SelectClass = {
        query: selectQuery,
    };
    const query: Select = {
        select,
    };

    return (
        <Query
            contractAddress={contractAddress}
            query={query}
            onQueryResult={onQueryResult}
            textButton={"Result from query data"}
        ></Query>
    );
}
```

In this example, the query selects all triples for any subject, predicate and object (no filter). A limit of 2 elements to return is set. See the [tutorial about the OKP4 ontology](https://docs.okp4.network/tutorials/ontology-1#retrieve-stored-triples) to understand how to query with filters.

#### Evaluate Prolog rules: query an `Ask` message to a `law stone` instance

Here is `QueryLawStone`, a specific component to query an `Ask` message to a `law stone` instance (`QueryLawStone.tsx` file in the `components` folder) that uses the generic  `Query` component:

```tsx
import {
    Ask,
    AskClass,
    AskResponse,
    Result,
    Substitution,
    Term,
} from "@okp4/law-stone-schema";
import { Query } from "./Query";

function onQueryResult(data: Record<string, unknown> | undefined) {
    if (!data) return <></>;

    const askResult: AskResponse = data as unknown as AskResponse;

    return (
        <div>
            <div>Result from rules evaluation: </div>
            {askResult?.answer?.success ? (
                <div>
                    {askResult.answer.results?.map(
                        ({ substitutions }: Result, resIndex) => (
                            <div key={`results-${resIndex}`}>
                                {substitutions?.map(
                                    (substitution: Substitution, subIndex) => {
                                        const { term }: { term: Term } =
                                            substitution;
                                        return (
                                            <div
                                                key={`substitutions-${subIndex}`}
                                            >
                                                {term.name} can vote
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        )
                    )}
                </div>
            ) : (
                <div>Result from rules evaluation: no one can vote</div>
            )}
        </div>
    );
}

export function QueryLawStone({
    contractAddress,
}: {
    contractAddress: string;
}) {
    const askQuery: string = "can_vote(X).";
    const ask: AskClass = { query: askQuery };
    const query: Ask = { ask };

    return (
        <Query
            contractAddress={contractAddress}
            query={query}
            onQueryResult={onQueryResult}
            textButton={"Result from query data"}
        ></Query>
    );
}
```

In this example, `can_vote(X).` is the Prolog query to evaluate.

#### Use the app to query a smart contract

Update `components/index.ts` and add the components in `App.tsx` (replace `okp41mnrjmkmv2hx448qq54snt24js43nesk9esn52jzl5fv4c33w6a6smke3n2` by the address of a `cognitarium` instance the connected account created, replace `okp41j7f3mcqynl6ux8seaagvn4t09gg9k9wstkqkffu2dnpr3crghhrqdz6cl8` by the address of a `law stone` instance the connected account created):

```tsx
<QueryCognitarium contractAddress="okp41mnrjmkmv2hx448qq54snt24js43nesk9esn52jzl5fv4c33w6a6smke3n2" />
<QueryLawStone contractAddress="okp41j7f3mcqynl6ux8seaagvn4t09gg9k9wstkqkffu2dnpr3crghhrqdz6cl8" />
```

### List instances by smart contract (`CODE_ID`)

`Contracts` component (`Contracts` file in the `components` folder) receives a smart contract `codeId` ([related to the available smart contract](https://docs.okp4.network/tutorials/explorer-sc#instantiate-okp4-smart-contracts)). The `useCosmWasmClient` hook returns [a signing client](https://hackmd.io/@0xGhastly/H1GlUwiZh), which provides the useful functions `getContracts` (to get all instances by `codeId`) and `getContract` (to get all information on an instance by its address).

```tsx
import { useEffect, useState } from "react";
import { useAccount, useCosmWasmClient } from "graz";
import { Contract, CosmWasmClient } from "graz/dist/cosmjs";
import { Key } from "graz/dist/keplr";
import { ExecuteCognitarium } from "./ExecuteCognitarium";
import { COGNITARIUM_CODE_ID } from "../constants";

export function Contracts({ codeId }: { codeId: number }) {
    const {
        data: account,
        isLoading,
    }: { data: Key | null; isLoading: boolean } = useAccount();
    const {
        data: client,
        isFetching,
    }: { data: CosmWasmClient | unknown; isFetching: boolean } =
        useCosmWasmClient();

    const [contracts, setContracts] = useState<Contract[]>([]);
    const [userContracts, setUserContracts] = useState<Contract[]>([]);

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: {
        target: { checked: boolean | ((prevState: boolean) => boolean) };
    }) => {
        setIsChecked(event.target.checked);
    };

    useEffect(() => {
        if (!client) return;

        const cosmWasmClient: CosmWasmClient = client as CosmWasmClient;

        const getContracts = async () => {
            const contractAddrs: readonly string[] =
                await cosmWasmClient.getContracts(codeId);
            const newContracts: Contract[] = [];
            for (const contractAddr of contractAddrs) {
                const contract: Contract = await cosmWasmClient.getContract(
                    contractAddr
                );
                newContracts.push(contract);
            }
            setContracts(newContracts);
        };

        getContracts();
    }, [client, codeId]);

    useEffect(() => {
        if (!account) return;
        const userContracts: Contract[] = contracts.filter(
            ({ creator }) => creator === account.bech32Address
        );
        setUserContracts(userContracts);
    }, [contracts, account]);

    return (
        <>
            {!client ? (
                <div>Connect your wallet to get all contracts</div>
            ) : isLoading ? (
                <div>Loading wallet account...</div>
            ) : isFetching ? (
                <div>Fetching contracts...</div>
            ) : (
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        Only contracts I created
                    </label>

                    <div className="table-responsive">
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Address</th>
                                    <th>Creator</th>
                                    <th>Execute</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(isChecked ? userContracts : contracts).map(
                                    (row: Contract) => (
                                        <tr key={row.address}>
                                            <td>{row.address}</td>
                                            <td>{row.creator}</td>
                                            <td>
                                                {codeId ===
                                                    COGNITARIUM_CODE_ID &&
                                                row.creator ===
                                                    account?.bech32Address ? (
                                                    <ExecuteCognitarium
                                                        contractAddress={
                                                            row.address
                                                        }
                                                    />
                                                ) : (
                                                    <span>
                                                        {" "}
                                                        (No available execution)
                                                    </span>
                                                )}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}
```

This example filters to display the contracts the connected account has instantiated.

## Analyze transactions

### Decode transaction data

This part shows how to decode data sent and validated on the OKP4 protocol. It explains:

- how to decode a transaction message based on its type URL (`typeUrl`)
- how to decode messages payload from smart contract (CosmWasm) interactions
- how to retrieve plain Prolog program previously stored

The necessary `decode` function depends on the type URL. Here is a helper function (created in the `utils.ts` file) to decode transactions from any protobuf message:

```tsx
import { Any } from "cosmjs-types/google/protobuf/any";
import {
    MsgExecuteContract,
    MsgInstantiateContract,
} from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { MsgVote } from "cosmjs-types/cosmos/gov/v1beta1/tx";

/**
 * Decodes a transaction message based on its type URL.
 *
 * @param message - The transaction message, which includes a type URL and a value.
 * @returns An object containing the type URL and the decoded value of the message.
 */
export function decodeTxMessage(message: Any) {
    const { typeUrl, value } = message;

    // For contract instantiation messages from the CosmWasm module
    if (typeUrl === "/cosmwasm.wasm.v1.MsgInstantiateContract")
        return {
            typeUrl,
            value: MsgInstantiateContract.decode(value),
        };
    // For contract execution messages from the CosmWasm module
    else if (typeUrl === "/cosmwasm.wasm.v1.MsgExecuteContract")
        return {
            typeUrl,
            value: MsgExecuteContract.decode(value),
        };
    // For sending tokens using the Cosmos bank module
    else if (typeUrl === "/cosmos.bank.v1beta1.MsgSend")
        return {
            typeUrl,
            value: MsgSend.decode(value),
        };
    // For voting on proposals using the Cosmos governance module
    else if (typeUrl === "/cosmos.gov.v1beta1.MsgVote")
        return {
            typeUrl,
            value: MsgVote.decode(value),
        };
    else {
        console.warn("unhandled typeUrl ", typeUrl);
        const decoder = new TextDecoder();
        return {
            typeUrl,
            value: decoder.decode(value), // Use a generic text decoder for the value
        };
    }
}
```

This `decodeTxWasmMessageValue` helper decodes wasm messages (`msg` payload from CosmWasm smart contract instantiations and executions):

```tsx
import { fromBase64, fromUtf8 } from "@cosmjs/encoding";

/**
 * Further decodes the `msg` field of a given CosmWasm transaction message value
 * that's of type `MsgInstantiateContract` or `MsgExecuteContract`.
 *
 * @param decodedValue - The preliminarily decoded message value.
 * @returns An object containing the original decoded value and the further decoded `msg` field.
 */
export function decodeTxWasmMessageValue(
    decodedValue: MsgInstantiateContract | MsgExecuteContract
) {
    const msg = JSON.parse(fromUtf8(decodedValue.msg));
    return {
        ...decodedValue,
        msg,
    };
}
```

Thus, update the `decodeTxMessage` helper to return a fully decoded response (for `typeUrl` related to CosmWasm messages only !):

```tsx
export function decodeTxMessage(message: Any) {
    const { typeUrl, value } = message;

    // For contract instantiation messages from the CosmWasm module
    if (typeUrl === "/cosmwasm.wasm.v1.MsgInstantiateContract")
        return {
            typeUrl,
            value: decodeTxWasmMessageValue(
                MsgInstantiateContract.decode(value)
            ),
        };
    // For contract execution messages from the CosmWasm module
    else if (typeUrl === "/cosmwasm.wasm.v1.MsgExecuteContract")
        return {
            typeUrl,
            value: decodeTxWasmMessageValue(MsgExecuteContract.decode(value)),
        };
    ...
}
```

Do you remember you provided data in the `msg` payload in base64 encoded? So it would be best if you had a function to decode back. This helper is mainly useful to get Prolog program (as RDF triples may be requested with [Query messages](https://docs.okp4.network/contracts/okp4-cognitarium#querymsg)).

```tsx
/**
 * Decodes a Prolog program that is provided as a Base64-encoded UTF-8 string.
 *
 * @param program - A Base64-encoded UTF-8 string representing a Prolog program.
 * @returns The decoded Prolog program as a string.
 */
export function decodePrologProgram(program: string): string {
    // 1: ensures that the program string is a valid Base64 encoded string
    // by appending the necessary "=" characters to make its length a multiple of 4
    const missingChars = program.length % 4;
    if (missingChars > 0) {
        for (let index = 0; index < missingChars; index++) {
            program += "=";
        }
    }

    // 2: decode the program string from Base64 format
    const utf8Program = fromBase64(program);

    // 3: decode from UTF-8 encoded byte array into a string
    return fromUtf8(utf8Program);
}
```

Thus, update the `decodeTxWasmMessageValue` helper to populate the returned object with the decoded prolog program :

```tsx
/**
 * Further decodes the `msg` field of a given CosmWasm transaction message value
 * that's of type `MsgInstantiateContract` or `MsgExecuteContract`.
 *
 * @param decodedValue - The preliminarily decoded message value.
 * @returns An object containing the original decoded value and the further decoded `msg` field.
 */
export function decodeTxWasmMessageValue(
    decodedValue: MsgInstantiateContract | MsgExecuteContract
) {
    // 1: convert the 'msg' field from a UTF-8 encoded byte array into a JSON object
    const msg = JSON.parse(fromUtf8(decodedValue.msg));

    // 2: if the parsed 'msg' object has a 'program' field, decode the Prolog program
    if (msg?.program) msg.programDecoded = decodePrologProgram(msg.program);

    // 3: return the original 'decodedValue' object and the further decoded 'msg' object.
    return {
        ...decodedValue,
        msg,
    };
}
```

### List and filter transactions

You’ll find a complete `Transactions` component below. But let’s understand how we can write such code.

You can use any available client (among [CosmWasmClient](https://cosmwasm.github.io/CosmWasmJS/clients/reading/CosmWasmClient.html), [StargateClient](https://www.npmjs.com/package/@cosmjs/stargate) or [TendermintClient](https://www.npmjs.com/package/@cosmjs/tendermint-rpc)) to get OKP4 network transactions. Here is how to search transactions with a query filtering by message sender with the `txSearch` method from a `Tendermint37Client` client provided by the `useTendermintClient` hook:

```tsx
import { useAccount, useTendermintClient } from "graz";
import {
  Tendermint37Client,
  TxData,
  TxResponse,
  TxSearchParams,
  TxSearchResponse,
} from "graz/dist/tendermint";

const { data: tendermintClient }: { data: Tendermint37Client | undefined } =
  useTendermintClient("tm37");

const query: string = "message.sender='okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5'";
// you can also filter by message action, i.e. "message.action='/cosmwasm.wasm.v1.MsgInstantiateContract'";
// and/or use operators like: "message.sender='okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5' AND instantiate.code_id=5",

const searchParams: TxSearchParams = {
  query,
  page: 1,
  per_page: 100,
  order_by: "desc",
};

const txSearchRes: TxSearchResponse = await tendermintClient?.txSearch(
  searchParams
);
```

Note that if you want to get all transactions (`TxResponse[]` type), you need to process by batches of 100 elements:

```tsx
const transactionsFromRequest: TxResponse[] = [];
let page: number = 1;
let stop: boolean = false;

do {
  try {
    // ...
    const { txs }: { txs: readonly TxResponse[] }= txSearchRes;
    transactionsFromRequest.push(...txs);
    page++;
  } catch (e) {
    stop = true;
  }
} while (!stop);
```

To fully decode a transaction, first, use the `decodeTxRaw` helper from `@cosmjs/proto-signing` and then populate with decoded messages thanks to the `decodeTxMessage` we previously added in `utils.ts`:

```tsx
import { DecodedTxRaw, decodeTxRaw } from "@cosmjs/proto-signing";
import { decodeTxMessage } from "../utils";

type DecodedTransaction = {
  decodedTx: DecodedTxRaw;
  decodedMsgs: Array<unknown>;
  hash: string;
  result: TxData;
};

const {
  tx,
  hash,
  height,
  result,
}: {
  tx: Uint8Array;
  hash: Uint8Array;
  height: number;
  result: TxData;
} = txResponse;

const decodedTx: DecodedTxRaw = decodeTxRaw(tx);

const transaction: DecodedTransaction = {
  decodedTx,
  decodedMsgs: decodedTx.body.messages.map(decodeTxMessage),
  hash,
  result,
};
```

You may have to format the hash in uppercase if you want to link the web app user to [a Ping Pub explorer](https://testnet.ping.pub/OKP4%20testnet):

```tsx
import { toHex } from "@cosmjs/encoding";

const transaction: DecodedTransaction = {
  // ...
  hash: toHex(hash).toUpperCase(),
};
```

You may also need to know when a transaction has been validated. You can have this information with a `block` method from a `Tendermint37Client` client:

```tsx
import {
    Block,
    ReadonlyDateWithNanoseconds,
} from "graz/dist/tendermint";

const { block }: { block: Block } = await tendermintClient.block(height);
const {
  header: { time },
}: {
  header: {
    time: ReadonlyDateWithNanoseconds;
  };
} = block;
```

To sum up, here is a `Transactions` component (`Transactions.tsx` file in the `components` folder) combining all you need to search transactions from a filtering query and get decoded transactions with validation time:

```tsx
import { useEffect, useState } from "react";
import { useAccount, useTendermintClient } from "graz";
import { Key } from "graz/dist/keplr";
import {
    Block,
    ReadonlyDateWithNanoseconds,
    Tendermint37Client,
    TxData,
    TxResponse,
    TxSearchParams,
    TxSearchResponse,
} from "graz/dist/tendermint";
import { toHex } from "@cosmjs/encoding";
import { DecodedTxRaw, decodeTxRaw } from "@cosmjs/proto-signing";
import { decodeTxMessage } from "../utils";

type DecodedTransaction = {
    decodedTx: DecodedTxRaw;
    decodedMsgs: Array<unknown>;
    hash: string;
    result: TxData;
    time: ReadonlyDateWithNanoseconds;
};

export function Transactions() {
    const { data: account }: { data: Key | null } = useAccount();

    const { data: tendermintClient }: { data: Tendermint37Client | undefined } =
        useTendermintClient("tm37");

    const [transactions, setTransactions] = useState<Array<DecodedTransaction>>(
        []
    );

    const query: string = account?.bech32Address
        ? `message.sender='${account.bech32Address}'`
        : "";
    // you can also filter by message action, i.e. "message.action='/cosmwasm.wasm.v1.MsgInstantiateContract'";
    // and/or use operators like: "message.sender='okp41cu9wzlcyyxpek20jaqfwzu3llzjgx34cwnv2v5' AND instantiate.code_id=5",

    useEffect(() => {
        async function fetchTxs() {
            if (tendermintClient && query.length) {
                // 1: get all transactions, per batch of 100 elements
                const transactionsFromRequest: TxResponse[] = [];
                let page: number = 1;
                let stop: boolean = false;
                do {
                    try {
                        const searchParams: TxSearchParams = {
                            query,
                            page,
                            per_page: 100,
                            order_by: "desc",
                        };
                        const txSearchRes: TxSearchResponse =
                            await tendermintClient?.txSearch(searchParams);
                        const { txs }: { txs: readonly TxResponse[] } =
                            txSearchRes;
                        transactionsFromRequest.push(...txs);
                        page++;
                    } catch (e) {
                        stop = true;
                    }
                } while (!stop);

                // 2: decode and populate transaction infos
                const decodedTransactions: DecodedTransaction[] =
                    await Promise.all(
                        transactionsFromRequest.map(
                            async (txResponse: TxResponse) => {
                                const {
                                    tx,
                                    hash,
                                    height,
                                    result,
                                }: {
                                    tx: Uint8Array;
                                    hash: Uint8Array;
                                    height: number;
                                    result: TxData;
                                } = txResponse;

                                // Get time from block height
                                const { block }: { block: Block } =
                                    await tendermintClient.block(height);
                                const {
                                    header: { time },
                                }: {
                                    header: {
                                        time: ReadonlyDateWithNanoseconds;
                                    };
                                } = block;

                                const decodedTx: DecodedTxRaw = decodeTxRaw(tx);

                                return {
                                    decodedTx,
                                    decodedMsgs:
                                        decodedTx.body.messages.map(
                                            decodeTxMessage
                                        ),
                                    hash: toHex(hash).toUpperCase(),
                                    result,
                                    time,
                                };
                            }
                        )
                    );
                console.log({ query, decodedTransactions });

                setTransactions(decodedTransactions);
            }
        }
        fetchTxs();
    }, [tendermintClient, query]);

    return (
        <div className="table-responsive">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Hashs for the {transactions.length} txs sent</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(({ hash }, i) => (
                        <tr key={i}>
                            <td>
                                <a
                                    href={`https://testnet.ping.pub/OKP4%20testnet/tx/${hash}`}
                                >
                                    {hash}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
```

:::tip

You can check the transactions results by looking to events in the `result.events` object.  

:::

Update the`components/index.ts` file and add the `Transactions` component in the `App.tsx` file. Check the result is as expected in your browser:

![Result with Transactions component](/img/content/tutorials/webapp-6.webp)

## Récap

- Using React and [graz](https://graz.sh/) hooks, you can easily develop a web interface to read and send transactions over the OKP4 blockchain
- You need a [`SigningCosmWasmClient`](https://graz.sh/docs/hooks/useCosmWasmSigningClient) to interact with smart contracts
- Decoding transaction data should be managed according to message type

With some CSS tricks you can copy from the [Vite boilerplate repository](https://github.com/okp4/web-ui-boilerplates/tree/main/vite), you can have a prettier UI:

![Vite UI boilerplate final (connected to OKP4 network)](/img/content/tutorials/webapp-7.webp)

Ready to unlock the potential of the OKP4 protocol? Now, you have the keys to craft the most intuitive and powerful UI you can envision. Dive in and let your imagination shape the future of OKP4 interfaces!
