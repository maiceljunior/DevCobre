import * as express from "express";
import { IClientRequest } from "../../interfaces/client";

declare global {
  namespace Express {
    interface Request {
      employee: {
        id: number;
      };

      newClient: IClientRequest;
    }
  }
}
