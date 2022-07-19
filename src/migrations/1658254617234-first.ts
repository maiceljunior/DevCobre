import { MigrationInterface, QueryRunner } from "typeorm";

export class first1658254617234 implements MigrationInterface {
    name = 'first1658254617234'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "debts" ADD CONSTRAINT "FK_834960a509c776eb841644a9bac" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" DROP CONSTRAINT "FK_834960a509c776eb841644a9bac"`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "userId"`);
    }

}
