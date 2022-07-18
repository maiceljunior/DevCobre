import { MigrationInterface, QueryRunner } from "typeorm";

export class changeDebtType1658167574565 implements MigrationInterface {
    name = 'changeDebtType1658167574565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "debts" RENAME COLUMN "role" TO "debtType"`);
        await queryRunner.query(`ALTER TYPE "public"."debts_role_enum" RENAME TO "debts_debttype_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."debts_debttype_enum" RENAME TO "debts_role_enum"`);
        await queryRunner.query(`ALTER TABLE "debts" RENAME COLUMN "debtType" TO "role"`);
    }

}
