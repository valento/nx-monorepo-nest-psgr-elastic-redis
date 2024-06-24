import { Module } from '@nestjs/common';
import { WebapiController } from './webapi-dao.controller';
import { WebapiService } from './webapi-dao.service';
import { PrismaClientWebapiModule } from '@single-client-api/prisma-client-web';

@Module({
  // import if you need it available with UserModule
  imports: [
    PrismaClientWebapiModule
  ],
  controllers: [WebapiController],
  providers: [WebapiService],
  exports: [WebapiService],
})
export class WebapiDaoModule {}
