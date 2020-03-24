import { Document } from 'mongoose';
import { BaseModel } from '../../core/interfaces';

export interface IPhoto extends Document, BaseModel {
  size: number;
  label: string;
  format: string;
  raw: Buffer;
}
