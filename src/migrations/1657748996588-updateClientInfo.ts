import { MigrationInterface, QueryRunner } from "typeorm";

export class updateClientInfo1657748996588 implements MigrationInterface {
    name = 'updateClientInfo1657748996588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "client_info_id_seq" OWNED BY "client_info"."id"`);
        await queryRunner.query(`ALTER TABLE "client_info" ALTER COLUMN "id" SET DEFAULT nextval('"client_info_id_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_info" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "client_info_id_seq"`);
    }

}
