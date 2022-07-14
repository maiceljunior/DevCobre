import { MigrationInterface, QueryRunner } from "typeorm";

export class bankContact1657749084190 implements MigrationInterface {
    name = 'bankContact1657749084190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP CONSTRAINT "FK_e064201099f111c64340835a0a9"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" RENAME COLUMN "bankIdId" TO "bankId"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "bank_contact_id_seq" OWNED BY "bank_contact"."id"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ALTER COLUMN "id" SET DEFAULT nextval('"bank_contact_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "bank_contact_id_seq"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" RENAME COLUMN "bankId" TO "bankIdId"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD CONSTRAINT "FK_e064201099f111c64340835a0a9" FOREIGN KEY ("bankIdId") REFERENCES "bank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
