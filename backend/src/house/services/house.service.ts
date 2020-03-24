import { IPhoto } from './../../media/interfaces/photo.interface';
import { Paginator } from './../../database/paginator.interface';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, Types } from 'mongoose';
import { Injectable, HttpException } from '@nestjs/common';
import { extend, omit } from 'lodash';
import { IHouse, Room } from '../interfaces';

@Injectable()
export class HouseService {
  constructor(
    @InjectModel('Houses') private readonly $model: PaginateModel<IHouse>,
  ) {}

  protected toObjectId(id: string): Types.ObjectId {
    return Types.ObjectId.createFromHexString(id);
  }

  async create(item: IHouse): Promise<IHouse> {
    const createdHouse = new this.$model(item);
    return await createdHouse.save();
  }

  async find(
    cond: object,
    fields: object = {},
    options: object = {},
  ): Promise<IHouse[]> {
    return await this.$model
      .find(extend(cond, { deleted: false }), fields, options)
      .exec();
  }

  async findById(id: string, fields: string[] = []): Promise<IHouse> {
    const projection = {};
    if (fields.length > 0) {
      fields.forEach(field => (projection[field] = 1));
    }
    return await new Promise((resolve, reject) =>
      this.$model
        .findOne({ deleted: false, _id: id })
        .select(projection)
        .populate('photos')
        .populate('seller')
        .populate('isFavoriteOf')
        .exec()
        .then(result =>
          !result ? reject(`House ${id} not found`) : resolve(result),
        )
        .catch(reject),
    );
  }

  async update(id: string, item: IHouse): Promise<IHouse> {
    return await new Promise((resolve, reject) => {
      this.$model.updateOne({ _id: id }, item, err => {
        if (err) {
          reject(err);
        } else {
          this.findById(id)
            .then(found => resolve(found))
            .catch(() => reject('not found'));
        }
      });
    });
  }

  async delete(id: string): Promise<string> {
    return await new Promise((resolve, reject) =>
      this.$model.updateOne(
        { _id: this.toObjectId(id) },
        { deleted: true },
        err => {
          if (err) {
            reject(err);
          } else {
            resolve(id);
          }
        },
      ),
    );
  }

  async active(id: string): Promise<IHouse> {
    return await new Promise((resolve, reject) => {
      this.$model.updateOne(
        { _id: this.toObjectId(id) },
        { active: true },
        err => {
          if (err) {
            reject(err);
          } else {
            this.findById(id)
              .then(found => resolve(found))
              .catch(() => reject('not found'));
          }
        },
      );
    });
  }

  async unactive(id: string): Promise<IHouse> {
    return await new Promise((resolve, reject) => {
      this.$model.updateOne(
        { _id: this.toObjectId(id) },
        { active: false },
        err => {
          if (err) {
            reject(err);
          } else {
            this.findById(id)
              .then(found => resolve(found))
              .catch(() => reject('not found'));
          }
        },
      );
    });
  }

  async gotoPage(
    cond: object,
    page: number,
    limit: number,
    sort: object = {},
  ): Promise<Paginator<IHouse>> {
    const options = {
      sort: sort || {},
    };

    const conditions = extend({}, { deleted: false }, cond);

    return await this.$model.paginate(
      conditions,
      extend({}, options, { limit, page }),
    );
  }

  async addRoom(house: IHouse, room: Room) {
    return await this.$model
      .findByIdAndUpdate(house._id, {
        $push: { rooms: room },
        $inc: { roomNumber: 1 },
      })
      .exec();
  }

  async getPhotos(house: IHouse, withRaw: boolean = false): Promise<IPhoto[]> {
    return await new Promise((resolve, reject) =>
      this.findById(house._id, ['photos'])
        .then(ihouse => {
          resolve(
            ihouse.photos.map(item => {
              if (!withRaw) {
                item.raw = null;
              }
              return item;
            }),
          );
        })
        .catch(reject),
    );
  }

  async addPhoto(house: IHouse, photo: IPhoto) {
    return await this.$model.updateOne(
      { _id: house._id },
      { $push: { photos: photo } },
    );
  }

  async removePhoto(house: IHouse, photoId: string) {
    return await this.$model.updateOne(
      { _id: house._id },
      { $pull: { photos: photoId } },
    );
  }
}
