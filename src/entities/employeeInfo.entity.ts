import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity("employee_info")
export class EmployeeInfo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.id)
  employee: Employee;

  @Column({ nullable: true })
  telephone: number;

  @Column({ nullable: true })
  address: string;
}
