import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Cw1SubkeysTypes, Cw1WhitelistTypes, Cw20BaseTypes, Cw20Ics20Types, Cw3FixedMultisigTypes, Cw3FlexMultisigTypes, Cw4GroupTypes, Cw4StakeTypes, CwIcs20LatestTypes, MulticallTypes } from '@oraichain/common-contracts-sdk';
import { readFileSync } from 'fs';
import path from 'path';

const contractDir = path.join(path.dirname(module.filename), '..', 'data');

interface InstantiateMsgs {
  'cw-ics20-latest': CwIcs20LatestTypes.InstantiateMsg;
  'cw1-subkeys': Cw1SubkeysTypes.InstantiateMsg;
  'cw1-whitelist': Cw1WhitelistTypes.InstantiateMsg;
  'cw20-base': Cw20BaseTypes.InstantiateMsg;
  'cw20-ics20': Cw20Ics20Types.InstantiateMsg;
  'cw3-fixed-multisig': Cw3FixedMultisigTypes.InstantiateMsg;
  'cw3-flex-multisig': Cw3FlexMultisigTypes.InstantiateMsg;
  'cw4-group': Cw4GroupTypes.InstantiateMsg;
  'cw4-stake': Cw4StakeTypes.InstantiateMsg;
}

type EmptyInstantiateMsgKey = 'multicall';

export type ContractName = keyof InstantiateMsgs | EmptyInstantiateMsgKey;
export type InstantiateMsg = InstantiateMsgs[keyof InstantiateMsgs];

export const getContractDir = (name: ContractName = 'multicall') => {
  return path.join(contractDir, name + '.wasm');
};

export const deployContract = async (client: SigningCosmWasmClient, senderAddress: string, msg: InstantiateMsg, label: string, contractName?: ContractName) => {
  // upload and instantiate the contract
  const wasmBytecode = readFileSync(getContractDir(contractName));
  const uploadRes = await client.upload(senderAddress, wasmBytecode, 'auto');
  const initRes = await client.instantiate(senderAddress, uploadRes.codeId, msg, label, 'auto');
  return { ...uploadRes, ...initRes };
};

export const migrateContract = async (client: SigningCosmWasmClient, senderAddress: string, contractAddress: string, msg: InstantiateMsg, contractName?: ContractName) => {
  // upload and instantiate the contract
  const wasmBytecode = readFileSync(getContractDir(contractName));
  const uploadRes = await client.upload(senderAddress, wasmBytecode, 'auto');
  const migrateRes = await client.migrate(senderAddress, contractAddress, uploadRes.codeId, msg, 'auto');
  return { ...uploadRes, ...migrateRes };
};
