import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors";

const listEmployeeInfoService = async (id: string) => {
  const employeeRepository = AppDataSource.getRepository(Employee);
  const employeeAccount = await employeeRepository.find();

  const findEmployee = employeeAccount.find(
    (employee) => employee.id === Number(id)
  );

  if (!findEmployee) {
    throw new AppError(404, "User not found!");
  }

  return findEmployee;
};

export default listEmployeeInfoService;
