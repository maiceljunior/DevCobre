import { Request, Response } from "express";
import updateEmployeeService from "../../services/employee/updateEmployee.service";

const updateEmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const employee = { id, body: req.body };

  await updateEmployeeService(employee);

  return res.status(200).json({ message: "Employee updated!" });
};

export default updateEmployeeController;
