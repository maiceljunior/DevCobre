import { Request, Response } from "express";
import updateLevelService from "../../services/level/updateLevel.service";

const updateLevelController = async(req:Request,res:Response)=>{
    const id = req.params.id;
    const idnumber = parseInt(id);

    const{name,debt_type}= req.body;
    await updateLevelService(idnumber,name,debt_type);

    return res.status(200).json({message:"update level acess !"})
}
export default updateLevelController