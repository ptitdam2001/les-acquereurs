import { Schema } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { BaseSchema } from '../../core/schemas';

const photo: Schema = new Schema({
  size: Number,
  label: String,
  format: String,
  raw: Buffer,
});

photo.add(BaseSchema);

// Plugins
photo.plugin(mongoosePaginate);

export const PhotoSchema = photo;
