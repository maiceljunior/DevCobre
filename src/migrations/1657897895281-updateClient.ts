import { MigrationInterface, QueryRunner } from "typeorm";

export class updateClient1657897895281 implements MigrationInterface {
    name = 'updateClient1657897895281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying(251) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "name" character varying(250) NOT NULL`);
    }

}
