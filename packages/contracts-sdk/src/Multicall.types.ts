import {Addr, Binary} from "./types";
export interface InstantiateMsg {}
export type ExecuteMsg = string;
export type QueryMsg = {
  contract_version: {};
} | {
  aggregate: {
    queries: Call[];
  };
} | {
  try_aggregate: {
    include_cause?: boolean | null;
    queries: Call[];
    require_success?: boolean | null;
  };
} | {
  try_aggregate_optional: {
    include_cause?: boolean | null;
    queries: CallOptional[];
  };
} | {
  block_aggregate: {
    queries: Call[];
  };
} | {
  block_try_aggregate: {
    include_cause?: boolean | null;
    queries: Call[];
    require_success?: boolean | null;
  };
} | {
  block_try_aggregate_optional: {
    include_cause?: boolean | null;
    queries: CallOptional[];
  };
};
export interface Call {
  address: Addr;
  data: Binary;
}
export interface CallOptional {
  address: Addr;
  data: Binary;
  require_success: boolean;
}
export interface MigrateMsg {}
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