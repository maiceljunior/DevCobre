import { Request, Response } from "express";
import deleteUserDebtService from "../../services/userDebt/deleteUserDebt.service";

const deleteUserDebtController = async (req: Request, res: Response) => {
  const id = req.params.id;

  await deleteUserDebtService(id);

  return res.status(200).json({ message: "UserDebt deleted witdh sucess!" });
};

export default deleteUserDebtController;
