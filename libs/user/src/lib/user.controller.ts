import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('customer')
@ApiTags('Customer')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('')
  getHello() {
    return { message: 'Hello Valento' };
  }

  @Get('/:id')
  getById(@Param('id') id: number) {
    return {id}
  }

}
