import { MigrationInterface, QueryRunner } from "typeorm";

export class test1657833043219 implements MigrationInterface {
    name = 'test1657833043219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee_info" DROP CONSTRAINT "FK_043924611f1f3b5a8af1aa9ec73"`);
        await queryRunner.query(`ALTER TABLE "employee_info" RENAME COLUMN "employeeId" TO "address"`);
        await queryRunner.query(`ALTER TABLE "bank" DROP CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94"`);
        await queryRunner.query(`ALTER TABLE "bank" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "bank" ADD "name" character varying(251) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bank" ADD CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "employee_info" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "employee_info" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "password" character varying(250) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "password" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "employee_info" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "employee_info" ADD "address" integer`);
        await queryRunner.query(`ALTER TABLE "bank" DROP CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94"`);
        await queryRunner.query(`ALTER TABLE "bank" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "bank" ADD "name" character varying(250) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "bank" ADD CONSTRAINT "UQ_11f196da2e68cef1c7e84b4fe94" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "employee_info" RENAME COLUMN "address" TO "employeeId"`);
        await queryRunner.query(`ALTER TABLE "employee_info" ADD CONSTRAINT "FK_043924611f1f3b5a8af1aa9ec73" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
