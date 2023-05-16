export type Addr = string;
export type Binary = string;
export interface Call {
  address: Addr;
  data: Binary;
}
export interface CallOptional {
  address: Addr;
  data: Binary;
  require_success: boolean;
}
export interface AggregateResult {
  return_data: CallResult[];
}
export interface CallResult {
  data: Binary;
  success: boolean;
}
export interface BlockAggregateResult {
  block: number;
  return_data: CallResult[];
}
export interface ContractVersion {
  contract: string;
  version: string;
}
export interface AllowMsg {
  contract: string;
  gas_limit?: number | null;
}
export type Uint128 = string;
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
export type Amount = {
  native: Coin;
} | {
  cw20: Cw20Coin;
};
export interface Coin {
  amount: Uint128;
  denom: string;
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
export interface IbcEndpoint {
  channel_id: string;
  port_id: string;
}
export interface AllowedInfo {
  contract: string;
  gas_limit?: number | null;
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