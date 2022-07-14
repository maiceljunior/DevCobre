import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity("employee_info")
export class EmployeeInfo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @OneToOne(() => Employee, (employee) => employee.id)
  employee: Employee;

  @Column()
  telephone: number;

  @Column()
  address: string;
}
