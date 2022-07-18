import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

import { IUserUpdate } from "../../interfaces/user";

const updateUserService = async (data: IUserUpdate) => {
  // const userRepository = AppDataSource.getRepository(User);
  // const user = await userRepository.findOneBy({ id: Number(data.id) });
  // if (!user) {
  //   throw new AppError(400, "User does not exists!");
  // }
  // const updated_at = new Date();
  // const newName = data.body.name;
  // const newEmail = data.body.email;
  // await userRepository.update(user!.id, {
  //   updated_at,
  //   name: newName,
  //   email: newEmail,
  // });
  // return;
};

export default updateUserService;
