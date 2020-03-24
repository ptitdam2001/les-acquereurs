import { IPhoto } from './../../media/interfaces';
import { IUser } from './../../user/interfaces';
import { BaseModel, IAddress } from './../../core/interfaces';
import { Room } from './room.interface';
import { Price } from './price.interface';
import { Document } from 'mongoose';

export interface IHouse extends BaseModel, Document {
  readonly title: string;
  readonly comments: string;
  readonly address: IAddress;
  readonly type: string;
  readonly rooms: Room[];
  readonly globalArea?: number;
  readonly insideArea: number;
  readonly carPack: boolean;
  readonly carparkArea?: number;
  readonly orientation?: string;
  roomNumber: number;
  readonly cellar: boolean;
  readonly cellarArea?: number;
  readonly dependencies?: boolean;
  readonly dividing?: boolean; // mitoyenne
  readonly price: Price;
  readonly visitCounter: number;
  readonly loaned: boolean;
  readonly furnished: boolean; // Meublé
  readonly seller: IUser;
  readonly photos: IPhoto[];
  readonly isFavoriteOf: string[];
  readonly exclusivity: boolean;
  readonly internalCode: string;
}
