export interface IEmployeeRequest {
  name: string;
  email: string;
  password: string;
}

export interface IEmployeeReturn {
  id: number;
  name: string;
  email: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface IEmployeeLogin {
  email: string;
  password: string;
}

export interface IEmployeeUpdate {
  id: string;
  body: {
    name?: string;
    email?: string;
    password?: string;
  };
}
