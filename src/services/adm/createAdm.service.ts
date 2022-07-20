import { AppDataSource } from "../../data-source";
import { Admin } from "../../entities/adm.entity";
import { AppError } from "../../errors";

const createAdmService = async ({ email, password }: any) => {
  const admRepository = AppDataSource.getRepository(Admin);

  const adminExists = await admRepository.findOneBy({ email: email });

  if (adminExists) {
    throw new AppError(409, "Admin already exists!");
  }

  const adm = admRepository.create({
    email,
    password,
  });

  await admRepository.save(adm);

  return adm;
};

export default createAdmService;
