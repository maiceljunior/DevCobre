import { Column, Entity, JoinTable, OneToMany, PrimaryColumn } from "typeorm";
import { ClientInfo } from "./clientInfo.entity";
import { Debts } from "./debt.entity";

@Entity("client")
export class Client {
  @PrimaryColumn({ type: "bigint" })
  document: number;

  @Column({ length: 253 })
  name: string;

  @Column({ length: 16 })
  type: string;

  @OneToMany(() => Debts, (debts) => debts.id)
  debts: Debts[];

  @OneToMany(() => ClientInfo, (clientInfo) => clientInfo.client, {
    eager: true,
  })
  @JoinTable()
  clientInfo: ClientInfo[];
}
