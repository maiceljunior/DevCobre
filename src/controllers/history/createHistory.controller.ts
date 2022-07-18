import { Request, Response } from "express";
import createContactHistoryService from "../../services/history/createHistory.service";
const createHistoryController = async (req: Request, res: Response) => {
    const { date_contact, agreement,note } = req.body;
    const newHistory = await createContactHistoryService({ date_contact,agreement,note});
    return res.status(201).json(newHistory);
  };
  
  export default createHistoryController;
