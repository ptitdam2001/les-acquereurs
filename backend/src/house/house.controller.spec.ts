import { Test, TestingModule } from '@nestjs/testing';
import { HouseController } from './house.controller';

describe('House Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HouseController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: HouseController = module.get<HouseController>(
      HouseController,
    );
    expect(controller).toBeDefined();
  });
});
