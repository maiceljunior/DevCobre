import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { EmployeeInfo } from "../../entities/employeeInfo.entity";
import { AppError } from "../../errors";
import { IEmployeeInfo } from "../../interfaces/employee";

const createEmployeeInfoService = async ({
  telephone,
  address,
  employee_id,
}: IEmployeeInfo): Promise<EmployeeInfo> => {
  const employeeInfoRepository = AppDataSource.getRepository(EmployeeInfo);
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.findOneBy({
    id: employee_id,
  });

  if (!employee) {
    throw new AppError(404, "Employee not found");
  }

  const info = employeeInfoRepository.create({
    telephone: telephone,
    address: address,
  });

  await employeeInfoRepository.save(info);

  return info;
};

export default createEmployeeInfoService;
