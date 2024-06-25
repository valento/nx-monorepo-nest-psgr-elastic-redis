import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticEngineModule } from '@single-client-api/elastic-service';

@Module({
  imports: [
    ElasticEngineModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
