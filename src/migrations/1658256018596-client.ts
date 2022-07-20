import { MigrationInterface, QueryRunner } from "typeorm";

export class client1658256018596 implements MigrationInterface {
    name = 'client1658256018596'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_eca4e19e958cae709e5af2ce27a"`);
        await queryRunner.query(`ALTER TABLE "debts" RENAME COLUMN "contactHistoryId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_834960a509c776eb841644a9bac" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_834960a509c776eb841644a9bac"`);
        await queryRunner.query(`ALTER TABLE "debts" RENAME COLUMN "userId" TO "contactHistoryId"`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_eca4e19e958cae709e5af2ce27a" FOREIGN KEY ("contactHistoryId") REFERENCES "contact_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
