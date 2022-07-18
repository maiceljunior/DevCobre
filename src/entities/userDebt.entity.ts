import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Debts } from "./debt.entity";

@Entity("user_debt")
export class UserDebt {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 251 })
  name: string;

  @ManyToOne(() => Debts, (debts) => debts.id)
  debt: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
