import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';
import { GroupPermissionService } from './group-permission.service';
import { Response } from '../../utils/response';
import { CreateGroupPermissionDto } from './dto/createGroupPermission.dto';
import { UpdateGroupPermissionDto } from './dto/updateGroupPermission.dto';
import { RolesGuard } from '../../common/guard/roles.guard';
import { ActionEnum } from '../../utils/constants/enum/action.enum';
import { Permission } from '../../common/decorators/roles.decorator';

@Controller('group-permission')
@ApiTags('group-permission')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class GroupPermissionController {
  constructor(
    private readonly groupPermissionService: GroupPermissionService,
  ) {}

  @Get()
  // @Permission(ActionEnum.getGroupPermission)
  @ApiOperation({ summary: 'Get all group permission' })
  async getAllGroupPermission(): Promise<Response> {
    try {
      const result = await this.groupPermissionService.getAllGroupPermission();
      return {
        statusCode: HttpStatus.OK,
        message: 'Get list group permission successfully!',
        data: result,
      };
    } catch (e) {
      return {
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        message: 'Get list group permission failed!',
        error: 'Unprocessable Entity',
      };
    }
  }

  // @Permission(ActionEnum.getGroupPermission)
  @ApiOperation({ summary: 'Get GroupPermission by Id' })
  @ApiParam({ required: true, name: 'id', example: '6094dc6f51d62f00365ed928' })
  @Get(':id')
  async getPermission(@Param('id') id): Promise<Response> {
    try {
      const gP = await this.groupPermissionService.getGroupPermissionBydID(id);
      return {
        statusCode: HttpStatus.OK,
        message: 'Get group permission item successfully',
        data: gP,
      };
    } catch (e) {
      const message = e.response.message;
      let messageError: any = message;
      if (e.response.error === 'ID_NOT_FOUND') {
        messageError = message;
      } else if (e.response.error === 'ID_NOT_VALID') {
        messageError = message;
      } else {
        messageError = 'A system error has occurred!';
      }
      return {
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        message: messageError,
        error: 'Unprocessable Entity',
      };
    }
  }

  // @Permission(ActionEnum.createGroupPermission)
  @ApiOperation({ summary: 'Create Group Permission' })
  @ApiBody({
    type: CreateGroupPermissionDto,
    required: true,
    description: 'Create new Group permission',
  })
  @Post('/')
  async createGroupPermission(
    @Body() createGroupPermissionDto: CreateGroupPermissionDto,
  ): Promise<Response> {
    try {
      const result = await this.groupPermissionService.createGroupPermission(
        createGroupPermissionDto,
      );
      return {
        statusCode: HttpStatus.OK,
        message: 'Create item successfully',
        data: result,
      };
    } catch (e) {
      const message = e.message;
      let messageError: any = message;
      if (e.name === 'ValidationError') {
        messageError = message;
      } else if (e.response.error === 'Conflict') {
        messageError = message;
      } else {
        messageError = 'A system error has occurred!';
      }
      return {
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        message: messageError,
        error: 'Unprocessable Entity',
      };
    }
  }

  // @Permission(ActionEnum.updateGroupPermission)
  @ApiParam({ required: true, name: 'id', example: '629ad6f2dd67c5e2356848ed' })
  @Put(':id')
  async updateGroupPermission(
    @Param('id') id,
    @Body() updateData: UpdateGroupPermissionDto,
  ): Promise<Response> {
    try {
      const result = await this.groupPermissionService.updateGroupPermission(
        id,
        updateData,
      );
      return {
        statusCode: HttpStatus.OK,
        message: 'Update item group permission successfully',
        data: result,
      };
    } catch (e) {
      const message = e.response.message;
      let messageError: any = message;
      if (e.response.error === 'ID_NOT_FOUND') {
        messageError = message;
      } else if (e.response.error === 'ID_NOT_VALID') {
        messageError = message;
      } else if (e.response.error === 'Conflict') {
        messageError = message;
      } else {
        messageError = 'A system error has occurred!';
      }
      return {
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        message: messageError,
        error: 'Unprocessable Entity',
      };
    }
  }

  // @Permission(ActionEnum.deleteGroupPermission)
  @ApiOperation({ summary: 'Delete GroupPermission by Id ' })
  @ApiParam({ required: true, name: 'id', example: '6094dc6f51d62f00365ed928' })
  @Delete(':id')
  async DeleteGroupPermissionByID(@Param('id') id: string): Promise<Response> {
    try {
      const result = await this.groupPermissionService.deleteGroupPermission(
        id,
      );
      return {
        statusCode: HttpStatus.OK,
        message: 'Delete item group permission successfully',
        data: result,
      };
    } catch (e) {
      const message = e.response.message;
      let messageError: any = message;
      if (e.response.error === 'ID_NOT_FOUND') {
        messageError = message;
      } else if (e.response.error === 'ID_NOT_VALID') {
        messageError = message;
      } else {
        messageError = 'A system error has occurred!';
      }
      return {
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        message: messageError,
        error: 'Unprocessable Entity',
      };
    }
  }
}
