import { MigrationInterface, QueryRunner } from "typeorm";

export class attBeekeperAAAA1658269413289 implements MigrationInterface {
    name = 'attBeekeperAAAA1658269413289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."agreement_formofpayment_enum" AS ENUM('a vista', 'parcelado', 'entrada')`);
        await queryRunner.query(`ALTER TABLE "agreement" ADD "formOfPayment" "public"."agreement_formofpayment_enum" NOT NULL DEFAULT 'a vista'`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(250) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(251) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "agreement" DROP COLUMN "formOfPayment"`);
        await queryRunner.query(`DROP TYPE "public"."agreement_formofpayment_enum"`);
    }

}
