import { Request, Response } from "express";
import listEmployeeInfoService from "../../services/employee/listEmplyeeInfo.service";

const listEmployeeInfoController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const infoEmployee = await listEmployeeInfoService(id);

  return res.status(200).json(infoEmployee);
};

export default listEmployeeInfoController;
