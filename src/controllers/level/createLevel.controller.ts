import { Request, Response } from "express";
import createLevelService from "../../services/level/createLevel.service";

const createLevelController = async(req:Request,res:Response) =>{
    const {name} = req.body
    const newLevel = await createLevelService({name});
    return res.status(201).json(newLevel);
};
export default createLevelController
