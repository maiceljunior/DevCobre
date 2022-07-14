import { Request, Response } from "express";
import createEmployeeService from "../../services/employee/createEmployee.service";

const createEmployeeController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const newEmployee = await createEmployeeService({ name, email, password });

  return res.status(201).send(newEmployee);
};

export default createEmployeeController;
