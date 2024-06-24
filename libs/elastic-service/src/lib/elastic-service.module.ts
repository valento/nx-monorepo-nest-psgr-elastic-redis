import { Module } from '@nestjs/common';
import { ElasticServiceController } from './elastic-service.controller';
import { ElasticServiceService } from './elastic-service.service';

@Module({
  controllers: [ElasticServiceController],
  providers: [ElasticServiceService],
  exports: [ElasticServiceService],
})
export class ElasticServiceModule {}
