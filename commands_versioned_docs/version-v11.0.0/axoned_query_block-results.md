## axoned query block-results

Query for a committed block's results by height

### Synopsis

Query for a specific committed block's results using the CometBFT RPC `block_results` method

```
axoned query block-results [height] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for block-results
      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
```

### SEE ALSO

* [axoned query](axoned_query.md)	 - Querying subcommands
