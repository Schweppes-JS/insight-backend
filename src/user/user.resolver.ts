import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { AuthGuard } from "src/guards/auth.guard";
import * as GraphQLTypes from "src/graphql";

import { UserService } from "./user.service";
import { UserId } from "./user.decorator";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation("createUser")
  async createUser(@Args("createUserInput") createUserInput: GraphQLTypes.CreateUserInput): Promise<GraphQLTypes.User> {
    return await this.userService.create(createUserInput);
  }

  @Mutation("login")
  async login(@Args("loginUserInput") loginUserInput: GraphQLTypes.LoginUserInput): Promise<GraphQLTypes.UserWithToken> {
    const user = await this.userService.login(loginUserInput);
    return this.userService.generateJWT(user);
  }

  @Query("user")
  @UseGuards(AuthGuard)
  async getUser(@Args("id") userIdInput: string): Promise<GraphQLTypes.User> {
    return await this.userService.findUser(userIdInput);
  }

  @Query("me")
  @UseGuards(AuthGuard)
  async getMe(@UserId() currentUserId: string): Promise<GraphQLTypes.User> {
    return await this.userService.findUser(currentUserId);
  }
}
