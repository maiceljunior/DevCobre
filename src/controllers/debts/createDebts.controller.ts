import { Request, Response } from "express";
import createDebtsService from "../../services/debts/createDebts.service";

const createDebtsController = async (req: Request, res: Response) => {
  const data = req.body;

  const debt = await createDebtsService(data);

  return res.status(200).json(debt);
};

export default createDebtsController;
