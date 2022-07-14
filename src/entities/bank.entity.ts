import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { BankContact } from "./bankContact.entity";
import { Debts } from "./debt.entity";

@Entity("bank")
export class Bank {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250, unique: true })
  name: string;

  @Column()
  status: boolean;

  @OneToMany(() => Debts, (debts) => debts.id)
  debts: Debts[];

  @OneToMany(() => BankContact, (bankContact) => bankContact.id)
  @JoinColumn()
  bank_contact: BankContact[];
}
