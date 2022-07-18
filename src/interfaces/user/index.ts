export interface IUserRequest {
  body: {
    name: string;
    email: string;
    password: string;
    position: string;
    telephone?: number;
    address?: string;
    status?: boolean;
  };
}

export interface IUserReturn {
  id: number;
  name: string;
  position: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  id: string;
  body: {
    name?: string;
    email?: string;
    password?: string;
  };
}

export interface IUserInfo {
  id: string;
  body: {
    telephone: number;
    address: string;
    emai: string;
    password: string;
    status: boolean;
    created_at: string;
    updated_at: string;
  };
}
