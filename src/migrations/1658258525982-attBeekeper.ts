import { MigrationInterface, QueryRunner } from "typeorm";

export class attBeekeper1658258525982 implements MigrationInterface {
    name = 'attBeekeper1658258525982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6"`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_eca4e19e958cae709e5af2ce27a"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "contactHistoryId"`);
        await queryRunner.query(`ALTER TABLE "form_of_payment" ADD "debtsId" integer`);
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(251)`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD "clientDocument" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP CONSTRAINT "FK_22a5713ff8c018770412559c51e"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_68e682e126fd42a7d242538b44a"`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "PK_463cae6774e9b085ca966d89b4f"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "document"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "document" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "PK_463cae6774e9b085ca966d89b4f" PRIMARY KEY ("document")`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(251) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "clientDocument" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "clientDocument" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "form_of_payment" ADD CONSTRAINT "FK_4e523705f18e45d4676137440b1" FOREIGN KEY ("debtsId") REFERENCES "debts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_68e682e126fd42a7d242538b44a" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD CONSTRAINT "FK_22a5713ff8c018770412559c51e" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agreement" DROP CONSTRAINT "FK_22a5713ff8c018770412559c51e"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_68e682e126fd42a7d242538b44a"`);
        await queryRunner.query(`ALTER TABLE "form_of_payment" DROP CONSTRAINT "FK_4e523705f18e45d4676137440b1"`);
        await queryRunner.query(`ALTER TABLE "user_info" DROP CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949"`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "clientDocument" character varying(14)`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "clientDocument" character varying(14)`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying(253) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP CONSTRAINT "PK_463cae6774e9b085ca966d89b4f"`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "document"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "document" character varying(14) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" ADD CONSTRAINT "PK_463cae6774e9b085ca966d89b4f" PRIMARY KEY ("document")`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_68e682e126fd42a7d242538b44a" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD CONSTRAINT "FK_22a5713ff8c018770412559c51e" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP COLUMN "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD "clientDocument" character varying(14)`);
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "form_of_payment" DROP COLUMN "debtsId"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD "contactHistoryId" integer`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_eca4e19e958cae709e5af2ce27a" FOREIGN KEY ("contactHistoryId") REFERENCES "contact_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_info" ADD CONSTRAINT "FK_3a7fa0c3809d19eaf2fb4f65949" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
