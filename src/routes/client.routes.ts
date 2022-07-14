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
import { createClientSchema } from "../middlewares/validateCreateClient.middleware";
import { validateCreateClient } from "../middlewares/validateCreateClient.middleware";
const routes = Router();

export const clientRoutes = () => {
  routes.get("", listClientsController);
  routes.post(
    "",
    validateCreateClient(createClientSchema),
    createClientController
  );
  routes.get("/:document", listOneClientController);
  routes.patch("/:document", updateClientController);
  routes.delete("/:document", deleteClientController);
  routes.get("/:document/info", listClientInfoController);
  routes.post("/:document/info", createClientInfoController);
  routes.patch("/:document/info/:idContact", updateClientInfoController);
  routes.delete("/:document/info/:idContact", deleteClientInfoController);

  return routes;
};
