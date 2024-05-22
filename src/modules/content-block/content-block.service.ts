import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GraphQLError } from "graphql";
import { Repository } from "typeorm";

import {
  CreateContentBlockReturnType,
  CreateContentBlockInputType,
  ContentBlocksReturnType,
  ContentBlockReturnType,
  ContentBlockInputType,
} from "./content-block.interface";
import { ContentBlockEntity } from "./content-block.entity";

@Injectable()
export class ContentBlockService {
  constructor(@InjectRepository(ContentBlockEntity) private readonly contentBlockRepository: Repository<ContentBlockEntity>) {}

  async createContentBlock(createContentBlockInput: CreateContentBlockInputType): CreateContentBlockReturnType {
    const newContentBlock = this.contentBlockRepository.create(createContentBlockInput);
    return this.contentBlockRepository.save(newContentBlock);
  }

  async findContentBlock({ id }: ContentBlockInputType): ContentBlockReturnType {
    const contentBlock = await this.contentBlockRepository.findOne({ where: { id } });
    if (contentBlock) return contentBlock;
    else throw new GraphQLError("Content block with this ID does not exist", { extensions: { code: HttpStatus.NOT_FOUND } });
  }

  async findAllContentBlocks(): ContentBlocksReturnType {
    return await this.contentBlockRepository.find();
  }
}
