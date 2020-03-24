import { ApiTags } from '@nestjs/swagger';
import { PhotoService } from './services/photo.service';
import {
  Controller,
  Get,
  Param,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@ApiTags('medias')
@Controller('photos')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get(':id')
  getOne(@Param('id') id, @Res() response) {
    this.photoService
      .findById(id)
      .then(photo => {
        response.setHeader('content-type', photo.format);
        response.send(photo.raw);
      })
      .catch(() => {
        throw new HttpException(`Image ${id} not found`, HttpStatus.NOT_FOUND);
      });
  }
}
