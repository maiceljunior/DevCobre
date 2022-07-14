import { Request, Response } from "express";
import listDebtsTypeService from "../../services/debtType/listDebtsType.service";

const listDebtsTypeController = async (req: Request, res: Response) => {
    const DebtsTypes = await listDebtsTypeService();
  
    return res.json(DebtsTypes);
  };
  
  export default listDebtsTypeController;