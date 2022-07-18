import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserInfo } from "../../entities/userInfo.entity";
import { AppError } from "../../errors";

const deleteUserInfoService = async (id: string, userId: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({ id: Number(id) });

  if (!findUser) {
    throw new AppError(404, "User not found!");
  }

  const findUserInfo = findUser.userInfo.find(
    (info) => info.id === Number(userId)
  );

  if (!findUserInfo) {
    throw new AppError(404, "User info not found!");
  }

  const userInfoRepository = AppDataSource.getRepository(UserInfo);

  await userInfoRepository.delete({ id: Number(userId) });

  return;
};

export default deleteUserInfoService;
