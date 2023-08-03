#!/bin/bash

cwtools build ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../ics721-cosmwasm/contracts/cw-ics721-bridge ../cw-plus/contracts/* ../cw-nfts/contracts/cw721-base -o packages/contracts-build/data
cwtools build ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../ics721-cosmwasm/contracts/cw-ics721-bridge ../cw-plus/contracts/* ../cw-nfts/contracts/cw721-base -o packages/contracts-build/data -s
# gen code:
cwtools gents ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../ics721-cosmwasm/contracts/cw-ics721-bridge ../cw-plus/contracts/* ../cw-nfts/contracts/cw721-base -o packages/contracts-sdk/src

# git apply patches/contracts-sdk.patch