import { Router } from "express";
import employeeLoginController from "../controllers/session/employeeLogin.controller";
const routes = Router();

export const sessionRoutes = () => {
  routes.post("", employeeLoginController);

  return routes;
};
