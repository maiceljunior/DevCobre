import { Router } from "express";
import listHistoryController from "../controllers/history/listHistory.controller";
import updateHistoryController from "../controllers/history/updateHistory.controller";
import deleteHistoryController from "../controllers/history/deleteHistory.controller";
import createHistoryController from "../controllers/history/createHistory.controller";
import schemaValidation from "../middlewares/schemaValidation";
import historySchema from "../schemas/history/history.schema";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import verifyAuthAdm from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthHR from "../middlewares/verifyAuthHR.middleware";
import verifyAuthManagerSupervisor from "../middlewares/verifyAuthManagerSupervisor";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import verifyAuthSupervisor from "../middlewares/verifyAuthSupervisor";

const routes = Router();

export const historyRoutes = () => {
  routes.get(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listHistoryController
  );
  routes.post(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    schemaValidation(historySchema),
    createHistoryController
  );
  routes.patch(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthSupervisor,
    updateHistoryController
  );
  routes.delete(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthSupervisor,
    deleteHistoryController
  );

  return routes;
};
