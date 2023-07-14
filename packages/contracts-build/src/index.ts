import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Cw1SubkeysTypes, Cw1WhitelistTypes, Cw20BaseTypes, Cw20Ics20Types, Cw3FixedMultisigTypes, Cw3FlexMultisigTypes, Cw4GroupTypes, Cw4StakeTypes, CwIcs20LatestTypes, MulticallTypes } from '@oraichain/common-contracts-sdk';
import { readFileSync } from 'fs';
import path from 'path';

export type ContractName = 'multicall' | 'cw-ics20-latest' | 'cw-ics721-bridge' | 'cw1-subkeys' | 'cw1-whitelist' | 'cw20-base' | 'cw20-ics20' | 'cw3-fixed-multisig' | 'cw3-flex-multisig' | 'cw4-group' | 'cw4-stake';
export type InstantiateMsg =
  | CwIcs20LatestTypes.InstantiateMsg
  | Cw1SubkeysTypes.InstantiateMsg
  | Cw1WhitelistTypes.InstantiateMsg
  | Cw20BaseTypes.InstantiateMsg
  | Cw20Ics20Types.InstantiateMsg
  | Cw3FixedMultisigTypes.InstantiateMsg
  | Cw3FlexMultisigTypes.InstantiateMsg
  | Cw4GroupTypes.InstantiateMsg
  | Cw4StakeTypes.InstantiateMsg
  | MulticallTypes.InstantiateMsg;

const contractDir = path.join(path.dirname(module.filename), '..', 'data');

export const getContractDir = (name: ContractName = 'multicall') => {
  return path.join(contractDir, name + '.wasm');
};

export const deployContract = async (client: SigningCosmWasmClient, senderAddress: string, msg?: InstantiateMsg, contractName?: ContractName, label?: string) => {
  // upload and instantiate the contract
  const wasmBytecode = readFileSync(getContractDir(contractName));
  const uploadRes = await client.upload(senderAddress, wasmBytecode, 'auto');
  const initRes = await client.instantiate(senderAddress, uploadRes.codeId, msg ?? {}, label ?? contractName, 'auto');
  return { ...uploadRes, ...initRes };
};
