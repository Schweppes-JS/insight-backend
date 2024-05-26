import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PublicPageResolver } from "./public-page.resolver";
import { PublicPageService } from "./public-page.service";
import { PublicPageEntity } from "./public-page.entity";

@Module({ imports: [TypeOrmModule.forFeature([PublicPageEntity])], providers: [PublicPageService, PublicPageResolver] })
export class PublicPageModule {}
