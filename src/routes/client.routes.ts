import { Router } from "express";
import createClientController from "../controllers/client/createClient.controller";
import createClientInfoController from "../controllers/client/createClientInfo.controller";
import deleteClientController from "../controllers/client/deleteClient.controller";
import listClientInfoController from "../controllers/client/listClientInfo.controller";
import listClientsController from "../controllers/client/listClients.controller";
import updateClientController from "../controllers/client/updateClient.controller";

const routes = Router();

export const clientRoutes = () => {
  routes.get("", listClientsController);
  routes.post("", createClientController);
  routes.patch("/:document", updateClientController);
  routes.delete("/:document", deleteClientController);
  routes.get("/:document/info", listClientInfoController);
  routes.post("/:document/info", createClientInfoController);
  // routes.patch("/:document/info");
  // routes.delete("/:document/info");

  return routes;
};
