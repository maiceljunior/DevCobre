import { Router } from "express";
import createPaymentController from "../controllers/payment/createPayment.controller";
import updatePaymentController from "../controllers/payment/updatePayment.controller";
import listPaymentController from "../controllers/payment/listPayment.controller";
import deletePaymentController from "../controllers/payment/deletePayment.controller";
import listOnePaymentController from "../controllers/payment/listOnePayment.controller";

const routes = Router();

export const formPaymentRoutes = () => {
  routes.get("", listPaymentController);
  routes.post("", createPaymentController);
  routes.get("/:id", listOnePaymentController);
  routes.patch("/:id", updatePaymentController);
  routes.delete("/:id", deletePaymentController);

  return routes;
};
