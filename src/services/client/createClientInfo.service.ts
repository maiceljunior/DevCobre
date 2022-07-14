import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { ClientInfo } from "../../entities/clientInfo.entity";
import { AppError } from "../../errors";
import { IClientInfoRequest } from "../../interfaces/client";

const createClientInfoService = async ({
  telephone,
  email,
  client_document,
}: IClientInfoRequest): Promise<ClientInfo> => {
  const clientInfoRepository = AppDataSource.getRepository(ClientInfo);
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    document: client_document,
  });

  if (!client) {
    throw new AppError(404, "Client not found");
  }

  const infos = clientInfoRepository.create({
    telephone: telephone,
    email: email,
  });

  await clientInfoRepository.save(infos);

  return infos;
};

export default createClientInfoService;
