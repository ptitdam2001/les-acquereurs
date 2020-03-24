import { IRoom } from './Room'
import { IPrice } from './Price'
import { IAddress } from '../../core/models/Address'
import { IUser } from '../../users/models/User'

export interface IHouse {
  _id?: string
  title: string
  comments: string
  address: IAddress
  type: string
  rooms: IRoom[]
  globalArea?: number
  insideArea: number
  carPack: boolean
  carparkArea?: number
  orientation?: string
  roomNumber: number
  cellar: boolean
  cellarArea?: number
  dependencies?: boolean
  dividing?: boolean // mitoyenne
  price: IPrice
  visitCounter: number
  loaned: boolean
  furnished: boolean // Meublé
  seller: IUser
  photos: any[]
  isFavoriteOf: string[]
  exclusivity: boolean
  internalCode: string
  createdAt: string
  active: boolean
  deleted: boolean
}
