import { Router } from "express";
const routes = Router();

export const historyRoutes =() =>{
    routes.get("");
    routes.post("");
    // routes.patch("/:id");
    // routes.delete("/:id");
    // routes.get("/employee/:id");
    // routes.post("/employee/:id");
    // routes.patch("/employee/:id");
    // routes.delete("/employee/:id");

    return routes
};

