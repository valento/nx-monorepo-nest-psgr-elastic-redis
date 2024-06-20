import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/schema-tenant/client/tenant';

@Injectable()
export class PrismaClientTenantService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  }
}
