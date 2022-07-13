import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { ClientInfo } from "../../entities/clientInfo.entity";
import { AppError } from "../../errors";

const listClientInfoService = async (document: string): Promise<Client> => {
  const clientInfo = AppDataSource.getRepository(Client);

  const teste = parseInt(document);
  const info = await clientInfo.findOneBy({
    document: teste,
  });

  if (!info) {
    throw new AppError(404, "Client not found");
  }

  return info;
};

export default listClientInfoService;
