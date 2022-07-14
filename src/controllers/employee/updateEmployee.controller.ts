import { Request, Response } from "express";
import updateEmployeeService from "../../services/employee/updateEmployee.service";

const updateEmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const { name, email, password } = req.body;

  await updateEmployeeService(id, name, email, password);

  return res.status(200).json({ message: "Employee updated!" });
};

export default updateEmployeeController;
