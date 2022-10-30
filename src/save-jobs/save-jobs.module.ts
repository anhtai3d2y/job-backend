import { Module } from '@nestjs/common';
import { SaveJobsService } from './save-jobs.service';
import { SaveJobsController } from './save-jobs.controller';

@Module({
  controllers: [SaveJobsController],
  providers: [SaveJobsService]
})
export class SaveJobsModule {}
