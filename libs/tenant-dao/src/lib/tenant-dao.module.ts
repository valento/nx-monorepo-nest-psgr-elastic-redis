import { Module } from '@nestjs/common';
import { TenantDaoController } from './tenant-dao.controller';
import { TenantDaoService } from './tenant-dao.service';
import { PrismaClientServiceTenantModule } from '@single-client-api/prisma-client-service-tenant';

@Module({
  imports: [
    PrismaClientServiceTenantModule 
  ],
  controllers: [TenantDaoController],
  providers: [TenantDaoService],
  exports: [TenantDaoService],
})
export class TenantDaoModule {}
