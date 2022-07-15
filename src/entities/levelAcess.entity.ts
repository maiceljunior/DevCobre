import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class LevelAcess {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 256 })
  name: string;

  @OneToMany(() => Employee, (employee) => employee.id)
  employees: Employee[];
}
