import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserInfo } from "../../entities/userInfo.entity";
import { AppError } from "../../errors";
import { IUserInfo } from "../../interfaces/user";

const createUserInfoService = async (data: IUserInfo): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: Number(data.id),
  });

  if (!user) {
    throw new AppError(404, "User not found");
  }

  const userInfoRepository = AppDataSource.getRepository(UserInfo);

  const telephone = user.userInfo.find(
    ({ telephone }) => telephone === data.body.telephone
  );

  const address = user.userInfo.find(
    ({ address }) => address === data.body.address
  );

  if (!telephone && !address) {
    const info = userInfoRepository.create({
      telephone: data.body.telephone,
      address: data.body.address,
      user: user,
    });

    await userInfoRepository.save(info);

    return info;
  }

  throw new AppError(404, "information already exists!");
};

export default createUserInfoService;
