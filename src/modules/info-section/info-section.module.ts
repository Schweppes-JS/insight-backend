import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { InfoSectionEntity } from "./info-section.entity";

@Module({ providers: [], imports: [TypeOrmModule.forFeature([InfoSectionEntity])] })
export class InfoSectionModule {}
