import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { IEmployeRequest } from "../../interfaces/employee";

import bcrypt from "bcryptjs";

const createEmployeeService = async ({
  name,
  email,
  password,
  status,
}: IEmployeRequest) => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = employeeRepository.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    status,
  });

  await employeeRepository.save(employee);

  return {
    id: employee.id,
    name: employee.name,
    email: employee.email,
    status: employee.status,
    created_at: employee.created_at,
    updated_at: employee.updated_at,
  };
};

export default createEmployeeService;
