import { IPayment } from "../../interfaces/payment";
import { AppDataSource } from "../../data-source";
import { FormOfPayment } from "../../entities/formOfPayment.entity";
import { AppError } from "../../errors";

const createPaymentService = async ({
    cash_payment,
    installments,
    entry_installments,
    entry,
    installments_times,
    values_installments
}:IPayment) =>{
    const paymentRepository = AppDataSource.getRepository(FormOfPayment)
    
    const payment = paymentRepository.create({
        cash_payment,
        installments,
        entry_installments,
        entry,
        installments_times,
        values_installments
    });

    await paymentRepository.save(payment);

    return payment
};

export default createPaymentService;
