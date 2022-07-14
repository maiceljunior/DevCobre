import { Request, Response } from "express";
import createEmployeeService from "../../services/employee/createEmployee.service";

const createEmployeeController = async (req: Request, res: Response) => {
  const { name, email, status, password } = req.body;

  const newEmployee = await createEmployeeService({
    name,
    email,
    status,
    password,
  });

  return res.status(201).send(newEmployee);
};

export default createEmployeeController;
