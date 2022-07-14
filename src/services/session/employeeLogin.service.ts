import { AppDataSource } from "../../data-source";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors";
import { IEmployeeLogin } from "../../interfaces/employee";
import * as bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const employeeLoginService = async ({ email, password }: IEmployeeLogin) => {
  const employeeRepository = AppDataSource.getRepository(Employee);

  const employee = await employeeRepository.findOneBy({ email: email });

  if (!employee) {
    throw new AppError(400, "Wrong email/password");
  }

  const passwordMatch = bcryptjs.compareSync(password, employee.password);

  if (!passwordMatch) {
    throw new AppError(400, "Wrong email/password");
  }

  const token = jwt.sign(
    {
      id: employee.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};
export default employeeLoginService;
