import { Module } from '@nestjs/common';
import { CareerDetailsService } from './career-details.service';
import { CareerDetailsController } from './career-details.controller';

@Module({
  controllers: [CareerDetailsController],
  providers: [CareerDetailsService]
})
export class CareerDetailsModule {}
