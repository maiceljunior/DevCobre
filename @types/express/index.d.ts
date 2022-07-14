import * as express from "express";
import { IClientRequest } from "../../src/interfaces/client";

declare global {
  namespace Express {
    interface Request {
      newClient: IClientRequest;
    }
  }
}
