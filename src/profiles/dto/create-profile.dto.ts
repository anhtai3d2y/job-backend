import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsIn,
  IsString,
  IsMongoId,
} from 'class-validator';
import { Currency } from 'utils/constants/enum/currency.enum';
import { Gender } from 'utils/constants/enum/gender.enum';
import { JobType } from 'utils/constants/enum/jobType.enum';
export class CreateProfileDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'uuid',
    default: '63628dae864199480603ee0a',
  })
  uuid: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'weigth', default: 60 })
  weigth: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'height', default: 170 })
  height: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'wage', default: 170 })
  wage: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'currency',
    default: 'USD',
    enum: Currency,
  })
  currency: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'salaryFrequency',
    default: 'perMonth',
  })
  salaryFrequency: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'experience',
    default: 'No experience',
  })
  experience: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'highSchoolName',
    default: 'My school',
  })
  highSchoolName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'hometown',
    default: 'Hung Yen',
  })
  hometown: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'educationLevel',
    default: 'University',
  })
  educationLevel: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'wish',
    default: 'Good work environment',
  })
  wish: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'specialCondition',
    default: 'No',
  })
  specialCondition: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'region',
    default: 'VietNam',
  })
  region: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'currentAddress',
    default: 'Ho Chi Minh City',
  })
  currentAddress: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'workCompany',
    default: 'Google',
  })
  workCompany: string;

  @IsOptional()
  @IsString()
  @IsMongoId()
  @ApiProperty({
    type: String,
    description: 'careerDetailId',
    default: '63628dae864199480603ee0a',
  })
  careerDetailId: string;
}
