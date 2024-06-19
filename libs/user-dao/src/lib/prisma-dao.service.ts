import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/schema/client/tester';

@Injectable()
export class PrismaDaoService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  }
}
