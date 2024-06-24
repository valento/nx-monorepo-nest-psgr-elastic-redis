import { Module } from '@nestjs/common';
import { PrismaClientWebapiService } from './client.service';

@Module({
  controllers: [],
  providers: [PrismaClientWebapiService],
  exports: [PrismaClientWebapiService],
})
export class PrismaClientWebapiModule {}
