import { ArrayType, Promised } from "src/types/app-types";
import { IMutation, IQuery } from "src/types/graphql";

import { InfoSectionVariationEnum } from "./info-section.entity";

export type CreateInfoSectionInputType = Omit<ArrayType<Parameters<IMutation["createInfoSection"]>>, "variation"> & {
  variation: InfoSectionVariationEnum;
};

export type CreateInfoSectionReturnType = Promised<ReturnType<IMutation["createInfoSection"]>>;

export type InfoSectionInputType = ArrayType<Parameters<IQuery["infoSection"]>>;

export type InfoSectionReturnType = Promised<ReturnType<IQuery["infoSection"]>>;

export type InfoSectionsReturnType = Promised<ReturnType<IQuery["infoSections"]>>;
