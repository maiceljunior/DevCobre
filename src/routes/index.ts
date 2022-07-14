import { Express } from "express";
import { agreementRoutes } from "./agreement.routes";
import { bankRoutes } from "./bank.routes";
import { clientRoutes } from "./client.routes";
import { debtsRoutes } from "./debts.routes";
import { debtTypeRoutes } from "./debtType.routes";
import { employeeRoutes } from "./employee.routes";
import { formPaymentRoutes } from "./formPayment.routes";
import { historyRoutes } from "./history.routes";
import { levelAcessRoutes } from "./levelAcess.routes";

export const appRoutes = (app: Express) => {

  app.use("/bank", bankRoutes());
  app.use("/agreement", agreementRoutes);
  app.use("/client", clientRoutes());
  app.use("/debts", debtsRoutes);
  app.use("/type", debtTypeRoutes);
  app.use("/employee", employeeRoutes());
  app.use("/payment", formPaymentRoutes);
  app.use("/history", historyRoutes);
  app.use("/level", levelAcessRoutes);

};
