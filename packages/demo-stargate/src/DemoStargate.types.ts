import { CosmosMsgForEmpty, BankMsg, Uint128, WasmMsg, Binary, Coin, Empty } from '@oraichain/common-contracts-sdk';
export interface InstantiateMsg {}
export type ExecuteMsg = {
  execute: {
    msg: CosmosMsgForEmpty;
  };
};
export type QueryMsg = string;
