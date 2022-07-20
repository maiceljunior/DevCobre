import { Router } from "express";
import createBankController from "../controllers/bank/createBank.controller";
import createBankInfoController from "../controllers/bank/createBankInfo.controller";
import deleteBankController from "../controllers/bank/deleteBank.controller";
import deleteBankInfoController from "../controllers/bank/deleteBankInfo.controller";
import listBankController from "../controllers/bank/listBank.controller";
import listBankInfoController from "../controllers/bank/listBankInfo.controller";
import listOneBankController from "../controllers/bank/listOneBank.controller";
import updateBankController from "../controllers/bank/updateBank.controller";
import updateBankInfoController from "../controllers/bank/updateBankInfo.controller";
import schemaValidation from "../middlewares/schemaValidation";
import verifyAuthAdm from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthHR from "../middlewares/verifyAuthHR.middleware";
import verifyAuthManager from "../middlewares/verifyAuthHRSupervisor";
import verifyAuthManagerSupervisor from "../middlewares/verifyAuthManagerSupervisor";
import verifyAuthSupervisor from "../middlewares/verifyAuthSupervisor";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import createBankSchema from "../schemas/bank/bank.schema";

const routes = Router();

export const bankRoutes = () => {
  routes.get(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    listBankController
  );
  routes.post(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthManager,
    schemaValidation(createBankSchema),
    createBankController
  );
  routes.get(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    listOneBankController
  );
  routes.patch(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthManager,
    updateBankController
  );
  routes.delete(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthManager,
    deleteBankController
  );
  routes.get(
    "/:id/contact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    listBankInfoController
  );
  routes.post(
    "/:id/contact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthManager,
    createBankInfoController
  );
  routes.patch(
    "/:id/contact/:idContact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthManager,
    updateBankInfoController
  );
  routes.delete(
    "/:id/contact/:idContact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthManager,
    deleteBankInfoController
  );
  return routes;
};
