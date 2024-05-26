import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

import { InfoSectionResolver } from "./info-section.resolver";
import { InfoSectionService } from "./info-section.service";
import { InfoSectionEntity } from "./info-section.entity";

@Module({ providers: [InfoSectionService, InfoSectionResolver], imports: [TypeOrmModule.forFeature([InfoSectionEntity])] })
export class InfoSectionModule {}
