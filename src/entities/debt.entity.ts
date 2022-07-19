import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bank } from "./bank.entity";
import { Client } from "./client.entity";
import { ContactHistory } from "./contactHistory.entity";
import { UserDebt } from "./userDebt.entity";

export enum DebtType {
  CREDITO = "credito",
  EMPRESTIMO = "emprestimo",
}

@Entity("debts")
export class Debts {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true })
  ipoc: string;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  debtValue: number;

  @Column({ type: "numeric", precision: 10, scale: 2 })
  debtOrigin: number;

  @Column({ type: "simple-enum", enum: DebtType, default: DebtType.CREDITO })
  debtType: DebtType;

  @CreateDateColumn()
  registration: Date;

  @CreateDateColumn()
  dateDebt: Date;

  @Column({ type: "boolean", default: true })
  debtStatus: boolean;

  @ManyToOne(() => Bank, (bank) => bank.id)
  bank: Bank;

  @ManyToOne(() => Client, (client) => client.document)
  client: Client;

  @ManyToOne(() => ContactHistory, (contactHistory) => contactHistory.id)
  contactHistory: ContactHistory[];

  @OneToMany(() => UserDebt, (userDebt) => userDebt.id)
  userDebt: UserDebt[];
}
