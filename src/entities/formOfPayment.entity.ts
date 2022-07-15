import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

  @OneToMany(() => Debts, (debts) => debts.id)
  debts_id: Debts[];
}
