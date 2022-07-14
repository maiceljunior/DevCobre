import { Request, Response } from "express";
import listClientInfoService from "../../services/client/listClientInfo.service";

const listClientInfoController = async (req: Request, res: Response) => {
  const { document } = req.params;
  //   const teste = document.toString();
  const category = await listClientInfoService(document);
  return res.json(category);
};

export default listClientInfoController;
