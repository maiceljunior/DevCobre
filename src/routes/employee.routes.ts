import { Router } from "express";
import createEmployeeController from "../controllers/employee/createEmployee.controller";
import duplicatedEmailMiddleware from "../middlewares/duplicatedEmail.middleware";

const routes = Router();

export const employeeRoutes = () => {
  routes.post("/create", duplicatedEmailMiddleware, createEmployeeController);
};
// routes.patch("/:id");
// routes.delete("/:id");
// routes.get("/info/:id");
// routes.post("/info/:id");
// routes.patch("/info/:id");
// routes.delete("/info/:id");
