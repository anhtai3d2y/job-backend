import { Module } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { ApplicationsController } from './applications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { applicationsSchema } from './schemas/save-jobs.schema';
import { MessageErrorModule } from 'src/message-error/message-error.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Applications', schema: applicationsSchema },
    ]),
    MessageErrorModule,
  ],
  controllers: [ApplicationsController],
  providers: [ApplicationsService],
})
export class ApplicationsModule {}
