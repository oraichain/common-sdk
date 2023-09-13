import {AllowMsg, Uint128, Binary, Cw20ReceiveMsg, Amount, Coin, Cw20Coin, ChannelInfo, IbcEndpoint, AllowedInfo} from "./types";
export interface InstantiateMsg {
  allowlist: AllowMsg[];
  default_gas_limit?: number | null;
  default_timeout: number;
  gov_contract: string;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  transfer: TransferMsg;
} | {
  allow: AllowMsg;
} | {
  update_admin: {
    admin: string;
  };
};
export interface TransferMsg {
  channel: string;
  memo?: string | null;
  remote_address: string;
  timeout?: number | null;
}
export type QueryMsg = {
  port: {};
} | {
  list_channels: {};
} | {
  channel: {
    id: string;
  };
} | {
  config: {};
} | {
  admin: {};
} | {
  allowed: {
    contract: string;
  };
} | {
  list_allowed: {
    limit?: number | null;
    start_after?: string | null;
  };
};
export interface AdminResponse {
  admin?: string | null;
}
export interface AllowedResponse {
  gas_limit?: number | null;
  is_allowed: boolean;
}
export interface ChannelResponse {
  balances: Amount[];
  info: ChannelInfo;
  total_sent: Amount[];
}
export interface ConfigResponse {
  default_gas_limit?: number | null;
  default_timeout: number;
  gov_contract: string;
}
export interface ListAllowedResponse {
  allow: AllowedInfo[];
}
export interface ListChannelsResponse {
  channels: ChannelInfo[];
}
export interface PortResponse {
  port_id: string;
}