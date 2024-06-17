import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { AuthGuard } from "src/guards/auth.guard";

import {
  CreatePublicPageReturnType,
  DeletePublicPageReturnType,
  DeletePublicPageInputType,
  CreatePublicPageInputDTO,
  PublicPagesReturnType,
  PublicPageReturnType,
  PublicPageInputType,
} from "./public-page.interface";
import { PublicPageService } from "./public-page.service";

@Resolver()
export class PublicPageResolver {
  constructor(private readonly publicPageService: PublicPageService) {}

  @Mutation("createPublicPage")
  @UseGuards(AuthGuard)
  async createPublicPage(@Args("createPublicPageInput") createPublicPageInput: CreatePublicPageInputDTO): CreatePublicPageReturnType {
    return this.publicPageService.createPublicPage(createPublicPageInput);
  }

  @Query("publicPage")
  @UseGuards(AuthGuard)
  async getPublicPage(@Args("id") publicPageId: PublicPageInputType): PublicPageReturnType {
    return await this.publicPageService.findPublicPage(publicPageId);
  }

  @Query("publicPages")
  @UseGuards(AuthGuard)
  async getAllPublicPages(): PublicPagesReturnType {
    return await this.publicPageService.findAllPublicPages();
  }

  @Mutation("deletePublicPage")
  @UseGuards(AuthGuard)
  async deletePublicPage(@Args("deletePublicPageInput") deletePublicPageInput: DeletePublicPageInputType): DeletePublicPageReturnType {
    return await this.publicPageService.deletePublicPage(deletePublicPageInput);
  }
}
