import { Module } from '@nestjs/common';
import { SaveJobsService } from './save-jobs.service';
import { SaveJobsController } from './save-jobs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { saveJobsSchema } from './schemas/save-jobs.schema';
import { MessageErrorModule } from 'src/message-error/message-error.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'SaveJobs', schema: saveJobsSchema }]),
    MessageErrorModule,
  ],
  controllers: [SaveJobsController],
  providers: [SaveJobsService],
})
export class SaveJobsModule {}
