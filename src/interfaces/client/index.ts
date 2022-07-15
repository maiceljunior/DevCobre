export interface IClientRequest {
  document: number;
  name: string;
  type: string;
}

export interface IClientInfoRequest {
  telephone: number;
  email: string;
}

export interface IClientInfo {
  document: number;
  name: string;
  type: string;
  infos: object;
}

export interface IInfoClient {
  document: string;
  body: { telephone?: number; email?: string };
}
