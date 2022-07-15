import { MigrationInterface, QueryRunner } from "typeorm";

export class tessaaateXXX1657910422736 implements MigrationInterface {
    name = 'tessaaateXXX1657910422736'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" ADD "registration" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD "email" character varying(256)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_info" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD "email" character varying(250)`);
        await queryRunner.query(`ALTER TABLE "debts" DROP COLUMN "registration"`);
    }

}
