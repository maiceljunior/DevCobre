import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors";

const deleteEmployeeService = async (id: string) => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.findOneBy({ id: parseInt(id) });

  if (!employee) {
    throw new AppError(404, "Employee not found!");
  }

  await employeeRepository.delete({ id: parseInt(id) });

  return true;
};

export default deleteEmployeeService;
