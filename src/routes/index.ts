import { Express } from "express";
import bankRoutes from "./bank.routes";
import clientRoutes from "./client.routes";
import debtsRoutes from "./debts.routes";
import employeeRoutes from "./employee.routes";

export const appRoutes = (app: Express) => {
  app.use("/employee", employeeRoutes);
  app.use("/bank", bankRoutes);
  app.use("/client", clientRoutes);
  app.use("/debts", debtsRoutes);
};
