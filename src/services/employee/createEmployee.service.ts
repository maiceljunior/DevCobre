import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { IEmployeeRequest, IEmployeeReturn } from "../../interfaces/employee";

import bcrypt from "bcryptjs";

const createEmployeeService = async ({
  name,
  email,
  password,
}: IEmployeeRequest): Promise<IEmployeeReturn> => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = employeeRepository.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  await employeeRepository.save(employee);

  return employee;
};

export default createEmployeeService;
