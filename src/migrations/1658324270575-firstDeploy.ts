import { MigrationInterface, QueryRunner } from "typeorm";

export class firstDeploy1658324270575 implements MigrationInterface {
    name = 'firstDeploy1658324270575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."user_position_enum" RENAME TO "user_position_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."user_position_enum" AS ENUM('ADM', 'HR', 'manager', 'supervisor', 'user')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "position" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "position" TYPE "public"."user_position_enum" USING "position"::"text"::"public"."user_position_enum"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "position" SET DEFAULT 'user'`);
        await queryRunner.query(`DROP TYPE "public"."user_position_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_position_enum_old" AS ENUM('HR', 'manager', 'supervisor', 'user')`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "position" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "position" TYPE "public"."user_position_enum_old" USING "position"::"text"::"public"."user_position_enum_old"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "position" SET DEFAULT 'user'`);
        await queryRunner.query(`DROP TYPE "public"."user_position_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."user_position_enum_old" RENAME TO "user_position_enum"`);
    }

}
