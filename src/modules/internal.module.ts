import { Module } from "@nestjs/common";

import { ContentBlockModule } from "./content-block/content-block.module";
import { InfoSectionModule } from "./info-section/info-section.module";
import { PublicPageModule } from "./public-page/public-page.module";
import { UserModule } from "./user/user.module";

@Module({ imports: [InfoSectionModule, PublicPageModule, UserModule, ContentBlockModule] })
export class InternalModule {}
