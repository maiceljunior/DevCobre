import { MigrationInterface, QueryRunner } from "typeorm";

export class firstDeploy1658237881255 implements MigrationInterface {
    name = 'firstDeploy1658237881255'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(250)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(255)`);
    }

}
