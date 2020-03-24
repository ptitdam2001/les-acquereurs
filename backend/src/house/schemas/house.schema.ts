import { Schema } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
import { AddressSchema, BaseSchema } from '../../core/schemas';
import { RoomSchema } from './room.schema';
import { PriceSchema } from './price.schema';
import { Room, IHouse } from '../interfaces';

const house = new Schema({
  address: AddressSchema,
  type: String,
  title: {
    type: String,
    default: null,
  },
  comment: {
    type: String,
    default: null,
  },
  rooms: {
    type: [RoomSchema],
    default: [],
  },
  globalArea: {
    type: Number,
    default: null,
  },
  insideArea: {
    type: Number,
    default: null,
  },
  carPack: {
    type: Boolean,
    default: false,
  },
  carparkArea: {
    type: Number,
    default: null,
  },
  orientation: String,
  roomNumber: {
    type: Number,
    default: 0,
  },
  cellar: {
    type: Boolean,
    default: false,
  },
  cellarArea: {
    type: Number,
    default: 0,
  },
  dependencies: {
    type: Number,
    default: 0,
  },
  dividing: {
    type: Boolean,
    default: false,
  },
  price: PriceSchema,
  visitCounter: {
    type: Number,
    default: 0,
  },
  loaned: {
    type: Boolean,
    default: false,
  },
  furnished: {
    type: Boolean,
    default: false,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  photos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Photos',
    },
  ],
  isFavoriteOf: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  exclusivity: Boolean,
  internalCode: String,
});

house.add(BaseSchema);

// Plugins
house.plugin(mongoosePaginate);

// custom methods
house.methods.addRoom = function(room: Room, cb: any) {
  // Add return current object
  this.update({ $push: { rooms: room }, $inc: { roomNumber: 1 } }).exec(cb);
};

// triggers
house.pre<IHouse>('save', function() {
  this.roomNumber = this.rooms.length;
});

export const HouseSchema: Schema = house;
