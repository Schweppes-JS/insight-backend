import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { TableNameEnum } from "src/types/table-name";
import * as GraphQLTypes from "src/types/graphql";

export enum ContentBlockColumnEnum {
  "id" = "id",
  "en" = "en",
  "uk" = "uk",
}

@Entity({ name: TableNameEnum["content-block"] })
export class ContentBlockEntity implements GraphQLTypes.ContentBlock {
  @PrimaryGeneratedColumn()
  [ContentBlockColumnEnum.id]: string;

  @Column()
  [ContentBlockColumnEnum.en]: string;

  @Column()
  [ContentBlockColumnEnum.uk]?: string;
}
