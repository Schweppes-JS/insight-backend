import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { PublicPageEntity } from "./public-page.entity";

@Module({ imports: [TypeOrmModule.forFeature([PublicPageEntity])], providers: [] })
export class PublicPageModule {}
