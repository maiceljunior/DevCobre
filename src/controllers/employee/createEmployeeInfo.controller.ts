import { Request, Response } from "express";
import { IEmployeeInfo } from "../../interfaces/employee";
import createEmployeeInfoService from "../../services/employee/createEmployeeInfo.service";

const createEmployeeInfoController = async (req: Request, res: Response) => {
  const employee_id: IEmployeeInfo = req.body;
  const info = await createEmployeeInfoService(employee_id);
  return res.json(info);
};

export default createEmployeeInfoController;
