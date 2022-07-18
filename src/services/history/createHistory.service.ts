import { ContactHistory } from "../../entities/contactHistory.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Debts } from "../../entities/debt.entity";

import { User } from "../../entities/user.entity";

const createContactHistoryService = async (data: any) => {
  const { date_contact, agreement, note, debt_id, user_id } = data;
  const historyRepository = AppDataSource.getRepository(ContactHistory);

  const debtRepository = AppDataSource.getRepository(Debts);
  const debt = await debtRepository.findOneBy({ id: debt_id });
  if (!debt) {
    throw new AppError(400, "Debits does not exists!");
  }

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: user_id });
  if (!user) {
    throw new AppError(400, "Client not exists!");
  }

  const history = historyRepository.create({
    ...data,
    debt: debt_id,
    date: date_contact,
    agreement: agreement,
    note: note,
    user: user_id,
  });
  await historyRepository.save(history);

  return history;
};

export default createContactHistoryService;
