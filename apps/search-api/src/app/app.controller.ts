import { Body, Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  // REDIS events
  @EventPattern('customer_created')
  async createSearchCustomer(
    @Body() data: any
  ) {
    console.log(data);
    return null
  }
}
