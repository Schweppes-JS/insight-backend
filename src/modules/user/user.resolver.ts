import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { AuthGuard } from "src/guards/auth.guard";

import { UserService } from "./user.service";
import { UserId } from "./user.decorator";
import {
  CreateUserInputType,
  CreateUserReturnType,
  UsersReturnType,
  LoginReturnType,
  LoginInputType,
  UserReturnType,
  UserInputType,
  MeReturnType,
} from "./user.interface";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation("createUser")
  @UseGuards(AuthGuard)
  async createUser(@Args("createUserInput") createUserInput: CreateUserInputType): CreateUserReturnType {
    return await this.userService.create(createUserInput);
  }

  @Mutation("login")
  async login(@Args("loginUserInput") loginUserInput: LoginInputType): LoginReturnType {
    return await this.userService.login(loginUserInput);
  }

  @Query("user")
  @UseGuards(AuthGuard)
  async getUser(@Args("id") userIdInput: UserInputType): UserReturnType {
    return await this.userService.findUser(userIdInput);
  }

  @Query("users")
  @UseGuards(AuthGuard)
  async getUsers(): UsersReturnType {
    return await this.userService.findAllUsers();
  }

  @Query("me")
  @UseGuards(AuthGuard)
  async getMe(@UserId() currentUserId: string): MeReturnType {
    return await this.userService.findUser({ id: currentUserId });
  }
}
