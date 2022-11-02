import { Module } from '@nestjs/common';
import { RecruitersService } from './recruiters.service';
import { RecruitersController } from './recruiters.controller';
import { recruitersSchema } from './schemas/applications.schema';
import { MessageErrorModule } from 'src/message-error/message-error.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Recruiters', schema: recruitersSchema },
    ]),
    MessageErrorModule,
  ],
  controllers: [RecruitersController],
  providers: [RecruitersService],
})
export class RecruitersModule {}
