## axoned query bank balances

Query for account balances by address

### Synopsis

Query the total balance of an account or of a specific denomination.

```
axoned query bank balances [address] [flags]
```

### Options

```
      --grpc-addr string   the gRPC endpoint to use for this chain
      --grpc-insecure      allow gRPC over insecure channels, if not the server must use TLS
      --height int         Use a specific height to query state at (this can error if the node is pruning state)
  -h, --help               help for balances
      --no-indent          Do not indent JSON output
      --node string        <host>:<port> to CometBFT RPC interface for this chain (default "tcp://localhost:26657")
  -o, --output string      Output format (text|json) (default "text")
      --page-count-total   
      --page-key binary    
      --page-limit uint    
      --page-offset uint   
      --page-reverse       
      --resolve-denom      
```

### SEE ALSO

* [axoned query bank](axoned_query_bank.md)	 - Querying commands for the bank module
