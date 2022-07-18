import { MigrationInterface, QueryRunner } from "typeorm";

export class client1657907096513 implements MigrationInterface {
    name = 'client1657907096513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank" DROP CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94"`);
        await queryRunner.query(`ALTER TABLE "bank" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "bank" ADD "name" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bank" ADD CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank" DROP CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94"`);
        await queryRunner.query(`ALTER TABLE "bank" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "bank" ADD "name" character varying(251) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bank" ADD CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94" UNIQUE ("name")`);
    }

}
