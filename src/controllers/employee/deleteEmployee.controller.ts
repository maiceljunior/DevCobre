import { Request, Response } from "express";
import deleteEmployeeService from "../../services/employee/deleteEmployee.service";

const deleteEmployeeController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await deleteEmployeeService(id);

  return res.status(200).json({ message: "Employee deleted!" });
};

export default deleteEmployeeController;
