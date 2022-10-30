import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CareerDetailsService } from './career-details.service';
import { CreateCareerDetailDto } from './dto/create-career-detail.dto';
import { UpdateCareerDetailDto } from './dto/update-career-detail.dto';

@Controller('career-details')
export class CareerDetailsController {
  constructor(private readonly careerDetailsService: CareerDetailsService) {}

  @Post()
  create(@Body() createCareerDetailDto: CreateCareerDetailDto) {
    return this.careerDetailsService.create(createCareerDetailDto);
  }

  @Get()
  findAll() {
    return this.careerDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.careerDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCareerDetailDto: UpdateCareerDetailDto) {
    return this.careerDetailsService.update(+id, updateCareerDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.careerDetailsService.remove(+id);
  }
}