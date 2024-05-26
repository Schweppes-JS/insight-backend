import { ArrayType, Promised } from "src/types/app-types";
import { IMutation, IQuery } from "src/types/graphql";

export type CreateContentBlockInputType = ArrayType<Parameters<IMutation["createContentBlock"]>>;

export type CreateContentBlockReturnType = Promised<ReturnType<IMutation["createContentBlock"]>>;

export type ContentBlockInputType = ArrayType<Parameters<IQuery["contentBlock"]>>;

export type ContentBlockReturnType = Promised<ReturnType<IQuery["contentBlock"]>>;

export type ContentBlocksReturnType = Promised<ReturnType<IQuery["contentBlocks"]>>;
