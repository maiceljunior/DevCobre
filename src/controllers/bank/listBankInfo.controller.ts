import { Request, Response } from "express";
import listBankInfoService from "../../services/bank/listBankInfo.service";

const listBankInfoController = async (req: Request, res: Response) => {
  const bankId = req.params.id;

  const banks = await listBankInfoService(bankId);

  return res.status(200).json(banks);
};

export default listBankInfoController;
