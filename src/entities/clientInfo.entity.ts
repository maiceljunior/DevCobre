import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity("client_info")
export class ClientInfo {
  @PrimaryColumn()
  id: number;

  @Column()
  telephone: number;

  @Column({ length: 250 })
  email: string;

  @ManyToOne(() => Client, (client) => client.document)
  clientDocument: Client;
}
