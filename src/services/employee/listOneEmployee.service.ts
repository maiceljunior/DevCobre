import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors";

const listEmployeeService = async (id: number) => {
  const employeeRepository = AppDataSource.getTreeRepository(Employee);

  const employee = await employeeRepository.find();

  const verifyEmployee = employee.find((employee) => employee.id === id);

  if (!verifyEmployee) {
    throw new AppError(404, "Employee not found!");
  }

  return verifyEmployee;
};

export default listEmployeeService;
