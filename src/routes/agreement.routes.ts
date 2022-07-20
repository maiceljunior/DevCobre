import { Router } from "express";
import listAgreementController from "../controllers/agreement/listAgreement.controller";
import createAgreementController from "../controllers/agreement/createAgreement.controller";
import updateAgreementController from "../controllers/agreement/updateAgreement.controller";
import deleteAgreementController from "../controllers/agreement/deleteAgreement.controller";
import listOneAgreementController from "../controllers/agreement/listOneAgreement.controller";
import listAgreementByBankController from "../controllers/agreement/listAgreementByBank.controller";
import listAgreementByClientController from "../controllers/agreement/listAgreementByClient.controller";
import listAgreementByUserController from "../controllers/agreement/listAgreementByUser.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import verifyAuthAdm from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthHR from "../middlewares/verifyAuthHR.middleware";
import verifyAuthManagerSupervisor from "../middlewares/verifyAuthManagerSupervisor";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import verifyAuthSupervisor from "../middlewares/verifyAuthSupervisor";

const routes = Router();

export const agreementRoutes = () => {
  routes.get(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listAgreementController
  );
  routes.post(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    createAgreementController
  );
  routes.get(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listOneAgreementController
  );
  routes.patch(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    updateAgreementController
  );
  routes.delete(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    deleteAgreementController
  );
  routes.get(
    "/bank/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    listAgreementByBankController
  );
  routes.get(
    "/client/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    listAgreementByClientController
  );
  routes.get(
    "/user/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listAgreementByUserController
  );
  return routes;
};
