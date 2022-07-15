import { MigrationInterface, QueryRunner } from "typeorm";

export class maicelteste1657912546335 implements MigrationInterface {
    name = 'maicelteste1657912546335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_ec9fbb480d62fcf22e2f75deef6"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "debt_value"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "document_client"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "debt_origin"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "date_debt"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "formOfPaymentId"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "debtValue" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "documentClient" numeric(16) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "debtOrigin" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "dateDebt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3"`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD "email" character varying(256)`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD "clientDocument" bigint`);
        await queryRunner.query(`ALTER TABLE "debts_type" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "debts_type" ADD "name" character varying(256) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_68e682e126fd42a7d242538b44a"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "clientDocument" bigint`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "PK_463cae6774e9b085ca966d89b4f"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "document"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "document" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "PK_463cae6774e9b085ca966d89b4f" PRIMARY KEY ("document")`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying(253) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "level_acess" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "level_acess" ADD "name" character varying(256) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_68e682e126fd42a7d242538b44a" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_68e682e126fd42a7d242538b44a"`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3"`);
        await queryRunner.query(`ALTER TABLE "level_acess" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "level_acess" ADD "name" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "PK_463cae6774e9b085ca966d89b4f"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "document"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "document" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "PK_463cae6774e9b085ca966d89b4f" PRIMARY KEY ("document")`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "clientDocument" integer`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_68e682e126fd42a7d242538b44a" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts_type" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "debts_type" ADD "name" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD "clientDocument" integer`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD "email" character varying(250)`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "dateDebt"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "debtOrigin"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "documentClient"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "debtValue"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "formOfPaymentId" integer`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "date_debt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "debt_origin" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "document_client" numeric(16,0) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "debt_value" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_ec9fbb480d62fcf22e2f75deef6" FOREIGN KEY ("formOfPaymentId") REFERENCES "form_of_payment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
