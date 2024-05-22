import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GraphQLError } from "graphql";
import { Repository } from "typeorm";

import {
  DeletePublicPageReturnType,
  CreatePublicPageReturnType,
  CreatePublicPageInputType,
  DeletePublicPageInputType,
  PublicPagesReturnType,
  PublicPageReturnType,
  PublicPageInputType,
} from "./public-page.interface";
import { PublicPageEntity } from "./public-page.entity";

@Injectable()
export class PublicPageService {
  constructor(@InjectRepository(PublicPageEntity) private readonly publicPageRepository: Repository<PublicPageEntity>) {}

  async createPublicPage(createPublicPageInput: CreatePublicPageInputType): CreatePublicPageReturnType {
    const existingPublicPage = await this.publicPageRepository.findOne({ where: { route: createPublicPageInput.route } });
    if (existingPublicPage) throw new GraphQLError("Page with this route already exists", { extensions: { code: HttpStatus.UNPROCESSABLE_ENTITY } });
    else {
      const newPublicPage = this.publicPageRepository.create(createPublicPageInput);
      return this.publicPageRepository.save(newPublicPage);
    }
  }

  async findPublicPage({ id }: PublicPageInputType): PublicPageReturnType {
    const publicPage = await this.publicPageRepository.findOne({ where: { id } });
    if (publicPage) return publicPage;
    else throw new GraphQLError("Public page with this ID does not exist", { extensions: { code: HttpStatus.NOT_FOUND } });
  }

  async findAllPublicPages(): PublicPagesReturnType {
    return await this.publicPageRepository.find();
  }

  async deletePublicPage({ id }: DeletePublicPageInputType): DeletePublicPageReturnType {
    const publicPageToDelete = await this.publicPageRepository.findOne({ where: { id } });
    if (publicPageToDelete)
      throw new GraphQLError("Public page with this ID does not exist", { extensions: { code: HttpStatus.UNPROCESSABLE_ENTITY } });
    else {
      return this.publicPageRepository.remove(publicPageToDelete);
    }
  }
}
