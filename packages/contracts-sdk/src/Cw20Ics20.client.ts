/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import {AllowMsg, Uint128, Binary, Cw20ReceiveMsg, TransferMsg, Amount, Coin, Cw20Coin, ChannelInfo, IbcEndpoint, AllowedInfo} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, AdminResponse, AllowedResponse, ChannelResponse, ConfigResponse, ListAllowedResponse, ListChannelsResponse, PortResponse} from "./Cw20Ics20.types";
export interface Cw20Ics20ReadOnlyInterface {
  contractAddress: string;
  port: () => Promise<PortResponse>;
  listChannels: () => Promise<ListChannelsResponse>;
  channel: ({
    id
  }: {
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
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<ListAllowedResponse>;
}
export class Cw20Ics20QueryClient implements Cw20Ics20ReadOnlyInterface {
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
    id
  }: {
    id: string;
  }): Promise<ChannelResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      channel: {
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
    startAfter
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<ListAllowedResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      list_allowed: {
        limit,
        start_after: startAfter
      }
    });
  };
}
export interface Cw20Ics20Interface extends Cw20Ics20ReadOnlyInterface {
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
  transfer: ({
    channel,
    memo,
    remoteAddress,
    timeout
  }: {
    channel: string;
    memo?: string;
    remoteAddress: string;
    timeout?: number;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  allow: ({
    contract,
    gasLimit
  }: {
    contract: string;
    gasLimit?: number;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  updateAdmin: ({
    admin
  }: {
    admin: string;
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
}
export class Cw20Ics20Client extends Cw20Ics20QueryClient implements Cw20Ics20Interface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.transfer = this.transfer.bind(this);
    this.allow = this.allow.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
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
  transfer = async ({
    channel,
    memo,
    remoteAddress,
    timeout
  }: {
    channel: string;
    memo?: string;
    remoteAddress: string;
    timeout?: number;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      transfer: {
        channel,
        memo,
        remote_address: remoteAddress,
        timeout
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
  updateAdmin = async ({
    admin
  }: {
    admin: string;
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_admin: {
        admin
      }
    }, $fee, $memo, $funds);
  };
}