import { Schema } from 'mongoose';

export const RoomSchema: Schema = new Schema({
  type: String,
  surface: Number,
  windows: Number,
  windowDoors: {
    type: Number,
    default: 0,
  },
});
