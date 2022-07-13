import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
  password: string;

  @ManyToOne(() => LevelAcess, (levelAcess) => levelAcess.id)
  level_acess: LevelAcess;

  //   @OneToOne(() => )
}
