import { Request, Response } from "express";
import updateDebtsTypeService from "../../services/debtType/upateDebtsType.service";

const updateDebtsTypeController = async (req: Request, res: Response) => {
    const id = req.params.id;
    const idNumber = parseInt(id);
  
    const { name } = req.body;
  
    await updateDebtsTypeService(idNumber, name);
  
    return res.status(200).json({ message: "Updated type!" });
  };
  
  export default updateDebtsTypeController;
  
