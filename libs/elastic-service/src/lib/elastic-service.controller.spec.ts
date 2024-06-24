import { Test } from '@nestjs/testing';
import { ElasticServiceController } from './elastic-service.controller';
import { ElasticServiceService } from './elastic-service.service';

describe('ElasticServiceController', () => {
  let controller: ElasticServiceController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ElasticServiceService],
      controllers: [ElasticServiceController],
    }).compile();

    controller = module.get(ElasticServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
