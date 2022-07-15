import { Request, Response } from "express";
import { IEmployeeInfo } from "../../interfaces/employee";
import createEmployeeInfoService from "../../services/employee/createEmployeeInfo.service";

const createEmployeeInfoController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const emplyoeeInfo = { id, body: req.body };

  const info = await createEmployeeInfoService(emplyoeeInfo);
  return res.json(info);
};

export default createEmployeeInfoController;
