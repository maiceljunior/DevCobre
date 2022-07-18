import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Agreement } from "../../entities/agreement.entity";
import { Bank } from "../../entities/bank.entity";
import { Debts } from "../../entities/debt.entity";
import { Client } from "../../entities/client.entity";
import { Employee } from "../../entities/employee.entity";
import { FormOfPayment } from "../../entities/formOfPayment.entity";

const createAgreementService = async ({ agreedValue, dateAgree, status, debtsId, bankId, clientId, userId, formOfPayment }: any): Promise<Agreement>=> {
  const agreementRepository = AppDataSource.getRepository(Agreement);
  const debtsRepository = AppDataSource.getRepository(Debts);
  const paymentRepository = AppDataSource.getRepository(FormOfPayment);
  const userRepository = AppDataSource.getRepository(Employee);
  const clientRepository = AppDataSource.getRepository(Client);
  const bankRepository = AppDataSource.getRepository(Bank);
  
  const debtExists = await debtsRepository.findOneBy({ id: debtsId });
  if (!debtExists) {
    throw new AppError(409, "Debt not found!");
  }

  const paymentExists = await paymentRepository.findOneBy({ id: formOfPayment });
  if (!paymentExists) {
    throw new AppError(409, "Form of payment not found!");
  }

  const bankExists = await bankRepository.findOneBy({ id: bankId });
  if (!bankExists) {
    throw new AppError(409, "Bank not found!");
  }

  const clientExists = await clientRepository.findOneBy({ document: clientId });
  if (!clientExists) {
    throw new AppError(409, "Client not found!");
  }

  const userExists = await userRepository.findOneBy({ id: userId });
  if (!userExists) {
    throw new AppError(409, "User not found!");
  }


  const entry = agreementRepository.create({
    agreedvalue: agreedValue,
    dateagree: dateAgree,
    status: status,
    debts: debtsId,
    bank: bankId,
    client: clientId,
    user: userId,
    formofpayment: formOfPayment
  });
  await agreementRepository.save(entry);
  return entry;
};

export default createAgreementService;
