import { AppDataSource } from "../../data-source";
import { LevelAcess } from "../../entities/levelAcess.entity";
import { AppError } from "../../errors";

const deleteLevelService = async(id:number)=>{
    const levelRepository = AppDataSource.getRepository(LevelAcess)
    const levelExists = await levelRepository.findOneBy({id:id});

    if(!levelExists){
        throw new AppError(404,"Level not found!")
    }

    await levelRepository.delete({id:id})


};

export default deleteLevelService

