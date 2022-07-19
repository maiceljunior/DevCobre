import { MigrationInterface, QueryRunner } from "typeorm";

export class client1658234976808 implements MigrationInterface {
    name = 'client1658234976808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_2c31f0ce08059bb8203ef1181f4"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_6c0a881f4381b21dd00317ba7af"`);
        await queryRunner.query(`CREATE TABLE "user_debt" ("id" SERIAL NOT NULL, "name" character varying(251) NOT NULL, "debtId" integer, "userId" integer, CONSTRAINT "PK_2d63756070f041feb90226e4372" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "levelAcessId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "debtTypeId"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "documentClient"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "agreed_value"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "date_agree"`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "email" character varying(251) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "password" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "status" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`CREATE TYPE "public"."user_position_enum" AS ENUM('HR', 'manager', 'supervisor', 'user')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "position" "public"."user_position_enum" NOT NULL DEFAULT 'user'`);
        await queryRunner.query(`CREATE TYPE "public"."debts_debttype_enum" AS ENUM('credito', 'emprestimo')`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "debtType" "public"."debts_debttype_enum" NOT NULL DEFAULT 'credito'`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "debtStatus" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "contactHistoryId" integer`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "agreedvalue" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "dateagree" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "status" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "bankId" integer`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "clientDocument" character varying(14)`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "ipoc"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "ipoc" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "UQ_3f7e06cf1f1749e839819e7da24" UNIQUE ("ipoc")`);
        await queryRunner.query(`ALTER TABLE "user_debt" ADD CONSTRAINT "FK_0956c56ff5aad6f48371867af31" FOREIGN KEY ("debtId") REFERENCES "debts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_debt" ADD CONSTRAINT "FK_b271e3d578761b06e6c7b122a6e" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_eca4e19e958cae709e5af2ce27a" FOREIGN KEY ("contactHistoryId") REFERENCES "contact_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD CONSTRAINT "FK_656cf36173881bcf6d7c0824d64" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD CONSTRAINT "FK_22a5713ff8c018770412559c51e" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD CONSTRAINT "FK_9acc5bec5a804d0a7cc3f58d392" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agreement" DROP CONSTRAINT "FK_9acc5bec5a804d0a7cc3f58d392"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP CONSTRAINT "FK_22a5713ff8c018770412559c51e"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP CONSTRAINT "FK_656cf36173881bcf6d7c0824d64"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_eca4e19e958cae709e5af2ce27a"`);
        await queryRunner.query(`ALTER TABLE "user_debt" DROP CONSTRAINT "FK_b271e3d578761b06e6c7b122a6e"`);
        await queryRunner.query(`ALTER TABLE "user_debt" DROP CONSTRAINT "FK_0956c56ff5aad6f48371867af31"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "UQ_3f7e06cf1f1749e839819e7da24"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "ipoc"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "ipoc" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "bankId"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "dateagree"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "agreedvalue"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "contactHistoryId"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "debtStatus"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "debtType"`);
        await queryRunner.query(`DROP TYPE "public"."debts_debttype_enum"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "position"`);
        await queryRunner.query(`DROP TYPE "public"."user_position_enum"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "date_agree" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "agreed_value" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "documentClient" numeric(16,0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "debtTypeId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(251) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "levelAcessId" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "status" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`DROP TABLE "user_debt"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_6c0a881f4381b21dd00317ba7af" FOREIGN KEY ("debtTypeId") REFERENCES "debts_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_2c31f0ce08059bb8203ef1181f4" FOREIGN KEY ("levelAcessId") REFERENCES "level_acess"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
