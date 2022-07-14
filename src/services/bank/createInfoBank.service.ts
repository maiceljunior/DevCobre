import { AppDataSource } from "../../data-source";
import { Bank } from "../../entities/bank.entity";
import { BankContact } from "../../entities/bankContact.entity";
import { AppError } from "../../errors";
import { IBankInfoOf } from "../../interfaces/bank";

const createBankInfoService = async (data: IBankInfoOf): Promise<any> => {
  const bankRepository = AppDataSource.getRepository(Bank);

  const findBank = await bankRepository.findOneBy({ id: parseInt(data.id) });

  if (!findBank) {
    throw new AppError(404, "Bank not found!");
  }

  const bankInfoRepository = AppDataSource.getRepository(BankContact);

  const bankInfo = bankInfoRepository.create({
    telephone: data.body.telephone,
    email: data.body.email,
    bank: findBank,
  });

  await bankInfoRepository.save(bankInfo);

  return { message: "Information entered successfully!" };
};

export default createBankInfoService;
