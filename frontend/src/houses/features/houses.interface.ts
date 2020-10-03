import { IAddress } from '../../core/models/Address'
import { IActionResult } from '../../core/models/IActionResult'
import { IUser } from '../../users/features/users'

export const getNewHouse = () => {
  const price = {
    price: 0,
    notary_fees: 0,
    commission: 0,
    history: [],
  } as IPrice
  const loaned = false
  const active = true
  return { price, loaned, active } as IHouse
}

export interface IRoom {
  type: string
  surface: number
  windows: number
  windowDoors: number
}

export interface IPriceHistoricRow {
  date: Date
  price: number
}

export interface IPrice {
  price: number
  notary_fees: number
  commission: number
  history?: IPriceHistoricRow[]
}

export interface IHouse {
  _id?: string
  title: string
  comment: string
  address: IAddress
  type: string
  rooms: IRoom[]
  globalArea: number
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

export interface HousesState {
  list: IHouse[]
  total: number
  pages: number
  current?: IHouse
  lastAction?: IActionResult
  isLoading: boolean
}
