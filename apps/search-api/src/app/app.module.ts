import { Module } from '@nestjs/common';

import { ElasticEngineModule } from '@single-client-api/elastic-service';

@Module({
  imports: [
    ElasticEngineModule
  ]
})
export class AppModule {}
