import { Router } from "express";
import createEmployeeController from "../controllers/employee/createEmployee.controller";
import deleteEmployeeController from "../controllers/employee/deleteEmployee.controller";
import listOneEmployeeController from "../controllers/employee/listOneEmployee.controller";
import listEmployeesController from "../controllers/employee/listEmployees.controller";
import updateEmployeeController from "../controllers/employee/updateEmployee.controller";
import duplicatedEmailMiddleware from "../middlewares/duplicatedEmail.middleware";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import createEmployeeInfoController from "../controllers/employee/createEmployeeInfo.controller";

const routes = Router();

export const employeeRoutes = () => {
  routes.post("", duplicatedEmailMiddleware, createEmployeeController);
  routes.get("", verifyAuthToken, listEmployeesController);
  routes.get("/:id", listOneEmployeeController);
  routes.delete("/:id", deleteEmployeeController);
  routes.patch("/:id", updateEmployeeController);

  routes.post("/info/:id", createEmployeeInfoController);
  // routes.patch("/info/:id");
  // routes.delete("/info/:id");

  return routes;
};
