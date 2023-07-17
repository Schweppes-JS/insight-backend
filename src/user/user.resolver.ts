import { Args, Mutation, Resolver } from "@nestjs/graphql";

import * as GraphQLTypes from "src/graphql";

import { UserService } from "./user.service";

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
}
