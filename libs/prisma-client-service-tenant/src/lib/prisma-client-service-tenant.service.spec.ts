import { Test } from '@nestjs/testing';
import { PrismaClientServiceTenantService } from './prisma-client-service-tenant.service';

describe('PrismaClientServiceTenantService', () => {
  let service: PrismaClientServiceTenantService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PrismaClientServiceTenantService],
    }).compile();

    service = module.get(PrismaClientServiceTenantService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
