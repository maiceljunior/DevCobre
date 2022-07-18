import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Debts_type } from "./debtType.entity";
import { Employee } from "./employee.entity";

@Entity()
export class LevelAcess {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 256 })
  name: string;

  @OneToMany(() => Employee, (employee) => employee.id)
  employees: Employee[];

  @OneToMany(() => Debts_type,(debt_type)=> debt_type.id)
  debt_type:Debts_type[];
}
