import { BaseSchema } from './../../core/schemas/base.schema';
import * as mongoose from 'mongoose';
import { PhoneSchema, AddressSchema } from '../../core/schemas';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const CompanySchema: mongoose.Schema = new mongoose.Schema({
  shortname: String,
  phone: PhoneSchema,
  name: {
    type: String,
    unique: true,
  },
  address: {
    type: AddressSchema,
    default: null,
  },
});

CompanySchema.add(BaseSchema);

// Plugin
CompanySchema.plugin(mongoosePaginate);

// Index
CompanySchema.index({ name: 1 }, { unique: true });
