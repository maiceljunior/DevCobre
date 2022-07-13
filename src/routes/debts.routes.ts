import { Router } from "express";

const routes = Router();

export const debtsRoutes = () => {
  routes.get("");
  routes.post("");
  // routes.patch("/:id");
  // routes.delete("/:id");
  // routes.get("/type/:id");
  // routes.post("/type/:id");
  // routes.patch("/type/:id");
  // routes.delete("/type/:id");

  return routes;
};
