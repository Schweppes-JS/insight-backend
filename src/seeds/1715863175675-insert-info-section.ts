import { QueryRunner } from "typeorm";

import { InfoSectionColumnEnum, InfoSectionVariationEnum } from "src/modules/info-section/info-section.entity";
import { TableNameEnum } from "src/types/table-name";

export class InsertInfoSection1715863175675 {
  name = "InsertInfoSection1715863175675";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "${TableNameEnum["info-section"]}" ("${InfoSectionColumnEnum.name}", "${InfoSectionColumnEnum.variation}", "${InfoSectionColumnEnum.contentBlockIds}")
      VALUES 
      ('rich text', '${InfoSectionVariationEnum["rich-text"]}', ARRAY[]::INTEGER[]),
      ('single image', '${InfoSectionVariationEnum["single-image"]}', ARRAY[]::INTEGER[])`
    );
  }
}
