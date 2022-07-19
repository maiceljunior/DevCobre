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
const routes = Router();

export const userRoutes = () => {
  routes.post("", schemaValidation(registerSchema), createUserController);
  routes.get("", listUsersController);
  routes.get("/:id", listOneUserController);
  routes.delete("/:id", deleteUserController);
  routes.patch("/:id", updateUserController);

  // Aloca divida para o usuario.
  routes.post("/debts/:userId", createUserDebtController);
  routes.get("/debts/me", verifyAuthToken, listUserDebtsController);

  return routes;
};
