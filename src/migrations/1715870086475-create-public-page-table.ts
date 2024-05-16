import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePublicPageTable1715870086475 implements MigrationInterface {
  name = "CreatePublicPageTable1715870086475";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public-page" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "route" character varying NOT NULL, "infoSectionIds" text array NOT NULL, CONSTRAINT "PK_e1f82bb884f4cfdc419849446e3" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "public-page"`);
  }
}
