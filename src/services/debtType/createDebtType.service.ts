import { IDebtTypeRequest } from "../../interfaces/debtType";
import { AppDataSource } from "../../data-source";
import { Debts_type } from "../../entities/debtType.entity";
import { AppError } from "../../errors";

const createDebtsTypeService =async ({name}:IDebtTypeRequest) => {
const debtTypeRepository = AppDataSource.getRepository(Debts_type)    
const DebtsTypeExists = await debtTypeRepository.findOneBy({ name:name});
   if(DebtsTypeExists){
    throw new AppError(409,"Type already exists!")
   }

   const debtsType= debtTypeRepository.create({
    name,
   })
   await debtTypeRepository.save(debtsType);

   return debtsType

};

export default createDebtsTypeService;
