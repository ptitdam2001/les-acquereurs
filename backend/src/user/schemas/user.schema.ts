import * as mongoosePaginate from 'mongoose-paginate-v2';
import { Schema } from 'mongoose';
import { AddressSchema, PhoneSchema, BaseSchema } from '../../core/schemas';

const user = new Schema({
  email: {
    type: String,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    default: 1,
    required: true,
    ref: 'Roles',
  },
  password: {
    type: String,
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Companies',
  },
  address: AddressSchema,
  phone: PhoneSchema,
  job: String,
});

user.add(BaseSchema);

// Plugin
user.plugin(mongoosePaginate);

// Index
user.index({ email: 1 }, { unique: true });

user.methods.fullName = function(): string {
  return `${this.firstname.trim()} ${this.lastname.trim()}`;
};

export const UserSchema = user;
