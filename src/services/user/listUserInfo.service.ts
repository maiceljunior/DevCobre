import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

const listUserInfoService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const userExists = await userRepository.findOneBy({
    id: parseInt(id),
  });

  if (!userExists) {
    throw new AppError(404, "User not found!");
  }

  return userExists;
};

export default listUserInfoService;
