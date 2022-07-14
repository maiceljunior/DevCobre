import { Request, Response } from "express";
import employeeLoginService from "../../services/session/employeeLogin.service";

const employeeLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const employeeLogin = await employeeLoginService({ email, password });

  return res.status(200).json({ token: employeeLogin });
};

export default employeeLoginController;
