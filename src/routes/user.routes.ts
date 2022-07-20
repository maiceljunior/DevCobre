import { Router } from "express";

import createUserDebtController from "../controllers/userDebt/createUserDebt.controller";
import createUserController from "../controllers/user/createUser.controller";
import schemaValidation from "../middlewares/schemaValidation";
import registerSchema from "../schemas/register/register.schema";
import listUsersController from "../controllers/user/listUsers.controller";
import listOneUserController from "../controllers/user/listOneUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import listUserDebtsController from "../controllers/userDebt/listUserDebts.controller";
import verifyAuthUser from "../middlewares/verifyAuthUser.middleware";
import verifyAuthHR from "../middlewares/verifyAuthHR.middleware";
import verifyAuthAdm from "../middlewares/verifyAuthAdm.middleware";
import verifyAuthManagerSupervisor from "../middlewares/verifyAuthManagerSupervisor";
import verifyAuthSupervisor from "../middlewares/verifyAuthSupervisor";
const routes = Router();

export const userRoutes = () => {
  routes.post(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    schemaValidation(registerSchema),
    createUserController
  );
  routes.get(
    "",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    listUsersController
  );
  routes.get(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    listOneUserController
  );
  routes.delete(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    deleteUserController
  );
  routes.patch(
    "/:id",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    updateUserController
  );

  // Aloca divida para o usuario.
  routes.post(
    "/debts/:userId",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthSupervisor,
    createUserDebtController
  );
  routes.get(
    "/debts/me",
    verifyAuthToken,
    verifyAuthAdm,
    verifyAuthHR,
    verifyAuthManagerSupervisor,
    verifyAuthUser,
    listUserDebtsController
  );

  return routes;
};
