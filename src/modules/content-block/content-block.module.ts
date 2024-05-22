import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ContentBlockResolver } from "./content-block.resolver";
import { ContentBlockService } from "./content-block.service";
import { ContentBlockEntity } from "./content-block.entity";

@Module({ imports: [TypeOrmModule.forFeature([ContentBlockEntity])], providers: [ContentBlockService, ContentBlockResolver] })
export class ContentBlockModule {}
