import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";

const listEmployeeService = async (id: number) => {
  const employeeRepository = AppDataSource.getTreeRepository(Employee);

  const employee = await employeeRepository.find();

  const verifyEmployee = employee.find((employee) => employee.id === id);

  if (!verifyEmployee) {
    throw new Error("User not found");
  }

  return {
    id: verifyEmployee.id,
    name: verifyEmployee.name,
    email: verifyEmployee.email,
    created_at: verifyEmployee.created_at,
    updated_at: verifyEmployee.updated_at,
  };
};

export default listEmployeeService;
