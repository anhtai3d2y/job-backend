import { Module } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { careersSchema } from './schemas/careers.schema';
import { MessageErrorModule } from 'src/message-error/message-error.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Careers', schema: careersSchema }]),
    MessageErrorModule,
  ],
  controllers: [CareersController],
  providers: [CareersService],
})
export class CareersModule {}
