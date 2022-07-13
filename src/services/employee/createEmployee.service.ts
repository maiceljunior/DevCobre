import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { IEmployeRequest } from "../../interfaces/employee";

import bcrypt from "bcryptjs";

const createEmployeeService = async ({
  name,
  email,
  password,
}: IEmployeRequest) => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = employeeRepository.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  await employeeRepository.save(employee);

  return {
    id: employee.id,
    name: employee.name,
    email: employee.email,
  };
};

export default createEmployeeService;
