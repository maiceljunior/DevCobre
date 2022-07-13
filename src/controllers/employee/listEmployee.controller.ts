import { Response, Request } from "express";
import listEmployeeService from "../../services/employee/listEmployee.service";

const listEmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const employee = await listEmployeeService(Number(id));

  res.status(200).send(employee);
};

export default listEmployeeController;
