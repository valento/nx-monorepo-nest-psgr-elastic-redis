import { Test } from '@nestjs/testing';
import { UserController } from './webapi-dao.controller';
import { UserService } from './webapi-dao.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserService],
      controllers: [UserController],
    }).compile();

    controller = module.get(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
