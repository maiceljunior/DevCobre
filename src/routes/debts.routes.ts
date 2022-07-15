import { Router } from "express";
import createDebtsController from "../controllers/debts/createDebts.controller";
import listDebtsController from "../controllers/debts/listDebts.controller";
import listOneDebtController from "../controllers/debts/listOneDebt.controller";

const routes = Router();

export const debtsRoutes = () => {
  routes.get("", listDebtsController);
  routes.get("/:id", listOneDebtController);
  routes.post("", createDebtsController);

  // routes.patch("/:id");
  // routes.delete("/:id");
  // routes.get("/type/:id");
  // routes.post("/type/:id");
  // routes.patch("/type/:id");
  // routes.delete("/type/:id");

  return routes;
};
