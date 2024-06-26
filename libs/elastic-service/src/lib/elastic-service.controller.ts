import { Body, Controller, Get, Query } from '@nestjs/common';
import { ElasticSearchService } from './elastic-service.service';
import { ApiTags } from '@nestjs/swagger';
import { EventPattern } from '@nestjs/microservices';
import { PrismaModel } from '@single-client-api/prisma-schemamodels';

@Controller('search')
@ApiTags('Search: Customers')

export class ElasticServiceController {
  constructor(
    private service: ElasticSearchService
  ) {}

  @Get('customer')
  async searchCustomer(
    @Query('search') search: string
  ) {
    this.service.search(search)
  }

  // ===== events ==============

  @EventPattern('customer_created')
  async createCustomerIndex(
    @Body() data: PrismaModel.UpdateCustomer
  ) {
    console.log('Elastic Engine: ', data)

    return this.service.indexCustomer(data)

  }

}
