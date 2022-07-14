import { Router } from "express";
import createEmployeeController from "../controllers/employee/createEmployee.controller";
import listEmployeeController from "../controllers/employee/listEmployee.controller";
import duplicatedEmailMiddleware from "../middlewares/duplicatedEmail.middleware";

const routes = Router();

export const employeeRoutes = () => {
  routes.post("/create", duplicatedEmailMiddleware, createEmployeeController);
  routes.get("/:id", listEmployeeController);
  return routes;
};
// routes.patch("/:id");
// routes.delete("/:id");
// routes.post("/info/:id");
// routes.patch("/info/:id");
// routes.delete("/info/:id");
