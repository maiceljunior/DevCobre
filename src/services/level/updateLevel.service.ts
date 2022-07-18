import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { LevelAcess } from "../../entities/levelAcess.entity";

const updateLevelService = async(id:number,name:string,debt_type:any) =>{
    const levelRepository = AppDataSource.getRepository(LevelAcess);
    const levelExists = await levelRepository.findOneBy({id:id})

    if(!levelExists){
        throw new AppError(404,"Level not found!")
    }

    const newName = name
    const newDebt_type=debt_type
  
    await levelRepository.update(levelExists!.id,{
        name:newName,
        debt_type:newDebt_type,
      
    })
}
export default updateLevelService