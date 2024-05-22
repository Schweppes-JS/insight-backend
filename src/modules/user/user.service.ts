import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GraphQLError } from "graphql";
import { Repository } from "typeorm";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

import * as GraphQLTypes from "src/types/graphql";

import { UserColumnEnum, UserEntity } from "./user.entity";
import { UserInputType, UserReturnType, CreateUserInputType, CreateUserReturnType, LoginInputType, LoginReturnType } from "./user.interface";

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async create(createUserInput: CreateUserInputType): CreateUserReturnType {
    const userByEmail = await this.userRepository.findOne({ where: { email: createUserInput.email } });
    if (userByEmail) throw new GraphQLError("User with this email already exists", { extensions: { code: HttpStatus.UNPROCESSABLE_ENTITY } });
    else {
      const newUser = this.userRepository.create(createUserInput);
      return this.userRepository.save(newUser);
    }
  }

  async login(loginUserInput: LoginInputType): LoginReturnType {
    const user = await this.userRepository.findOne({
      where: { email: loginUserInput.email },
      select: [UserColumnEnum.id, UserColumnEnum.firstName, UserColumnEnum.email, UserColumnEnum.password, UserColumnEnum.lastName],
    });
    if (user) {
      const isPasswordCorrect = await compare(loginUserInput.password, user.password);
      if (isPasswordCorrect) return this.generateJWT(user);
      else throw new GraphQLError("Email or Password is wrong", { extensions: { code: HttpStatus.UNPROCESSABLE_ENTITY } });
    } else throw new GraphQLError("Email or Password is wrong", { extensions: { code: HttpStatus.UNPROCESSABLE_ENTITY } });
  }

  generateJWT(user: GraphQLTypes.User): GraphQLTypes.UserWithToken {
    return { user, token: sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" }) };
  }

  async findUser({ id }: UserInputType): UserReturnType {
    const user = await this.userRepository.findOne({ where: { id } });
    if (user) return user;
    else throw new GraphQLError("User with this ID does not exist", { extensions: { code: HttpStatus.NOT_FOUND } });
  }

  async findAllUsers(): Promise<GraphQLTypes.User[]> {
    return await this.userRepository.find();
  }
}
