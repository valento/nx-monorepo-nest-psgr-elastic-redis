import { Controller } from '@nestjs/common';
import { ElasticServiceService } from './elastic-service.service';

@Controller('elastic-service')
export class ElasticServiceController {
  constructor(private elasticServiceService: ElasticServiceService) {}
}
