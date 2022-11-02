import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRecruiterDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Google',
    description: 'Your company name',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Công ty công nghệ',
    description: 'Your company career',
  })
  career: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    example: 'Công ty công nghệ....',
    description: 'Your company description',
  })
  description: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    description: 'image',
    required: true,
  })
  @IsOptional()
  image?: string;
}
