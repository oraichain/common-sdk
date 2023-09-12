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
} | {
  increase_allowance: {
    amount: Coin;
    expires?: Expiration | null;
    spender: string;
  };
} | {
  decrease_allowance: {
    amount: Coin;
    expires?: Expiration | null;
    spender: string;
  };
} | {
  set_permissions: {
    permissions: Permissions;
    spender: string;
  };
};
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export interface Permissions {
  delegate: boolean;
  redelegate: boolean;
  undelegate: boolean;
  withdraw: boolean;
}
export type QueryMsg = {
  admin_list: {};
} | {
  allowance: {
    spender: string;
  };
} | {
  permissions: {
    spender: string;
  };
} | {
  can_execute: {
    msg: CosmosMsgForEmpty;
    sender: string;
  };
} | {
  all_allowances: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  all_permissions: {
    limit?: number | null;
    start_after?: string | null;
  };
};
export interface AdminListResponse {
  admins: string[];
  mutable: boolean;
}
export type NativeBalance = Coin[];
export interface AllAllowancesResponse {
  allowances: AllowanceInfo[];
}
export interface AllowanceInfo {
  balance: NativeBalance;
  expires: Expiration;
  spender: string;
}
export interface AllPermissionsResponse {
  permissions: PermissionsInfo[];
}
export interface PermissionsInfo {
  permissions: Permissions;
  spender: string;
}
export interface Allowance {
  balance: NativeBalance;
  expires: Expiration;
}
export interface CanExecuteResponse {
  can_execute: boolean;
}