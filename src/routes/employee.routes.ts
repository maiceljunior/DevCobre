import { Router } from "express";
import createEmployeeController from "../controllers/employee/createEmployee.controller";
import deleteEmployeeController from "../controllers/employee/deleteEmployee.controller";
import listEmployeeController from "../controllers/employee/listEmployee.controller";
import updateEmployeeController from "../controllers/employee/updateEmployee.controller";
import duplicatedEmailMiddleware from "../middlewares/duplicatedEmail.middleware";

const routes = Router();

export const employeeRoutes = () => {
  routes.post("", duplicatedEmailMiddleware, createEmployeeController);
  routes.get("/:id", listEmployeeController);
  routes.delete("/:id", deleteEmployeeController);
  routes.patch("/:id", updateEmployeeController);

  // routes.post("/info/:id");
  // routes.patch("/info/:id");
  // routes.delete("/info/:id");

  return routes;
};
