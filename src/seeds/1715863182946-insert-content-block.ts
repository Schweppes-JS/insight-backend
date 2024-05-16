import { QueryRunner } from "typeorm";

import { ContentBlockColumnEnum } from "src/modules/content-block/content-block.entity";
import { TableNameEnum } from "src/types/table-name";

export class InsertContentBlock1715863182946 {
  name = "InsertContentBlock1715863182946";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "${TableNameEnum["content-block"]}" ("${ContentBlockColumnEnum.en}", "${ContentBlockColumnEnum.uk}")
      VALUES 
      ('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Lorem Ipsum є текст-заповнювач зазвичай використовується в графічних, друк та видавничої індустрії для попереднього перегляду макету та візуальних макетах.'),
      ('https://images.unsplash.com/photo-1522134239946-03d8c105a0ba', 'https://plus.unsplash.com/premium_photo-1661301044600-8856088002c7')`
    );
  }
}
