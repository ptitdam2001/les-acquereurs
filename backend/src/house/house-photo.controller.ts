import { ApiTags } from '@nestjs/swagger';
import { PhotoService } from './../media/services/photo.service';
import {
  Controller,
  Get,
  Param,
  HttpException,
  HttpStatus,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
  Delete,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { HouseService } from './services/house.service';
import { IPhoto } from '../media/interfaces';

@ApiTags('houses')
@Controller('houses/:houseId/photos')
export class HousePhotoController {
  constructor(
    private readonly houseService: HouseService,
    private readonly photoService: PhotoService,
  ) {}

  @Get('/:photoId/raw')
  async getOne(@Param() params): Promise<IPhoto> {
    const photoId: string = params.photoId;
    const houseId: string = params.houseId;

    const house = await this.houseService.findById(houseId).catch(err => {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    });

    if (!house) {
      throw new HttpException(
        `House ${houseId} not found!`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      const photos = await this.houseService.getPhotos(house, true);
      const search = photos.filter(photo => photo._id === photoId);
      if (search.length === 0) {
        throw new HttpException(
          `Photo ${photoId} for house ${houseId} not found`,
          HttpStatus.NOT_FOUND,
        );
      } else {
        return search[0];
      }
    }
  }

  @Get('/:photoId')
  async displayOne(@Param() params, @Res() response) {
    const photoId: string = params.photoId;
    const houseId: string = params.houseId;

    const house = await this.houseService.findById(houseId).catch(err => {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    });

    if (!house) {
      throw new HttpException(
        `House ${houseId} not found!`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      const photos = await this.houseService.getPhotos(house, true);
      const search = photos.filter(photo => photo._id === photoId);
      if (search.length === 0) {
        throw new HttpException(
          `Photo ${photoId} for house ${houseId} not found`,
          HttpStatus.NOT_FOUND,
        );
      } else {
        response.setHeader('content-type', search[0].format);
        response.send(search[0].raw);
      }
    }
  }

  @Get()
  async getAll(@Param('houseId') houseId) {
    const house = await this.houseService.findById(houseId).catch(err => {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    });

    if (!house) {
      throw new HttpException(
        `House ${houseId} not found!`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      return await this.houseService.getPhotos(house);
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  async create(@Param('houseId') houseId, @UploadedFile() file) {
    const house = await this.houseService.findById(houseId).catch(err => {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    });

    if (!house) {
      throw new HttpException(
        `House ${houseId} not found!`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      // First create photo
      const photo = {
        size: file.size,
        label: file.originalname,
        format: file.mimetype,
        raw: file.buffer,
      };

      const created = await this.photoService.create(photo).catch(() => {
        throw new HttpException(
          `Error during create`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });

      if (!created) {
        throw new HttpException(
          `Error during create`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return this.houseService.addPhoto(house, created);
    }
  }

  @Delete('/:photoId')
  async delete(@Param() params): Promise<string> {
    const photoId: string = params.photoId;
    const houseId: string = params.houseId;

    const house = await this.houseService.findById(houseId).catch(err => {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    });

    if (!house) {
      throw new HttpException(
        `House ${houseId} not found!`,
        HttpStatus.NOT_FOUND,
      );
    } else {
      // Remove photo to house
      await this.houseService.removePhoto(house, photoId);
      await this.photoService.delete(photoId);

      return photoId;
    }
  }
}
