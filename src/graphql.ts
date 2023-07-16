
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
}

export interface IQuery {
    user(id: string): User | Promise<User>;
    users(): User[] | Promise<User[]>;
}

export interface User {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    password: string;
}

type Nullable<T> = T | null;
