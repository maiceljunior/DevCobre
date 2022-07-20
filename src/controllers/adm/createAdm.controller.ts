import { Request, Response } from "express";
import createAdmService from "../../services/adm/createAdm.service";

const createAdmController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const newAdm = await createAdmService({ email, password });

  return res.status(201).json(newAdm);
};

export default createAdmController;
