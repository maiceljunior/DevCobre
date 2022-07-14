import { Router } from "express";
import createDebtsTypeController from "../controllers/debtType/createDebtsType.controller";
import listDebtsTypeController from "../controllers/debtType/listDebtsType.controller";
import updateDebtsTypeController from "../controllers/debtType/updateDebtsType.controller";
import deleteDebtsTypeController from "../controllers/debtType/deleteDebtsType.controller";

const routes = Router();

export const debtTypeRoutes = () => {
    
    routes.get("",listDebtsTypeController);
    routes.post("",createDebtsTypeController);
    routes.patch("/:id",updateDebtsTypeController);
    routes.delete("/:id",deleteDebtsTypeController);

    return routes

};


