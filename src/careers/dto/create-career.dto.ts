import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateCareerDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'name',
    example: 'IT',
  })
  name: string;
}
