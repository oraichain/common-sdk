import {Admin, Binary, ContractInstantiateInfo, CallbackMsg, ClassId, TokenId, WasmMsg, Uint128, Cw721ReceiveMsg, VoucherCreation, Class, Token, VoucherRedemption, Coin, ClassToken, NullableClassId, NullableClass, Uint64, ArrayOfTupleOfTupleOfClassIdAndTokenIdAndString, NullableAddr, Addr, ArrayOfTupleOfClassIdAndAddr, Expiration, Timestamp, Approval, Boolean, NullableToken} from "./types";
export interface InstantiateMsg {
  cw721_base_code_id: number;
  pauser?: string | null;
  proxy?: ContractInstantiateInfo | null;
}
export type ExecuteMsg = {
  receive_nft: Cw721ReceiveMsg;
} | {
  pause: {};
} | {
  callback: CallbackMsg;
} | {
  receive_proxy_nft: {
    eyeball: string;
    msg: Cw721ReceiveMsg;
  };
};
export type QueryMsg = {
  class_id: {
    contract: string;
  };
} | {
  nft_contract: {
    class_id: string;
  };
} | {
  class_metadata: {
    class_id: string;
  };
} | {
  token_metadata: {
    class_id: string;
    token_id: string;
  };
} | {
  owner: {
    class_id: string;
    token_id: string;
  };
} | {
  pauser: {};
} | {
  paused: {};
} | {
  proxy: {};
} | {
  cw721_code_id: {};
} | {
  nft_contracts: {
    limit?: number | null;
    start_after?: ClassId | null;
  };
} | {
  outgoing_channels: {
    limit?: number | null;
    start_after?: ClassToken | null;
  };
} | {
  incoming_channels: {
    limit?: number | null;
    start_after?: ClassToken | null;
  };
};
export interface OwnerOfResponse {
  approvals: Approval[];
  owner: string;
}