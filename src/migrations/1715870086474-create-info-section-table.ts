import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInfoSectionTable1715870086474 implements MigrationInterface {
  name = "CreateInfoSectionTable1715870086474";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "info-section" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "variation" character varying NOT NULL, "contentBlockIds" text array NOT NULL, CONSTRAINT "PK_743af7ba78f1fbb34e90caf5510" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "info-section"`);
  }
}
