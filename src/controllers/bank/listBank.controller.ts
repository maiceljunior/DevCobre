import { Request, Response } from "express";
import listBankService from "../../services/bank/listBank.service";

const listBankController = async (req: Request, res: Response) => {
  const banks = await listBankService();

  return res.json(banks);
};

export default listBankController;
