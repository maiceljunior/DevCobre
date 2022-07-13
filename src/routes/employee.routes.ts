import { Router } from "express";

const routes = Router();

export const employeeRoutes = () =>{
    routes.get("");
    routes.post("");
    // routes.patch("/:id");
    // routes.delete("/:id");
    // routes.get("/info/:id");
    // routes.post("/info/:id");
    // routes.patch("/info/:id");
    // routes.delete("/info/:id");

    return routes

};


