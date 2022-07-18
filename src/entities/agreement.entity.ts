import { Column, Entity, OneToOne, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Debts } from "./debt.entity";
import { Bank } from "./bank.entity";
import { Client } from "./client.entity";
import { Employee } from "./employee.entity";

import { FormOfPayment } from "./formOfPayment.entity";

@Entity("agreement")
export class Agreement {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  agreedvalue: number;

  @Column()
  dateagree: Date;

  @Column()
  status: boolean;

  @OneToOne(() => Debts, (debts) => debts.id)
  debts: Debts;

  @ManyToOne(() => Bank, (bank) => bank.id)
  bank: Bank;

  @ManyToOne(() => Client, (client) => client.document)
  client: Client;

  @ManyToOne(() => Employee, (user) => user.id)
  user: Employee;
    
  @OneToOne(() => FormOfPayment, (formOfPayment) => formOfPayment.id)
  formofpayment: FormOfPayment;

}
