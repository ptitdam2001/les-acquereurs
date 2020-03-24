import { Paginator } from './../../database/paginator.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Types, PaginateModel } from 'mongoose';
import { extend } from 'lodash';
import { IUser } from '../interfaces/index';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly $model: PaginateModel<IUser>,
  ) {}

  protected toObjectId(id: string): Types.ObjectId {
    return Types.ObjectId.createFromHexString(id);
  }

  async create(item: object): Promise<IUser> {
    const createdUser = new this.$model(item);
    return await createdUser.save();
  }

  async find(
    cond: object,
    fields: object = {},
    options: object = {},
  ): Promise<IUser[]> {
    return await this.$model
      .find(extend(cond, { deleted: false }), fields, options)
      .exec();
  }

  async findById(id: string, fields: string[] = []): Promise<IUser> {
    return await this.$model
      .findOne({ deleted: false, _id: id }, fields)
      .populate('company')
      .populate('role')
      .exec();
  }

  async update(id: string, item: IUser): Promise<IUser> {
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

  async active(id: string): Promise<IUser> {
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

  async unactive(id: string): Promise<IUser> {
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
  ): Promise<Paginator<IUser>> {
    const options = { sort: sort || {} };

    const conditions = extend({}, { deleted: false }, cond);
    const paginateOpts = { limit, page, populate: ['company', 'role'] };

    return await this.$model.paginate(
      conditions,
      extend({}, options, paginateOpts),
    );
  }
}
