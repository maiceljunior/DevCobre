import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Debts } from "./debt.entity";

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

  @Column({ type: "numeric", precision: 10, scale: 2 })
  entry: number;

  @Column({ type: "integer" })
  installments_times: number;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  values_installments: number;

  @OneToOne(() => Debts, (debts) => debts.id)
  debtsId: Debts;
}
