import { Schema } from 'mongoose';

export const PriceHitoricRowSchema: Schema = new Schema({
  date: Date,
  price: Number,
});
