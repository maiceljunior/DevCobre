import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Client } from "../../entities/client.entity";
import { ClientInfo } from "../../entities/clientInfo.entity";
const updateClientInfoService = async (
  document: string,
  idContact: string,
  data: any
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    document: parseInt(document),
  });

  if (!client) {
    throw new AppError(400, "Deu ruim");
  }

  const clientInfoRepository = AppDataSource.getRepository(ClientInfo);

  const contactExists = await clientInfoRepository.findOneBy({
    id: parseInt(idContact),
  });

  if (!contactExists) {
    throw new AppError(400, "Deu ruim");
  }

  await clientInfoRepository.update(idContact, {
    ...contactExists,
    ...data,
  });
  return;
};

export default updateClientInfoService;
