import { ApiTags } from '@nestjs/swagger';
import { Paginator } from './../database/paginator.interface';
import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  HttpStatus,
  HttpException,
  Delete,
} from '@nestjs/common';
import { HouseService } from './services/house.service';
import { IHouse, Room } from './interfaces';

import * as config from 'config';
export const defaultLimit = parseInt(config.get('application.itemByPage'), 0);

@ApiTags('houses')
@Controller('houses')
export class HouseController {
  constructor(private readonly $service: HouseService) {}

  @Get()
  async getAll(@Query() qs): Promise<Paginator<IHouse>> {
    const page = parseInt(qs.page, 0) || 1;
    const limit = parseInt(qs.limit, 0) || defaultLimit;
    return await this.$service.gotoPage({}, page, limit, {});
  }

  @Post()
  async create(@Body() house): Promise<IHouse> {
    return await this.$service.create(house);
  }

  @Get('/:id')
  async getOne(@Param('id') id): Promise<IHouse> {
    const house = await this.$service.findById(id).catch(err => {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    });

    if (!house) {
      throw new HttpException(`house ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return house;
  }

  @Put('/:id')
  async update(@Param('id') id, @Body() house: IHouse): Promise<IHouse> {
    const existed = await this.$service.findById(id).catch(err => {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    });

    if (!existed) {
      throw new HttpException(`${id} not found`, HttpStatus.NOT_FOUND);
    }

    return await this.$service.update(id, house);
  }

  @Delete('/:id')
  async delete(@Param('id') id): Promise<string> {
    return await this.$service.delete(id);
  }

  @Put('/:id/room')
  async addRoom(@Param('id') houseId, @Body() room: Room) {
    const house = await this.$service.findById(houseId).catch(err => {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    });

    if (!house) {
      throw new HttpException(
        `house ${houseId} not found`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      return await this.$service.addRoom(house, room);
    }
  }
}
