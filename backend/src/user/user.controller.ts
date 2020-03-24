import { ApiTags } from '@nestjs/swagger';

import { IUser } from './interfaces/user.interface';
import { UserService } from './services/user.service';
import { CompanyService } from './../company/services/company.service';
import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  HttpException,
  HttpStatus,
  Get,
  Query,
  Delete,
} from '@nestjs/common';

import * as _ from 'lodash';
import { Paginator } from './../database/paginator.interface';
import * as config from 'config';
export const defaultLimit = parseInt(config.get('application.itemByPage'), 0);

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private readonly companyService: CompanyService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Body() user): Promise<IUser> {
    return await this.userService.create(user);
  }

  @Put('/:id')
  async update(@Param('id') id, @Body() user) {
    const existed = await this.userService.findById(id);

    if (!existed) {
      throw new HttpException(`${id} not found`, HttpStatus.NOT_FOUND);
    } else {
      return await this.userService.update(id, user);
    }
  }

  @Get()
  async getAll(@Query() qs): Promise<Paginator<IUser>> {
    const page = parseInt(qs.page, 0) || 1;
    const limit = parseInt(qs.limit, 0) || defaultLimit;
    const sort = qs.sort || {};

    const conditions = _.omit(qs, ['page', 'limit', 'sort']) || {};

    return await this.userService.gotoPage(conditions, page, limit, sort);
  }

  @Get('/:id')
  async getOne(@Param('id') id): Promise<IUser> {
    const user = await this.userService.findById(id);
    if (!user) {
      throw new HttpException(`User ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Delete('/:id')
  async delete(@Param('id') id): Promise<string> {
    return await this.userService.delete(id);
  }

  @Put('/:user/company/:company')
  async setCompany(@Param() params) {
    const userId: string = params.user;
    const companyId: string = params.company;

    const user = await this.userService.findById(userId);

    if (!user) {
      throw new HttpException(`user ${userId} not found`, HttpStatus.NOT_FOUND);
    } else {
      const company = await this.companyService.findById(companyId);

      if (!company) {
        throw new HttpException(
          `company ${companyId} not found`,
          HttpStatus.NOT_FOUND,
        );
      } else {
        user.company = company;
        return await this.userService.update(userId, user);
      }
    }
  }
}
