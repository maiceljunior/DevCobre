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
import verifyAuthAdm from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthHR from "../middlewares/verifyAuthHR.middleware";
import verifyAuthManagerSupervisor from "../middlewares/verifyAuthManagerSupervisor";
import verifyAuthSupervisor from "../middlewares/verifyAuthSupervisor";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import createClientSchema from "../schemas/client/client.schema";

const routes = Router();

export const clientRoutes = () => {
  routes.get(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listClientsController
  );
  routes.post(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    schemaValidation(createClientSchema),
    createClientController
  );
  routes.get(
    "/:document",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listOneClientController
  );
  routes.patch(
    "/:document",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    updateClientController
  );
  routes.delete(
    "/:document",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    deleteClientController
  );
  routes.get(
    "/:document/info",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listClientInfoController
  );
  routes.post(
    "/:document/info",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    createClientInfoController
  );
  routes.patch(
    "/:document/info/:idContact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    updateClientInfoController
  );
  routes.delete(
    "/:document/info/:idContact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    deleteClientInfoController
  );

  return routes;
};
