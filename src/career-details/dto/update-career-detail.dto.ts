import { PartialType } from '@nestjs/swagger';
import { CreateCareerDetailDto } from './create-career-detail.dto';

export class UpdateCareerDetailDto extends PartialType(CreateCareerDetailDto) {}
