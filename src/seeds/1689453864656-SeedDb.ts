import { QueryRunner } from "typeorm";

export class SeedDb1689453864656 {
  name = "SeedDb1689453864656";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users ("firstName", "lastName", email, password) VALUES ('System', 'Admin', 'admin@admin.admin', '$2b$10$Vb9sVkmVNSaUMnebnpnnQusMRX1jCNBmFNzRAlx7XG0h83KXdTtl2')`
    );
  }
}
