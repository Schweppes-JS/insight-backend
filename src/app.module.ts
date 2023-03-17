import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { AppController } from "./app.controller";
import { GraphQLModule } from "@nestjs/graphql";
import { AppService } from "./app.service";
import { Module } from "@nestjs/common";
import { join } from "path";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      definitions: { path: join(process.cwd(), "src/graphql.ts") },
      typePaths: ["./**/*.graphql"],
      driver: ApolloDriver,
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
