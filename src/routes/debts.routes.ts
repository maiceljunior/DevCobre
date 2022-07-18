import { Router } from "express";
import createDebtsController from "../controllers/debts/createDebts.controller";
import listDebtsController from "../controllers/debts/listDebts.controller";
import listOneDebtController from "../controllers/debts/listOneDebt.controller";
import schemaValidation from "../middlewares/schemaValidation";
import debtRegisterSchema from "../schemas/debts/debt.schema";

const routes = Router();

export const debtsRoutes = () => {
  routes.get("", listDebtsController);
  routes.get("/:id", listOneDebtController);
  routes.post("", schemaValidation(debtRegisterSchema), createDebtsController);

  return routes;
};
