import { Debts_type } from "../../entities/debtType.entity";
import { AppDataSource } from "../../data-source";

const listDebtsTypeService = async (): Promise<Debts_type[]> => {
  const DebtsTypeRepository = AppDataSource.getRepository(Debts_type);

  const DebtsTypes = await DebtsTypeRepository.find();

  return DebtsTypes;
};

export default listDebtsTypeService;