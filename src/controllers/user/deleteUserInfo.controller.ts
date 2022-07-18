import { Request, Response } from "express";
import deleteUserInfoService from "../../services/user/deleteUserInfo.service";

const deleteUserInfoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.params;

  await deleteUserInfoService(id, userId);

  return res.status(200).json({ message: "User Info delete with success!" });
};

export default deleteUserInfoController;
