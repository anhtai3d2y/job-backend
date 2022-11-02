import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpStatus,
} from '@nestjs/common';
import { RecruitersService } from './recruiters.service';
import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'utils/response';
import { MessageErrorService } from 'src/message-error/message-error';

@ApiTags('recruiters')
@Controller('recruiters')
export class RecruitersController {
  constructor(
    private readonly recruitersService: RecruitersService,
    private readonly messageError: MessageErrorService,
  ) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: CreateRecruiterDto,
    required: true,
    description: 'Add new user',
  })
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  async create(
    @Body() createRecruiterDto: CreateRecruiterDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Response> {
    try {
      const data: any = await this.recruitersService.create(
        createRecruiterDto,
        file,
      );
      return {
        statusCode: HttpStatus.OK,
        message: 'Create successfully',
        data: data,
      };
    } catch (e) {
      return this.messageError.messageErrorController(e);
    }
  }

  @Get()
  findAll() {
    return this.recruitersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recruitersService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecruiterDto: UpdateRecruiterDto,
  ) {
    return this.recruitersService.update(+id, updateRecruiterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recruitersService.remove(+id);
  }
}
