import { Request, Response } from "express";
import createContactHistoryService from "../../services/history/createHistory.service";
const createHistoryController = async (req: Request, res: Response) => {
    const { debts_id,date_contact, agreement,note,user_id } = req.body;
    const newHistory = await createContactHistoryService({ debts_id,date_contact,agreement,note,user_id});
    return res.status(201).json(newHistory);
  };
  
  export default createHistoryController;
