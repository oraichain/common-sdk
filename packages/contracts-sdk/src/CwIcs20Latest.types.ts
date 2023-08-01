import {AllowMsg, Uint128, Binary, AssetInfo, Addr, Cw20ReceiveMsg, TransferBackMsg, UpdatePairMsg, DeletePairMsg, RelayerFee, TokenFee, Ratio, Amount, Coin, Cw20Coin, ChannelInfo, IbcEndpoint, AllowedInfo, PairQuery, MappingMetadata, ArrayOfPairQuery} from "./types";
export interface InstantiateMsg {
  allowlist: AllowMsg[];
  default_gas_limit?: number | null;
  default_timeout: number;
  gov_contract: string;
  swap_router_contract: string;
}
export type ExecuteMsg = {
  receive: Cw20ReceiveMsg;
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
    fee_receiver?: string | null;
    relayer_fee?: RelayerFee[] | null;
    relayer_fee_receiver?: string | null;
    swap_router_contract?: string | null;
    token_fee?: TokenFee[] | null;
  };
};
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
} | {
  get_transfer_token_fee: {
    remote_token_denom: string;
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
  fee_denom: string;
  gov_contract: string;
  relayer_fee_receiver: Addr;
  relayer_fees: RelayerFeeResponse[];
  swap_router_contract: string;
  token_fee_receiver: Addr;
  token_fees: TokenFee[];
}
export interface RelayerFeeResponse {
  amount: Uint128;
  prefix: string;
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