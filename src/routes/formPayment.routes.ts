import { Router } from "express";

const routes = Router();

export const formPaymentRoutes =() =>{

    
    routes.get("");
    routes.post("");
    routes.patch("/:id");
    routes.delete("/:id");
    // routes.get("/debts/:id");
    // routes.post("/debts/:id");
    // routes.patch("/debts/:id");
    // routes.delete("/debts/:id");

    return routes
};

