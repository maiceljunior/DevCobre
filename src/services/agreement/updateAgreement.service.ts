import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Agreement } from "../../entities/agreement.entity";

const updateAgreementService = async ({ id, agreedValue, dateAgree, status }: any): Promise<any>=> {
  const agreementRepository = AppDataSource.getRepository(Agreement);
  const agreementExists = await agreementRepository.findOneBy({ id: id });
  if (!agreementExists) {
    throw new AppError(409, "Agreement not found!");
  }
  const entry = agreementRepository.update(agreementExists!.id, {
    agreedvalue: agreedValue,
    dateagree: dateAgree,
    status: status
  });
  return entry;
};

export default updateAgreementService;
