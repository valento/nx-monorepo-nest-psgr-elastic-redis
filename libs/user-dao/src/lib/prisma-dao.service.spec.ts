import { Test } from '@nestjs/testing';
import { PrismaDaoService } from './prisma-dao.service';

describe('PrismaDaoService', () => {
  let service: PrismaDaoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PrismaDaoService],
    }).compile();

    service = module.get(PrismaDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
