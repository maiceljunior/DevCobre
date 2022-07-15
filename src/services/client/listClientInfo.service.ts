import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors";

const listClientInfoService = async (document: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const account = await clientRepository.find();

  const findAccount = account.find(
    (user) => user.document === parseInt(document)
  );

  if (!findAccount) {
    throw new AppError(404, "Client not found!");
  }

  return findAccount;
};

export default listClientInfoService;
