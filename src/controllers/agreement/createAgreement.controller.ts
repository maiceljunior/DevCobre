import { Request, Response } from "express";
import createAgreementService from "../../services/agreement/createAgreement.service";

const createAgreementController = async (req: Request, res: Response) => {
  const { agreedValue, dateAgree, status, debtsId, bankId, clientId, userId, formOfPayment } = req.body;
  const newAgreement = await createAgreementService({ agreedValue, dateAgree, status, debtsId, bankId, clientId, userId, formOfPayment });
  return res.status(201).json(newAgreement);
};

export default createAgreementController;
