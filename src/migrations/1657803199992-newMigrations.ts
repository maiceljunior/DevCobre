import { MigrationInterface, QueryRunner } from "typeorm";

export class newMigrations1657803199992 implements MigrationInterface {
    name = 'newMigrations1657803199992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bank_contact" ("id" SERIAL NOT NULL, "telephone" integer NOT NULL, "email" character varying(250) NOT NULL, "bankId" integer, CONSTRAINT "PK_560afc59afe23697c93d7d3cedb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "client_info_id_seq" OWNED BY "client_info"."id"`);
        await queryRunner.query(`ALTER TABLE "client_info" ALTER COLUMN "id" SET DEFAULT nextval('"client_info_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6"`);
        await queryRunner.query(`ALTER TABLE "client_info" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "client_info_id_seq"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "created_at"`);
        await queryRunner.query(`DROP TABLE "bank_contact"`);
    }

}
