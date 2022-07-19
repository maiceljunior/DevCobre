import { MigrationInterface, QueryRunner } from "typeorm";

export class first1658250229611 implements MigrationInterface {
    name = 'first1658250229611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_eca4e19e958cae709e5af2ce27a"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "contactHistoryId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" ADD "contactHistoryId" integer`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_eca4e19e958cae709e5af2ce27a" FOREIGN KEY ("contactHistoryId") REFERENCES "contact_history"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
