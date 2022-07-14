import { MigrationInterface, QueryRunner } from "typeorm";

export class client1657828512564 implements MigrationInterface {
    name = 'client1657828512564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "level_acess" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "level_acess" ADD "name" character varying(250) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "level_acess" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "level_acess" ADD "name" character varying(251) NOT NULL`);
    }

}
