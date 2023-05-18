import {Denom, Addr, Uint128, Duration, Binary, Cw20ReceiveMsg, Expiration, Timestamp, Uint64, Claim, Member} from "./types";
export interface InstantiateMsg {
  admin?: string | null;
  denom: Denom;
  min_bond: Uint128;
  tokens_per_weight: Uint128;
  unbonding_period: Duration;
}
export type ExecuteMsg = {
  bond: {};
} | {
  unbond: {
    tokens: Uint128;
  };
} | {
  claim: {};
} | {
  update_admin: {
    admin?: string | null;
  };
} | {
  add_hook: {
    addr: string;
  };
} | {
  remove_hook: {
    addr: string;
  };
} | {
  receive: Cw20ReceiveMsg;
};
export type QueryMsg = {
  claims: {
    address: string;
  };
} | {
  staked: {
    address: string;
  };
} | {
  admin: {};
} | {
  total_weight: {};
} | {
  list_members: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  member: {
    addr: string;
    at_height?: number | null;
  };
} | {
  hooks: {};
};
export interface AdminResponse {
  admin?: string | null;
}
export interface ClaimsResponse {
  claims: Claim[];
}
export interface HooksResponse {
  hooks: string[];
}
export interface MemberListResponse {
  members: Member[];
}
export interface MemberResponse {
  weight?: number | null;
}
export interface StakedResponse {
  denom: Denom;
  stake: Uint128;
}
export interface TotalWeightResponse {
  weight: number;
}