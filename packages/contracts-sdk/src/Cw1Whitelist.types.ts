import {CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Coin, Empty, IbcTimeout, IbcTimeoutBlock} from "./types";
export interface InstantiateMsg {
  admins: string[];
  mutable: boolean;
}
export type ExecuteMsg = {
  execute: {
    msgs: CosmosMsgForEmpty[];
  };
} | {
  freeze: {};
} | {
  update_admins: {
    admins: string[];
  };
};
export type QueryMsg = {
  admin_list: {};
} | {
  can_execute: {
    msg: CosmosMsgForEmpty;
    sender: string;
  };
};
export interface AdminListResponse {
  admins: string[];
  mutable: boolean;
}
export interface CanExecuteResponse {
  can_execute: boolean;
}