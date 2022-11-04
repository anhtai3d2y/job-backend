import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profiles } from './interfaces/profiles.interfaces';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel('Profiles')
    private readonly prfilesModel: Model<Profiles>,
  ) {}
  async create(createProfileDto: CreateProfileDto, user: any) {
    const profile = await this.prfilesModel.create({
      ...createProfileDto,
      uuid: user.uuid,
    });
    return profile;
  }

  async findAll(user) {
    const profile = await this.prfilesModel.find({ uuid: user.uuid });
    return profile;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
