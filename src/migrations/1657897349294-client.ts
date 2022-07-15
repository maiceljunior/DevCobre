import { MigrationInterface, QueryRunner } from "typeorm";

export class client1657897349294 implements MigrationInterface {
    name = 'client1657897349294'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee_info" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client_info" ALTER COLUMN "telephone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client_info" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bank" DROP CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94"`);
        await queryRunner.query(`ALTER TABLE "bank" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "bank" ADD "name" character varying(251) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bank" ADD CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank" DROP CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94"`);
        await queryRunner.query(`ALTER TABLE "bank" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "bank" ADD "name" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bank" ADD CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD "email" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client_info" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client_info" ALTER COLUMN "telephone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee_info" DROP COLUMN "address"`);
    }

}
