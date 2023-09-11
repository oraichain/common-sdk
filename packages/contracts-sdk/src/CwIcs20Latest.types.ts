import {Uint128, Binary, Addr, Coin, IbcEndpoint} from "./types";
export interface InstantiateMsg {
  allowlist: AllowMsg[];
  default_gas_limit?: number | null;
  default_timeout: number;
  gov_contract: string;
  swap_router_contract: string;
}
export interface AllowMsg {
  contract: string;
  gas_limit?: number | null;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
} | {
  transfer: TransferMsg;
} | {
  transfer_to_remote: TransferBackMsg;
} | {
  update_mapping_pair: UpdatePairMsg;
} | {
  delete_mapping_pair: DeletePairMsg;
} | {
  allow: AllowMsg;
} | {
  update_config: {
    admin?: string | null;
    default_gas_limit?: number | null;
    default_timeout?: number | null;
    fee_denom?: string | null;
    swap_router_contract?: string | null;
  };
};
export type AssetInfo = {
  token: {
    contract_addr: Addr;
  };
} | {
  native_token: {
    denom: string;
  };
};
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export interface TransferMsg {
  channel: string;
  memo?: string | null;
  remote_address: string;
  timeout?: number | null;
}
export interface TransferBackMsg {
  local_channel_id: string;
  memo?: string | null;
  remote_address: string;
  remote_denom: string;
  timeout?: number | null;
}
export interface UpdatePairMsg {
  asset_info: AssetInfo;
  asset_info_decimals: number;
  denom: string;
  local_channel_id: string;
  remote_decimals: number;
}
export interface DeletePairMsg {
  denom: string;
  local_channel_id: string;
}
export type QueryMsg = {
  port: {};
} | {
  list_channels: {};
} | {
  channel: {
    forward?: boolean | null;
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
    order?: number | null;
    start_after?: string | null;
  };
} | {
  pair_mappings: {
    limit?: number | null;
    order?: number | null;
    start_after?: string | null;
  };
} | {
  pair_mapping: {
    key: string;
  };
} | {
  pair_mappings_from_asset_info: {
    asset_info: AssetInfo;
  };
};
export interface AdminResponse {
  admin?: string | null;
}
export interface AllowedResponse {
  gas_limit?: number | null;
  is_allowed: boolean;
}
export type Amount = {
  native: Coin;
} | {
  cw20: Cw20Coin;
};
export interface ChannelResponse {
  balances: Amount[];
  info: ChannelInfo;
  total_sent: Amount[];
}
export interface Cw20Coin {
  address: string;
  amount: Uint128;
}
export interface ChannelInfo {
  connection_id: string;
  counterparty_endpoint: IbcEndpoint;
  id: string;
}
export interface ConfigResponse {
  default_gas_limit?: number | null;
  default_timeout: number;
  fee_denom: string;
  gov_contract: string;
  swap_router_contract: string;
}
export interface ListAllowedResponse {
  allow: AllowedInfo[];
}
export interface AllowedInfo {
  contract: string;
  gas_limit?: number | null;
}
export interface ListChannelsResponse {
  channels: ChannelInfo[];
}
export interface PairQuery {
  key: string;
  pair_mapping: MappingMetadata;
}
export interface MappingMetadata {
  asset_info: AssetInfo;
  asset_info_decimals: number;
  remote_decimals: number;
}
export type ArrayOfPairQuery = PairQuery[];
export interface PortResponse {
  port_id: string;
}