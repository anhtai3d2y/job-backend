import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsMongoId,
  IsIn,
  IsString,
  ValidateIf,
  Matches,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Gender } from 'utils/constants/enum/gender.enum';
import { Role } from 'utils/constants/enum/role.enum';

export class AddUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, description: 'name', default: 'Pham Duy Tai' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'email',
    default: 'user@gmail.com',
  })
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(6, { message: '6' })
  @MaxLength(30, { message: '30' })
  @ApiProperty({
    type: String,
    description: 'password',
    required: false,
    default: 'anhtai3d2y',
  })
  password: string;

  @ApiProperty({ type: String, enum: Gender, required: false, default: 'Male' })
  @IsOptional()
  @IsString()
  @IsIn(Gender, { message: Gender.toString() })
  gender: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'phonenumber',
    default: '0932062686',
  })
  phonenumber: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'role',
    enum: Role,
    default: Role.Candidate,
  })
  role: string;

  @IsNotEmpty()
  @Matches(/^(19|20)\d{2}\/(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])$/)
  @ApiProperty({ type: String, description: 'birthday', default: '2000/11/27' })
  birthday: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    description: 'avatar',
    required: true,
  })
  @IsOptional()
  avatar?: string;
}
