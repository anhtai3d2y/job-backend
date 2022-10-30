import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SaveJobsService } from './save-jobs.service';
import { CreateSaveJobDto } from './dto/create-save-job.dto';
import { UpdateSaveJobDto } from './dto/update-save-job.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('save-jobs')
@Controller('save-jobs')
export class SaveJobsController {
  constructor(private readonly saveJobsService: SaveJobsService) {}

  @Post()
  create(@Body() createSaveJobDto: CreateSaveJobDto) {
    return this.saveJobsService.create(createSaveJobDto);
  }

  @Get()
  findAll() {
    return this.saveJobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saveJobsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSaveJobDto: UpdateSaveJobDto) {
    return this.saveJobsService.update(+id, updateSaveJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saveJobsService.remove(+id);
  }
}
