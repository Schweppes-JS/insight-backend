import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";

import { AppModule } from "./modules/app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  process.env.ENABLED_CORS && app.enableCors({ origin: process.env.ENABLED_CORS.split(",") });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
