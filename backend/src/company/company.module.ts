import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { CompanySchema } from './schemas/company.schema';

import { CompanyController } from './company.controller';

import { CompanyService } from './services/company.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Companies', schema: CompanySchema }]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
