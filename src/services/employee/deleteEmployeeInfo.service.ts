import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { EmployeeInfo } from "../../entities/employeeInfo.entity";
import { AppError } from "../../errors";

const deleteEmployeeInfoService = async (id: string, employeeId: string) => {
  const employeeRepository = AppDataSource.getRepository(Employee);
  const findEmployee = await employeeRepository.findOneBy({ id: Number(id) });

  if (!findEmployee) {
    throw new AppError(404, "User not found!");
  }

  const findEmployeeInfo = findEmployee.employeeInfo.find(
    (info) => info.id === Number(employeeId)
  );

  if (!findEmployeeInfo) {
    throw new AppError(404, "User info not found!");
  }

  const employeeInfoRepository = AppDataSource.getRepository(EmployeeInfo);

  await employeeInfoRepository.delete({ id: Number(employeeId) });

  return;
};

export default deleteEmployeeInfoService;
