import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
  ADM = "ADM",
  HR = "HR",
  MANAGER = "manager",
  SUPERVISOR = "supervisor",
  USER = "user",
}

@Entity("admin")
export class Admin {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  email: string;

  @Column({ length: 250 })
  password: string;

  @Column({ type: "simple-enum", enum: UserRole, default: UserRole.ADM })
  position: UserRole;
}
