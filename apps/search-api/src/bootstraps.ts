// Run both Apps and Redis in dev
import { INestApplication, INestMicroservice, Logger } from "@nestjs/common";
import { NestApplication, NestFactory } from "@nestjs/core";
import { NestMicroservice, Transport } from "@nestjs/microservices";
import { AppModule } from "./app/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
// For now leave Redis in container
// TODO
// ...
export class Bootstrap {
  private app: INestApplication | INestMicroservice

  async initApp() {
    this.app = await NestFactory.create(AppModule)
    const globalPrefix = process.env.API_SEARCH_NAME;
    this. app.setGlobalPrefix(globalPrefix);
    
    const port = process.env.SEARCH_PORT || 4000;

    const config = new DocumentBuilder()
      .setTitle('Valento Search API')
      .build()
    const document = SwaggerModule.createDocument(this.app, config)
    SwaggerModule.setup(globalPrefix, this.app, document)

    await this. app.listen(port);
    Logger.log(
      `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
    );
  }

  async initListenerMicroservice() {
    this.app = await NestFactory.createMicroservice(
      {
        transport: Transport.REDIS,
        options:
        {
          host: 'redis',
          port: 6379
        },
        AppModule
      })
      await this. app.listen();
      Logger.log(
        `🚀 Microservice is listening...`
      );
  }
}