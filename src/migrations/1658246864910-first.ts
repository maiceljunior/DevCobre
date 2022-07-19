import { MigrationInterface, QueryRunner } from "typeorm";

export class first1658246864910 implements MigrationInterface {
    name = 'first1658246864910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(251)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(250)`);
    }

}
