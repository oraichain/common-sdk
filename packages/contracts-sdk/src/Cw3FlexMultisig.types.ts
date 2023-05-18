import {Executor, Addr, Duration, Uint128, UncheckedDenom, Threshold, Decimal, UncheckedDepositInfo, Expiration, Timestamp, Uint64, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, Binary, IbcMsg, WasmMsg, GovMsg, VoteOption, Vote, Coin, Empty, IbcTimeout, IbcTimeoutBlock, MemberChangedHookMsg, MemberDiff, Cw4Contract, Denom, Config, DepositInfo, Status, VoterDetail, VoteInfo} from "./types";
export interface InstantiateMsg {
  executor?: Executor | null;
  group_addr: string;
  max_voting_period: Duration;
  proposal_deposit?: UncheckedDepositInfo | null;
  threshold: Threshold;
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
export interface VoteListResponse {
  votes: VoteInfo[];
}
export interface VoteResponse {
  vote?: VoteInfo | null;
}
export interface VoterResponse {
  weight?: number | null;
}