import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { IUserLogin } from "../../interfaces/user";
import * as bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserInfo } from "../../entities/userInfo.entity";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(UserInfo);

  const user = await userRepository.find();

  if (!user) {
    throw new AppError(400, "Wrong email/password");
  }

  const passwordMatch = bcryptjs.compareSync(password, user.password);

  if (!passwordMatch) {
    throw new AppError(400, "Wrong email/password");
  }

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};
export default userLoginService;
