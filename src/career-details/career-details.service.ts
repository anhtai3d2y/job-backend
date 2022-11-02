import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCareerDetailDto } from './dto/create-career-detail.dto';
import { UpdateCareerDetailDto } from './dto/update-career-detail.dto';
import { CareerDetails } from './interfaces/career-details.interfaces';

@Injectable()
export class CareerDetailsService {
  constructor(
    @InjectModel('CareerDetails')
    private readonly careerDetailsModel: Model<CareerDetails>,
  ) {}
  async create(createCareerDetailDto: CreateCareerDetailDto) {
    const careerDetail = await this.careerDetailsModel.create({
      name: createCareerDetailDto.name,
      careerId: createCareerDetailDto.careerId,
    });
    return careerDetail;
  }

  async findAll() {
    const careerDetail = await this.careerDetailsModel.find();
    console.log('careerDetail: ', careerDetail);
    return careerDetail;
  }

  findOne(id: number) {
    return `This action returns a #${id} careerDetail`;
  }

  update(id: number, updateCareerDetailDto: UpdateCareerDetailDto) {
    return `This action updates a #${id} careerDetail`;
  }

  async remove(id: string) {
    return await this.careerDetailsModel.deleteOne({
      _id: id,
    });
  }
}
