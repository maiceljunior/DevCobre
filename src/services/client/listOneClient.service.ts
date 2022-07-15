import { Client } from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

const listOneClientService = async (document: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const account = clients.find(
    (client) => client.document === parseInt(document)
  );

  if (!account) {
    throw new AppError(404, "Client not found!");
  }

  return account;
};

export default listOneClientService;
