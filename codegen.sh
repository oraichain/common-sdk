#!/bin/bash

cwtools build ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../ics721-cosmwasm/contracts/cw-ics721-bridge ../cw-plus/contracts/* ../cw-nfts/contracts/cw721-base -o packages/contracts-build/data
cwtools build ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../ics721-cosmwasm/contracts/cw-ics721-bridge ../cw-plus/contracts/* ../cw-nfts/contracts/cw721-base -o packages/contracts-build/data -s
# gen code:
cwtools gents ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../ics721-cosmwasm/contracts/cw-ics721-bridge ../cw-plus/contracts/* ../cw-nfts/contracts/cw721-base -o packages/contracts-sdk/src

# git apply patches/contracts-sdk.patch

cwtools wasm migrate orai1jtt8c2lz8emh8s708y0aeduh32xef2rxyg8y78lyvxn806cu7q0sjtxsnv --input '{"default_timeout":7200, "fee_denom":"orai","swap_router_contract":"orai1j0r67r9k8t34pnhy00x3ftuxuwg0r6r4p8p6rrc8az0ednzr8y9s3sj2sf","token_fee_receiver":"orai1g4h64yjt0fvzv5v2j8tyfnpe5kmnetejvfgs7g","relayer_fee_receiver":"orai1g4h64yjt0fvzv5v2j8tyfnpe5kmnetejvfgs7g"}' --env ../oraicli/.env.production --code-id 1181