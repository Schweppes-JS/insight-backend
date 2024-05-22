import { MigrationInterface, QueryRunner } from "typeorm";

export class Sh1716230244306 implements MigrationInterface {
  name = "Sh1716230244306";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "content-block" ("id" SERIAL NOT NULL, "en" character varying NOT NULL, "uk" character varying NOT NULL, CONSTRAINT "PK_a720023adc33745ec39bfe752a9" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "public-page" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "route" character varying NOT NULL, "infoSectionIds" text array NOT NULL, CONSTRAINT "PK_e1f82bb884f4cfdc419849446e3" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "info-section" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "variation" character varying NOT NULL, "contentBlockIds" text array NOT NULL, CONSTRAINT "PK_743af7ba78f1fbb34e90caf5510" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "info-section"`);
    await queryRunner.query(`DROP TABLE "public-page"`);
    await queryRunner.query(`DROP TABLE "content-block"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
