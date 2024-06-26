import { Module } from '@nestjs/common';
import { WebapiController } from './webapi-dao.controller';
import { WebapiService } from './webapi-dao.service';
import { PrismaClientWebapiModule } from '@single-client-api/prisma-client-web';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  // import if you need it available with UserModule
  imports: [
    PrismaClientWebapiModule,
    ClientsModule.register([
      {
        name: 'CUSTOMER_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
          // username: 'valento',
          // password: 'password'
        }
      }
    ])
  ],
  controllers: [WebapiController],
  providers: [WebapiService],
  exports: [WebapiService],
})
export class WebapiDaoModule {}
