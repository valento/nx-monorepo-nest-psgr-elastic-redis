import { Controller, Get, Param } from '@nestjs/common';
import { TenantDaoService } from './tenant-dao.service';

@Controller('tenant')
export class TenantDaoController {
  constructor(
    private tenantDaoService: TenantDaoService
  ) {}

  @Get(':id')
  async get(@Param('id') id: number) {
    return ({message: `Hello Tenant: ${id}`})
  }
}
