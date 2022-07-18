import { LevelAcess} from "../../entities/levelAcess.entity";
import { AppDataSource } from "../../data-source";

const listLevelService = async() :Promise<LevelAcess[]> =>{
    const levelRepository = AppDataSource.getRepository(LevelAcess);
    const level = await levelRepository.find()

    return level
};

export default listLevelService
