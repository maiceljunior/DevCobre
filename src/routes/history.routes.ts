import { Router } from "express";
import listHistoryController from "../controllers/history/listHistory.controller";
import updateHistoryController from "../controllers/history/updateHistory.controller";
import deleteHistoryController from "../controllers/history/deleteHistory.controller";
import createHistoryController from "../controllers/history/createHistory.controller";

const routes = Router();

export const historyRoutes =() =>{
    routes.get("",listHistoryController);
    routes.post("",createHistoryController);
    routes.patch("/:id",updateHistoryController);
    routes.delete("/:id",deleteHistoryController);
    // routes.get("/employee/:id");
    // routes.post("/employee/:id");
    // routes.patch("/employee/:id");
    // routes.delete("/employee/:id");

    return routes
};

