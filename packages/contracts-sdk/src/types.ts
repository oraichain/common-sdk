export type CosmosMsgForEmpty = {
  bank: BankMsg;
} | {
  custom: Empty;
} | {
  staking: StakingMsg;
} | {
  distribution: DistributionMsg;
} | {
  stargate: {
    type_url: string;
    value: Binary;
  };
} | {
  ibc: IbcMsg;
} | {
  wasm: WasmMsg;
} | {
  gov: GovMsg;
};
export type BankMsg = {
  send: {
    amount: Coin[];
    to_address: string;
  };
} | {
  burn: {
    amount: Coin[];
  };
};
export type Uint128 = string;
export type StakingMsg = {
  delegate: {
    amount: Coin;
    validator: string;
  };
} | {
  undelegate: {
    amount: Coin;
    validator: string;
  };
} | {
  redelegate: {
    amount: Coin;
    dst_validator: string;
    src_validator: string;
  };
};
export type DistributionMsg = {
  set_withdraw_address: {
    address: string;
  };
} | {
  withdraw_delegator_reward: {
    validator: string;
  };
};
export type Binary = string;
export type IbcMsg = {
  transfer: {
    amount: Coin;
    channel_id: string;
    timeout: IbcTimeout;
    to_address: string;
  };
} | {
  send_packet: {
    channel_id: string;
    data: Binary;
    timeout: IbcTimeout;
  };
} | {
  close_channel: {
    channel_id: string;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type WasmMsg = {
  execute: {
    contract_addr: string;
    funds: Coin[];
    msg: Binary;
  };
} | {
  instantiate: {
    admin?: string | null;
    code_id: number;
    funds: Coin[];
    label: string;
    msg: Binary;
  };
} | {
  migrate: {
    contract_addr: string;
    msg: Binary;
    new_code_id: number;
  };
} | {
  update_admin: {
    admin: string;
    contract_addr: string;
  };
} | {
  clear_admin: {
    contract_addr: string;
  };
};
export type GovMsg = {
  vote: {
    proposal_id: number;
    vote: VoteOption;
  };
};
export type VoteOption = "yes" | "no" | "abstain" | "no_with_veto";
export interface Coin {
  amount: Uint128;
  denom: string;
}
export interface Empty {}
export interface IbcTimeout {
  block?: IbcTimeoutBlock | null;
  timestamp?: Timestamp | null;
}
export interface IbcTimeoutBlock {
  height: number;
  revision: number;
}
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
export type NativeBalance = Coin[];
export interface AllowanceInfo {
  balance: NativeBalance;
  expires: Expiration;
  spender: string;
}
export interface PermissionsInfo {
  permissions: Permissions;
  spender: string;
}
export interface Allowance {
  balance: NativeBalance;
  expires: Expiration;
}
export type Logo = {
  url: string;
} | {
  embedded: EmbeddedLogo;
};
export type EmbeddedLogo = {
  svg: Binary;
} | {
  png: Binary;
};
export interface Cw20Coin {
  address: string;
  amount: Uint128;
}
export interface InstantiateMarketingInfo {
  description?: string | null;
  logo?: Logo | null;
  marketing?: string | null;
  project?: string | null;
}
export interface SpenderAllowanceInfo {
  allowance: Uint128;
  expires: Expiration;
  owner: string;
}
export type LogoInfo = {
  url: string;
} | "embedded";
export type Addr = string;
export interface AllowMsg {
  contract: string;
  gas_limit?: number | null;
}
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
export type Amount = {
  native: Coin;
} | {
  cw20: Cw20Coin;
};
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
export type Executor = "member" | {
  only: Addr;
};
export type Duration = {
  height: number;
} | {
  time: number;
};
export type UncheckedDenom = {
  native: string;
} | {
  cw20: string;
};
export type Threshold = {
  absolute_count: {
    weight: number;
  };
} | {
  absolute_percentage: {
    percentage: Decimal;
  };
} | {
  threshold_quorum: {
    quorum: Decimal;
    threshold: Decimal;
  };
};
export type Decimal = string;
export interface UncheckedDepositInfo {
  amount: Uint128;
  denom: UncheckedDenom;
  refund_failed_proposals: boolean;
}
export type Vote = "yes" | "no" | "abstain" | "veto";
export interface MemberChangedHookMsg {
  diffs: MemberDiff[];
}
export interface MemberDiff {
  key: string;
  new?: number | null;
  old?: number | null;
}
export type Cw4Contract = Addr;
export type Denom = {
  native: string;
} | {
  cw20: Addr;
};
export interface Config {
  executor?: Executor | null;
  group_addr: Cw4Contract;
  max_voting_period: Duration;
  proposal_deposit?: DepositInfo | null;
  threshold: Threshold;
}
export interface DepositInfo {
  amount: Uint128;
  denom: Denom;
  refund_failed_proposals: boolean;
}
export type Status = "pending" | "open" | "rejected" | "passed" | "executed";
export interface VoterDetail {
  addr: string;
  weight: number;
}
export interface VoteInfo {
  proposal_id: number;
  vote: Vote;
  voter: string;
  weight: number;
}
export interface Voter {
  addr: string;
  weight: number;
}
export interface Member {
  addr: string;
  weight: number;
}
export interface Claim {
  amount: Uint128;
  release_at: Expiration;
}
export type Action = {
  transfer_ownership: {
    expiry?: Expiration | null;
    new_owner: string;
  };
} | "accept_ownership" | "renounce_ownership";
export interface Approval {
  expires: Expiration;
  spender: string;
}
export type Null = null;
export interface OwnershipForString {
  owner?: string | null;
  pending_expiry?: Expiration | null;
  pending_owner?: string | null;
}
export type AssetInfo = {
  token: {
    contract_addr: Addr;
  };
} | {
  native_token: {
    denom: string;
  };
};
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
export type Admin = {
  address: {
    addr: string;
  };
} | {
  instantiator: {};
};
export interface ContractInstantiateInfo {
  admin?: Admin | null;
  code_id: number;
  label: string;
  msg: Binary;
}
export type CallbackMsg = {
  create_vouchers: {
    create: VoucherCreation;
    receiver: string;
  };
} | {
  redeem_vouchers: {
    receiver: string;
    redeem: VoucherRedemption;
  };
} | {
  mint: {
    class_id: ClassId;
    receiver: string;
    tokens: Token[];
  };
} | {
  conjunction: {
    operands: WasmMsg[];
  };
};
export type ClassId = string;
export type TokenId = string;
export interface Cw721ReceiveMsg {
  msg: Binary;
  sender: string;
  token_id: string;
}
export interface VoucherCreation {
  class: Class;
  tokens: Token[];
}
export interface Class {
  data?: Binary | null;
  id: ClassId;
  uri?: string | null;
}
export interface Token {
  data?: Binary | null;
  id: TokenId;
  uri?: string | null;
}
export interface VoucherRedemption {
  class: Class;
  token_ids: TokenId[];
}
export interface ClassToken {
  class_id: ClassId;
  token_id: TokenId;
}
export type NullableClassId = ClassId | null;
export type NullableClass = Class | null;
export type ArrayOfTupleOfTupleOfClassIdAndTokenIdAndString = [[ClassId, TokenId], string][];
export type NullableAddr = Addr | null;
export type ArrayOfTupleOfClassIdAndAddr = [ClassId, Addr][];
export type Boolean = boolean;
export type NullableToken = Token | null;
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
export { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";