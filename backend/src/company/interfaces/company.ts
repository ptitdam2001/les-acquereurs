import { BaseModel, IAddress, IPhone } from '../../core/interfaces';
import { Document } from 'mongoose';

export interface ICompany extends Document, BaseModel {
  readonly name: string;
  readonly shortname?: string;
  readonly address: IAddress;
  readonly phone?: IPhone;
}
