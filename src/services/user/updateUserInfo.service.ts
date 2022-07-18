import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserInfo } from "../../entities/userInfo.entity";
import { AppError } from "../../errors";

const updateUserInfoService = async (id: string, userId: string, data: any) => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: Number(id) });

  if (!findUser) {
    throw new AppError(404, "User not found!");
  }

  const userInfoRepository = AppDataSource.getRepository(UserInfo);

  const findUserInfo = await userInfoRepository.findOneBy({
    id: Number(userId),
  });

  if (!findUserInfo) {
    throw new AppError(404, "User info not found!");
  }

  await userInfoRepository.update(userId, {
    ...findUserInfo,
    ...data,
  });
  return;
};

export default updateUserInfoService;
