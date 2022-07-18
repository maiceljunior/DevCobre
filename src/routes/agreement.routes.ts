import { Router } from "express";
import listAgreementController from "../controllers/agreement/listAgreement.controller";
import createAgreementController from "../controllers/agreement/createAgreement.controller";
import updateAgreementController from "../controllers/agreement/updateAgreement.controller";
import deleteAgreementController from "../controllers/agreement/deleteAgreement.controller";
import listOneAgreementController from "../controllers/agreement/listOneAgreement.controller";

const routes = Router();

export const agreementRoutes = () =>{

    routes.get("", listAgreementController);
    routes.post("", createAgreementController);
    routes.get("/:id", listOneAgreementController);
    routes.patch("/:id", updateAgreementController);
    routes.delete("/:id", deleteAgreementController);
    return routes
}



