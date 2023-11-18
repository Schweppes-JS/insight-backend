import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GraphQLError } from "graphql";
import { Repository } from "typeorm";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

import * as GraphQLTypes from "src/graphql";

import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async create(createUserInput: GraphQLTypes.CreateUserInput): Promise<GraphQLTypes.User> {
    const userByEmail = await this.userRepository.findOne({ where: { email: createUserInput.email } });
    if (userByEmail) throw new GraphQLError("User with this email already exists", { extensions: { code: HttpStatus.UNPROCESSABLE_ENTITY } });
    else {
      const newUser = this.userRepository.create(createUserInput);
      return this.userRepository.save(newUser);
    }
  }

  async login(loginUserInput: GraphQLTypes.LoginUserInput): Promise<GraphQLTypes.User> {
    const user = await this.userRepository.findOne({
      where: { email: loginUserInput.email },
      select: ["id", "firstName", "email", "password", "lastName"],
    });
    if (user) {
      const isPasswordCorrect = await compare(loginUserInput.password, user.password);
      if (isPasswordCorrect) return user;
      else throw new GraphQLError("Email or Password is wrong", { extensions: { code: HttpStatus.UNPROCESSABLE_ENTITY } });
    } else throw new GraphQLError("Email or Password is wrong", { extensions: { code: HttpStatus.UNPROCESSABLE_ENTITY } });
  }

  generateJWT(user: GraphQLTypes.User): GraphQLTypes.UserWithToken {
    return { user, token: sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" }) };
  }

  async findUser(usedId: string): Promise<GraphQLTypes.User> {
    const user = await this.userRepository.findOne({ where: { id: usedId } });
    if (user) return user;
    else throw new GraphQLError("User with this ID does not exist", { extensions: { code: HttpStatus.NOT_FOUND } });
  }
}
