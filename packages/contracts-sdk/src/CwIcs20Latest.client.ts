/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import {AllowMsg, Uint128, Binary, AssetInfo, Addr, Cw20ReceiveMsg, TransferBackMsg, UpdatePairMsg, DeletePairMsg, RelayerFee, TokenFee, Ratio, Amount, Coin, Cw20Coin, ChannelInfo, IbcEndpoint, AllowedInfo, PairQuery, MappingMetadata, ArrayOfPairQuery} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, AdminResponse, AllowedResponse, ChannelResponse, ConfigResponse, RelayerFeeResponse, ListAllowedResponse, ListChannelsResponse, PortResponse} from "./CwIcs20Latest.types";
export interface CwIcs20LatestReadOnlyInterface {
  contractAddress: string;
  port: () => Promise<PortResponse>;
  listChannels: () => Promise<ListChannelsResponse>;
  channel: ({
    forward,
    id
  }: {
    forward?: boolean;
    id: string;
  }) => Promise<ChannelResponse>;
  config: () => Promise<ConfigResponse>;
  admin: () => Promise<AdminResponse>;
  allowed: ({
    contract
  }: {
    contract: string;
  }) => Promise<AllowedResponse>;
  listAllowed: ({
    limit,
    order,
    startAfter
  }: {
    limit?: number;
    order?: number;
    startAfter?: string;
  }) => Promise<ListAllowedResponse>;
  pairMappings: ({
    limit,
    order,
    startAfter
  }: {
    limit?: number;
    order?: number;
    startAfter?: string;
  }) => Promise<Addr>;
  pairMapping: ({
    key
  }: {
    key: string;
  }) => Promise<PairQuery>;
  pairMappingsFromAssetInfo: ({
    assetInfo
  }: {
    assetInfo: AssetInfo;
  }) => Promise<ArrayOfPairQuery>;
  getTransferTokenFee: ({
    remoteTokenDenom
  }: {
    remoteTokenDenom: string;
  }) => Promise<Ratio>;
}
export class CwIcs20LatestQueryClient implements CwIcs20LatestReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.port = this.port.bind(this);
    this.listChannels = this.listChannels.bind(this);
    this.channel = this.channel.bind(this);
    this.config = this.config.bind(this);
    this.admin = this.admin.bind(this);
    this.allowed = this.allowed.bind(this);
    this.listAllowed = this.listAllowed.bind(this);
    this.pairMappings = this.pairMappings.bind(this);
    this.pairMapping = this.pairMapping.bind(this);
    this.pairMappingsFromAssetInfo = this.pairMappingsFromAssetInfo.bind(this);
    this.getTransferTokenFee = this.getTransferTokenFee.bind(this);
  }

  port = async (): Promise<PortResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      port: {}
    });
  };
  listChannels = async (): Promise<ListChannelsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_channels: {}
    });
  };
  channel = async ({
    forward,
    id
  }: {
    forward?: boolean;
    id: string;
  }): Promise<ChannelResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      channel: {
        forward,
        id
      }
    });
  };
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  admin = async (): Promise<AdminResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin: {}
    });
  };
  allowed = async ({
    contract
  }: {
    contract: string;
  }): Promise<AllowedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      allowed: {
        contract
      }
    });
  };
  listAllowed = async ({
    limit,
    order,
    startAfter
  }: {
    limit?: number;
    order?: number;
    startAfter?: string;
  }): Promise<ListAllowedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_allowed: {
        limit,
        order,
        start_after: startAfter
      }
    });
  };
  pairMappings = async ({
    limit,
    order,
    startAfter
  }: {
    limit?: number;
    order?: number;
    startAfter?: string;
  }): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pair_mappings: {
        limit,
        order,
        start_after: startAfter
      }
    });
  };
  pairMapping = async ({
    key
  }: {
    key: string;
  }): Promise<PairQuery> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pair_mapping: {
        key
      }
    });
  };
  pairMappingsFromAssetInfo = async ({
    assetInfo
  }: {
    assetInfo: AssetInfo;
  }): Promise<ArrayOfPairQuery> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pair_mappings_from_asset_info: {
        asset_info: assetInfo
      }
    });
  };
  getTransferTokenFee = async ({
    remoteTokenDenom
  }: {
    remoteTokenDenom: string;
  }): Promise<Ratio> => {
    return this.client.queryContractSmart(this.contractAddress, {
      get_transfer_token_fee: {
        remote_token_denom: remoteTokenDenom
      }
    });
  };
}
export interface CwIcs20LatestInterface extends CwIcs20LatestReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  transferToRemote: ({
    localChannelId,
    memo,
    remoteAddress,
    remoteDenom,
    timeout
  }: {
    localChannelId: string;
    memo?: string;
    remoteAddress: string;
    remoteDenom: string;
    timeout?: number;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  updateMappingPair: ({
    assetInfo,
    assetInfoDecimals,
    denom,
    localChannelId,
    remoteDecimals
  }: {
    assetInfo: AssetInfo;
    assetInfoDecimals: number;
    denom: string;
    localChannelId: string;
    remoteDecimals: number;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  deleteMappingPair: ({
    denom,
    localChannelId
  }: {
    denom: string;
    localChannelId: string;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  allow: ({
    contract,
    gasLimit
  }: {
    contract: string;
    gasLimit?: number;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    admin,
    defaultGasLimit,
    defaultTimeout,
    feeDenom,
    feeReceiver,
    relayerFee,
    relayerFeeReceiver,
    swapRouterContract,
    tokenFee
  }: {
    admin?: string;
    defaultGasLimit?: number;
    defaultTimeout?: number;
    feeDenom?: string;
    feeReceiver?: string;
    relayerFee?: RelayerFee[];
    relayerFeeReceiver?: string;
    swapRouterContract?: string;
    tokenFee?: TokenFee[];
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
}
export class CwIcs20LatestClient extends CwIcs20LatestQueryClient implements CwIcs20LatestInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.transferToRemote = this.transferToRemote.bind(this);
    this.updateMappingPair = this.updateMappingPair.bind(this);
    this.deleteMappingPair = this.deleteMappingPair.bind(this);
    this.allow = this.allow.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
  }

  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, $fee, $memo, $funds);
  };
  transferToRemote = async ({
    localChannelId,
    memo,
    remoteAddress,
    remoteDenom,
    timeout
  }: {
    localChannelId: string;
    memo?: string;
    remoteAddress: string;
    remoteDenom: string;
    timeout?: number;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      transfer_to_remote: {
        local_channel_id: localChannelId,
        memo,
        remote_address: remoteAddress,
        remote_denom: remoteDenom,
        timeout
      }
    }, $fee, $memo, $funds);
  };
  updateMappingPair = async ({
    assetInfo,
    assetInfoDecimals,
    denom,
    localChannelId,
    remoteDecimals
  }: {
    assetInfo: AssetInfo;
    assetInfoDecimals: number;
    denom: string;
    localChannelId: string;
    remoteDecimals: number;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_mapping_pair: {
        asset_info: assetInfo,
        asset_info_decimals: assetInfoDecimals,
        denom,
        local_channel_id: localChannelId,
        remote_decimals: remoteDecimals
      }
    }, $fee, $memo, $funds);
  };
  deleteMappingPair = async ({
    denom,
    localChannelId
  }: {
    denom: string;
    localChannelId: string;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      delete_mapping_pair: {
        denom,
        local_channel_id: localChannelId
      }
    }, $fee, $memo, $funds);
  };
  allow = async ({
    contract,
    gasLimit
  }: {
    contract: string;
    gasLimit?: number;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      allow: {
        contract,
        gas_limit: gasLimit
      }
    }, $fee, $memo, $funds);
  };
  updateConfig = async ({
    admin,
    defaultGasLimit,
    defaultTimeout,
    feeDenom,
    feeReceiver,
    relayerFee,
    relayerFeeReceiver,
    swapRouterContract,
    tokenFee
  }: {
    admin?: string;
    defaultGasLimit?: number;
    defaultTimeout?: number;
    feeDenom?: string;
    feeReceiver?: string;
    relayerFee?: RelayerFee[];
    relayerFeeReceiver?: string;
    swapRouterContract?: string;
    tokenFee?: TokenFee[];
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        admin,
        default_gas_limit: defaultGasLimit,
        default_timeout: defaultTimeout,
        fee_denom: feeDenom,
        fee_receiver: feeReceiver,
        relayer_fee: relayerFee,
        relayer_fee_receiver: relayerFeeReceiver,
        swap_router_contract: swapRouterContract,
        token_fee: tokenFee
      }
    }, $fee, $memo, $funds);
  };
}