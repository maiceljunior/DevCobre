import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

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
  console.log(user);

  return user;
};
export default listUserDebtsService;
