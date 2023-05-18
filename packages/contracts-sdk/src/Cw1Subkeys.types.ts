import {CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, WasmMsg, Binary, Expiration, Timestamp, Uint64, Coin, Empty, Permissions, NativeBalance, AllowanceInfo, PermissionsInfo, Allowance} from "./types";
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
export interface AllAllowancesResponse {
  allowances: AllowanceInfo[];
}
export interface AllPermissionsResponse {
  permissions: PermissionsInfo[];
}
export interface CanExecuteResponse {
  can_execute: boolean;
}