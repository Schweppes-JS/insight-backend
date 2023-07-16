import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import * as GraphQLTypes from "src/graphql";

import { UserEntity } from "./user.entity";
import { Repository } from "typeorm";

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
}
