import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Jobs } from './interfaces/jobs.interfaces';
import * as fs from 'fs';
import { uuid } from 'utils/util';
import { uploadFile } from 'utils/cloudinary';
@Injectable()
export class JobsService {
  constructor(
    @InjectModel('Jobs')
    private readonly jobsModel: Model<Jobs>,
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

  async findAll() {
    return await this.jobsModel.find();
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
