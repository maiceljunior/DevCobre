import { IHistory } from "../../interfaces/history";
import { ContactHistory } from "../../entities/contactHistory.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import e from "express";

const createContactHistoryService = async({
    date_contact,
    agreement,
    note,
   
}:IHistory) =>{
    const historyRepository = AppDataSource.getRepository(ContactHistory);
    
    const history = historyRepository.create({
        date_contact,
        agreement,
        note,
    
    })
    await historyRepository.save(history);

    return history;
};

export default createContactHistoryService;