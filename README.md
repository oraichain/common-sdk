## Generate code and docs

```bash
# build code:
cwtools build ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../cw-plus/contracts/* -o packages/contracts-build/data
# gen code:
cwtools gents ../multicall ../ibc-bridge-wasm/contracts/cw-ics20-latest ../cw-plus/contracts/* -o packages/contracts-sdk/src
# gen doc:
yarn docs

# build
yarn build . --outDir build
# build individual packages
yarn build packages/contracts-sdk
yarn build packages/contracts-build

# update comments:
git apply patches/contracts-sdk.patch
# edit contracts-sdk
git diff packages/contracts-sdk > patches/contracts-sdk.patch
# rollback
git checkout packages/contracts-sdk
```
