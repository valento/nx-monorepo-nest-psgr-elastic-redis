import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TenantDaoService } from './tenant-dao.service';
// import { tester } from '@prisma/schema-tenant/client/tenant';
import { PrismaModel } from '@single-client-api/prisma-schema-tenant/models/';
import { PrismaModelProp } from '@single-client-api/prisma-client-service-tenant';
import { ApiTags } from '@nestjs/swagger';

@Controller('tenant')
@ApiTags('Tenant:Entities')
export class TenantDaoController {
  constructor(
    private service: TenantDaoService
  ) {}

  @Get('/:entity/:id')
  async get(
    @Param('id') id: string,
    @Param('entity') entity: PrismaModelProp
  ) {
    console.log(entity)
    
    return this.service.getOne(id, entity)
    // return this.service.getAll()
    // ({message: `Hello Tenant: ${id}`})
  }

  @Get('/:entity')
  async getAll(@Param('entity') entity: PrismaModelProp) {
    console.log('Controller ',entity)

    return this.service.getAll(entity)
    // ({message: `Hello Tenant: ${id}`})
  }

  @Post('create/:entity')
  async create(
    @Param('entity') entity: PrismaModelProp,
    @Body() body: PrismaModel.CreateTester
  ) {

    return await this.service.createTester( body, entity )
  }

  @Post('update/:entity/:id')
  async update(
    @Param('id') id: string,
    @Param('entity') entity: PrismaModelProp,
    @Body() body: PrismaModel.UpdateTester
  ) {

    return await this.service.updateTester( id, body, entity )
  }
}
