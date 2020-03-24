import { Schema } from 'mongoose';
import { PriceHitoricRowSchema } from './price-historic-row.schema';

export const PriceSchema: Schema = new Schema({
  price: Number,
  notary_fees: Number,
  commission: Number,
  history: {
    type: [PriceHitoricRowSchema],
    default: [],
  },
});
