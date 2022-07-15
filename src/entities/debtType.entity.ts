import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Debts } from "./debt.entity";

@Entity("debts_type")
export class Debts_type {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 256 })
  name: string;

  @OneToMany(() => Debts, (debts) => debts.debt_type)
  debts: Debts[];
}
