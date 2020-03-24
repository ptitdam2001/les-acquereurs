import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { extend } from 'lodash';
import { IPhoto } from '../interfaces';

@Injectable()
export class PhotoService {
  constructor(@InjectModel('Photos') private readonly $model: Model<IPhoto>) {}

  protected toObjectId(id: string): Types.ObjectId {
    return Types.ObjectId.createFromHexString(id);
  }

  async create(item: object): Promise<IPhoto> {
    const createdRole = new this.$model(item);
    return await createdRole.save();
  }

  async find(
    cond: object,
    fields: object = {},
    options: object = {},
  ): Promise<IPhoto[]> {
    return await this.$model
      .find(extend(cond, { deleted: false }), fields, options)
      .exec();
  }

  async findById(id: string, fields: string[] = []): Promise<IPhoto> {
    return await this.$model
      .findOne({ deleted: false, _id: this.toObjectId(id) }, fields)
      .exec();
  }

  async update(id: string, item: IPhoto): Promise<IPhoto> {
    return await new Promise((resolve, reject) => {
      this.$model.updateOne({ _id: this.toObjectId(id) }, item, err => {
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

  async delete(id: string): Promise<object> {
    return await this.$model.deleteOne({ _id: id });
  }
}
