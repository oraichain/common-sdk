/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import {CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Coin, Empty, IbcTimeout, IbcTimeoutBlock} from "./types";
import {InstantiateMsg, ExecuteMsg, QueryMsg, AdminListResponse, CanExecuteResponse} from "./Cw1Whitelist.types";
export interface Cw1WhitelistReadOnlyInterface {
  contractAddress: string;
  adminList: () => Promise<AdminListResponse>;
  canExecute: ({
    msg,
    sender
  }: {
    msg: CosmosMsgForEmpty;
    sender: string;
  }) => Promise<CanExecuteResponse>;
}
export class Cw1WhitelistQueryClient implements Cw1WhitelistReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.adminList = this.adminList.bind(this);
    this.canExecute = this.canExecute.bind(this);
  }

  adminList = async (): Promise<AdminListResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin_list: {}
    });
  };
  canExecute = async ({
    msg,
    sender
  }: {
    msg: CosmosMsgForEmpty;
    sender: string;
  }): Promise<CanExecuteResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      can_execute: {
        msg,
        sender
      }
    });
  };
}
export interface Cw1WhitelistInterface extends Cw1WhitelistReadOnlyInterface {
  contractAddress: string;
  sender: string;
  execute: ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  freeze: ($fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
  updateAdmins: ({
    admins
  }: {
    admins: string[];
  }, $fee?: number | StdFee | "auto", $memo?: string, $funds?: Coin[]) => Promise<ExecuteResult>;
}
export class Cw1WhitelistClient extends Cw1WhitelistQueryClient implements Cw1WhitelistInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.execute = this.execute.bind(this);
    this.freeze = this.freeze.bind(this);
    this.updateAdmins = this.updateAdmins.bind(this);
  }

  execute = async ({
    msgs
  }: {
    msgs: CosmosMsgForEmpty[];
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute: {
        msgs
      }
    }, $fee, $memo, $funds);
  };
  freeze = async ($fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      freeze: {}
    }, $fee, $memo, $funds);
  };
  updateAdmins = async ({
    admins
  }: {
    admins: string[];
  }, $fee: number | StdFee | "auto" = "auto", $memo?: string, $funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_admins: {
        admins
      }
    }, $fee, $memo, $funds);
  };
}