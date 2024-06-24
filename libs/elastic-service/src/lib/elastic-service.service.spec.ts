import { Test } from '@nestjs/testing';
import { ElasticServiceService } from './elastic-service.service';

describe('ElasticServiceService', () => {
  let service: ElasticServiceService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ElasticServiceService],
    }).compile();

    service = module.get(ElasticServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
