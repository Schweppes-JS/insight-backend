import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { TableNameEnum } from "src/types/table-name";
import * as GraphQLTypes from "src/graphql";

export enum PublicPageColumnEnum {
  "id" = "id",
  "name" = "name",
  "route" = "route",
  "infoSectionIds" = "infoSectionIds",
}

@Entity({ name: TableNameEnum["public-page"] })
export class PublicPageEntity implements GraphQLTypes.PublicPage {
  @PrimaryGeneratedColumn()
  [PublicPageColumnEnum.id]: string;

  @Column()
  [PublicPageColumnEnum.name]: string;

  @Column()
  [PublicPageColumnEnum.route]: string;

  @Column("text", { array: true })
  [PublicPageColumnEnum.infoSectionIds]: Array<string>;
}
