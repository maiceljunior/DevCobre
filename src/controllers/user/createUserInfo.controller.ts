import { Request, Response } from "express";
import createUserInfoService from "../../services/user/createUserInfo.service";

const createUserInfoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userInfo = { id, body: req.body };

  const info = await createUserInfoService(userInfo);
  return res.json(info);
};

export default createUserInfoController;
