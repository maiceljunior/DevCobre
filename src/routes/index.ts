import { Express } from "express";
import bankRoutes from "./bank.routes";
import clientRoutes from "./client.routes";
import debtsRoutes from "./debts.routes";
import userRoutes from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/user", userRoutes);
  app.use("/bank", bankRoutes);
  app.use("/client", clientRoutes);
  app.use("/debts", debtsRoutes);
};
