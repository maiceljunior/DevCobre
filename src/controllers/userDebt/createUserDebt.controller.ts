import { Request, Response } from "express";
import createUserDebtService from "../../services/userDebt/createUserDebt.service";

const createUserDebtController = async (req: Request, res: Response) => {
  const { debtId, userId } = req.params;
  const { name } = req.body;

  const bankInfo = await createUserDebtService(debtId, userId, name);

  return res.status(200).json(bankInfo);
};

export default createUserDebtController;
