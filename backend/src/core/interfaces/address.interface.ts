import { Document } from 'mongoose';

export interface IGeolocation extends Document {
  lon?: number;
  lat?: number;
}

export interface IAddress extends Document {
  way1: string;
  way2?: string;
  way3?: string;
  postalCode: number;
  city: string;
  country: string;
  loc?: IGeolocation;

  getFullAddress(): string;
}
