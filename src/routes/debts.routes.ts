import { Router } from "express";
import createDebtsController from "../controllers/debts/createDebts.controller";
import listDebtsController from "../controllers/debts/listDebts.controller";
import listOneDebtController from "../controllers/debts/listOneDebt.controller";
import schemaValidation from "../middlewares/schemaValidation";
import verifyAuthAdm from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthHR from "../middlewares/verifyAuthHR.middleware";
import verifyAuthManagerSupervisor from "../middlewares/verifyAuthManagerSupervisor";
import verifyAuthSupervisor from "../middlewares/verifyAuthSupervisor";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import debtRegisterSchema from "../schemas/debts/debt.schema";

const routes = Router();

export const debtsRoutes = () => {
  routes.get(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listDebtsController
  );
  routes.get(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listOneDebtController
  );
  routes.post(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    schemaValidation(debtRegisterSchema),
    createDebtsController
  );

  return routes;
};
