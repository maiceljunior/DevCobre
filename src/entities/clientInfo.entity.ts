import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity("client_info")
export class ClientInfo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  telephone: number;

  @Column({ length: 250 })
  email: string;

  @ManyToOne(() => Client, (client) => client.document)
  clientt: Client;
}
