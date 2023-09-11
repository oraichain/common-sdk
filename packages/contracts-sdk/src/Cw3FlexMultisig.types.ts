import {Addr, Uint128, Decimal, Timestamp, Uint64, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, Binary, IbcMsg, WasmMsg, GovMsg, VoteOption, Coin, Empty, IbcTimeout, IbcTimeoutBlock} from "./types";
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
export interface InstantiateMsg {
  executor?: Executor | null;
  group_addr: string;
  max_voting_period: Duration;
  proposal_deposit?: UncheckedDepositInfo | null;
  threshold: Threshold;
}
export interface UncheckedDepositInfo {
  amount: Uint128;
  denom: UncheckedDenom;
  refund_failed_proposals: boolean;
}
export type ExecuteMsg = {
  propose: {
    description: string;
    latest?: Expiration | null;
    msgs: CosmosMsgForEmpty[];
    title: string;
  };
} | {
  vote: {
    proposal_id: number;
    vote: Vote;
  };
} | {
  execute: {
    proposal_id: number;
  };
} | {
  close: {
    proposal_id: number;
  };
} | {
  member_changed_hook: MemberChangedHookMsg;
};
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Vote = "yes" | "no" | "abstain" | "veto";
export interface MemberChangedHookMsg {
  diffs: MemberDiff[];
}
export interface MemberDiff {
  key: string;
  new?: number | null;
  old?: number | null;
}
export type QueryMsg = {
  threshold: {};
} | {
  proposal: {
    proposal_id: number;
  };
} | {
  list_proposals: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  reverse_proposals: {
    limit?: number | null;
    start_before?: number | null;
  };
} | {
  vote: {
    proposal_id: number;
    voter: string;
  };
} | {
  list_votes: {
    limit?: number | null;
    proposal_id: number;
    start_after?: string | null;
  };
} | {
  voter: {
    address: string;
  };
} | {
  list_voters: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  config: {};
};
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
export type ThresholdResponse = {
  absolute_count: {
    total_weight: number;
    weight: number;
  };
} | {
  absolute_percentage: {
    percentage: Decimal;
    total_weight: number;
  };
} | {
  threshold_quorum: {
    quorum: Decimal;
    threshold: Decimal;
    total_weight: number;
  };
};
export interface ProposalListResponseForEmpty {
  proposals: ProposalResponseForEmpty[];
}
export interface ProposalResponseForEmpty {
  deposit?: DepositInfo | null;
  description: string;
  expires: Expiration;
  id: number;
  msgs: CosmosMsgForEmpty[];
  proposer: Addr;
  status: Status;
  threshold: ThresholdResponse;
  title: string;
}
export interface VoterListResponse {
  voters: VoterDetail[];
}
export interface VoterDetail {
  addr: string;
  weight: number;
}
export interface VoteListResponse {
  votes: VoteInfo[];
}
export interface VoteInfo {
  proposal_id: number;
  vote: Vote;
  voter: string;
  weight: number;
}
export interface VoteResponse {
  vote?: VoteInfo | null;
}
export interface VoterResponse {
  weight?: number | null;
}