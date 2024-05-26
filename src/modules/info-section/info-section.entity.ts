import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { TableNameEnum } from "src/types/table-name";
import * as GraphQLTypes from "src/types/graphql";

export enum InfoSectionVariationEnum {
  "rich-text" = "rich-text",
  "single-image" = "single-image",
}

export enum InfoSectionColumnEnum {
  "id" = "id",
  "name" = "name",
  "variation" = "variation",
  "contentBlockIds" = "contentBlockIds",
}

@Entity({ name: TableNameEnum["info-section"] })
export class InfoSectionEntity implements GraphQLTypes.InfoSection {
  @PrimaryGeneratedColumn()
  [InfoSectionColumnEnum.id]: string;

  @Column()
  [InfoSectionColumnEnum.name]: string;

  @Column()
  [InfoSectionColumnEnum.variation]: InfoSectionVariationEnum;

  @Column("text", { array: true })
  [InfoSectionColumnEnum.contentBlockIds]: Array<string>;
}
