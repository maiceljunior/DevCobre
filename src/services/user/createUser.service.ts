import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest, IUserReturn } from "../../interfaces/user";

import bcrypt from "bcryptjs";

const createUserService = async ({
  name,
  email,
  password,
}: IUserRequest): Promise<IUserReturn> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  await userRepository.save(user);

  return user;
};

export default createUserService;
