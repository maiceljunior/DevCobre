import { MigrationInterface, QueryRunner } from "typeorm";

export class attBeA1658271879605 implements MigrationInterface {
    name = 'attBeA1658271879605'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agreement" ADD "debtsId" integer`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD CONSTRAINT "UQ_8a2b2d36d07bcc8b5269109ead2" UNIQUE ("debtsId")`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD CONSTRAINT "FK_8a2b2d36d07bcc8b5269109ead2" FOREIGN KEY ("debtsId") REFERENCES "debts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agreement" DROP CONSTRAINT "FK_8a2b2d36d07bcc8b5269109ead2"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP CONSTRAINT "UQ_8a2b2d36d07bcc8b5269109ead2"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "debtsId"`);
    }

}
