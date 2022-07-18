import { Request, Response } from "express";
import deleteLevelService from "../../services/level/deleteLevel.service";

const deleteLevelController = async(req:Request,res:Response)=>{
    const id = req.params.id;
    const idNumber = parseInt(id);

    await deleteLevelService(idNumber);

    return res.status(200).json({message: "Level acess deleted witdh sucess!"})
};

export default deleteLevelController
