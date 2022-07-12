import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Debts } from "./debt.entity";

@Entity("bank")
export class Bank {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250, unique: true })
  name: string;

  @Column()
  status: boolean;

  @OneToMany(() => Debts, (debts) => debts.id, { onDelete: "CASCADE" })
  debts: Debts[];
}
