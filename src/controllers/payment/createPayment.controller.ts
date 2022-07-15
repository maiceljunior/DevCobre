import { Request, Response } from "express";
import createPaymentService from "../../services/payment/createPayment.service";

const createPaymentController = async(req:Request,res:Response) =>{
    const {cash_payment,installments,entry_installments,entry,installments_times,values_installments} = req.body;
    const newPayment = await createPaymentService({cash_payment,installments,entry_installments,entry,installments_times,values_installments});
    return res.status(201).json(newPayment);
};

export default createPaymentController
