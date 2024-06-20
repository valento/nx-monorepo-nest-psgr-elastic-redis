import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaDaoModule } from '@single-client-api/user-dao';

@Module({
  imports: [PrismaDaoModule],// import if you need it available with UserModule
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
