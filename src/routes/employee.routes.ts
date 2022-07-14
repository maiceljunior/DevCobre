import { Router } from "express";
import createEmployeeController from "../controllers/employee/createEmployee.controller";
import listEmployeeController from "../controllers/employee/listEmployee.controller";
import duplicatedEmailMiddleware from "../middlewares/duplicatedEmail.middleware";

const routes = Router();

export const employeeRoutes = () => {
  routes.post("", duplicatedEmailMiddleware, createEmployeeController);
  routes.get("/info/:id", listEmployeeController);

  // routes.patch("/:id");
  // routes.delete("/:id");
  // routes.post("/info/:id");
  // routes.patch("/info/:id");
  // routes.delete("/info/:id");

  return routes;
};
