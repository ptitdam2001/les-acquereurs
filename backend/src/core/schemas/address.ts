import { Schema } from 'mongoose';

export const GeolocationSchema: Schema = new Schema(
  {
    lon: Number,
    lat: Number,
  },
  { _id: false, id: false },
);

export const AddressSchema: Schema = new Schema(
  {
    way1: String,
    way2: String,
    way3: String,
    postalCode: Number,
    city: String,
    country: String,
    loc: GeolocationSchema,
  },
  { _id: false, id: false },
);
