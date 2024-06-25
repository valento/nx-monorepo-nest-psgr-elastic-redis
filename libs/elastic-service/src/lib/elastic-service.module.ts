import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config'

import { ElasticServiceController } from './elastic-service.controller';
import { ElasticSearchService } from './elastic-service.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      useFactory: async () => ({
        node: 'http://localhost:9200'
      })
    })
  ],
  controllers: [ElasticServiceController],
  providers: [ElasticSearchService],
  exports: [ElasticSearchService, ElasticsearchModule],
})
export class ElasticEngineModule {}
