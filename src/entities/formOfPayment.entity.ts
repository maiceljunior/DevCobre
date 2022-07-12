import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("form_of_payment")
export class FormOfPayment {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  cash_payment: boolean;

  @Column()
  installments: boolean;

  @Column()
  entry_installments: boolean;
}
