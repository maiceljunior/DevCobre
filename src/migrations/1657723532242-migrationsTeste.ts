import { MigrationInterface, QueryRunner } from "typeorm";

export class migrationsTeste1657723532242 implements MigrationInterface {
    name = 'migrationsTeste1657723532242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "form_of_payment" ("id" SERIAL NOT NULL, "cash_payment" boolean NOT NULL, "installments" boolean NOT NULL, "entry_installments" boolean NOT NULL, "entry" numeric(10,2) NOT NULL, "installments_times" integer NOT NULL, "values_installments" numeric(10,2) NOT NULL, CONSTRAINT "PK_1dd0f0bb3c89aa8c142df4ec421" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agreement" ("id" SERIAL NOT NULL, "agreed_value" numeric(10,2) NOT NULL, "date_agree" TIMESTAMP NOT NULL, CONSTRAINT "PK_e7537188219eeef56233a609753" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "agreement_status" ("id" SERIAL NOT NULL, "status" boolean NOT NULL, CONSTRAINT "PK_cf9c90e3ff35b7a1f95de446fa8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level_acess" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, CONSTRAINT "PK_671a48cff799a39a3863609cdef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "email" character varying(250) NOT NULL, "password" character varying(250) NOT NULL, "levelAcessId" integer, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact_history" ("id" SERIAL NOT NULL, "agreement" boolean NOT NULL DEFAULT false, "date_contact" TIMESTAMP NOT NULL, "note" character varying(500) NOT NULL, "employeesId" integer, "debtsId" integer, CONSTRAINT "PK_68d75ef80ec536aee6b570ebaa6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee_info" ("id" SERIAL NOT NULL, "telephone" integer NOT NULL, CONSTRAINT "PK_68d60ba2d0f54361a6469d0aafa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "formOfPaymentId" integer`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_7d9fb23301787692e4bde16f5d1"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_68e682e126fd42a7d242538b44a"`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "document" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "client_document_seq"`);
        await queryRunner.query(`ALTER TABLE "debts" ALTER COLUMN "debt_origin" TYPE numeric(10,2)`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_7d9fb23301787692e4bde16f5d1" FOREIGN KEY ("clientDocumentDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_68e682e126fd42a7d242538b44a" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_ec9fbb480d62fcf22e2f75deef6" FOREIGN KEY ("formOfPaymentId") REFERENCES "form_of_payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_b6feb21a00f75b2ecabba2f7c9f" FOREIGN KEY ("levelAcessId") REFERENCES "level_acess"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact_history" ADD CONSTRAINT "FK_3907f586ac582a8bdc03c67b41e" FOREIGN KEY ("employeesId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact_history" ADD CONSTRAINT "FK_08f4261b0a814235bb17e1740eb" FOREIGN KEY ("debtsId") REFERENCES "debts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact_history" DROP CONSTRAINT "FK_08f4261b0a814235bb17e1740eb"`);
        await queryRunner.query(`ALTER TABLE "contact_history" DROP CONSTRAINT "FK_3907f586ac582a8bdc03c67b41e"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_b6feb21a00f75b2ecabba2f7c9f"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_ec9fbb480d62fcf22e2f75deef6"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_68e682e126fd42a7d242538b44a"`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_7d9fb23301787692e4bde16f5d1"`);
        await queryRunner.query(`ALTER TABLE "debts" ALTER COLUMN "debt_origin" TYPE numeric(16,0)`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "client_document_seq" OWNED BY "client"."document"`);
        await queryRunner.query(`ALTER TABLE "client" ALTER COLUMN "document" SET DEFAULT nextval('"client_document_seq"')`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_68e682e126fd42a7d242538b44a" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_7d9fb23301787692e4bde16f5d1" FOREIGN KEY ("clientDocumentDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "formOfPaymentId"`);
        await queryRunner.query(`DROP TABLE "employee_info"`);
        await queryRunner.query(`DROP TABLE "contact_history"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "level_acess"`);
        await queryRunner.query(`DROP TABLE "agreement_status"`);
        await queryRunner.query(`DROP TABLE "agreement"`);
        await queryRunner.query(`DROP TABLE "form_of_payment"`);
    }

}
