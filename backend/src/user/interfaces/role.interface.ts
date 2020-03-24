import { Document } from 'mongoose';
import { BaseModel } from '../../core/interfaces';

export interface IRole extends Document, BaseModel {
  name: string;
  group?: string;
  forbidden: string[];
}
