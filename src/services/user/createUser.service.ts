import { AppDataSource } from "../../data-source";
import * as bcryptjs from "bcryptjs";
import { User } from "../../entities/user.entity";
import { UserInfo } from "../../entities/userInfo.entity";
import { AppError } from "../../errors";
import { IUserRequest } from "../../interfaces/user";
import verifyUserType from "../../utils/verifyUserType";

const createUserService = async (data: IUserRequest): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = new User();
  user.name = data.body.name;
  user.position = verifyUserType(data.body.position);

  const createUser = userRepository.create(user);

  const saveUser = await userRepository.save(createUser);
  console.log(saveUser);

  const userInfoRepository = AppDataSource.getRepository(UserInfo);

  const hashedPassword = bcryptjs.hashSync(data.body.password, 10);

  const userInfoCreate = userInfoRepository.create({
    telephone: data.body.telephone,
    address: data.body.address,
    email: data.body.email,
    password: hashedPassword,
    status: data.body.status,
    user: saveUser,
  });

  await userInfoRepository.save(userInfoCreate);

  const returnUser = {
    id: createUser.id,
    name: createUser.name,
    infos: {
      email: userInfoCreate.email,
      telephone: userInfoCreate.telephone,
      address: userInfoCreate.address,
    },
  };
  return returnUser;
};

export default createUserService;
