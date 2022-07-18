import { Request, Response } from "express";
import createBankService from "../../services/bank/createBank.service";

const createBankController = async (req: Request, res: Response) => {
  const { name, status } = req.newBank;
  const newBank = await createBankService({ name, status });
  return res.status(201).json(newBank);
};

export default createBankController;
