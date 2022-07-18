import { MigrationInterface, QueryRunner } from "typeorm";

export class firstDeploy1658168114125 implements MigrationInterface {
    name = 'firstDeploy1658168114125'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact_history" DROP CONSTRAINT "FK_3907f586ac582a8bdc03c67b41e"`);
        await queryRunner.query(`ALTER TABLE "contact_history" RENAME COLUMN "employeesId" TO "usersId"`);
        await queryRunner.query(`CREATE TABLE "user_info" ("id" SERIAL NOT NULL, "telephone" integer, "address" character varying, "email" character varying(251) NOT NULL, "password" character varying(250) NOT NULL, "status" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_273a06d6cdc2085ee1ce7638b24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_position_enum" AS ENUM('HR', 'manager', 'supervisor', 'user')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying(250) NOT NULL, "position" "public"."user_position_enum" NOT NULL DEFAULT 'user', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contact_history" ADD CONSTRAINT "FK_5e8f0954a4a47d04a55eaab4231" FOREIGN KEY ("usersId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact_history" DROP CONSTRAINT "FK_5e8f0954a4a47d04a55eaab4231"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_position_enum"`);
        await queryRunner.query(`DROP TABLE "user_info"`);
        await queryRunner.query(`ALTER TABLE "contact_history" RENAME COLUMN "usersId" TO "employeesId"`);
        await queryRunner.query(`ALTER TABLE "contact_history" ADD CONSTRAINT "FK_3907f586ac582a8bdc03c67b41e" FOREIGN KEY ("employeesId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
