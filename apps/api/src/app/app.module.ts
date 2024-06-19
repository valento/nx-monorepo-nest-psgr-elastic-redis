import { Module } from '@nestjs/common';

// import { PrismaDaoModule } from '@single-client-api/user-dao';
import { UserModule } from '@single-client-api/user';

@Module({
  imports: [
    // PrismaDaoModule,
    UserModule
  ],
  // controllers: [UserController],
  // providers: [UserService],
})
export class AppModule {}
