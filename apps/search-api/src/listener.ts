import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, NestMicroservice, Transport } from "@nestjs/microservices";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options:
      {
        host: 'redis',
        port: 6379
      }
    }
  )

  await app.listen()
}