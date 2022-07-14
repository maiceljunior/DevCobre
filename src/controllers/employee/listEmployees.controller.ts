import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listEmployeesService from "../../services/employee/listEmployees.service";

const listEmployeesController = async (req: Request, res: Response) => {
  const employeesList = await listEmployeesService();

  return res.status(200).json(instanceToPlain(employeesList));
};
export default listEmployeesController;
