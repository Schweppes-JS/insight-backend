import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ContentBlockEntity } from "./content-block.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ContentBlockEntity])],
})
export class ContentBlockModule {}
