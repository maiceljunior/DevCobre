import { Router } from "express";
import listHistoryController from "../controllers/history/listHistory.controller";
import updateHistoryController from "../controllers/history/updateHistory.controller";
import deleteHistoryController from "../controllers/history/deleteHistory.controller";
import createHistoryController from "../controllers/history/createHistory.controller";

const routes = Router();

export const historyRoutes = () => {
  routes.get("", listHistoryController);
  routes.post("", createHistoryController);
  routes.patch("/:id", updateHistoryController);
  routes.delete("/:id", deleteHistoryController);
  // routes.get("/user/:id");
  // routes.post("/user/:id");
  // routes.patch("/user/:id");
  // routes.delete("/user/:id");

  return routes;
};
