import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDeletedAtColumn1716502546516 implements MigrationInterface {
  name = "AddDeletedAtColumn1716502546516";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public-page" ADD "deletedAt" TIMESTAMP`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public-page" DROP COLUMN "deletedAt"`);
  }
}
