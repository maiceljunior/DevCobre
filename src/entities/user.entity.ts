import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { LevelAcess } from "./levelAcess.entity";
import { UserInfo } from "./userInfo.entity";
import { UserDebt } from "./userDebt.entity";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 251 })
  email: string;

  @Column({ length: 250 })
  @Exclude()
  password: string;

  @Column("boolean", { default: true })
  status: boolean = true;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => LevelAcess, (levelAcess) => levelAcess.id)
  level_acess: LevelAcess;

  @ManyToOne(() => UserInfo, (userInfo) => userInfo.user, {
    eager: true,
  })
  @JoinTable()
  userInfo: UserInfo[];

  @OneToMany(() => UserDebt, (userDebt) => userDebt.id)
  userDebt: UserDebt[];
}
