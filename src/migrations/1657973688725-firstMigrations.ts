import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigrations1657973688725 implements MigrationInterface {
    name = 'firstMigrations1657973688725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client_info" ("id" SERIAL NOT NULL, "telephone" integer, "email" character varying(256), "clientDocument" bigint, CONSTRAINT "PK_09bdc12b41c346ad56afee8d6cc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bank_contact" ("id" SERIAL NOT NULL, "telephone" integer, "email" character varying(255), "bankId" integer, CONSTRAINT "PK_560afc59afe23697c93d7d3cedb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bank" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "status" boolean NOT NULL, CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94" UNIQUE ("name"), CONSTRAINT "PK_7651eaf705126155142947926e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "debts_type" ("id" SERIAL NOT NULL, "name" character varying(256) NOT NULL, CONSTRAINT "PK_a39a38dd2b22b45483e83b5e220" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "debts" ("id" SERIAL NOT NULL, "debtValue" numeric(10,2) NOT NULL, "documentClient" numeric(16) NOT NULL, "ipoc" integer NOT NULL, "debtOrigin" numeric(10,2) NOT NULL, "registration" TIMESTAMP NOT NULL DEFAULT now(), "dateDebt" TIMESTAMP NOT NULL DEFAULT now(), "bankId" integer, "clientDocument" bigint, "debtTypeId" integer, CONSTRAINT "PK_4bd9f54aab9e59628a3a2657fa1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "client" ("document" bigint NOT NULL, "name" character varying(253) NOT NULL, "type" character varying(16) NOT NULL, CONSTRAINT "PK_463cae6774e9b085ca966d89b4f" PRIMARY KEY ("document"))`);
        await queryRunner.query(`CREATE TABLE "form_of_payment" ("id" SERIAL NOT NULL, "cash_payment" boolean NOT NULL, "installments" boolean NOT NULL, "entry_installments" boolean NOT NULL, "entry" numeric(10,2) NOT NULL, "installments_times" integer NOT NULL, "values_installments" numeric(10,2) NOT NULL, CONSTRAINT "PK_1dd0f0bb3c89aa8c142df4ec421" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agreement" ("id" SERIAL NOT NULL, "agreed_value" numeric(10,2) NOT NULL, "date_agree" TIMESTAMP NOT NULL, CONSTRAINT "PK_e7537188219eeef56233a609753" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agreement_status" ("id" SERIAL NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_cf9c90e3ff35b7a1f95de446fa8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level_acess" ("id" SERIAL NOT NULL, "name" character varying(256) NOT NULL, CONSTRAINT "PK_671a48cff799a39a3863609cdef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee_info" ("id" SERIAL NOT NULL, "telephone" integer, "address" character varying, "employeeId" integer, CONSTRAINT "PK_68d60ba2d0f54361a6469d0aafa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "email" character varying(251) NOT NULL, "password" character varying(250) NOT NULL, "status" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "levelAcessId" integer, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact_history" ("id" SERIAL NOT NULL, "agreement" boolean NOT NULL DEFAULT false, "date_contact" TIMESTAMP NOT NULL, "note" character varying(500) NOT NULL, "employeesId" integer, "debtsId" integer, CONSTRAINT "PK_68d75ef80ec536aee6b570ebaa6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_43d88dc4d2fb333bb354f09f96f" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_68e682e126fd42a7d242538b44a" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_6c0a881f4381b21dd00317ba7af" FOREIGN KEY ("debtTypeId") REFERENCES "debts_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee_info" ADD CONSTRAINT "FK_043924611f1f3b5a8af1aa9ec73" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_b6feb21a00f75b2ecabba2f7c9f" FOREIGN KEY ("levelAcessId") REFERENCES "level_acess"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact_history" ADD CONSTRAINT "FK_3907f586ac582a8bdc03c67b41e" FOREIGN KEY ("employeesId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact_history" ADD CONSTRAINT "FK_08f4261b0a814235bb17e1740eb" FOREIGN KEY ("debtsId") REFERENCES "debts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact_history" DROP CONSTRAINT "FK_08f4261b0a814235bb17e1740eb"`);
        await queryRunner.query(`ALTER TABLE "contact_history" DROP CONSTRAINT "FK_3907f586ac582a8bdc03c67b41e"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_b6feb21a00f75b2ecabba2f7c9f"`);
        await queryRunner.query(`ALTER TABLE "employee_info" DROP CONSTRAINT "FK_043924611f1f3b5a8af1aa9ec73"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_6c0a881f4381b21dd00317ba7af"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_68e682e126fd42a7d242538b44a"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_43d88dc4d2fb333bb354f09f96f"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6"`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3"`);
        await queryRunner.query(`DROP TABLE "contact_history"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "employee_info"`);
        await queryRunner.query(`DROP TABLE "level_acess"`);
        await queryRunner.query(`DROP TABLE "agreement_status"`);
        await queryRunner.query(`DROP TABLE "agreement"`);
        await queryRunner.query(`DROP TABLE "form_of_payment"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TABLE "debts"`);
        await queryRunner.query(`DROP TABLE "debts_type"`);
        await queryRunner.query(`DROP TABLE "bank"`);
        await queryRunner.query(`DROP TABLE "bank_contact"`);
        await queryRunner.query(`DROP TABLE "client_info"`);
    }

}