import { MigrationInterface, QueryRunner } from "typeorm";

export class client1658261623187 implements MigrationInterface {
    name = 'client1658261623187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(250)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(251)`);
    }

}
