import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class ForgotPasswordDto {
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'anhtai3d2y@gmail.com',
    required: true,
  })
  email: string;
}
