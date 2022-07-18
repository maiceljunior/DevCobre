import { Request, Response } from "express";
import listUserInfoService from "../../services/user/listUserInfo.service";

const listUserInfoController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const infoUser = await listUserInfoService(id);

  return res.status(200).json(infoUser);
};

export default listUserInfoController;
