import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors";
import bcrypt from "bcryptjs";
import { IEmployeeUpdate } from "../../interfaces/employee";

const updateEmployeeService = async (data: IEmployeeUpdate) => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.findOneBy({ id: Number(data.id) });

  if (!employee) {
    throw new AppError(400, "Employee does not exists!");
  }
  const updated_at = new Date();
  const newName = data.body.name;
  const newEmail = data.body.email;

  await employeeRepository.update(employee!.id, {
    updated_at,
    name: newName,
    email: newEmail,
  });

  return;
};

export default updateEmployeeService;
