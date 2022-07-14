import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bank } from "./bank.entity";

@Entity("bank_contact")
export class BankContact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  telephone: number;

  @Column({ length: 250 })
  email: string;

  @ManyToOne(() => Bank, (bank) => bank.id)
  bank: Bank;
}
