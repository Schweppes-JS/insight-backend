import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { join } from "path";

import { AuthMiddleware } from "./middlewares/auth.middleware";
import { AppController } from "./app.controller";
import { dataSourceOptions } from "./ormconfig";
import { UserModule } from "./user/user.module";
import { AuthGuard } from "./guards/auth.guard";
import { AppService } from "./app.service";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env" }),
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
  providers: [AppService, AuthGuard],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL });
  }
}
