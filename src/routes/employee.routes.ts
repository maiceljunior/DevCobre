import { Router } from "express";
import createEmployeeController from "../controllers/employee/createEmployee.controller";
import deleteEmployeeController from "../controllers/employee/deleteEmployee.controller";
import listOneEmployeeController from "../controllers/employee/listOneEmployee.controller";
import listEmployeesController from "../controllers/employee/listEmployees.controller";
import updateEmployeeController from "../controllers/employee/updateEmployee.controller";
import duplicatedEmailMiddleware from "../middlewares/duplicatedEmail.middleware";
import verifyAuthToken from "../middlewares/verifyAuthToken.middleware";
import createEmployeeInfoController from "../controllers/employee/createEmployeeInfo.controller";
import updateEmployeeInfoController from "../controllers/employee/updateEmployeeInfo.controller";
import deleteEmployeeInfoController from "../controllers/employee/deleteEmployeeInfo.controller";
import listEmployeeInfoController from "../controllers/employee/listEmployeeInfo.controller";

const routes = Router();

export const employeeRoutes = () => {
  routes.post("", duplicatedEmailMiddleware, createEmployeeController);
  routes.get("", verifyAuthToken, listEmployeesController);
  routes.get("/:id", listOneEmployeeController);
  routes.delete("/:id", deleteEmployeeController);
  routes.patch("/:id", updateEmployeeController);

  routes.post("/:id/info", createEmployeeInfoController);
  routes.get("/:id/info", listEmployeeInfoController);
  routes.patch("/:id/info/:employeeId", updateEmployeeInfoController);
  routes.delete("/:id/info/:employeeId", deleteEmployeeInfoController);

  return routes;
};
