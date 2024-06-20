import { Module } from '@nestjs/common';
import { TenantDaoModule } from '@single-client-api/tenant-dao';
import { UserController, UserService, UserModule } from '@single-client-api/user';

// import { PrismaDaoModule } from '@single-client-api/user-dao';

@Module({
  imports: [
    UserModule,
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