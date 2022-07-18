export interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface IUserReturn {
  id: number;
  name: string;
  email: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
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
  };
}
