import { Request, Response } from "express";
import debtsTypeDeleteService from "../../services/debtType/deleteDebtsType.service";

const deleteDebtsTypeController = async (req: Request, res: Response) => {
    const id = req.params.id;
    const idNumber = parseInt(id);
  
    await debtsTypeDeleteService(idNumber);
  
    return res.status(200).json({ message: "DebtsType deleted witdh sucess!" });
  };
  
  export default deleteDebtsTypeController;
  

