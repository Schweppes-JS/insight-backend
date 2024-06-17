import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

import { TableNameEnum } from "src/types/table-name";
import * as GraphQLTypes from "src/types/graphql";

import { PublicPageColumnEnum } from "./public-page.interface";

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

  @DeleteDateColumn({ nullable: true, default: null })
  [PublicPageColumnEnum.deletedAt]: Date;
}
