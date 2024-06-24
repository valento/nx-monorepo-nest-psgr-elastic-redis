import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '.prisma//schema-webapi/client/webapi';

@Injectable()
export class PrismaClientWebapiService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
  }
}
