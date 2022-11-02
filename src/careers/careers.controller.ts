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
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MessageErrorService } from 'src/message-error/message-error';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'common/guard/roles.guard';
import { Response } from 'utils/response';

@ApiTags('careers')
@Controller('careers')
export class CareersController {
  constructor(
    private readonly careersService: CareersService,
    private readonly messageError: MessageErrorService,
  ) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add new career' })
  @ApiBody({
    type: CreateCareerDto,
    required: true,
    description: 'Add new career',
  })
  @Post()
  async create(
    @Body() createCareerDto: CreateCareerDto,
    @Request() req,
  ): Promise<Response> {
    try {
      const data: any = await this.careersService.create(createCareerDto);
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
  @ApiOperation({ summary: 'Get all career' })
  @Get()
  async findAll(@Request() req): Promise<Response> {
    try {
      const data: any = await this.careersService.findAll();
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
    return this.careersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCareerDto: UpdateCareerDto) {
    return this.careersService.update(+id, updateCareerDto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete career' })
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req): Promise<Response> {
    try {
      const data: any = await this.careersService.remove(id);
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
