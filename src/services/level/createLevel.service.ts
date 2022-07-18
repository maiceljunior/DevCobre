import { AppDataSource } from "../../data-source";
import { Debts_type } from "../../entities/debtType.entity";
import { Employee } from "../../entities/employee.entity";
import { AppError } from "../../errors";
import { LevelAcess } from "../../entities/levelAcess.entity";


const createLevelService = async (data:any)=>{
    const{name,debt_type,employee_id}=data;
    const levelRepository = AppDataSource.getRepository(LevelAcess)
    
    const debtTypeRepository = AppDataSource.getRepository(Debts_type);
    const typeDebt = await debtTypeRepository.findOneBy({ id: debt_type });

    if (!typeDebt) {
        throw new AppError(400, "Debt type does not exists!");
    }

    const employeeRepository = AppDataSource.getRepository(Employee);
    const employee = await employeeRepository.findOneBy({id:employee_id})
    if(!employee){
        throw new AppError(400,"User not exists!")
    }

    const level = levelRepository.create({
        ...data,
        name:name,
        debt:debt_type,
        user:employee_id
    });

    await levelRepository.save(level)
    return level
};
export default createLevelService;
