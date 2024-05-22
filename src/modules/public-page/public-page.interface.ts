import { ArrayType, Promised } from "src/types/app-types";
import { IMutation, IQuery } from "src/types/graphql";

export type CreatePublicPageInputType = ArrayType<Parameters<IMutation["createPublicPage"]>>;

export type CreatePublicPageReturnType = Promised<ReturnType<IMutation["createPublicPage"]>>;

export type PublicPageInputType = ArrayType<Parameters<IQuery["publicPage"]>>;

export type PublicPageReturnType = Promised<ReturnType<IQuery["publicPage"]>>;

export type PublicPagesReturnType = Promised<ReturnType<IQuery["publicPages"]>>;

export type DeletePublicPageInputType = ArrayType<Parameters<IMutation["deletePublicPage"]>>;

export type DeletePublicPageReturnType = Promised<ReturnType<IMutation["deletePublicPage"]>>;
