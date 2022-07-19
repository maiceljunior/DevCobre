import { Router } from "express";
import listHistoryController from "../controllers/history/listHistory.controller";
import updateHistoryController from "../controllers/history/updateHistory.controller";
import deleteHistoryController from "../controllers/history/deleteHistory.controller";
import createHistoryController from "../controllers/history/createHistory.controller";
import schemaValidation from "../middlewares/schemaValidation";
import historySchema from "../schemas/history/history.schema";

const routes = Router();

export const historyRoutes = () => {
  routes.get("", listHistoryController);
  routes.post("", schemaValidation(historySchema), createHistoryController);
  routes.patch("/:id", updateHistoryController);
  routes.delete("/:id", deleteHistoryController);

  return routes;
};
