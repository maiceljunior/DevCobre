import { AppDataSource } from "../../data-source";
import { Bank } from "../../entities/bank.entity";
import { BankContact } from "../../entities/bankContact.entity";
import { AppError } from "../../errors";
import { IBankInfoRequest } from "../../interfaces/bank";

const listBankInfoService = async (
  bankId: string
): Promise<IBankInfoRequest> => {
  const bankRepository = AppDataSource.getRepository(Bank);
  const bankInfoRepository = AppDataSource.getRepository(BankContact);

  const bank = await bankRepository.find();

  const findBank = bank.find((bank) => bank.id === parseInt(bankId));

  const banks = await bankInfoRepository.findOne({
    where: {
      bank: findBank,
    },
    relations: {
      bank: true,
    },
  });

  if (!banks) {
    throw new AppError(404, "Bank not found!");
  }
  const { email, id, telephone } = banks;

  const bankReturn: IBankInfoRequest = {
    name: findBank!.name,
    status: findBank!.status,
    infos: { email: email, id: id, telephone: telephone },
  };

  return bankReturn;
};

export default listBankInfoService;
