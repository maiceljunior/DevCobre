import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import { Employee } from "../entities/employee.entity";
import { AppError } from "../errors";

const duplicatedEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.findOneBy({ email });

  if (employee) {
    throw new AppError(409, "Email already exists");
  }

  next();
};

export default duplicatedEmailMiddleware;
