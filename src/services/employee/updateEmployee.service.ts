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

  if (!data.body.password) {
    await employeeRepository.update(data.id, {
      ...employee,
      ...data.body,
      updated_at,
    });

    return;
  }

  if (data.body.password) {
    await employeeRepository.update(data.id, {
      ...employee,
      ...data.body,
      password: bcrypt.hashSync(data.body.password, 10),
      updated_at,
    });
    return;
  }
};

export default updateEmployeeService;
