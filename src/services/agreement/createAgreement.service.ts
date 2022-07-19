import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Agreement } from "../../entities/agreement.entity";
import { Bank } from "../../entities/bank.entity";
import { Debts } from "../../entities/debt.entity";
import { Client } from "../../entities/client.entity";
import { FormOfPayment } from "../../entities/formOfPayment.entity";
import { User } from "../../entities/user.entity";
import { IAgreementRequest } from "../../interfaces/agreement";

const createAgreementService = async ({
  agreedValue,
  dateAgree,
  status,
  debts,
  bank,
  client,
  user,
  formOfPayment,
}: IAgreementRequest) => {
  
  const debtsRepository = AppDataSource.getRepository(Debts);
  const debtsId = await debtsRepository.findOneBy({ id: debts });
  if (!debtsId) {
    throw new AppError(409, "Debt not found!");
  }
  
  const bankRepository = AppDataSource.getRepository(Bank);
  const bankId = await bankRepository.findOneBy({ id: parseInt(bank) });
  if (!bankId) {
    throw new AppError(409, "Bank not found!");
  }
  
  const clientRepository = AppDataSource.getRepository(Client);
  const clientId = await clientRepository.findOneBy({ document: client });
  if (!clientId) {
    throw new AppError(409, "Client not found!");
  }

  const userRepository = AppDataSource.getRepository(User);
  const userId = await userRepository.findOneBy({ id: parseInt(user) });
  if (!userId) {
    throw new AppError(409, "User not found!");
  }

  const paymentRepository = AppDataSource.getRepository(FormOfPayment);
  const paymentId = await paymentRepository.findOneBy({
    id: formOfPayment,
  });
  if (!paymentId) {
    throw new AppError(409, "Form of payment not found!");
  }

  const agreementRepository = AppDataSource.getRepository(Agreement);
  
  const agreement = new Agreement();
  agreement.agreedvalue = agreedValue;
  agreement.dateagree = dateAgree;
  agreement.status = status;
  agreement.debts = debtsId;
  agreement.bank = bankId;
  agreement.client = clientId;
  agreement.user = userId;
  agreement.formofpayment = paymentId;

  agreementRepository.create(agreement);

  await agreementRepository.save(agreement);

  return agreement;
};

export default createAgreementService;
