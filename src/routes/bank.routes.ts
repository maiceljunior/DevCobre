import { Router } from "express";
import createBankController from "../controllers/bank/createBank.controller";
import createBankInfoController from "../controllers/bank/createBankInfo.controller";
import deleteBankController from "../controllers/bank/deleteBank.controller";
import deleteBankInfoController from "../controllers/bank/deleteBankInfo.controller";
import listBankController from "../controllers/bank/listBank.controller";
import listBankInfoController from "../controllers/bank/listBankInfo.controller";
import listOneBankController from "../controllers/bank/listOneBank.controller";
import updateBankController from "../controllers/bank/updateBank.controller";
import updateBankInfoController from "../controllers/bank/updateBankInfo.controller";
import schemaValidation from "../middlewares/schemaValidation";
import createBankSchema from "../schemas/bank/bank.schema";

const routes = Router();

export const bankRoutes = () => {
  routes.get("", listBankController);
  routes.post("", schemaValidation(createBankSchema), createBankController);
  routes.get("/:id", listOneBankController);
  routes.patch("/:id", updateBankController);
  routes.delete("/:id", deleteBankController);
  routes.get("/:id/contact", listBankInfoController);
  routes.post("/:id/contact", createBankInfoController);
  routes.patch("/:id/contact/:idContact", updateBankInfoController);
  routes.delete("/:id/contact/:idContact", deleteBankInfoController);
  return routes;
};
