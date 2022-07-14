import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Employee } from "../entities/employee.entity";

const duplicatedEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.findOneBy({ email });

  if (employee) {
    res.statusCode = 422;
    return res.json({ error: "email already exists" });
  }

  next();
};

export default duplicatedEmailMiddleware;
