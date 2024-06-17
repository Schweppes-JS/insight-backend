import { IsArray, IsNotEmpty, Matches } from "class-validator";
import { InputType, Field } from "@nestjs/graphql";

import { ArrayType, Promised } from "src/types/app-types";
import { IMutation, IQuery } from "src/types/graphql";
import { pageRouteRegExp } from "src/helpers/constants";
import { Type } from "class-transformer";

export enum PublicPageColumnEnum {
  "id" = "id",
  "name" = "name",
  "route" = "route",
  "deletedAt" = "deletedAt",
  "infoSectionIds" = "infoSectionIds",
}

@InputType()
export class CreatePublicPageInputDTO implements CreatePublicPageInputType {
  @Field()
  @IsNotEmpty({ message: "Name cannot be an empty string" })
  [PublicPageColumnEnum.name]: string;

  @Field()
  @Matches(pageRouteRegExp, { message: "Page route must start with a slash '/' followed by letters, numbers, or hyphens" })
  [PublicPageColumnEnum.route]: string;

  @Field(() => [String])
  @IsArray({ message: "infoSectionIds must be an array" })
  @Type(() => String)
  @IsNotEmpty({ each: true, message: "Info Section id can not be empty string" })
  [PublicPageColumnEnum.infoSectionIds]: string[];
}

export type CreatePublicPageInputType = ArrayType<Parameters<IMutation["createPublicPage"]>>;

export type CreatePublicPageReturnType = Promised<ReturnType<IMutation["createPublicPage"]>>;

export type PublicPageInputType = ArrayType<Parameters<IQuery["publicPage"]>>;

export type PublicPageReturnType = Promised<ReturnType<IQuery["publicPage"]>>;

export type PublicPagesReturnType = Promised<ReturnType<IQuery["publicPages"]>>;

export type DeletePublicPageInputType = ArrayType<Parameters<IMutation["deletePublicPage"]>>;

export type DeletePublicPageReturnType = Promised<ReturnType<IMutation["deletePublicPage"]>>;
