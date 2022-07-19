import { MigrationInterface, QueryRunner } from "typeorm";

export class firstDeploy1658240304084 implements MigrationInterface {
    name = 'firstDeploy1658240304084'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6"`);
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client_info" DROP CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3"`);
        await queryRunner.query(`ALTER TABLE "bank_contact" DROP CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6"`);
        await queryRunner.query(`ALTER TABLE "client_info" ADD CONSTRAINT "FK_c038d22b950e35c6ad1290a2ac3" FOREIGN KEY ("clientDocument") REFERENCES "client"("document") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bank_contact" ADD CONSTRAINT "FK_0fac1c00e6609d07e97d6e8aaf6" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
