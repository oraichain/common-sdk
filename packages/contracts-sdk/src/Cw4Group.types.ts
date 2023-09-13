import {Member, Uint64} from "./types";
export interface InstantiateMsg {
  admin?: string | null;
  members: Member[];
}
export type ExecuteMsg = {
  update_admin: {
    admin?: string | null;
  };
} | {
  update_members: {
    add: Member[];
    remove: string[];
  };
} | {
  add_hook: {
    addr: string;
  };
} | {
  remove_hook: {
    addr: string;
  };
};
export type QueryMsg = {
  admin: {};
} | {
  total_weight: {
    at_height?: number | null;
  };
} | {
  list_members: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  member: {
    addr: string;
    at_height?: number | null;
  };
} | {
  hooks: {};
};
export interface AdminResponse {
  admin?: string | null;
}
export interface HooksResponse {
  hooks: string[];
}
export interface MemberListResponse {
  members: Member[];
}
export interface MemberResponse {
  weight?: number | null;
}