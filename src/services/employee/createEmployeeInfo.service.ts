import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { EmployeeInfo } from "../../entities/employeeInfo.entity";
import { AppError } from "../../errors";
import { IEmployeeInfo } from "../../interfaces/employee";

const createEmployeeInfoService = async (data: IEmployeeInfo): Promise<any> => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.findOneBy({
    id: Number(data.id),
  });

  if (!employee) {
    throw new AppError(404, "Employee not found");
  }

  const employeeInfoRepository = AppDataSource.getRepository(EmployeeInfo);

  const telephone = employee.employeeInfo.find(
    ({ telephone }) => telephone === data.body.telephone
  );

  const address = employee.employeeInfo.find(
    ({ address }) => address === data.body.address
  );

  if (!telephone && !address) {
    const info = employeeInfoRepository.create({
      telephone: data.body.telephone,
      address: data.body.address,
      employee_id: employee,
    });

    await employeeInfoRepository.save(info);

    return info;
  }
};

export default createEmployeeInfoService;
