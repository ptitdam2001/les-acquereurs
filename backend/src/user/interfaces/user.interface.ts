import { Document } from 'mongoose';
import { BaseModel, IAddress, IPhone } from '../../core/interfaces';
import { ICompany } from '../../company/interfaces';

export interface IUser extends Document, BaseModel {
  email: string;
  firstname: string;
  lastname: string;
  role: string;
  password: string;
  company?: ICompany;
  address?: IAddress;
  phone?: IPhone;

  fullName(): string;
}
