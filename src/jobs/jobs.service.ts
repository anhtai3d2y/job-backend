import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Jobs } from './interfaces/jobs.interfaces';
import * as fs from 'fs';
import { uuid } from 'utils/util';
import { uploadFile } from 'utils/cloudinary';
import { Applications } from 'src/applications/interfaces/applications.interfaces';
import { SaveJobs } from 'src/save-jobs/interfaces/save-jobs.interfaces';
import { ObjectID } from 'mongodb';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel('Jobs')
    private readonly jobsModel: Model<Jobs>,
    @InjectModel('Applications')
    private readonly applicationsModel: Model<Applications>,
    @InjectModel('SaveJobs')
    private readonly saveJobsModel: Model<SaveJobs>,
  ) {}
  async create(createJobDto: CreateJobDto, file) {
    const fileName = `./images/${uuid()}.png`;
    await fs.createWriteStream(fileName).write(file.buffer);
    const fileUploaded = await uploadFile(fileName);
    fs.unlink(fileName, (err) => {
      if (err) console.log('err: ', err);
    });
    const job = await this.jobsModel.create({
      ...createJobDto,
      image: {
        secureURL: fileUploaded.secure_url,
        publicId: fileUploaded.public_id,
      },
    });
    return job;
  }

  async findAll(user: any) {
    const applications = await this.applicationsModel.find({
      uuid: user.uuid,
    });
    const saveJobs = await this.saveJobsModel.find({
      uuid: user.uuid,
    });
    const ids = [...applications, ...saveJobs].map((item) => {
      return new ObjectID(item.jobId);
    });
    return await this.jobsModel.aggregate([
      {
        $match: {
          _id: { $nin: ids },
        },
      },
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
    ]);
  }

  async findOne(id: string) {
    const job = await this.jobsModel.findById(id);
    return job;
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
