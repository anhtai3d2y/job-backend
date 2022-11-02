import { Module } from '@nestjs/common';
import { CareerDetailsService } from './career-details.service';
import { CareerDetailsController } from './career-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageErrorModule } from 'src/message-error/message-error.module';
import { careerDetailsSchema } from './schemas/career-details.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CareerDetails', schema: careerDetailsSchema },
    ]),
    MessageErrorModule,
  ],
  controllers: [CareerDetailsController],
  providers: [CareerDetailsService],
})
export class CareerDetailsModule {}
