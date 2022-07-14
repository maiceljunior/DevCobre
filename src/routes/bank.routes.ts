import { Router } from "express";
import createBankController from "../controllers/bank/createBank.controller";
import deleteBankController from "../controllers/bank/deleteBank.controller";
import listBankController from "../controllers/bank/listBank.controller";
import updateBankController from "../controllers/bank/updateBank.controller";

const routes = Router();

export const bankRoutes = () => {
  routes.get("", listBankController);
  routes.post("", createBankController);
  routes.patch("/:id", updateBankController);
  routes.delete("/:id", deleteBankController);
  routes.get("/:id/contact");
  routes.post("/:id/contact");
  routes.patch("/:id/contact");
  routes.delete("/:id/contact");

  return routes;
};
