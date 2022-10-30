import { Test, TestingModule } from '@nestjs/testing';
import { SaveJobsController } from './save-jobs.controller';
import { SaveJobsService } from './save-jobs.service';

describe('SaveJobsController', () => {
  let controller: SaveJobsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SaveJobsController],
      providers: [SaveJobsService],
    }).compile();

    controller = module.get<SaveJobsController>(SaveJobsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
