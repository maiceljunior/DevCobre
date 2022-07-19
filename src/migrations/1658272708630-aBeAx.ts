import { MigrationInterface, QueryRunner } from "typeorm";

export class aBeAx1658272708630 implements MigrationInterface {
    name = 'aBeAx1658272708630'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agreement" ADD "valueEntry" character varying`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "installments" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "installments"`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "valueEntry"`);
    }

}
