import { Schema } from 'mongoose';

export const PhoneSchema: Schema = new Schema(
  {
    home: String,
    mobile: String,
  },
  { _id: false, id: false },
);
