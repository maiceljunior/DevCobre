import { AppDataSource } from "../../data-source";
import { UserDebt } from "../../entities/userDebt.entity";
import { AppError } from "../../errors";

const deleteUserDebtService = async (id: string) => {
  const userDebtRepository = AppDataSource.getRepository(UserDebt);

  const userDebt = await userDebtRepository.findOneBy({ id: parseInt(id) });

  if (!userDebt) {
    throw new AppError(404, "UserDebt not found!");
  }

  await userDebtRepository.delete({ id: parseInt(id) });

  return true;
};

export default deleteUserDebtService;
