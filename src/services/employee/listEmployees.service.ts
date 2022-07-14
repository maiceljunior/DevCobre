import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";

const listEmployeesService = async (): Promise<Employee[]> => {
  const employeesRepository = AppDataSource.getRepository(Employee);
  const employees = await employeesRepository.find();

  return employees;
};
export default listEmployeesService;
