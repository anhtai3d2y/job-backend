import { Injectable } from '@nestjs/common';
import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import * as fs from 'fs';
import { uuid } from '../../utils/util';
import { uploadFile } from 'utils/cloudinary';
import { Recruiters } from './interfaces/recruiters.interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RecruitersService {
  constructor(
    @InjectModel('Recruiters')
    private readonly recruiterModel: Model<Recruiters>,
  ) {}
  async create(createRecruiterDto: CreateRecruiterDto, file: any) {
    const fileName = `./images/${uuid()}.png`;
    await fs.createWriteStream(fileName).write(file.buffer);
    const fileUploaded = await uploadFile(fileName);
    fs.unlink(fileName, (err) => {
      if (err) console.log('err: ', err);
    });
    const recruiter = await this.recruiterModel.create({
      userId: createRecruiterDto.userId,
      name: createRecruiterDto.name,
      career: createRecruiterDto.career,
      image: {
        secureURL: fileUploaded.secure_url,
        publicId: fileUploaded.public_id,
      },
      description: createRecruiterDto.description,
    });
    return recruiter;
  }

  findAll() {
    return `This action returns all recruiters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recruiter`;
  }

  update(id: number, updateRecruiterDto: UpdateRecruiterDto) {
    return `This action updates a #${id} recruiter`;
  }

  remove(id: number) {
    return `This action removes a #${id} recruiter`;
  }
}
