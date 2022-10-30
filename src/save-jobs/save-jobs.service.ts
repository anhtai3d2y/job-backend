import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSaveJobDto } from './dto/create-save-job.dto';
import { UpdateSaveJobDto } from './dto/update-save-job.dto';
import { SaveJobs } from './interfaces/save-jobs.interfaces';

@Injectable()
export class SaveJobsService {
  constructor(
    @InjectModel('SaveJobs')
    private readonly saveJobsModel: Model<SaveJobs>,
  ) {}
  async create(createSaveJobDto: CreateSaveJobDto, user: any) {
    const saveJob = await this.saveJobsModel.create({
      uuid: user.uuid,
      jobId: createSaveJobDto.jobId,
    });
    return saveJob;
  }

  async findAll(user: any) {
    const saveJob = await this.saveJobsModel.find({ uuid: user.uuid });
    return saveJob;
  }

  findOne(id: number) {
    return `This action returns a #${id} saveJob`;
  }

  update(id: number, updateSaveJobDto: UpdateSaveJobDto) {
    return `This action updates a #${id} saveJob`;
  }

  async remove(id: string, user: any) {
    return await this.saveJobsModel.deleteOne({ jobId: id, uuid: user.uuid });
  }
}
