
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateContentBlockInput {
    en?: Nullable<string>;
    uk?: Nullable<string>;
}

export interface CreateInfoSectionInput {
    contentBlockIds?: Nullable<string[]>;
    name: string;
    variation: string;
}

export interface CreatePublicPageInput {
    infoSectionIds?: Nullable<string[]>;
    name: string;
    route: string;
}

export interface CreateUserInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export interface ContentBlock {
    en?: Nullable<string>;
    id: string;
    uk?: Nullable<string>;
}

export interface InfoSection {
    contentBlockIds: string[];
    id: string;
    name: string;
    variation: string;
}

export interface IMutation {
    createContentBlock(createContentBlockInput: CreateContentBlockInput): ContentBlock | Promise<ContentBlock>;
    createInfoSection(createInfoSectionInput: CreateInfoSectionInput): InfoSection | Promise<InfoSection>;
    createPublicPage(createPublicPageInput: CreatePublicPageInput): PublicPage | Promise<PublicPage>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    login(loginUserInput: LoginUserInput): UserWithToken | Promise<UserWithToken>;
}

export interface PublicPage {
    id: string;
    infoSectionIds: string[];
    name: string;
    route: string;
}

export interface IQuery {
    contentBlock(id: string): ContentBlock | Promise<ContentBlock>;
    contentBlocks(): ContentBlock[] | Promise<ContentBlock[]>;
    infoSection(id: string): InfoSection | Promise<InfoSection>;
    infoSections(): InfoSection[] | Promise<InfoSection[]>;
    me(): User | Promise<User>;
    publicPage(id: string): PublicPage | Promise<PublicPage>;
    publicPages(): PublicPage[] | Promise<PublicPage[]>;
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

export interface UserWithToken {
    token: string;
    user: User;
}

type Nullable<T> = T | null;
