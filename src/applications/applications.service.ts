import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Applications } from './interfaces/applications.interfaces';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel('Applications')
    private readonly applicationsModel: Model<Applications>,
  ) {}
  async create(createApplicationDto: CreateApplicationDto, user: any) {
    const application = await this.applicationsModel.create({
      uuid: user.uuid,
      jobId: createApplicationDto.jobId,
      status: 'processing',
    });
    return application;
  }

  async findAll(user: any) {
    const application = await this.applicationsModel.find({ uuid: user.uuid });
    return application;
  }

  findOne(id: number) {
    return `This action returns a #${id} application`;
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  async remove(id: string, user: any) {
    return await this.applicationsModel.deleteOne({
      jobId: id,
      uuid: user.uuid,
    });
  }
}
