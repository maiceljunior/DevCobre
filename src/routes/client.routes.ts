import { Router } from "express";
import createClientController from "../controllers/client/createClient.controller";
import createClientInfoController from "../controllers/client/createClientInfo.controller";
import deleteClientController from "../controllers/client/deleteClient.controller";
import deleteClientInfoController from "../controllers/client/deleteClientInfo.controller";
import listClientInfoController from "../controllers/client/listClientInfo.controller";
import listClientsController from "../controllers/client/listClients.controller";
import listOneClientController from "../controllers/client/listOneClient.controller";
import updateClientController from "../controllers/client/updateClient.controller";
import updateClientInfoController from "../controllers/client/updateClientInfo.controller";
import schemaValidation from "../middlewares/schemaValidation";
import verifyAuthAllNotHR from "../middlewares/verifyAuthAllNotHR";
import verifyAuthManagerSupervisor from "../middlewares/verifyAuthManagerSupervisor";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import createClientSchema from "../schemas/client/client.schema";

const routes = Router();

export const clientRoutes = () => {
  routes.get("", verifyAuthToken, verifyAuthAllNotHR, listClientsController);
  routes.post(
    "",
    verifyAuthToken,
    verifyAuthManagerSupervisor,
    schemaValidation(createClientSchema),
    createClientController
  );
  routes.get(
    "/:document",
    verifyAuthToken,
    verifyAuthAllNotHR,
    listOneClientController
  );
  routes.patch(
    "/:document",
    verifyAuthToken,
    verifyAuthManagerSupervisor,
    updateClientController
  );
  routes.delete(
    "/:document",
    verifyAuthToken,
    verifyAuthManagerSupervisor,
    deleteClientController
  );
  routes.get(
    "/:document/info",
    verifyAuthToken,
    verifyAuthAllNotHR,
    listClientInfoController
  );
  routes.post(
    "/:document/info",
    verifyAuthToken,
    verifyAuthManagerSupervisor,
    createClientInfoController
  );
  routes.patch(
    "/:document/info/:idContact",
    verifyAuthToken,
    verifyAuthManagerSupervisor,
    updateClientInfoController
  );
  routes.delete(
    "/:document/info/:idContact",
    verifyAuthToken,
    verifyAuthManagerSupervisor,
    deleteClientInfoController
  );

  return routes;
};
