import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bank } from "./bank.entity";
import { Client } from "./client.entity";
import { Debts_type } from "./debtType.entity";

@Entity("debts")
export class Debts {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  debt_value: number;

  @Column({ type: "numeric", precision: 16 })
  document_client: number;

  @Column({ type: "integer" })
  ipoc: number;

  @Column({ type: "numeric", precision: 16 })
  debt_origin: number;

  @CreateDateColumn()
  registration: Date;

  @CreateDateColumn()
  date_debt: Date;

  @ManyToOne(() => Bank, (bank) => bank.id, { eager: true })
  bank: Bank;

  @ManyToOne(() => Client, (client) => client.document, { eager: true })
  client: Client;

  @ManyToOne(() => Debts_type, (debts_type) => debts_type.id)
  debt_type: Debts_type;
}
