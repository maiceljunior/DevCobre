import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Debts } from "./debt.entity";
import { Employee } from "./employee.entity";

@Entity()
export class ContactHistory {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  agreement: boolean;

  @Column()
  date_contact: Date;

  @Column({ length: 500 })
  note: string;

  @ManyToOne(() => Employee, (employee) => employee.id)
  employees: Employee[];

  @ManyToOne(() => Debts, (debts) => debts.id)
  debts: Debts;
}
