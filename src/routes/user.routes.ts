import { Router } from "express";

import createUserDebtController from "../controllers/userDebt/createUserDebt.controller";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserDebtController from "../controllers/userDebt/deleteUserDebt.controller";
import schemaValidation from "../middlewares/schemaValidation";
import registerSchema from "../schemas/register/register.schema";
import listUsersController from "../controllers/user/listUsers.controller";
import listOneUserController from "../controllers/user/listOneUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import verifyAuthPosition from "../middlewares/verifyAuthPosition.middleware";
const routes = Router();

export const userRoutes = () => {
  routes.post("", schemaValidation(registerSchema), createUserController);

  routes.post(
    "/debts/:debtId/:userId",
    verifyAuthPosition,
    createUserDebtController
  );
  routes.delete("/debts/:id", deleteUserDebtController);
  routes.get("", listUsersController);
  routes.get("/:id", listOneUserController);
  routes.delete("/:id", deleteUserController);
  // routes.patch("/:id", updateUserController);
  // routes.post("/:id/info", createUserInfoService);
  // routes.get("/:id/info", listUserInfoController);
  // routes.patch("/:id/info/:userId", updateUserInfoController);
  // routes.delete("/:id/info/:userId", deleteUserInfoController);
  return routes;
};
