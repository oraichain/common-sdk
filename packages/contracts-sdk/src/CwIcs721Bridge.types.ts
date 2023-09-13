import {Binary, WasmMsg, Uint128, Coin, Uint64, Addr, Expiration, Timestamp, Approval} from "./types";
export type Admin = {
  address: {
    addr: string;
  };
} | {
  instantiator: {};
};
export interface InstantiateMsg {
  cw721_base_code_id: number;
  pauser?: string | null;
  proxy?: ContractInstantiateInfo | null;
}
export interface ContractInstantiateInfo {
  admin?: Admin | null;
  code_id: number;
  label: string;
  msg: Binary;
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
export interface ClassToken {
  class_id: ClassId;
  token_id: TokenId;
}
export type NullableClassId = ClassId | null;
export type NullableClass = Class | null;
export type ArrayOfTupleOfTupleOfClassIdAndTokenIdAndString = [[ClassId, TokenId], string][];
export type NullableAddr = Addr | null;
export type ArrayOfTupleOfClassIdAndAddr = [ClassId, Addr][];
export interface OwnerOfResponse {
  approvals: Approval[];
  owner: string;
}
export type Boolean = boolean;
export type NullableToken = Token | null;