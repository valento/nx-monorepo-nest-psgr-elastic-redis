import { Body, Controller, Get, Query } from '@nestjs/common';
import { ElasticSearchService } from './elastic-service.service';
import { ApiTags } from '@nestjs/swagger';

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

}
