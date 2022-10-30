import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateSaveJobDto {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  @ApiProperty({
    type: String,
    description: 'jobId',
    example: '62846ff7dc8f605051b07c73',
  })
  jobId: string;
}
