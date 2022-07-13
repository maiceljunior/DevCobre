import { MigrationInterface, QueryRunner } from "typeorm";

export class fixMigrations1657659621826 implements MigrationInterface {
    name = 'fixMigrations1657659621826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_info" ADD "clientDocumentDocument" integer`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_7d9fb23301787692e4bde16f5d1" FOREIGN KEY ("clientDocumentDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_7d9fb23301787692e4bde16f5d1"`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP COLUMN "clientDocumentDocument"`);
    }

}
