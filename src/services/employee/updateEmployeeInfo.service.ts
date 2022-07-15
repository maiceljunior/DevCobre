import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { EmployeeInfo } from "../../entities/employeeInfo.entity";
import { AppError } from "../../errors";

const updateEmployeeInfoService = async (
  id: string,
  employeeId: string,
  data: any
) => {
  const employeeRepository = AppDataSource.getRepository(Employee);
  const findEmployee = await employeeRepository.findOneBy({ id: Number(id) });

  if (!findEmployee) {
    throw new AppError(404, "User not found!");
  }

  const employeeInfoRepository = AppDataSource.getRepository(EmployeeInfo);

  const findEmployeeInfo = await employeeInfoRepository.findOneBy({
    id: Number(employeeId),
  });

  if (!findEmployeeInfo) {
    throw new AppError(404, "User info not found!");
  }

  await employeeInfoRepository.update(employeeId, {
    ...findEmployeeInfo,
    ...data,
  });
  return;
};

export default updateEmployeeInfoService;
