import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { WebapiService } from './webapi-dao.service';
import { ApiTags } from '@nestjs/swagger';
import { PrismaModel } from '@single-client-api/prisma-schema/models';

@Controller('webapi')
@ApiTags('Webapi:Customer')
export class WebapiController {
  constructor(
    private service: WebapiService
  ) {}

  @Get('')
  getAll() {
    return this.service.getAll()
  }
  
  @Get('/:id')
  async getById(@Param('id') id: number) {
    return await this.service.get(Number(id));
  }

  @Post('create')
  async createCustomer(
    @Body() body: PrismaModel.CreateCustomer
  ) {
    return await this.service.create(body)
  }

  @Post('update/:id')
  async updateCustomer(
    @Body() body: PrismaModel.UpdateCustomer,
    @Param('id') id: number
  ) {
    return await this.service.update(Number(id), body)
  }

}
