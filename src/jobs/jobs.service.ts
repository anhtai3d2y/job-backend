import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Jobs } from './interfaces/jobs.interfaces';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel('Jobs')
    private readonly jobsModel: Model<Jobs>,
  ) {}
  async create(createJobDto: CreateJobDto) {
    const job = await this.jobsModel.create(createJobDto);
    return job;
  }

  async findAll() {
    return await this.jobsModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} job`;
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
