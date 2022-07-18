import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserLogin } from "../../interfaces/user";
import * as bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const userLoginService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email: email });

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
