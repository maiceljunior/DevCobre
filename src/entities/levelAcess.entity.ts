import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class LevelAcess {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 256 })
  name: string;

  @OneToMany(() => User, (user) => user.id)
  users: User[];
}
