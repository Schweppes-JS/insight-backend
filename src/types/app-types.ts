import { Request } from "express";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyArrayType = Array<any>;
// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyFunctionType = Function;
// eslint-disable-next-line @typescript-eslint/ban-types
export type AnyObjectType = Object;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export interface IExpressRequest extends Request {
  userId: string | null;
}

export type Promised<T> = T extends Promise<infer U> ? Promise<U> : never;

export type ArrayType<T extends AnyArrayType> = T extends (infer U)[] ? U : never;
