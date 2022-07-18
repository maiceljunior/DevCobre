import { Request,Response } from "express";
import listLevelService from "../../services/level/listLevel.service";

const listLevelController = async(req:Request,res:Response)=>{
    const level = await listLevelService();
    return res.json(level);
};

export default listLevelController;
