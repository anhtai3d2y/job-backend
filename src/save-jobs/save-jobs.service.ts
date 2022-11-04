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
    const saveJob = await this.saveJobsModel.aggregate([
      {
        $match: { uuid: user.uuid },
      },
      {
        $addFields: {
          jobIdConverted: { $toObjectId: '$jobId' },
        },
      },
      {
        $lookup: {
          from: 'jobs',
          localField: 'jobIdConverted',
          foreignField: '_id',
          pipeline: [
            {
              $addFields: {
                careerIdConverted: { $toObjectId: '$careerId' },
                careerDetailIdConverted: { $toObjectId: '$careerDetailId' },
              },
            },
            {
              $lookup: {
                from: 'careers',
                localField: 'careerIdConverted',
                foreignField: '_id',
                as: 'careers',
              },
            },
            {
              $unwind: '$careers',
            },
            {
              $lookup: {
                from: 'careerdetails',
                localField: 'careerDetailIdConverted',
                foreignField: '_id',
                as: 'careerdetails',
              },
            },
            {
              $unwind: '$careerdetails',
            },
          ],
          as: 'jobs',
        },
      },
      {
        $unwind: '$jobs',
      },
    ]);
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
