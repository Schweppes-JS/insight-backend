import { Mutation, Resolver, Args, Query } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { AuthGuard } from "src/guards/auth.guard";

import { ContentBlockInputType, CreateContentBlockInputType } from "./content-block.interface";
import { ContentBlockService } from "./content-block.service";

@Resolver()
export class ContentBlockResolver {
  constructor(private readonly contentBlockService: ContentBlockService) {}

  @Mutation("createContentBlock")
  @UseGuards(AuthGuard)
  async createContentBlock(@Args("createContentBlock") createContentBlock: CreateContentBlockInputType) {
    return this.contentBlockService.createContentBlock(createContentBlock);
  }

  @Query("contentBlock")
  @UseGuards(AuthGuard)
  async getContentBlock(@Args("contentBlockInput") contentBlockInput: ContentBlockInputType) {
    return this.contentBlockService.findContentBlock(contentBlockInput);
  }

  @Query("contentBlocks")
  @UseGuards(AuthGuard)
  async getAllContentBlocks() {
    return this.contentBlockService.findAllContentBlocks();
  }
}
