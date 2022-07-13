import { Router } from "express";
import createEmployeeController from "../controllers/employee/createEmployee.controller";
import duplicatedEmailMiddleware from "../middlewares/duplicatedEmail.middleware";

const employeeRoutes = Router();

employeeRoutes.post(
  "/create",
  duplicatedEmailMiddleware,
  createEmployeeController
);

export default employeeRoutes;
