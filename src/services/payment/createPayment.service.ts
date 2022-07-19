import { IPayment } from "../../interfaces/payment";
import { AppDataSource } from "../../data-source";
import { FormOfPayment } from "../../entities/formOfPayment.entity";
import { AppError } from "../../errors";
import { Debts } from "../../entities/debt.entity";

const createPaymentService = async (data:any) => {
   const{ cash_payment,installments,entry_installments,entry,installments_times,values_installments,debts_id} = data;
   const paymentRepository = AppDataSource.getRepository(FormOfPayment)
    
    const debtRepository = AppDataSource.getRepository(Debts);
    const debt = await debtRepository.findOneBy({id : debts_id})
    if(!debt){
        throw new AppError(400, " Debits does not exists!");
    }

    const payment = paymentRepository.create({
        ...data,
        cash:cash_payment,
        installments:installments,
        entry_installments:entry_installments,
        entry:entry,
        installments_times:installments_times,
        values_installments:values_installments
    });

    await paymentRepository.save(payment);

    return payment
};

export default createPaymentService;
