import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { join } from "path";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { dataSourceOptions } from "./ormconfig";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      definitions: { path: join(process.cwd(), "src/graphql.ts") },
      typePaths: ["./**/*.graphql"],
      driver: ApolloDriver,
      sortSchema: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
