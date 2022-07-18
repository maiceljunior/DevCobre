import { AppDataSource } from "../../data-source";
import { Debts } from "../../entities/debt.entity";
import { User } from "../../entities/user.entity";
import { UserDebt } from "../../entities/userDebt.entity";
import { AppError } from "../../errors";

const createUserDebtService = async (
  debt: string,
  user: string,
  name: string
): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = userRepository.findOneBy({ id: parseInt(user) });

  if (!findUser) {
    throw new AppError(404, "User not found!");
  }

  const debtRepository = AppDataSource.getRepository(Debts);

  const findDebt = debtRepository.findOneBy({ id: parseInt(debt) });

  if (!findDebt) {
    throw new AppError(404, "Debt not found!");
  }

  const userDebtRepository = AppDataSource.getRepository(UserDebt);

  const debtUser = userDebtRepository.create({
    // debt: findDebt,
    // user: findUser,
    name,
  });

  await userRepository.save(debtUser);

  return debtUser;
};

export default createUserDebtService;
