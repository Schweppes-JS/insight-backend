import { QueryRunner } from "typeorm";

import { PublicPageColumnEnum } from "src/modules/public-page/public-page.entity";
import { TableNameEnum } from "src/types/table-name";

export class InsertPublicPage1715863163516 {
  name = "InsertPublicPage1715863163516";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "${TableNameEnum["public-page"]}" ("${PublicPageColumnEnum.name}", "${PublicPageColumnEnum.route}", "${PublicPageColumnEnum.infoSectionIds}")
      VALUES 
      ('home', '', ARRAY[]::INTEGER[]),
      ('terms of use', '/terms', ARRAY[]::INTEGER[]),
      ('privacy policy', '/policy', ARRAY[]::INTEGER[]),
      ('educational projects', '/study', ARRAY[]::INTEGER[])`
    );
  }
}
