import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Request,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { SaveJobsService } from './save-jobs.service';
import { CreateSaveJobDto } from './dto/create-save-job.dto';
import { UpdateSaveJobDto } from './dto/update-save-job.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MessageErrorService } from 'src/message-error/message-error';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'common/guard/roles.guard';
import { Response } from 'utils/response';

@ApiTags('save-jobs')
@Controller('save-jobs')
export class SaveJobsController {
  constructor(
    private readonly saveJobsService: SaveJobsService,
    private readonly messageError: MessageErrorService,
  ) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add new save job' })
  @ApiBody({
    type: CreateSaveJobDto,
    required: true,
    description: 'Add new save job',
  })
  @Post()
  async create(
    @Body() createSaveJobDto: CreateSaveJobDto,
    @Request() req,
  ): Promise<Response> {
    try {
      const data: any = await this.saveJobsService.create(
        createSaveJobDto,
        req.user,
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
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all save job' })
  @Get()
  async findAll(@Request() req): Promise<Response> {
    try {
      const data: any = await this.saveJobsService.findAll(req.user);
      return {
        statusCode: HttpStatus.OK,
        message: 'Get successfully',
        data: data,
      };
    } catch (e) {
      return this.messageError.messageErrorController(e);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saveJobsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSaveJobDto: UpdateSaveJobDto) {
    return this.saveJobsService.update(+id, updateSaveJobDto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete save job' })
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req): Promise<Response> {
    try {
      const data: any = await this.saveJobsService.remove(id, req.user);
      return {
        statusCode: HttpStatus.OK,
        message: 'Delete successfully',
        data: data,
      };
    } catch (e) {
      return this.messageError.messageErrorController(e);
    }
  }
}
