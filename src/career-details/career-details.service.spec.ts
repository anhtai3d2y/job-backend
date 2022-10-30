import { Test, TestingModule } from '@nestjs/testing';
import { CareerDetailsService } from './career-details.service';

describe('CareerDetailsService', () => {
  let service: CareerDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CareerDetailsService],
    }).compile();

    service = module.get<CareerDetailsService>(CareerDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
