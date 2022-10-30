import { Test, TestingModule } from '@nestjs/testing';
import { CareerDetailsController } from './career-details.controller';
import { CareerDetailsService } from './career-details.service';

describe('CareerDetailsController', () => {
  let controller: CareerDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CareerDetailsController],
      providers: [CareerDetailsService],
    }).compile();

    controller = module.get<CareerDetailsController>(CareerDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
