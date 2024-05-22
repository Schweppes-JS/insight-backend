import { ArrayType, Promised } from "src/types/app-types";
import { IMutation, IQuery } from "src/types/graphql";

export type CreateUserInputType = ArrayType<Parameters<IMutation["createUser"]>>;

export type CreateUserReturnType = Promised<ReturnType<IMutation["createUser"]>>;

export type LoginInputType = ArrayType<Parameters<IMutation["login"]>>;

export type LoginReturnType = Promised<ReturnType<IMutation["login"]>>;

export type UsersReturnType = Promised<ReturnType<IQuery["users"]>>;

export type UserInputType = ArrayType<Parameters<IQuery["user"]>>;

export type UserReturnType = Promised<ReturnType<IQuery["user"]>>;

export type MeReturnType = Promised<ReturnType<IQuery["me"]>>;
