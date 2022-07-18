import { AppDataSource } from "../../data-source";
import * as bcryptjs from "bcryptjs";
import { User } from "../../entities/user.entity";
import { UserInfo } from "../../entities/userInfo.entity";
import { AppError } from "../../errors";
import { IUserRequest } from "../../interfaces/user";

const createUserService = async (data: IUserRequest): Promise<any> => {
  if (
    data.body.name === undefined ||
    data.body.email === undefined ||
    data.body.password === undefined
  ) {
    throw new AppError(
      400,
      "All these fields need to be informed: Name, Email, Password"
    );
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.create({
    name: data.body.name,
  });

  const createUser = await userRepository.save(user);

  const userInfoRepository = AppDataSource.getRepository(UserInfo);

  const hashedPassword = bcryptjs.hashSync(data.body.password, 10);

  const userInfoCreate = userInfoRepository.create({
    telephone: data.body.telephone,
    address: data.body.address,
    email: data.body.email,
    password: hashedPassword,
    status: data.body.status,
    user: createUser,
  });

  await userInfoRepository.save(userInfoCreate);

  const returnUser = {
    id: createUser.id,
    name: createUser.name,
    position: createUser.position,
    infos: {
      email: userInfoCreate.email,
      telephone: userInfoCreate.telephone,
      address: userInfoCreate.address,
    },
  };
  return returnUser;
};

export default createUserService;
