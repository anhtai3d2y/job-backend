import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { jobsSchema } from './schemas/jobs.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageErrorModule } from 'src/message-error/message-error.module';
import { applicationsSchema } from 'src/applications/schemas/applications.schema';
import { saveJobsSchema } from 'src/save-jobs/schemas/save-jobs.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Jobs', schema: jobsSchema },
      { name: 'Applications', schema: applicationsSchema },
      { name: 'SaveJobs', schema: saveJobsSchema },
    ]),
    MessageErrorModule,
  ],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
