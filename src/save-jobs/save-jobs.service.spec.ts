import { Test, TestingModule } from '@nestjs/testing';
import { SaveJobsService } from './save-jobs.service';

describe('SaveJobsService', () => {
  let service: SaveJobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SaveJobsService],
    }).compile();

    service = module.get<SaveJobsService>(SaveJobsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
