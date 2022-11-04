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
export class CreateJobDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'minSalary', default: 10000 })
  minSalary: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'maxSalary', default: 20000 })
  maxSalary: number;

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

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'recruitAmount', default: 20 })
  recruitAmount: number;

  @IsOptional()
  @IsString()
  @IsMongoId()
  @ApiProperty({
    type: String,
    description: 'recruiterName',
    default: 'Google LLC',
  })
  recruiterName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'jobName',
    default: 'Backend NodeJS Developer',
  })
  jobName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'jobType',
    default: 'Full-time',
    enum: JobType,
  })
  jobType: string;

  @ApiProperty({ type: String, enum: Gender, required: false })
  @IsOptional()
  @IsString()
  @IsIn(Gender, { message: Gender.toString() })
  gender: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'minAge', default: 16 })
  minAge: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ type: Number, description: 'maxAge', default: 16 })
  maxAge: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'englishLevel',
    default: 'Ielts 6.0',
  })
  englishLevel: string;

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
    description: 'otherReqruirments',
    default: 'Beatiful',
  })
  otherReqruirments: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'contactInfo',
    default: 'Phone Number: 0123456789. Email: anhtai3d2y@gmail.com',
  })
  contactInfo: string;

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
    description: 'workAddress',
    default: 'Ho Chi Minh City',
  })
  workAddress: string;

  @IsOptional()
  @IsString()
  @IsMongoId()
  @ApiProperty({
    type: String,
    description: 'careerId',
    default: '6361bb028c46d2b47b42500a',
  })
  careerId: string;

  @IsOptional()
  @IsString()
  @IsMongoId()
  @ApiProperty({
    type: String,
    description: 'careerDetailId',
    default: '63628dae864199480603ee0a',
  })
  careerDetailId: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    description: 'image',
    required: true,
  })
  @IsOptional()
  image?: string;
}
