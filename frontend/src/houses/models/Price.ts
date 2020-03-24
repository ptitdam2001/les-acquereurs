import { IPriceHistoricRow } from './PriceHistoricRow'

export interface IPrice {
  price: number
  notary_fees: number
  commission: number
  history?: IPriceHistoricRow[]
}
