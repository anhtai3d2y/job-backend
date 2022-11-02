import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { Careers } from './interfaces/careers.interfaces';

@Injectable()
export class CareersService {
  constructor(
    @InjectModel('Careers')
    private readonly careersModel: Model<Careers>,
  ) {}
  async create(createCareerDto: CreateCareerDto) {
    const career = await this.careersModel.create({
      name: createCareerDto.name,
    });
    return career;
  }

  async findAll() {
    const career = await this.careersModel.find();
    return career;
  }

  findOne(id: number) {
    return `This action returns a #${id} career`;
  }

  update(id: number, updateCareerDto: UpdateCareerDto) {
    return `This action updates a #${id} career`;
  }

  async remove(id: string) {
    return await this.careersModel.deleteOne({
      _id: id,
    });
  }
}
