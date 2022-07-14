import { AppDataSource } from "../../data-source";
import { Debts_type } from "../../entities/debtType.entity";
import { AppError } from "../../errors";

const debtsTypeDeleteService = async(id:number)=>{
    const debtsTypeRepository = AppDataSource.getRepository(Debts_type);
    const DebtsTypeExists = await debtsTypeRepository.findOneBy({id:id});

    if(!DebtsTypeExists){
        throw new AppError(404, "Bank not found!");

    }
    await debtsTypeRepository.delete({id:id});

};

export default debtsTypeDeleteService

