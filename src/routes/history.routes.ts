import { Router } from "express";
const routes = Router();

export const historyRoutes = () => {
  routes.get("");
  routes.post("");
  // routes.patch("/:id");
  // routes.delete("/:id");
  // routes.get("/user/:id");
  // routes.post("/user/:id");
  // routes.patch("/user/:id");
  // routes.delete("/user/:id");

  return routes;
};
