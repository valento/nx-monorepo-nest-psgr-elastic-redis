/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  
  const globalPrefix = process.env.API_SEARCH_NAME;
  app.setGlobalPrefix(globalPrefix);
  
  const port = process.env.SEARCH_PORT || 4000;

  const config = new DocumentBuilder()
    .setTitle('Valento Search API')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(globalPrefix, app, document)

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

}

bootstrap();
