import { ApiTags } from '@nestjs/swagger';
import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  HttpException,
  HttpStatus,
  Get,
  Delete,
  Query,
} from '@nestjs/common';
import { RoleService } from './services/role.service';
import { IRole } from './interfaces';

import { Paginator } from './../database/paginator.interface';
import * as config from 'config';
export const defaultLimit = parseInt(config.get('application.itemByPage'), 0);

@ApiTags('users')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async create(@Body() role): Promise<IRole> {
    return await this.roleService.create(role);
  }

  @Put('/:id')
  async update(@Param('id') id, @Body() role) {
    const defaultRole = await this.roleService.findById(id);

    if (!defaultRole) {
      throw new HttpException(`Role ${id} not found`, HttpStatus.NOT_FOUND);
    }

    return await this.roleService.update(id, role);
  }

  @Get()
  async getAll(@Query() qs): Promise<Paginator<IRole>> {
    const page = parseInt(qs.page, 0) || 1;
    const limit = parseInt(qs.limit, 0) || defaultLimit;
    return await this.roleService.gotoPage({}, page, limit, {});
  }

  @Get('/:id')
  async getOne(@Param('id') id): Promise<IRole> {
    return this.roleService.findById(id);
  }

  @Delete('/:id')
  async delete(@Param('id') id): Promise<string> {
    return this.roleService.delete(id);
  }
}
