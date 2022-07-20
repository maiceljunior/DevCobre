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
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listBankController
  );
  routes.post(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    schemaValidation(createBankSchema),
    createBankController
  );
  routes.get(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listOneBankController
  );
  routes.patch(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    updateBankController
  );
  routes.delete(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    deleteBankController
  );
  routes.get(
    "/:id/contact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listBankInfoController
  );
  routes.post(
    "/:id/contact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    createBankInfoController
  );
  routes.patch(
    "/:id/contact/:idContact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    updateBankInfoController
  );
  routes.delete(
    "/:id/contact/:idContact",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    deleteBankInfoController
  );
  return routes;
};
