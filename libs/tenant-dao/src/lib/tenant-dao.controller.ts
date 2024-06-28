import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TenantDaoService } from './tenant-dao.service';
// import { tester } from '@prisma/schema-tenant/client/tenant';
import { PrismaModel } from '@single-client-api/prisma-schema-tenant/models';
import { PrismaModelProp } from '@single-client-api/prisma-client-service-tenant';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@Controller('tenant')
@ApiTags('Tenant:Entities')
export class TenantDaoController {
  constructor(
    private service: TenantDaoService
  ) {}

  @Get('/:entity/:id')
  async get(
    @Param('id') id: string,
    @Param('entity') entity: string
  ) {
    
    return this.service.getOne(id, entity as PrismaModelProp)
    // return this.service.getAll()
    // ({message: `Hello Tenant: ${id}`})
  }

  @Get('/:entity')
  @ApiProperty({ name: 'entity', required: true })
  async getAll(
    @Param('entity') entity: string
  ) {

    return this.service.getAll(entity as PrismaModelProp)
    // ({message: `Hello Tenant: ${id}`})
  }

  @Post('create/:entity')
  async create(
    @Param('entity') entity: string,
    @Body() body: PrismaModel.CreateTenant
  ) {

    return await this.service.createTester( body, entity as PrismaModelProp )
  }

  @Post('update/:entity/:id')
  async update(
    @Param('id') id: string,
    @Param('entity') entity: string,
    @Body() body: PrismaModel.UpdateTenant
  ) {

    return await this.service.updateTester( id, body, entity as PrismaModelProp )
  }
}
