import { Router } from "express";

import createUserDebtController from "../controllers/userDebt/createUserDebt.controller";
import createUserController from "../controllers/user/createUser.controller";
import deleteUserDebtController from "../controllers/userDebt/deleteUserDebt.controller";
import schemaValidation from "../middlewares/schemaValidation";
import registerSchema from "../schemas/register/register.schema";
const routes = Router();

export const userRoutes = () => {
  routes.post("", schemaValidation(registerSchema), createUserController);

  routes.post("/debts/:debtId/:userId", createUserDebtController);
  routes.delete("/debts/:id", deleteUserDebtController);
  // routes.get("", verifyAuthToken, listUsersController);
  // routes.get("/:id", listOneUserController);
  // routes.delete("/:id", deleteUserController);
  // routes.patch("/:id", updateUserController);
  // // routes.post("/:id/info", createUserInfoService);
  // routes.get("/:id/info", listUserInfoController);
  // routes.patch("/:id/info/:userId", updateUserInfoController);
  // routes.delete("/:id/info/:userId", deleteUserInfoController);
  return routes;
};
