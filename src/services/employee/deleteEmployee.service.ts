import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors";

const deleteEmployeeService = async (id: string) => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.find();

  const employeeFind = employee.find(
    (employee) => employee.id.toString() === id
  );

  if (!employeeFind) {
    throw new AppError(404, "Employee not found!");
  }
  await employeeRepository.delete(employeeFind.id);

  return true;
};

export default deleteEmployeeService;
