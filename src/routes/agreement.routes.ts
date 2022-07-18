import { Router } from "express";
import listAgreementController from "../controllers/agreement/listAgreement.controller";
import createAgreementController from "../controllers/agreement/createAgreement.controller";
import updateAgreementController from "../controllers/agreement/updateAgreement.controller";
import deleteAgreementController from "../controllers/agreement/deleteAgreement.controller";
import listOneAgreementController from "../controllers/agreement/listOneAgreement.controller";
import listAgreementByBankController from "../controllers/agreement/listAgreementByBank.controller";
import listAgreementByClientController from "../controllers/agreement/listAgreementByClient.controller";
import listAgreementByUserController from "../controllers/agreement/listAgreementByUser.controller";

const routes = Router();

export const agreementRoutes = () =>{

    routes.get("", listAgreementController);
    routes.post("", createAgreementController);
    routes.get("/:id", listOneAgreementController);
    routes.patch("/:id", updateAgreementController);
    routes.delete("/:id", deleteAgreementController);
    routes.get("/bank/:id", listAgreementByBankController);
    routes.get("/client/:id", listAgreementByClientController);
    routes.get("/user/:id", listAgreementByUserController);
    return routes
}



