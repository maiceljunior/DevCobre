import { MigrationInterface, QueryRunner } from "typeorm";

export class employee1657808866307 implements MigrationInterface {
    name = 'employee1657808866307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3"`);
        await queryRunner.query(`ALTER TABLE "client_info" RENAME COLUMN "clientDocument" TO "clienttDocument"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_353e90cfdb63826878d2c8ea9e6" FOREIGN KEY ("clienttDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_353e90cfdb63826878d2c8ea9e6"`);
        await queryRunner.query(`ALTER TABLE "client_info" RENAME COLUMN "clienttDocument" TO "clientDocument"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
