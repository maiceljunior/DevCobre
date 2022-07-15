import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors";

const listEmployeeInfoService = async (id: string) => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employeeExists = await employeeRepository.findOneBy({
    id: parseInt(id),
  });

  if (!employeeExists) {
    throw new AppError(404, "User not found!");
  }

  return employeeExists;
};

export default listEmployeeInfoService;
