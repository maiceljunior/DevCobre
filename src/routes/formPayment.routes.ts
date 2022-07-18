import { Router } from "express";
import createPaymentController from "../controllers/payment/createPayment.controller";
import updatePaymentController from "../controllers/payment/updatePayment.controller";
import listPaymentController from "../controllers/payment/listPayment.controller";
import deletePaymentController from "../controllers/payment/deletePayment.controller";

const routes = Router();

export const formPaymentRoutes =() =>{

    
    routes.get("",listPaymentController);
    routes.post("",createPaymentController);
    routes.patch("/:id",updatePaymentController);
    routes.delete("/:id",deletePaymentController);
    // routes.get("/debts/:id");
    // routes.post("/debts/:id");
    // routes.patch("/debts/:id");
    // routes.delete("/debts/:id");

    return routes
};

