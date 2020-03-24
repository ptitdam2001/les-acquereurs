import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaModule } from './../media/media.module';

import { HouseController } from './house.controller';
import { HousePhotoController } from './house-photo.controller';

import { HouseService } from './services/house.service';

import { HouseSchema } from './schemas/house.schema';

@Module({
  imports: [
    MediaModule,
    MongooseModule.forFeature([{ name: 'Houses', schema: HouseSchema }]),
  ],
  controllers: [HouseController, HousePhotoController],
  providers: [HouseService],
  exports: [HouseService],
})
export class HouseModule {}
