import { DatabaseModule } from './../../database/database.module';
import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from '../schemas/company.schema';

describe('CompanyService', () => {
  let service: CompanyService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        DatabaseModule,
        MongooseModule.forFeature([
          { name: 'Companies', schema: CompanySchema },
        ]),
      ],
      providers: [CompanyService],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
