import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { profilesSchema } from './schemas/profiles.schema';
import { MessageErrorModule } from 'src/message-error/message-error.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Profiles', schema: profilesSchema }]),
    MessageErrorModule,
  ],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}
