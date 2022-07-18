import { ContactHistory } from "../../entities/contactHistory.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Debts } from "../../entities/debt.entity";
import { Employee } from "../../entities/employee.entity";

const createContactHistoryService = async(data:any)=>{
    const{date_contact, agreement, note,debt_id,employee_id}=data;
    const historyRepository = AppDataSource.getRepository(ContactHistory);
    


    const debtRepository = AppDataSource.getRepository(Debts);
    const debt = await debtRepository.findOneBy({ id:debt_id});
    if(!debt){
        throw new AppError(400,"Debits does not exists!");
    }
    
    const employeeRepository = AppDataSource.getRepository(Employee);
    const employee = await employeeRepository.findOneBy({id:employee_id})
    if(!employee){
        throw new AppError(400,"Client not exists!")
    }
    
    const history = historyRepository.create({
        ...data,
        debt:debt_id,
        date:date_contact,
        agreement:agreement,
        note:note,
        employee:employee_id
    
    })
    await historyRepository.save(history);

    return history;
};

export default createContactHistoryService;