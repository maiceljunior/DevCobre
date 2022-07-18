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

  const findUser = await userRepository.findOneBy({ id: parseInt(user) });

  if (!findUser) {
    throw new AppError(404, "User not found!");
  }

  const debtRepository = AppDataSource.getRepository(Debts);

  const findDebt = await debtRepository.findOneBy({ id: parseInt(debt) });

  if (!findDebt) {
    throw new AppError(404, "Debt not found!");
  }

  const userDebtRepository = AppDataSource.getRepository(UserDebt);
  const debtUser = new UserDebt();
  debtUser.debt = Number(debt);
  debtUser.user = findUser;
  debtUser.name = name;

  const debtUserCreate = userDebtRepository.create(debtUser);

  await userDebtRepository.save(debtUserCreate);

  return "ok";
};

export default createUserDebtService;
