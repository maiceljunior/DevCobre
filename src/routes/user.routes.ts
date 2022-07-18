import { Router } from "express";

import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import duplicatedEmailMiddleware from "../middlewares/duplicatedEmail.middleware";

import deleteUserController from "../controllers/user/deleteUser.controller";
import createUserController from "../controllers/user/createUser.controller";

import listUserInfoController from "../controllers/user/listUserInfo.controller";
import listUsersController from "../controllers/user/listUsers.controller";
import listOneUserController from "../controllers/user/listOneUser.controller";
import updateUserController from "../controllers/user/updateUser.controller";
import updateUserInfoController from "../controllers/user/updateUserInfo.controller";
import deleteUserInfoController from "../controllers/user/deleteUserInfo.controller";

const routes = Router();

export const userRoutes = () => {
  routes.post("", createUserController);
  // routes.get("", verifyAuthToken, listUsersController);
  // routes.get("/:id", listOneUserController);
  // routes.delete("/:id", deleteUserController);
  // routes.patch("/:id", updateUserController);

  // routes.get("/:id/info", listUserInfoController);
  // routes.patch("/:id/info/:userId", updateUserInfoController);
  // routes.delete("/:id/info/:userId", deleteUserInfoController);

  return routes;
};
