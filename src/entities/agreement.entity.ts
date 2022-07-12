import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { Debts } from "./debt.entity";
import { FormOfPayment } from "./formOfPayment.entity";

@Entity("agreement")
export class Agreement {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  agreed_value: number;

  @Column()
  date_agree: Date;

  @OneToOne(() => Debts, (debts) => debts.id, { eager: true })
  debtsId: Debts;

  @OneToOne(() => Client, (client) => client.document)
  clientDocument: Client;

  @OneToOne(() => FormOfPayment, (formOfPayment) => formOfPayment.id)
  formOfPayment: FormOfPayment;
}
