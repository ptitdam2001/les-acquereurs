import { HouseSchema } from './schemas/house.schema';
import { Test, TestingModule } from '@nestjs/testing';
import { HousePhotoController } from './house-photo.controller';
import { HouseService } from './services/house.service';
import { MongooseModule } from '@nestjs/mongoose';

describe('HousePhoto Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [HousePhotoController],
      providers: [HouseService, {
        provide: 'Houses',
        useValue: HouseSchema,
      }],
      imports: [
        MongooseModule.forFeature([{ name: 'Houses', schema: HouseSchema }]),
      ],
    }).compile();
  });
  it('should be defined', () => {
    const controller: HousePhotoController = module.get<HousePhotoController>(
      HousePhotoController,
    );
    expect(controller).toBeDefined();
  });
});
