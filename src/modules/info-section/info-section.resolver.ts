import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";

import { AuthGuard } from "src/guards/auth.guard";

import {
  CreateInfoSectionReturnType,
  CreateInfoSectionInputType,
  InfoSectionsReturnType,
  InfoSectionReturnType,
  InfoSectionInputType,
} from "./info-section.interface";
import { InfoSectionService } from "./info-section.service";

@Resolver()
export class InfoSectionResolver {
  constructor(private readonly infoSectionService: InfoSectionService) {}

  @Mutation("createInfoSection")
  @UseGuards(AuthGuard)
  async createInfoSection(@Args("createInfoSectionInput") createInfoSectionInput: CreateInfoSectionInputType): CreateInfoSectionReturnType {
    return this.infoSectionService.createInfoSection(createInfoSectionInput);
  }

  @Query("infoSection")
  @UseGuards(AuthGuard)
  async getInfoSection(@Args("id") infoSectionId: InfoSectionInputType): InfoSectionReturnType {
    return await this.infoSectionService.findInfoSection(infoSectionId);
  }

  @Query("infoSections")
  @UseGuards(AuthGuard)
  async getAllInfoSections(): InfoSectionsReturnType {
    return await this.infoSectionService.findAllInfoSections();
  }
}
