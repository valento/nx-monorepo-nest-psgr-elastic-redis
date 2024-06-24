import { Module } from '@nestjs/common';
import { TenantDaoModule } from '@single-client-api/tenant-dao';
import { WebapiDaoModule } from '@single-client-api/webapi-dao';
// import { WebapiController, WebapiService } from '@single-client-api/webapi-dao';

// import { PrismaDaoModule } from '@single-client-api/user-dao';

@Module({
  imports: [
    WebapiDaoModule,
    TenantDaoModule
  ]
})
export class AppModule {}

/** ---- or use this ------------
 * @Module({
 *  imports: [
 *   PrismaDaoModule,
 *  ],
 *  controllers: [UserController],
 *  providers: [UserService],
 * })
 */