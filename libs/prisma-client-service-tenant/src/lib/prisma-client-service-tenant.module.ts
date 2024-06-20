import { Module } from '@nestjs/common';
import { PrismaClientTenantService } from './prisma-client-service-tenant.service';

@Module({
  providers: [PrismaClientTenantService],
  exports: [PrismaClientTenantService],
})
export class PrismaClientServiceTenantModule {}
