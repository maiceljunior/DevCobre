import {
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Debts } from "./debt.entity";
import { ContactHistory } from "./contactHistory.entity";
import { UserInfo } from "./userInfo.entity";

export enum UserRole {
  HR = "HR",
  MANAGER = "manager",
  SUPERVISOR = "supervisor",
  USER = "user",
}

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ type: "simple-enum", enum: UserRole, default: UserRole.USER })
  position: UserRole;

  @OneToMany(() => UserInfo, (userInfo) => userInfo.user, {
    eager: true,
  })
  @JoinTable()
  userInfo: UserInfo;

  @OneToMany(() => Debts, (debt) => debt.user)
  @JoinTable()
  debts: Debts[];

  @OneToMany(() => ContactHistory, (contactHistory) => contactHistory.id)
  contactHistory: ContactHistory[];
}
