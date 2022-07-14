import { Response, Request } from "express";
import { instanceToPlain } from "class-transformer";
import listEmployeeService from "../../services/employee/listOneEmployee.service";

const listOneEmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const employee = await listEmployeeService(Number(id));

  res.status(200).send(instanceToPlain(employee));
};

export default listOneEmployeeController;
