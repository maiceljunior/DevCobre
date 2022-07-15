import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bank } from "./bank.entity";
import { Client } from "./client.entity";
import { Debts_type } from "./debtType.entity";
import { FormOfPayment } from "./formOfPayment.entity";

@Entity("debts")
export class Debts {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  debtValue: number;

  @Column({ type: "numeric", precision: 16 })
  documentClient: number;

  @Column({ type: "integer" })
  ipoc: number;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  debtOrigin: number;

  @CreateDateColumn()
  registration: Date;

  @CreateDateColumn()
  dateDebt: Date;

  @ManyToOne(() => Bank, (bank) => bank.id)
  bank: Bank;

  @ManyToOne(() => Client, (client) => client.document)
  client: Client;

  @ManyToOne(() => Debts_type, (debts_type) => debts_type.id)
  debt_type: Debts_type;

  // @ManyToOne(() => FormOfPayment, (FormOfPayment) => FormOfPayment.id)
  // formOfPayment: FormOfPayment;
}
