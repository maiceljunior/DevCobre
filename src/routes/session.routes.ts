import { Router } from "express";
import userLoginController from "../controllers/session/userLogin.controller";

const routes = Router();

export const sessionRoutes = () => {
  // routes.post("", userLoginController);

  return routes;
};
