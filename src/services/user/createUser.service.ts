import { AppDataSource } from "../../data-source";

import { User } from "../../entities/user.entity";
import { UserInfo } from "../../entities/userInfo.entity";
import { IUserRequest, IUserReturn } from "../../interfaces/user";

const createUserService = async ({
  name,
}: IUserRequest): Promise<IUserReturn> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create({
    name,
  });

  const userInfo = await userRepository.save(user);

  console.log(userInfo);

  // const userFind = user.find();

  const userInfoRepository = AppDataSource.getRepository(UserInfo);

  return user;
};

export default createUserService;
