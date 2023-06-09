/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import {Admin, Binary, ContractInstantiateInfo, CallbackMsg, ClassId, TokenId, WasmMsg, Uint128, Cw721ReceiveMsg, VoucherCreation, Class, Token, VoucherRedemption, Coin, ClassToken, NullableClassId, NullableClass, Uint64, ArrayOfTupleOfTupleOfClassIdAndTokenIdAndString, NullableAddr, Addr, ArrayOfTupleOfClassIdAndAddr, Expiration, Timestamp, Approval, Boolean, NullableToken} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, OwnerOfResponse} from "./CwIcs721Bridge.types";
export interface CwIcs721BridgeReadOnlyInterface {
  contractAddress: string;
  classId: ({
    contract
  }: {
    contract: string;
  }) => Promise<NullableClassId>;
  nftContract: ({
    classId
  }: {
    classId: string;
  }) => Promise<NullableAddr>;
  classMetadata: ({
    classId
  }: {
    classId: string;
  }) => Promise<NullableClass>;
  tokenMetadata: ({
    classId,
    tokenId
  }: {
    classId: string;
    tokenId: string;
  }) => Promise<NullableToken>;
  owner: ({
    classId,
    tokenId
  }: {
    classId: string;
    tokenId: string;
  }) => Promise<OwnerOfResponse>;
  pauser: () => Promise<NullableAddr>;
  paused: () => Promise<Boolean>;
  proxy: () => Promise<NullableAddr>;
  cw721CodeId: () => Promise<Uint64>;
  nftContracts: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: ClassId;
  }) => Promise<ArrayOfTupleOfClassIdAndAddr>;
  outgoingChannels: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: ClassToken;
  }) => Promise<ArrayOfTupleOfTupleOfClassIdAndTokenIdAndString>;
  incomingChannels: ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: ClassToken;
  }) => Promise<ArrayOfTupleOfTupleOfClassIdAndTokenIdAndString>;
}
export class CwIcs721BridgeQueryClient implements CwIcs721BridgeReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.classId = this.classId.bind(this);
    this.nftContract = this.nftContract.bind(this);
    this.classMetadata = this.classMetadata.bind(this);
    this.tokenMetadata = this.tokenMetadata.bind(this);
    this.owner = this.owner.bind(this);
    this.pauser = this.pauser.bind(this);
    this.paused = this.paused.bind(this);
    this.proxy = this.proxy.bind(this);
    this.cw721CodeId = this.cw721CodeId.bind(this);
    this.nftContracts = this.nftContracts.bind(this);
    this.outgoingChannels = this.outgoingChannels.bind(this);
    this.incomingChannels = this.incomingChannels.bind(this);
  }

  classId = async ({
    contract
  }: {
    contract: string;
  }): Promise<NullableClassId> => {
    return this.client.queryContractSmart(this.contractAddress, {
      class_id: {
        contract
      }
    });
  };
  nftContract = async ({
    classId
  }: {
    classId: string;
  }): Promise<NullableAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nft_contract: {
        class_id: classId
      }
    });
  };
  classMetadata = async ({
    classId
  }: {
    classId: string;
  }): Promise<NullableClass> => {
    return this.client.queryContractSmart(this.contractAddress, {
      class_metadata: {
        class_id: classId
      }
    });
  };
  tokenMetadata = async ({
    classId,
    tokenId
  }: {
    classId: string;
    tokenId: string;
  }): Promise<NullableToken> => {
    return this.client.queryContractSmart(this.contractAddress, {
      token_metadata: {
        class_id: classId,
        token_id: tokenId
      }
    });
  };
  owner = async ({
    classId,
    tokenId
  }: {
    classId: string;
    tokenId: string;
  }): Promise<OwnerOfResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      owner: {
        class_id: classId,
        token_id: tokenId
      }
    });
  };
  pauser = async (): Promise<NullableAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pauser: {}
    });
  };
  paused = async (): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      paused: {}
    });
  };
  proxy = async (): Promise<NullableAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proxy: {}
    });
  };
  cw721CodeId = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cw721_code_id: {}
    });
  };
  nftContracts = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: ClassId;
  }): Promise<ArrayOfTupleOfClassIdAndAddr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nft_contracts: {
        limit,
        start_after: startAfter
      }
    });
  };
  outgoingChannels = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: ClassToken;
  }): Promise<ArrayOfTupleOfTupleOfClassIdAndTokenIdAndString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      outgoing_channels: {
        limit,
        start_after: startAfter
      }
    });
  };
  incomingChannels = async ({
    limit,
    startAfter
  }: {
    limit?: number;
    startAfter?: ClassToken;
  }): Promise<ArrayOfTupleOfTupleOfClassIdAndTokenIdAndString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      incoming_channels: {
        limit,
        start_after: startAfter
      }
    });
  };
}
export interface CwIcs721BridgeInterface extends CwIcs721BridgeReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receiveNft: ({
    msg,
    sender,
    tokenId
  }: {
    msg: Binary;
    sender: string;
    tokenId: string;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  pause: ($fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  callback: (callbackMsg: CallbackMsg, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  receiveProxyNft: ({
    eyeball,
    msg
  }: {
    eyeball: string;
    msg: Cw721ReceiveMsg;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
}
export class CwIcs721BridgeClient extends CwIcs721BridgeQueryClient implements CwIcs721BridgeInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receiveNft = this.receiveNft.bind(this);
    this.pause = this.pause.bind(this);
    this.callback = this.callback.bind(this);
    this.receiveProxyNft = this.receiveProxyNft.bind(this);
  }

  receiveNft = async ({
    msg,
    sender,
    tokenId
  }: {
    msg: Binary;
    sender: string;
    tokenId: string;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive_nft: {
        msg,
        sender,
        token_id: tokenId
      }
    }, $fee, $memo, $funds);
  };
  pause = async ($fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      pause: {}
    }, $fee, $memo, $funds);
  };
  callback = async (callbackMsg: CallbackMsg, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      callback: callbackMsg
    }, $fee, $memo, $funds);
  };
  receiveProxyNft = async ({
    eyeball,
    msg
  }: {
    eyeball: string;
    msg: Cw721ReceiveMsg;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive_proxy_nft: {
        eyeball,
        msg
      }
    }, $fee, $memo, $funds);
  };
}