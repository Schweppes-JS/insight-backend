import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateContentBlockTable1715870086473 implements MigrationInterface {
  name = "CreateContentBlockTable1715870086473";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "content-block" ("id" SERIAL NOT NULL, "en" character varying NOT NULL, "uk" character varying NOT NULL, CONSTRAINT "PK_a720023adc33745ec39bfe752a9" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "content-block"`);
  }
}
