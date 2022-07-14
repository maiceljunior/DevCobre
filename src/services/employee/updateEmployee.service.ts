import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors";

import bcrypt from "bcryptjs";

const updateEmployeeService = async (
  id: string,
  name: string,
  password: string,
  email: string
) => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.find();

  const employeeFind = employee.find(
    (employee) => employee.id.toString() === id
  );

  if (!employeeFind) {
    throw new AppError(404, "Employee not found!");
  }

  if (bcrypt.compareSync(password, employeeFind!.password)) {
    throw new AppError(409, "Inform a different password.");
  }

  const newPassword = bcrypt.hashSync(password, 10);

  employeeFind.name = name ? name : employeeFind.name;
  employeeFind.email = email ? email : employeeFind.email;
  employeeFind.password = password ? newPassword : employeeFind.password;

  await employeeRepository.save(employeeFind);

  return true;
};

export default updateEmployeeService;
