import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateCareerDetailDto {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  @ApiProperty({
    type: String,
    description: 'careerId',
    example: '6361bbdaf69431dbf9e490aa',
  })
  careerId: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'name',
    example: 'Backend NodeJS',
  })
  name: string;
}
