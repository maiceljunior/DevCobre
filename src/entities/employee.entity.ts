import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { LevelAcess } from "./levelAcess.entity";

@Entity("employee")
export class Employee {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 250 })
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

  //   @OneToOne(() => )
}
