import { Injectable } from '@nestjs/common';
import { CreateCareerDetailDto } from './dto/create-career-detail.dto';
import { UpdateCareerDetailDto } from './dto/update-career-detail.dto';

@Injectable()
export class CareerDetailsService {
  create(createCareerDetailDto: CreateCareerDetailDto) {
    return 'This action adds a new careerDetail';
  }

  findAll() {
    return `This action returns all careerDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} careerDetail`;
  }

  update(id: number, updateCareerDetailDto: UpdateCareerDetailDto) {
    return `This action updates a #${id} careerDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} careerDetail`;
  }
}
