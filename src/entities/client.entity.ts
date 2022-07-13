import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { ClientInfo } from "./clientInfo.entity";
import { Debts } from "./debt.entity";

@Entity("client")
export class Client {
  @PrimaryColumn()
  document: number;

  @Column({ length: 250 })
  name: string;

  @Column({ length: 16 })
  type: string;

  @OneToMany(() => Debts, (debts) => debts.id)
  debts: Debts[];

  @OneToMany(() => ClientInfo, (clientInfo) => clientInfo.id)
  @JoinColumn()
  client_info: ClientInfo[];
}
