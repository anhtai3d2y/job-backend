import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { jobsSchema } from './schemas/jobs.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageErrorModule } from 'src/message-error/message-error.module';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Jobs', schema: jobsSchema }]),
    MessageErrorModule,
  ],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
