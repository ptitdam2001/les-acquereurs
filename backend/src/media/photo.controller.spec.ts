import { Test, TestingModule } from '@nestjs/testing';
import { PhotoController } from './photo.controller';
import { PhotoService } from './services/photo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PhotoSchema } from './schemas/photo.schema';

describe('Photo Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([{ name: 'Photos', schema: PhotoSchema }]),
      ],
      controllers: [PhotoController],
      providers: [PhotoService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PhotoController = module.get<PhotoController>(
      PhotoController,
    );
    expect(controller).toBeDefined();
  });
});
