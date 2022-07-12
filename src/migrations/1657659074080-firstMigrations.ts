import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigrations1657659074080 implements MigrationInterface {
    name = 'firstMigrations1657659074080'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client_info" ("id" integer NOT NULL, "telephone" integer NOT NULL, "email" character varying(250) NOT NULL, CONSTRAINT "PK_09bdc12b41c346ad56afee8d6cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("document" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "type" character varying(16) NOT NULL, CONSTRAINT "PK_463cae6774e9b085ca966d89b4f" PRIMARY KEY ("document"))`);
        await queryRunner.query(`CREATE TABLE "debts_type" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, CONSTRAINT "PK_a39a38dd2b22b45483e83b5e220" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "debts" ("id" SERIAL NOT NULL, "debt_value" numeric(10,2) NOT NULL, "document_client" numeric(16) NOT NULL, "ipoc" integer NOT NULL, "debt_origin" numeric(16) NOT NULL, "registration" TIMESTAMP NOT NULL DEFAULT now(), "date_debt" TIMESTAMP NOT NULL DEFAULT now(), "bankId" integer, "clientDocument" integer, "debtTypeId" integer, CONSTRAINT "PK_4bd9f54aab9e59628a3a2657fa1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bank" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "status" boolean NOT NULL, CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94" UNIQUE ("name"), CONSTRAINT "PK_7651eaf705126155142947926e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_43d88dc4d2fb333bb354f09f96f" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_68e682e126fd42a7d242538b44a" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_6c0a881f4381b21dd00317ba7af" FOREIGN KEY ("debtTypeId") REFERENCES "debts_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_6c0a881f4381b21dd00317ba7af"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_68e682e126fd42a7d242538b44a"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_43d88dc4d2fb333bb354f09f96f"`);
        await queryRunner.query(`DROP TABLE "bank"`);
        await queryRunner.query(`DROP TABLE "debts"`);
        await queryRunner.query(`DROP TABLE "debts_type"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "client_info"`);
    }

}
