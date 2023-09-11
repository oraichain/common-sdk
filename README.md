## Generate code and docs

```bash

# demo stargate repo: https://github.com/oraichain/demo-stargate.git

# build code:
cwtools build ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../ics721-cosmwasm/contracts/cw-ics721-bridge ../cw-plus/contracts/* ../cw-nfts/contracts/cw721-base -o packages/contracts-build/data

# gen schema
cwtools build ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../ics721-cosmwasm/contracts/cw-ics721-bridge ../cw-plus/contracts/* ../cw-nfts/contracts/cw721-base -o packages/contracts-build/data -s

# gen code:
cwtools gents ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../ics721-cosmwasm/contracts/cw-ics721-bridge ../cw-plus/contracts/* ../cw-nfts/contracts/cw721-base -o packages/contracts-sdk/src
# gen doc:
yarn docs

# build
yarn build . --outDir build
# build individual packages
yarn build packages/contracts-sdk
yarn build packages/contracts-build
# publish package
yarn deploy packages/contracts-sdk --patch
yarn deploy packages/contracts-build --patch

# update comments:
git apply patches/contracts-sdk.patch
# edit contracts-sdk
git diff packages/contracts-sdk > patches/contracts-sdk.patch
# rollback
git checkout packages/contracts-sdk
```
