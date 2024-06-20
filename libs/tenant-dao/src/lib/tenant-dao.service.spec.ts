import { Test } from '@nestjs/testing';
import { TenantDaoService } from './tenant-dao.service';

describe('TenantDaoService', () => {
  let service: TenantDaoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TenantDaoService],
    }).compile();

    service = module.get(TenantDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
