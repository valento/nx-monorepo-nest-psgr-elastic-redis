import { Module } from '@nestjs/common';
import { PrismaDaoService } from './prisma-dao.service';

@Module({
  controllers: [],
  providers: [PrismaDaoService],
  exports: [PrismaDaoService],
})
export class PrismaDaoModule {}
