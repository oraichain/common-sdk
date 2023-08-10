import {CosmosMsgForEmpty, BankMsg, Uint128, WasmMsg, Binary, Coin, Empty} from "./types";
export interface InstantiateMsg {}
export type ExecuteMsg = {
  execute: {
    msg: CosmosMsgForEmpty;
  };
};
export type QueryMsg = string;