import { Request, Response} from "express";
import createDebtsTypeService from "../../services/debtType/createDebtType.service";

const createDebtsTypeController = async(req:Request,res:Response) =>{
    const{name} = req.body;

    const newDebtsType = await createDebtsTypeService({name})
    return res.status(201).json(newDebtsType);
};

export default createDebtsTypeController;


