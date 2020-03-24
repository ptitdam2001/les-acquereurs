import { Paginator } from './../database/paginator.interface';
import { CompanyService } from './services/company.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ICompany } from './interfaces';

import * as config from 'config';
import { ApiTags } from '@nestjs/swagger';
export const defaultLimit = parseInt(config.get('application.itemByPage'), 0);

@ApiTags('companies')
@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  async create(@Body() company: ICompany) {
    this.companyService.create(company);
  }

  @Get()
  async getAll(@Query() qs): Promise<Paginator<ICompany>> {
    const page = parseInt(qs.page, 0) || 1;
    const limit = parseInt(qs.limit, 0) || defaultLimit;
    return await this.companyService.gotoPage({}, page, limit, {});
  }

  @Get(':id')
  async getOne(@Param('id') id): Promise<ICompany> {
    return await this.companyService.findById(id);
  }

  @Put(':id')
  async updateOne(@Param('id') id, @Body() update): Promise<ICompany> {
    return await this.companyService.update(id, update);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id): Promise<string> {
    return await this.companyService.delete(id);
  }

  @Put(':id/activate')
  async activate(@Param('id') id): Promise<ICompany> {
    return await this.companyService.active(id);
  }

  @Put(':id/unactivate')
  async unactivate(@Param('id') id): Promise<ICompany> {
    return await this.companyService.unactive(id);
  }
}
