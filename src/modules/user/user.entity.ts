import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hash } from "bcrypt";

import { TableNameEnum } from "src/types/table-name";
import * as GraphQLTypes from "src/types/graphql";

export enum UserColumnEnum {
  "id" = "id",
  "firstName" = "firstName",
  "lastName" = "lastName",
  "email" = "email",
  "password" = "password",
}

@Entity({ name: TableNameEnum.user })
export class UserEntity implements GraphQLTypes.User {
  @PrimaryGeneratedColumn()
  [UserColumnEnum.id]: string;

  @Column()
  [UserColumnEnum.firstName]: string;

  @Column()
  [UserColumnEnum.lastName]: string;

  @Column()
  [UserColumnEnum.email]: string;

  @Column({ select: false })
  [UserColumnEnum.password]: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
