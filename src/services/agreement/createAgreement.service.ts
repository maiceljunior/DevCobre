import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Agreement } from "../../entities/agreement.entity";
import { Bank } from "../../entities/bank.entity";
import { Debts } from "../../entities/debt.entity";
import { Client } from "../../entities/client.entity";
// import { Employee } from "../../entities/employee.entity";
import { FormOfPayment } from "../../entities/formOfPayment.entity";
import { User } from "../../entities/user.entity";

const createAgreementService = async ({
  agreedValue,
  dateAgree,
  status,
  debts,
  bank,
  client,
  user,
  formOfPayment,
}: any): Promise<any> => {
  const agreementRepository = AppDataSource.getRepository(Agreement);
  const debtsRepository = AppDataSource.getRepository(Debts);
  const paymentRepository = AppDataSource.getRepository(FormOfPayment);
  const userRepository = AppDataSource.getRepository(User);
  const clientRepository = AppDataSource.getRepository(Client);
  const bankRepository = AppDataSource.getRepository(Bank);

  const debtExists = await debtsRepository.findOneBy({ id: debts });
  if (!debtExists) {
    throw new AppError(409, "Debt not found!");
  }

  const paymentExists = await paymentRepository.findOneBy({
    id: formOfPayment,
  });
  if (!paymentExists) {
    throw new AppError(409, "Form of payment not found!");
  }

  const bankExists = await bankRepository.findOneBy({ id: parseInt(bank) });
  if (!bankExists) {
    throw new AppError(409, "Bank not found!");
  }

  const clientExists = await clientRepository.findOneBy({ document: client });
  if (!clientExists) {
    throw new AppError(409, "Client not found!");
  }

  const userExists = await userRepository.findOneBy({ id: parseInt(user) });
  if (!userExists) {
    throw new AppError(409, "User not found!");
  }

  const entry = agreementRepository.create({
    agreedvalue: agreedValue,
    dateagree: dateAgree,
    status: status,
    debts: debts,
    bank: bank,
    client: client,
    user: user,
    formofpayment: formOfPayment,
  });
  await agreementRepository.save(entry);

  return entry;
};

export default createAgreementService;
