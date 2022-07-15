import { AppDataSource } from "../../data-source";
import { Debts } from "../../entities/debt.entity";
import { AppError } from "../../errors";

const listOneDebtService = async (id: string) => {
  const debtRepository = AppDataSource.getRepository(Debts);
  const debt = await debtRepository.findOne({
    where: {
      id: Number(id),
    },
    relations: {
      client: true,
      bank: true,
    },
  });

  if (!debt) {
    throw new AppError(400, "Aoooba Debt");
  }
  return debt;
};
export default listOneDebtService;
