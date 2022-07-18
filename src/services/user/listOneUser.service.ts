import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

const listUserService = async (id: number) => {
  const userRepository = AppDataSource.getTreeRepository(User);

  const user = await userRepository.find();

  const verifyUser = user.find((user) => user.id === id);

  if (!verifyUser) {
    throw new AppError(404, "User not found!");
  }

  return verifyUser;
};

export default listUserService;
