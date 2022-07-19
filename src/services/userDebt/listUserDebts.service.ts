import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { UserInfo } from "../../entities/userInfo.entity";

const listUserDebtsService = async (id: any) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.find({
    where: {
      id: id,
    },
    relations: {
      debts: true,
    },
  });

  return user;
};
export default listUserDebtsService;
