import { Request, Response } from "express";
import listPaymentService from "../../services/payment/listPayment.service";

const listPaymentontroller = async (req: Request, res: Response) => {
    const payments = await listPaymentService();
  
    return res.json(payments);
  };
  
  export default listPaymentontroller;
