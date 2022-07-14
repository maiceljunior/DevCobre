import { MigrationInterface, QueryRunner } from "typeorm";

export class employee1657806751857 implements MigrationInterface {
    name = 'employee1657806751857'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "status" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "status"`);
    }

}
