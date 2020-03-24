import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from './company.controller';

import { DatabaseModule } from '../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schemas/company.schema';

describe('Company Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        DatabaseModule,
        MongooseModule.forFeature([
          { name: 'Companies', schema: CompanySchema },
        ]),
      ],
      controllers: [CompanyController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CompanyController = module.get<CompanyController>(
      CompanyController,
    );
    expect(controller).toBeDefined();
  });
});
