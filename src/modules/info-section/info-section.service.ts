import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GraphQLError } from "graphql";
import { Repository } from "typeorm";

import {
  CreateInfoSectionReturnType,
  CreateInfoSectionInputType,
  InfoSectionsReturnType,
  InfoSectionReturnType,
  InfoSectionInputType,
} from "./info-section.interface";
import { InfoSectionEntity } from "./info-section.entity";

@Injectable()
export class InfoSectionService {
  constructor(@InjectRepository(InfoSectionEntity) private readonly infoSectionRepository: Repository<InfoSectionEntity>) {}

  async createInfoSection(createInfoSectionInput: CreateInfoSectionInputType): CreateInfoSectionReturnType {
    const existingInfoSection = await this.infoSectionRepository.findOne({ where: { name: createInfoSectionInput.name } });
    if (existingInfoSection)
      throw new GraphQLError("Section with this name already exists", { extensions: { code: HttpStatus.UNPROCESSABLE_ENTITY } });
    else {
      const newInfoSection = this.infoSectionRepository.create(createInfoSectionInput);
      return this.infoSectionRepository.save(newInfoSection);
    }
  }

  async findInfoSection({ id }: InfoSectionInputType): InfoSectionReturnType {
    const infoSection = await this.infoSectionRepository.findOne({ where: { id } });
    if (infoSection) return infoSection;
    else throw new GraphQLError("Section with this ID does not exist", { extensions: { code: HttpStatus.NOT_FOUND } });
  }

  async findAllInfoSections(): InfoSectionsReturnType {
    return await this.infoSectionRepository.find();
  }
}
