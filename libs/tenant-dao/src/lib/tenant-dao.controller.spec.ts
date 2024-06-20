import { Test } from '@nestjs/testing';
import { TenantDaoController } from './tenant-dao.controller';
import { TenantDaoService } from './tenant-dao.service';

describe('TenantDaoController', () => {
  let controller: TenantDaoController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TenantDaoService],
      controllers: [TenantDaoController],
    }).compile();

    controller = module.get(TenantDaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
