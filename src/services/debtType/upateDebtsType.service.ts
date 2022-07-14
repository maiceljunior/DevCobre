import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Debts_type } from "../../entities/debtType.entity";

const updateDebtsTypeService = async (id: number, name: string) => {
  const DebtsTypeRepository = AppDataSource.getRepository(Debts_type);

  const DebtsTypeExists = await DebtsTypeRepository.findOneBy({ id: id });

  if (!DebtsTypeExists) {
    throw new AppError(404, "Type not found!");
  }

  const newName = name;

  await DebtsTypeRepository.update(DebtsTypeExists!.id, {
    name: newName,
  });

  return true;
};

export default updateDebtsTypeService;
