import "@nestjs/graphql";
import "reflect-metadata";
import { Complexity } from "@nestjs/graphql/dist/interfaces";
import { BaseTypeOptions } from "@nestjs/graphql/dist/interfaces/base-type-options.interface";
import { ReturnTypeFunc } from "@nestjs/graphql/dist/interfaces/return-type-func.interface";

import * as GraphQLTypes from "src/types/graphql";

declare module "@nestjs/graphql" {
  export interface MutationOptions<T extends GraphQLTypes.IMutation> extends BaseTypeOptions {
    name?: T;
    description?: string;
    deprecationReason?: string;
    complexity?: Complexity;
  }
  export function Mutation(name: keyof GraphQLTypes.IMutation): MethodDecorator;
  export function Mutation(name: string): never;
  export function Mutation(typeFunc: ReturnTypeFunc, options?: MutationOptions<GraphQLTypes.IMutation>): MethodDecorator;
  export function Mutation(typeFunc: ReturnTypeFunc, options?: MutationOptions<string>): never;

  export interface QueryOptions<T> extends BaseTypeOptions {
    name?: T;
    description?: string;
    deprecationReason?: string;
    complexity?: Complexity;
  }
  export function Query(name: keyof GraphQLTypes.IQuery): MethodDecorator;
  export function Query(name: string): never;
  export function Query(typeFunc: ReturnTypeFunc, options?: QueryOptions<keyof GraphQLTypes.IQuery>): MethodDecorator;
  export function Query(typeFunc: ReturnTypeFunc, options?: QueryOptions<string>): never;
}
