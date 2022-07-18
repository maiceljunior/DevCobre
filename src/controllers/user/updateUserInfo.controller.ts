import { Request, Response } from "express";
import updateUserInfoService from "../../services/user/updateUserInfo.service";

const updateUserInfoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId } = req.params;
  const data = req.body;

  await updateUserInfoService(id, userId, data);

  return res.status(200).json({ message: "User updated with success" });
};

export default updateUserInfoController;
