import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

import * as GraphQLTypes from "src/graphql";
import { JWT_SECRET } from "src/config";

import { UserEntity } from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async create(createUserInput: GraphQLTypes.CreateUserInput): Promise<GraphQLTypes.User> {
    const userByEmail = await this.userRepository.findOne({ where: { email: createUserInput.email } });
    if (userByEmail) throw new HttpException("User with this email already exists", HttpStatus.UNPROCESSABLE_ENTITY);
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
      else throw new HttpException("Email or Password is wrong", HttpStatus.UNPROCESSABLE_ENTITY);
    } else throw new HttpException("Email or Password is wrong", HttpStatus.UNPROCESSABLE_ENTITY);
  }

  generateJWT(user: GraphQLTypes.User): GraphQLTypes.UserWithToken {
    return { user, token: sign({ id: user.id }, JWT_SECRET) };
  }
}
