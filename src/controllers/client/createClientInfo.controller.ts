import { Request, Response } from "express";
import { IClientInfoRequest } from "../../interfaces/client";
import createClientInfoService from "../../services/client/createClientInfo.service";

const createClientInfoController = async (req: Request, res: Response) => {
  const document: IClientInfoRequest = req.body;
  const info = await createClientInfoService(document);
  return res.json(info);
};

export default createClientInfoController;
