import { PhotoSchema } from './schemas/photo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PhotoService } from './services/photo.service';
import { PhotoController } from './photo.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Photos', schema: PhotoSchema }]),
  ],
  providers: [PhotoService],
  controllers: [PhotoController],
  exports: [PhotoService],
})
export class MediaModule {}
