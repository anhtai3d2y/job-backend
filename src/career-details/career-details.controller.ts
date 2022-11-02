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
import { CareerDetailsService } from './career-details.service';
import { CreateCareerDetailDto } from './dto/create-career-detail.dto';
import { UpdateCareerDetailDto } from './dto/update-career-detail.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { MessageErrorService } from 'src/message-error/message-error';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'common/guard/roles.guard';
import { Response } from 'utils/response';

@ApiTags('career-details')
@Controller('career-details')
export class CareerDetailsController {
  constructor(
    private readonly careerDetailsService: CareerDetailsService,
    private readonly messageError: MessageErrorService,
  ) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Add new careerDetail' })
  @ApiBody({
    type: CreateCareerDetailDto,
    required: true,
    description: 'Add new careerDetail',
  })
  @Post()
  async create(
    @Body() createCareerDetailDto: CreateCareerDetailDto,
    @Request() req,
  ): Promise<Response> {
    try {
      const data: any = await this.careerDetailsService.create(
        createCareerDetailDto,
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
  @ApiOperation({ summary: 'Get all careerDetail' })
  @Get()
  async findAll(@Request() req): Promise<Response> {
    try {
      const data: any = await this.careerDetailsService.findAll();
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
    return this.careerDetailsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCareerDetailDto: UpdateCareerDetailDto,
  ) {
    return this.careerDetailsService.update(+id, updateCareerDetailDto);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete careerDetail' })
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req): Promise<Response> {
    try {
      const data: any = await this.careerDetailsService.remove(id);
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
