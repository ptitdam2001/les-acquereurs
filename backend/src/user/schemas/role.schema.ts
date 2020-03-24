import { BaseSchema } from '../../core/schemas';
import { Schema } from 'mongoose';

import { autoIncrement } from 'mongoose-plugin-autoinc';
import * as mongoosePaginate from 'mongoose-paginate-v2';

const role = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  group: {
    type: String,
  },
  forbidden: {
    type: [String],
    default: [],
  },
});

role.add(BaseSchema);

// Plugin
role.plugin(mongoosePaginate);
role.plugin(autoIncrement, {
  model: 'Roles',
  startAt: 1,
  incrementBy: 1,
});

// Index
role.index({ name: 1 }, { unique: true });

export const RoleSchema = role;
