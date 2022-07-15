import { AppDataSource } from "../../data-source";
import { Bank } from "../../entities/bank.entity";
import { Client } from "../../entities/client.entity";
import { Debts } from "../../entities/debt.entity";
import { Debts_type } from "../../entities/debtType.entity";
import { AppError } from "../../errors";

const createDebtsService = async (data: any) => {
  const { documentClient, bankId, debtType, ipoc } = data;

  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOneBy({
    document: documentClient,
  });
  if (!client) {
    throw new AppError(400, "Client does not exists!");
  }

  const bankRepository = AppDataSource.getRepository(Bank);
  const bank = await bankRepository.findOneBy({ id: bankId });

  if (!bank) {
    throw new AppError(400, "Bank does not exists!");
  }

  const debtTypeRepository = AppDataSource.getRepository(Debts_type);
  const typeDebt = await debtTypeRepository.findOneBy({ id: debtType });

  if (!typeDebt) {
    throw new AppError(400, "Debt type does not exists!");
  }

  const debtRepository = AppDataSource.getRepository(Debts);
  const ipocAlreadyExists = await debtRepository.findOneBy({
    ipoc: Number(ipoc),
  });

  if (ipocAlreadyExists !== null) {
    throw new AppError(400, "Ipoc already exists!");
  }

  const debt = debtRepository.create({
    ...data,
    bank: bankId,
    client: documentClient,
    debt_type: debtType,
  });

  await debtRepository.save(debt);

  return debt;
};

export default createDebtsService;
