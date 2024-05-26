import { QueryRunner } from "typeorm";

import { UserColumnEnum } from "src/modules/user/user.entity";
import { TableNameEnum } from "src/types/table-name";

export class InsertUser1689453864656 {
  name = "InsertUser1689453864656";
  // password for 'admin@admin.admin' is 'admin'
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "${TableNameEnum.user}" ("${UserColumnEnum.firstName}", "${UserColumnEnum.lastName}", "${UserColumnEnum.email}", "${UserColumnEnum.password}") VALUES ('System', 'Admin', 'admin@admin.admin', '$2b$10$Vb9sVkmVNSaUMnebnpnnQusMRX1jCNBmFNzRAlx7XG0h83KXdTtl2')`
    );
  }
}
