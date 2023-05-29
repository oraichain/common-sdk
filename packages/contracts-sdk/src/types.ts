export type CosmosMsgForEmpty = {
  bank: BankMsg;
} | {
  custom: Empty;
} | {
  staking: StakingMsg;
} | {
  distribution: DistributionMsg;
} | {
  wasm: WasmMsg;
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
export type Binary = string;
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface Coin {
  amount: Uint128;
  denom: string;
}
export interface Empty {}
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
export type GovMsg = {
  vote: {
    proposal_id: number;
    vote: VoteOption;
  };
};
export type VoteOption = "yes" | "no" | "abstain" | "no_with_veto";
export interface IbcTimeout {
  block?: IbcTimeoutBlock | null;
  timestamp?: Timestamp | null;
}
export interface IbcTimeoutBlock {
  height: number;
  revision: number;
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
export type Duration = {
  height: number;
} | {
  time: number;
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
export interface Voter {
  addr: string;
  weight: number;
}
export type Vote = "yes" | "no" | "abstain" | "veto";
export type Denom = {
  native: string;
} | {
  cw20: Addr;
};
export type Status = "pending" | "open" | "rejected" | "passed" | "executed";
export interface DepositInfo {
  amount: Uint128;
  denom: Denom;
  refund_failed_proposals: boolean;
}
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
export type UncheckedDenom = {
  native: string;
} | {
  cw20: string;
};
export interface UncheckedDepositInfo {
  amount: Uint128;
  denom: UncheckedDenom;
  refund_failed_proposals: boolean;
}
export interface MemberChangedHookMsg {
  diffs: MemberDiff[];
}
export interface MemberDiff {
  key: string;
  new?: number | null;
  old?: number | null;
}
export type Cw4Contract = Addr;
export interface Config {
  executor?: Executor | null;
  group_addr: Cw4Contract;
  max_voting_period: Duration;
  proposal_deposit?: DepositInfo | null;
  threshold: Threshold;
}
export interface Member {
  addr: string;
  weight: number;
}
export interface Claim {
  amount: Uint128;
  release_at: Expiration;
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
export interface RelayerFee {
  chain: string;
  ratio: Ratio;
}
export interface Ratio {
  denominator: number;
  nominator: number;
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