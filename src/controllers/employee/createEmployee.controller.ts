import { Request, Response } from "express";
import createEmployeeService from "../../services/employee/createEmployee.service";

const createEmployeeController = async (req: Request, res: Response) => {
  const { name, email, password, status } = req.body;

  const newEmployee = await createEmployeeService({
    name,
    email,
    password,
    status,
  });

  return res.status(201).send(newEmployee);
};

export default createEmployeeController;
