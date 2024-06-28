import { Body, Controller, Get, Param, Query } from '@nestjs/common';
import { ElasticSearchService } from './elastic-service.service';
import { ApiTags } from '@nestjs/swagger';
import { EventPattern } from '@nestjs/microservices';
import { PrismaModel } from '@single-client-api/prisma-schema/models';

@Controller('search')
@ApiTags('Search: Customers')

export class ElasticServiceController {
  constructor(
    private service: ElasticSearchService
  ) {}

  @Get('/customer')
  async searchCustomer(
    @Query('search') text: string
  ) {
    console.log('Search customers:', text);
    
    this.service.search(text)
  }

  // ===== events ==============

  @EventPattern('customer_created')
  async createCustomerIndex(
    @Body() data: PrismaModel.UpdateCustomer
  ) {
    console.log('Elastic Engine: ', data)

    return this.service.indexCustomer(data)

  }

  @EventPattern('customer_deleted')
  async removeCustomerIndex(
    @Param('id') id: number 
  ) {
    // 
  }

  @EventPattern('customer_feed')
  async feedIndex(@Body() data: PrismaModel.UpdateCustomer){
    return this.service.indexCustomer(data)
  }

}
